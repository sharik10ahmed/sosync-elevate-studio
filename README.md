# SOSync Elevate Studio

MASTER CONTINUATION PROMPT — SOSync AI Tech IT Solutions
Repository: https://github.com/shariksosync/elevate-studio-b6de0788

You are a Principal Full-Stack React Engineer and UI/UX Designer.

You are continuing the build for:
> SOSync AI Tech IT Solutions (Brand: SOSync AI Tech)
> Tagline: "Innovate. Integrate. Elevate. — Digital Solutions for a Smarter Tomorrow"

---

### 📌 CURRENT CODEBASE STATUS:
- Complete Carbon Obsidian (`#0B0F17`) + Solar Orange (`#FF6A00`) design system in `src/styles.css`.
- Complete data & types layer: `src/types/index.ts`, `src/lib/storage.ts`, `src/lib/company.ts`, `src/lib/validators.ts`.
- `SiteProvider` state layer with localStorage persistence and admin auth in `src/context/SiteProvider.tsx`.
- `LogoLockup.tsx`, `AnnouncementBar.tsx`, and `Navbar.tsx` are created.

---

### 🚫 STRICT CONTENT EXCLUSIONS (MANDATORY):
- **NO E-Learning, NO courses, NO LMS, NO training programs, NO bootcamps, NO internships, NO student batches/testimonials.**
- 100% focused on **B2B & B2C Client Services, Custom Software, Web Development, Enterprise IT, AI Automation, and Digital Marketing**.

---

### 🎯 YOUR TASK: EXECUTE REMAINING WORK IN THIS EXACT SEQUENCE:

#### STEP 1: CREATE FOOTER, FLOATING WIDGETS & MODALS
1. **`src/components/Footer.tsx`**:
   - Company brand info, quick navigation links, services directory links.
   - Contact details (`+91 91724 03714` / `support@sosyncaitech.in`), Kharadi Pune office address with operating hours (Mon–Sat 9:30 AM–7:00 PM), embedded Google Map preview, and social links.
   - Discreet Shield icon with link to `/admin/login` ("Admin Portal").
2. **`src/components/FloatingCallbackButton.tsx`**:
   - Fixed bottom-right widget triggering a 20-second callback popup (Name, Phone). Saves to `sosync_callbacks` via `SiteProvider`.
3. **`src/components/AIChatbot.tsx`**:
   - `SOSync AI Assistant` floating FAQ chat widget with quick action buttons. Stacks cleanly with the callback button.
4. **`src/components/MaintenanceModeView.tsx`**:
   - Polished brand maintenance view when `settings.maintenanceMode === true`.
5. **Modals (in `src/components/modals/`)**:
   - `DemoBookingModal.tsx`: Book ₹1 Demo Consultation (Name, Phone, Email, Service, Date/Time, Notes). Saves to `sosync_demo_bookings`.
   - `ServiceEnquiryModal.tsx`: Auto-fills selected service title, collects budget & project details, saves to `sosync_enquiries`.
   - `ReferralModal.tsx`: Generates `SOSYNC-XXXXXX` referral code for 10% commission.
   - `FeedbackModal.tsx`: 1–5 star rating and review submission, saves to `sosync_testimonials` as "Pending".
   - `CaseStudyModal.tsx`: Detailed modal drawer showing portfolio project case study metrics and tech tags.

---

#### STEP 2: WIRE UP ROOT SHELL (`src/routes/__root.tsx`)
1. Wrap root with `SiteProvider` and mount `Toaster` (Sonner).
2. Render `AnnouncementBar` at the top.
3. Render `Navbar`.
4. Render `<Outlet />` (or `MaintenanceModeView` if maintenance mode is ON and route is not `/admin/*`).
5. Render `Footer`.
6. Mount `FloatingCallbackButton`, `AIChatbot`, and all 5 modals (`DemoBookingModal`, `ServiceEnquiryModal`, `ReferralModal`, `FeedbackModal`, `CaseStudyModal`).

---

