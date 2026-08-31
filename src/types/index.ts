export type EnquiryStatus = "Pending" | "Contacted" | "In Progress" | "Closed";
export type CallbackStatus = "Pending" | "Called";
export type BookingStatus = "Pending" | "Confirmed" | "Completed";
export type TestimonialStatus = "Pending" | "Approved" | "Hidden";

export interface Enquiry {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  budget: string;
  details: string;
  status: EnquiryStatus;
  createdAt: string;
}

export interface CallbackRequest {
  id: string;
  name: string;
  phone: string;
  status: CallbackStatus;
  createdAt: string;
}

export interface DemoBooking {
  id: string;
  name: string;
  phone: string;
  email: string;
  service: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
  status: BookingStatus;
  createdAt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  rating: number;
  review: string;
  status: TestimonialStatus;
  createdAt: string;
}

export interface Referral {
  id: string;
  referrerName: string;
  referrerPhone: string;
  clientName: string;
  clientPhone: string;
  code: string;
  createdAt: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  category: "E-Commerce" | "ERP / Software" | "Portals";
  image: string;
  summary: string;
  challenge: string;
  solution: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  featured: boolean;
  createdAt: string;
}

export interface SiteSettings {
  phonePrimary: string;
  phoneSecondary: string;
  email: string;
  address: string;
  operatingHours: string;
  announcementText: string;
  announcementEnabled: boolean;
  maintenanceMode: boolean;
}
