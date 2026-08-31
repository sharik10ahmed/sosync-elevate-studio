import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

import {
  DEFAULT_PROJECTS,
  DEFAULT_SETTINGS,
  DEFAULT_TESTIMONIALS,
} from "@/lib/company";
import {
  STORAGE_KEYS,
  makeId,
  makeReferralCode,
  readStore,
  writeStore,
} from "@/lib/storage";
import type {
  CallbackRequest,
  CallbackStatus,
  DemoBooking,
  Enquiry,
  EnquiryStatus,
  Project,
  Referral,
  SiteSettings,
  Testimonial,
  TestimonialStatus,
} from "@/types";

const ADMIN_EMAIL = "admin@sosyncaitech.in";
const ADMIN_PASSWORD = "admin123";

type ModalKind =
  | "demo"
  | "enquiry"
  | "referral"
  | "feedback"
  | "caseStudy"
  | null;

interface SiteContextValue {
  hydrated: boolean;
  settings: SiteSettings;
  updateSettings: (patch: Partial<SiteSettings>) => void;

  enquiries: Enquiry[];
  addEnquiry: (input: Omit<Enquiry, "id" | "status" | "createdAt">) => void;
  setEnquiryStatus: (id: string, status: EnquiryStatus) => void;
  deleteEnquiry: (id: string) => void;

  callbacks: CallbackRequest[];
  addCallback: (input: { name: string; phone: string }) => void;
  setCallbackStatus: (id: string, status: CallbackStatus) => void;
  deleteCallback: (id: string) => void;

  bookings: DemoBooking[];
  addBooking: (input: Omit<DemoBooking, "id" | "status" | "createdAt">) => void;
  deleteBooking: (id: string) => void;

  testimonials: Testimonial[];
  approvedTestimonials: Testimonial[];
  addTestimonial: (
    input: Omit<Testimonial, "id" | "status" | "createdAt">,
  ) => void;
  setTestimonialStatus: (id: string, status: TestimonialStatus) => void;
  deleteTestimonial: (id: string) => void;

  referrals: Referral[];
  addReferral: (input: Omit<Referral, "id" | "code" | "createdAt">) => string;

  projects: Project[];
  featuredProjects: Project[];
  addProject: (input: Omit<Project, "id" | "createdAt">) => void;
  updateProject: (id: string, patch: Partial<Project>) => void;
  deleteProject: (id: string) => void;
  toggleFeatured: (id: string) => void;

  isAdmin: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;

  modal: ModalKind;
  modalService: string;
  activeCaseStudy: Project | null;
  openModal: (kind: Exclude<ModalKind, null>, service?: string) => void;
  openCaseStudy: (project: Project) => void;
  closeModal: () => void;
}

const SiteContext = createContext<SiteContextValue | null>(null);