#### STEP 3: BUILD ALL 11 HOMEPAGE SECTIONS (`src/routes/index.tsx`)
Create modular components under `src/components/home/` and wire into `src/routes/index.tsx`:
1. **`HeroSlider.tsx`**: 3 rotating slides with unique Unsplash tech images, animated badges, bold headlines ("Build Smarter. Automate Faster. Scale Further"), "Book ₹1 Demo" CTA, "Explore Services" CTA, autoplay & pause on hover.
2. **`StatsSection.tsx`**: Animated counters for `50+ Projects Delivered`, `50+ Happy Clients`, `8+ Senior Engineers`, `12+ Countries Served`.
3. **`ServicesSection.tsx`**: Tabbed category filters across all 6 divisions (Website Dev, Software & ERP, Enterprise IT, Growth Marketing, Graphic Design, AI Automation) with feature bullets and "Enquire Now" triggers.
4. **`ValueProps.tsx`**: **6 Months FREE Technical Support (Worth ₹25,000+)** badge card, **100% IP Ownership**, and **Rapid 1–3 Weeks Delivery**.
5. **`TechStack.tsx`**: Interactive tech chips (React, Next.js, Node, Python, AWS, Docker, AI/ML, NLP, RAG, PowerBI, Razorpay).
6. **`PortfolioSection.tsx`**: Filterable portfolio grid (`All`, `E-Commerce`, `ERP / Software`, `Portals`) with unique images for *Morpankh Saree*, *SP Art Hubs*, *Suraj Naturo Dry Fruits*, *Sonai Residential World School*, *Karyon College*, *Sona I Group of Institutes*. Clicking opens `CaseStudyModal`.
7. **`ProcessTimeline.tsx`**: 9-step timeline (01. Requirement Analysis → 02. Architecture Roadmap → 03. UI/UX Prototype → 04. Clean Development → 05. QA & Security → 06. Client Demo → 07. Production Deployment → 08. Admin Handover & Training → 09. 6 Months Free Support Warranty).
8. **`TeamSection.tsx`**: Leadership (Shashant Shekhar, Omkar Bachanatti, Sanika Chougule, Vivek Dhumal, Aslam Pathan) + Senior Squad (Tridev Sharma, Sharik Ahmed, Vicky Kumar, Ashish Ranjan, Anurag Kumar) with unique photos.
9. **`Testimonials.tsx`**: Dynamic carousel reading approved reviews from localStorage (`sosync_testimonials`).
10. **`ReferralCTA.tsx`**: "Refer a client & earn 10% commission" button opening the referral modal.
11. **`FinalCTA.tsx`**: High-impact conversion banner with "Book ₹1 Demo" and "Contact Us" actions.

---

#### STEP 4: CREATE PUBLIC ROUTE PAGES
1. **`src/routes/services.tsx`**: Deep-dive directory of all 6 divisions, capability checkmarks, and instant enquiry triggers.
2. **`src/routes/portfolio.tsx`**: Filterable case study showcase with live demo metrics and tech tags.
3. **`src/routes/contact.tsx`**: Contact form, direct call/email links, Kharadi Pune office details, embedded Google Map iframe, and FAQ accordion.

---

#### STEP 5: BUILD COMPLETE PROTECTED ADMIN PORTAL (`/admin`)
1. **`src/routes/admin/login.tsx`**:
   - Clean login screen with demo credentials (`admin@sosyncaitech.in` / `admin123`).
   - Authenticates and saves state in localStorage. Redirects to `/admin/dashboard`.
2. **`src/routes/admin/dashboard.tsx`**:
   - Protected route guard (redirects unauthenticated visitors to login).
   - Responsive sidebar navigation + topbar with admin profile & Logout button.
   - **7 Full CRUD Modules (connected to localStorage)**:
     1. **Overview Dashboard**: Dynamic metric cards for Total Enquiries, Pending Callbacks, Demo Bookings, Active Projects, and Average Rating.
     2. **Service Enquiries Manager**: Searchable table with status toggles (`Pending`, `Contacted`, `In Progress`, `Closed`).
     3. **Callback Requests Manager**: List of callback requests with one-click status update (`Pending` → `Called`).
     4. **Demo Bookings Manager**: View all ₹1 demo consultation bookings with preferred dates and client notes.
     5. **Portfolio Projects Manager**: Add new project, edit existing, delete with confirmation, and toggle "Featured" status.
     6. **Testimonials & Feedback Manager**: Approve or hide client reviews (only approved reviews show on the public site).
     7. **Website Settings Manager**: Edit phone numbers, email, physical address, operating hours, announcement banner text/toggle, and maintenance mode toggle.

---

### 🚀 EXECUTION:
Build and connect all components, routes, modals, and the complete `/admin` dashboard now. Ensure all actions persist to `localStorage`, mobile responsiveness is seamless, and all image URLs are unique Unsplash photos.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/59301168-4cf6-4f2b-832b-589a4b86f611).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
