import { createFileRoute } from "@tanstack/react-router";
import {
  Clock,
  Layers,
  Laptop,
  Wrench,
  GraduationCap,
  Presentation,
  Code2,
  ServerCog,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Nav } from "@/components/bicte/Nav";
import { ApplyForm } from "@/components/bicte/ApplyForm";
import { SEMESTERS, FACULTY, CONTACT } from "@/data/bicte";

const TITLE = "BICTE at Makwanpur Multiple Campus — Hetauda, Nepal";
const DESC =
  "4-year, 8-semester Bachelor of Information Communication Technology in Education (BICTE) at Makwanpur Multiple Campus, Hetauda-4. Curriculum, fees, faculty and admissions.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const HIGHLIGHTS = [
  { icon: Clock, title: "4 Years", text: "Full-Time Academic Degree" },
  { icon: Layers, title: "8 Semesters", text: "Balanced Credit-Hour Progression" },
  { icon: Laptop, title: "ICT + Education", text: "Dual Core Technology & Pedagogy Focus" },
  { icon: Wrench, title: "100% Practical", text: "Hands-on Coding Labs & School Practicum" },
];

const CAREERS = [
  {
    icon: GraduationCap,
    title: "ICT Teacher / College Lecturer",
    text: "Teach computing in secondary schools, +2 colleges and campuses.",
  },
  {
    icon: Presentation,
    title: "Instructional Designer",
    text: "Design digital courses, e-learning modules and training content.",
  },
  {
    icon: Code2,
    title: "Software / Web Developer",
    text: "Build web and mobile products with modern programming stacks.",
  },
  {
    icon: ServerCog,
    title: "IT Officer",
    text: "Manage systems, networks and digital infrastructure for institutions.",
  },
];