export function SiteProvider({ children }: { children: ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const [settings, setSettings] = useState<SiteSettings>(DEFAULT_SETTINGS);
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [callbacks, setCallbacks] = useState<CallbackRequest[]>([]);
  const [bookings, setBookings] = useState<DemoBooking[]>([]);
  const [testimonials, setTestimonials] =
    useState<Testimonial[]>(DEFAULT_TESTIMONIALS);
  const [referrals, setReferrals] = useState<Referral[]>([]);
  const [projects, setProjects] = useState<Project[]>(DEFAULT_PROJECTS);
  const [isAdmin, setIsAdmin] = useState(false);

  const [modal, setModal] = useState<ModalKind>(null);
  const [modalService, setModalService] = useState("");
  const [activeCaseStudy, setActiveCaseStudy] = useState<Project | null>(null);

  useEffect(() => {
    setSettings(readStore(STORAGE_KEYS.settings, DEFAULT_SETTINGS));
    setEnquiries(readStore<Enquiry[]>(STORAGE_KEYS.enquiries, []));
    setCallbacks(readStore<CallbackRequest[]>(STORAGE_KEYS.callbacks, []));
    setBookings(readStore<DemoBooking[]>(STORAGE_KEYS.bookings, []));
    setTestimonials(
      readStore<Testimonial[]>(STORAGE_KEYS.testimonials, DEFAULT_TESTIMONIALS),
    );
    setReferrals(readStore<Referral[]>(STORAGE_KEYS.referrals, []));
    setProjects(readStore<Project[]>(STORAGE_KEYS.projects, DEFAULT_PROJECTS));
    setIsAdmin(readStore<boolean>(STORAGE_KEYS.auth, false));
    setHydrated(true);
  }, []);

  const persist = useCallback(
    <T,>(key: string, value: T) => {
      if (hydrated) writeStore(key, value);
    },
    [hydrated],
  );

  useEffect(() => persist(STORAGE_KEYS.settings, settings), [settings, persist]);
  useEffect(
    () => persist(STORAGE_KEYS.enquiries, enquiries),
    [enquiries, persist],
  );
  useEffect(
    () => persist(STORAGE_KEYS.callbacks, callbacks),
    [callbacks, persist],
  );
  useEffect(() => persist(STORAGE_KEYS.bookings, bookings), [bookings, persist]);
  useEffect(
    () => persist(STORAGE_KEYS.testimonials, testimonials),
    [testimonials, persist],
  );
  useEffect(
    () => persist(STORAGE_KEYS.referrals, referrals),
    [referrals, persist],
  );
  useEffect(() => persist(STORAGE_KEYS.projects, projects), [projects, persist]);
  useEffect(() => persist(STORAGE_KEYS.auth, isAdmin), [isAdmin, persist]);

  const value = useMemo<SiteContextValue>(() => {
    return {
      hydrated,
      settings,
      updateSettings: (patch) => setSettings((prev) => ({ ...prev, ...patch })),

      enquiries,
      addEnquiry: (input) =>
        setEnquiries((prev) => [
          {
            ...input,
            id: makeId("enq"),
            status: "Pending",
            createdAt: new Date().toISOString(),
          },
          ...prev,
        ]),
      setEnquiryStatus: (id, status) =>
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status } : e)),
        ),
      deleteEnquiry: (id) =>
        setEnquiries((prev) => prev.filter((e) => e.id !== id)),

      callbacks,
      addCallback: (input) =>
        setCallbacks((prev) => [
          {
            ...input,
            id: makeId("cb"),
            status: "Pending",
            createdAt: new Date().toISOString(),
          },
          ...prev,
        ]),
      setCallbackStatus: (id, status) =>
        setCallbacks((prev) =>
          prev.map((c) => (c.id === id ? { ...c, status } : c)),
        ),
      deleteCallback: (id) =>
        setCallbacks((prev) => prev.filter((c) => c.id !== id)),

      bookings,
      addBooking: (input) =>
        setBookings((prev) => [
          {
            ...input,
            id: makeId("bk"),
            status: "Pending",
            createdAt: new Date().toISOString(),
          },
          ...prev,
        ]),
      deleteBooking: (id) =>
        setBookings((prev) => prev.filter((b) => b.id !== id)),

      testimonials,
      approvedTestimonials: testimonials.filter((t) => t.status === "Approved"),
      addTestimonial: (input) =>
        setTestimonials((prev) => [
          {
            ...input,
            id: makeId("rev"),
            status: "Pending",
            createdAt: new Date().toISOString(),
          },
          ...prev,
        ]),
      setTestimonialStatus: (id, status) =>
        setTestimonials((prev) =>
          prev.map((t) => (t.id === id ? { ...t, status } : t)),
        ),
      deleteTestimonial: (id) =>
        setTestimonials((prev) => prev.filter((t) => t.id !== id)),

      referrals,
      addReferral: (input) => {
        const code = makeReferralCode();
        setReferrals((prev) => [
          {
            ...input,
            id: makeId("ref"),
            code,
            createdAt: new Date().toISOString(),
          },
          ...prev,
        ]);
        return code;
      },

      projects,
      featuredProjects: projects.filter((p) => p.featured),
      addProject: (input) =>
        setProjects((prev) => [
          { ...input, id: makeId("prj"), createdAt: new Date().toISOString() },
          ...prev,
        ]),
      updateProject: (id, patch) =>
        setProjects((prev) =>
          prev.map((p) => (p.id === id ? { ...p, ...patch } : p)),
        ),
      deleteProject: (id) =>
        setProjects((prev) => prev.filter((p) => p.id !== id)),
      toggleFeatured: (id) =>
        setProjects((prev) =>
          prev.map((p) => (p.id === id ? { ...p, featured: !p.featured } : p)),
        ),

      isAdmin,
      login: (email, password) => {
        const ok =
          email.trim().toLowerCase() === ADMIN_EMAIL && password === ADMIN_PASSWORD;
        if (ok) setIsAdmin(true);
        return ok;
      },
      logout: () => setIsAdmin(false),

      modal,
      modalService,
      activeCaseStudy,
      openModal: (kind, service = "") => {
        setModalService(service);
        setModal(kind);
      },
      openCaseStudy: (project) => {
        setActiveCaseStudy(project);
        setModal("caseStudy");
      },
      closeModal: () => setModal(null),
    };
  }, [
    hydrated,
    settings,
    enquiries,
    callbacks,
    bookings,
    testimonials,
    referrals,
    projects,
    isAdmin,
    modal,
    modalService,
    activeCaseStudy,
  ]);

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite(): SiteContextValue {
  const ctx = useContext(SiteContext);
  if (!ctx) throw new Error("useSite must be used within SiteProvider");
  return ctx;
}

export const ADMIN_DEMO = { email: ADMIN_EMAIL, password: ADMIN_PASSWORD };
