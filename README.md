# BICTE Gateway MMC

Build a production-ready, highly polished university landing page and lead-generation portal for the BICTE (Bachelor of Information Communication Technology in Education) program at Makwanpur Multiple Campus (MMC), Hetauda-4, Makwanpur.

IMPORTANT DEPLOYMENT REQUIREMENT:
The prototype must be 100% static frontend compatible with GitHub Pages deployment via CI build artifact:
1. Configure `vite.config.ts` with `base: './'` so all asset paths are relative and work seamlessly on GitHub Pages sub-paths.
2. Create the GitHub Actions CI/CD workflow file at `.github/workflows/deploy.yml` that automatically builds the Vite project and deploys the `./dist` artifact to GitHub Pages on every push to the `main` branch.
3. All lead submissions must be handled via client-side `localStorage` (no server/backend required) so the site remains 100% functional as a static build.

---

### 🏛️ Institution & Contact Details (Use Exactly):
- Institution Name: Makwanpur Multiple Campus (MMC)
- Department: Faculty of Education — BICTE Program
- Location / Address: Hetauda-4, Makwanpur, Bagmati Province, Nepal
- Official Phone: 057-520620
- Official Email: mmc@ntc.net.np

---

### 🎨 Design System & Styling (shadcn/ui + Tailwind):
- Professional academic aesthetic: Slate-50 background, deep navy/royal blue primary accents (#1d4ed8 and #0f172a), crisp white cards with rounded-xl corners, subtle borders (border-slate-200), and Lucide React icons.
- Responsive mobile drawer (Sheet) for mobile screens (< 768px).
- Toast alerts powered by Sonner for interactive feedback.

---

### 🧩 Core Sections & Components to Build:

1. **Sticky Navigation Bar:**
   - Brand mark: Square blue emblem with letter "M" + "Makwanpur Multiple Campus | BICTE".
   - Links with smooth scroll: #about, #curriculum, #fee-structure, #faculty, #careers, #contact.
   - Action Button: "Apply Now" (smoothly scrolls to the lead capture form).
   - Mobile: Hamburger menu toggle opening a responsive slide-out Sheet.

2. **Hero Section:**
   - Translucent badge: "🎓 4-Year Semester Program (8 Semesters) • MMC Hetauda".
   - Main Headline: "Bachelor of Information Communication Technology in Education (BICTE)".
   - Subtitle: "Offered at Makwanpur Multiple Campus, Hetauda. Bridge the gap between modern computing and pedagogical excellence to become an innovative educator, software engineer, or instructional designer."
   - Dual CTAs: Primary "Explore 8 Semesters" (solid blue) and secondary "View Fee Structure" (outline/glass).

3. **Key Program Highlights (4 Metric Cards with Lucide Icons):**
   - ⏱️ 4 Years — Full-Time Academic Degree
   - 📚 8 Semesters — Balanced Credit-Hour Progression
   - 💻 ICT + Education — Dual Core Technology & Pedagogy Focus
   - 🛠️ 100% Practical — Hands-on Coding Labs & School Practicum

4. **Curriculum Section (Interactive 8 Semesters with English & Nepali included):**
   - Display all 8 semesters in clean cards grouped by Year 1 to Year 4:
     - Year 1 (Sem 1): Compulsory English I, Compulsory Nepali I, Programming in C, Fundamentals of IT, Foundations of Education.
     - Year 1 (Sem 2): Compulsory English II, Compulsory Nepali II, Object-Oriented Programming (OOP), Data Structures & Algorithms, Educational Psychology.
     - Year 2 (Sem 3): Database Management Systems (DBMS), Web Technology, Curriculum & Evaluation, Operating Systems.
     - Year 2 (Sem 4): Computer Networks, Software Engineering, Instructional Design, Java Programming.
     - Year 3 (Sem 5): Python & AI Basics, E-Learning Systems, Information Security, Mini Software Project.
     - Year 3 (Sem 6): Mobile App Development, Cloud Computing, Research Methodology in Education.
     - Year 4 (Sem 7): AI in Education, Educational Leadership, School Teaching Practicum, Capstone Project I.
     - Year 4 (Sem 8): Industry / School Internship, Final Capstone Project Defense, Professional Ethics.

5. **Transparent Fee Structure (2 Highlight Comparison Cards):**
   - Card 1 (First-Time Enrollment):
     - Badge: "1st Semester Admission"
     - One-Time Admission Fee: Rs. 10,000
     - Semester Course Fee: Rs. 42,000
     - Total 1st Sem Due: Rs. 52,000 (Bold blue highlight)
   - Card 2 (Remaining Semesters):
     - Regular Fee per Semester: Rs. 42,000
     - Semesters 2 to 8 (7 Semesters): Rs. 294,000
     - Total 4-Year Course Cost: Rs. 346,000 (Bold dark slate highlight)

6. **Faculty Leadership (Strictly 2 Profiles — No placeholder teachers):**
   - Profile 1: "Indra Parsad Sapkota"
     - Title: "Program Director / Head of Department"
     - Courses / Expertise: Educational Technology, System Analysis & Design, Educational Leadership.
   - Profile 2: "Shreeraj Khatiwada"
     - Title: "Senior Programming & IT Instructor"
     - Courses / Expertise: Programming in C, Object-Oriented Programming (OOP), Data Structures & Algorithms, Web Technology.

7. **Career Pathways Grid:**
   - Cards with Lucide icons for: ICT Teacher / College Lecturer, Instructional Designer, Software/Web Developer, and IT Officer.

8. **Admission Application & Inquiry Form:**
   - Inputs: Full Name (required), Phone Number (10 digits required, e.g. 98XXXXXXXX), Email (required), and Message/Inquiry.
   - On Submission:
     - Validate inputs.
     - Save lead object `{ id, fullName, phone, email, message, submittedAt }` to `localStorage` under `bicte_inquiries`.
     - Trigger Sonner toast: "Thank you! Your inquiry has been sent to Makwanpur Multiple Campus BICTE administration."
     - Reset form.
   - Include a "View Leads" dialog button so testers can view submitted inquiries in a clean table directly in the prototype.

9. **Contact & Footer Section:**
   - Institution: Makwanpur Multiple Campus (MMC)
   - Address: Hetauda-4, Makwanpur, Bagmati Province, Nepal
   - Phone: 057-520620
   - Email: mmc@ntc.net.np
   - Quick direct click-to-call (`tel:057520620`) and email (`mailto:mmc@ntc.net.np`) links.
   - Copyright: © Makwanpur Multiple Campus — BICTE Program. All rights reserved.

---

### ⚙️ CI/CD Artifact Requirement:
Generate the GitHub Actions workflow at `.github/workflows/deploy.yml` with:
- Trigger on `push` to branch `main`.
- Permissions: `contents: read`, `pages: write`, `id-token: write`.
- Steps:
  1. `actions/checkout@v4`
  2. `actions/setup-node@v4` with Node 20
  3. `npm ci`
  4. `npm run build`
  5. `actions/upload-pages-artifact@v3` targeting `./dist`
  6. `actions/deploy-pages@v4`

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/c48f0997-0e80-43ae-8317-718ce64e163e).

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