function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
  tone = "light",
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  tone?: "light" | "white";
}) {
  return (
    <section
      id={id}
      className={tone === "white" ? "bg-card py-20 sm:py-24" : "py-20 sm:py-24"}
    >
      <div className="mx-auto max-w-6xl px-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
          {eyebrow}
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">{title}</h2>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-slate-600">{subtitle}</p>
        )}
        <div className="mt-10">{children}</div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />

      {/* Hero */}
      <section className="relative overflow-hidden bg-navy text-navy-foreground">
        <div className="pointer-events-none absolute -left-24 -top-24 size-96 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-0 size-[28rem] rounded-full bg-primary/20 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-4 py-24 sm:py-32">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium backdrop-blur">
            🎓 4-Year Semester Program (8 Semesters) • MMC Hetauda
          </span>
          <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.1] sm:text-5xl lg:text-6xl">
            Bachelor of Information Communication Technology in Education (BICTE)
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Offered at Makwanpur Multiple Campus, Hetauda. Bridge the gap between modern
            computing and pedagogical excellence to become an innovative educator,
            software engineer, or instructional designer.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a href="#curriculum">Explore 8 Semesters</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 text-navy-foreground backdrop-blur hover:bg-white/20 hover:text-navy-foreground"
            >
              <a href="#fee-structure">View Fee Structure</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="about" className="bg-card py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Program Highlights
          </p>
          <h2 className="mt-3 text-3xl font-semibold text-navy sm:text-4xl">
            Why study BICTE at MMC
          </h2>
          <p className="mt-3 max-w-2xl text-slate-600">
            A Faculty of Education program at Makwanpur Multiple Campus, Hetauda-4,
            combining rigorous computing coursework with classroom teaching practice.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HIGHLIGHTS.map((h) => (
              <div
                key={h.title}
                className="rounded-xl border border-slate-200 bg-background p-6 transition-shadow hover:shadow-md"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <h.icon className="size-5" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-navy">{h.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <Section
        id="curriculum"
        eyebrow="Curriculum"
        title="Eight semesters, four years"
        subtitle="A structured progression from programming and language foundations to AI in education, teaching practicum and a final capstone defense."
      >
        <div className="space-y-10">
          {["Year 1", "Year 2", "Year 3", "Year 4"].map((year) => (
            <div key={year}>
              <div className="mb-4 flex items-center gap-3">
                <h3 className="text-lg font-semibold text-navy">{year}</h3>
                <span className="h-px flex-1 bg-slate-200" />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                {SEMESTERS.filter((s) => s.year === year).map((s) => (
                  <div
                    key={s.label}
                    className="rounded-xl border border-slate-200 bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-navy">{s.label}</h4>
                      <Badge variant="secondary">{s.courses.length} courses</Badge>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {s.courses.map((c) => (
                        <li key={c} className="flex gap-2 text-sm text-slate-600">
                          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Fees */}
      <Section
        id="fee-structure"
        eyebrow="Fee Structure"
        title="Transparent, semester-wise fees"
        subtitle="No hidden charges. All amounts in Nepalese Rupees."
        tone="white"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-background p-7 shadow-sm">
            <Badge>1st Semester Admission</Badge>
            <h3 className="mt-4 text-xl font-semibold text-navy">First-Time Enrollment</h3>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between border-b border-slate-200 pb-3">
                <dt className="text-slate-600">One-Time Admission Fee</dt>
                <dd className="font-medium text-navy">Rs. 10,000</dd>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-3">
                <dt className="text-slate-600">Semester Course Fee</dt>
                <dd className="font-medium text-navy">Rs. 42,000</dd>
              </div>
            </dl>
            <div className="mt-6 flex items-baseline justify-between">
              <span className="text-sm font-medium text-slate-600">Total 1st Sem Due</span>
              <span className="text-3xl font-bold text-primary">Rs. 52,000</span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-background p-7 shadow-sm">
            <Badge variant="secondary">Semesters 2 – 8</Badge>
            <h3 className="mt-4 text-xl font-semibold text-navy">Remaining Semesters</h3>
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between border-b border-slate-200 pb-3">
                <dt className="text-slate-600">Regular Fee per Semester</dt>
                <dd className="font-medium text-navy">Rs. 42,000</dd>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-3">
                <dt className="text-slate-600">Semesters 2 to 8 (7 Semesters)</dt>
                <dd className="font-medium text-navy">Rs. 294,000</dd>
              </div>
            </dl>
            <div className="mt-6 flex items-baseline justify-between">
              <span className="text-sm font-medium text-slate-600">
                Total 4-Year Course Cost
              </span>
              <span className="text-3xl font-bold text-navy">Rs. 346,000</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Faculty */}
      <Section
        id="faculty"
        eyebrow="Faculty Leadership"
        title="Led by experienced educators"
      >
        <div className="grid gap-6 md:grid-cols-2">
          {FACULTY.map((f) => (
            <div
              key={f.name}
              className="rounded-xl border border-slate-200 bg-card p-7 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <span className="flex size-14 items-center justify-center rounded-xl bg-navy font-display text-lg font-semibold text-navy-foreground">
                  {f.initials}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-navy">{f.name}</h3>
                  <p className="text-sm text-primary">{f.title}</p>
                </div>
              </div>
              <p className="mt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
                Courses / Expertise
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {f.expertise.map((e) => (
                  <Badge key={e} variant="secondary" className="font-normal">
                    {e}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Careers */}
      <Section
        id="careers"
        eyebrow="Career Pathways"
        title="Where BICTE graduates go"
        tone="white"
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CAREERS.map((c) => (
            <div
              key={c.title}
              className="rounded-xl border border-slate-200 bg-background p-6 transition-shadow hover:shadow-md"
            >
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <c.icon className="size-5" />
              </span>
              <h3 className="mt-4 text-base font-semibold text-navy">{c.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Apply */}
      <Section
        id="apply"
        eyebrow="Admissions"
        title="Apply or ask a question"
        subtitle="Submit your details and the BICTE admission team at Makwanpur Multiple Campus will get back to you."
      >
        <ApplyForm />
      </Section>

      {/* Contact + Footer */}
      <footer id="contact" className="bg-navy py-16 text-navy-foreground">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary font-display text-lg font-bold text-primary-foreground">
                  M
                </span>
                <span className="font-semibold">{CONTACT.institution}</span>
              </div>
              <p className="mt-4 text-sm text-slate-300">
                Faculty of Education — BICTE Program
              </p>
            </div>

            <div className="space-y-3 text-sm text-slate-300">
              <p className="flex gap-3">
                <MapPin className="size-4 shrink-0 text-primary" />
                {CONTACT.address}
              </p>
              <a href={CONTACT.phoneHref} className="flex gap-3 hover:text-white">
                <Phone className="size-4 shrink-0 text-primary" />
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="flex gap-3 hover:text-white">
                <Mail className="size-4 shrink-0 text-primary" />
                {CONTACT.email}
              </a>
            </div>

            <div className="flex flex-wrap items-start gap-3">
              <Button asChild>
                <a href={CONTACT.phoneHref}>
                  <Phone className="size-4" /> Call Campus
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-white/30 bg-white/10 text-navy-foreground hover:bg-white/20 hover:text-navy-foreground"
              >
                <a href={`mailto:${CONTACT.email}`}>
                  <Mail className="size-4" /> Email Us
                </a>
              </Button>
            </div>
          </div>

          <p className="mt-12 border-t border-white/10 pt-6 text-xs text-slate-400">
            © Makwanpur Multiple Campus — BICTE Program. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
