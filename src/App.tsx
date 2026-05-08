const PROFILE = {
  name: 'Abinaya Arya Zaidan',
  title: 'Informatics Student | Web Developer',
  location: 'Kepanjen, Malang, East Java, Indonesia',
  phone: '+62 812-2782-5205',
  email: 'agus8u7@gmail.com',
  github: 'github.com/anomali01',
  summary:
    'A 20-year-old Informatics student at Semen Indonesia International University (6th semester) with hands-on experience building web and desktop applications. Proficient in JavaScript, Python, and PHP with an understanding of the Laravel framework. Known as a hardworking, diligent, and responsible individual who thrives in a team environment and enjoys solving complex problems.',
  experience: [
    {
      role: 'Website Developer',
      org: 'MAMA (Marketplace Mahasiswa)',
      date: 'Jan 2026',
      links: {
        repo: 'https://github.com/anomali01/mama-marketplace',
        live: 'https://mama-marketplace.vercel.app',
      },
      points: [
        'Built an e-commerce platform focused on university students with three user roles: seller, buyer, and validator (admin from student organization/BEM).',
        'Transactions are verified by validators to ensure security and accountability.',
        'Developed using Laravel with Blade engine, PHP as the primary language, and MySQL as the database.',
      ],
      tags: ['Laravel', 'Blade', 'PHP', 'MySQL'],
    },
    {
      role: 'Website Developer',
      org: 'TOKOKU',
      date: 'Mar 2025',
      links: {
        repo: 'https://github.com/mohfarizalsholahuddinghonniuisi23/pemrograman-web/tree/main/Uas_TokoKu',
      },
      points: [
        'Led a team in developing a full-featured e-commerce website named TOKOKU.',
        'Built with Laravel using SQLite as the database, Bootstrap 5 for the frontend, and JavaScript for interactivity.',
        'PHP served as the primary backend language.',
      ],
      tags: ['Laravel', 'SQLite', 'Bootstrap 5', 'JavaScript', 'PHP'],
    },
    {
      role: 'Desktop App Developer',
      org: 'Banking System Application',
      date: 'Apr 2024',
      links: {},
      points: [
        'Developed a GUI-based banking system application using Java Swing.',
        'Implemented core features: customer registration, authentication (PIN/password), deposit, cash withdrawal, transfers, balance inquiry, and transaction history.',
      ],
      tags: ['Java', 'Java Swing'],
    },
  ],
  education: [
    {
      school: 'Universitas Internasional Semen Indonesia',
      major: 'Informatics',
      date: '2023 – 2027',
      note: 'Currently in Semester 6.',
    },
  ],
  organizations: [
    {
      name: 'Himpunan Informatika UISI',
      role: 'PSDM Division',
      date: '2024 – 2026',
    },
    {
      name: 'IF-League 2024 UISI',
      role: 'Head of Event Committee',
      date: '2024',
    },
    {
      name: 'PKKMB 2025 UISI',
      role: 'Equipment Division Committee',
      date: 'Sep 2025',
    },
  ],
  skills: [
    'JavaScript',
    'Python',
    'PHP',
    'Java',
    'Laravel Framework',
    'Bootstrap 5',
    'Google Colab (Data Analysis)',
    'Prompt Crafting',
    'Team Leadership',
    'Problem Solving',
    'Discussion & Collaboration',
  ],
} as const

import profilePhoto from './assets/foto_Uisi_Abinaya.jpg'

function classNames(...values: Array<string | false | undefined | null>) {
  return values.filter(Boolean).join(' ')
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
      {children}
    </span>
  )
}

function Section({
  id,
  title,
  subtitle,
  children,
}: {
  id: string
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-24 py-12 sm:py-16">
      <div className="mb-6 sm:mb-8">
        <h2 className="text-balance text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {title}
        </h2>
        {subtitle ? (
          <p className="mt-2 max-w-2xl text-pretty text-sm leading-6 text-white/70 sm:text-base">
            {subtitle}
          </p>
        ) : null}
      </div>
      {children}
    </section>
  )
}

export default function App() {
  return (
    <div className="min-h-dvh bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-[-20rem] h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute bottom-[-22rem] right-[-18rem] h-[44rem] w-[44rem] rounded-full bg-fuchsia-500/10 blur-3xl" />
      </div>

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/60 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="group inline-flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/5 text-sm font-semibold ring-1 ring-white/10 group-hover:bg-white/10">
              AZ
            </span>
            <span className="hidden text-sm font-semibold text-white/90 sm:inline">
              {PROFILE.name}
            </span>
          </a>
          <nav className="hidden items-center gap-5 text-sm text-white/70 sm:flex">
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#experience">
              Experience
            </a>
            <a className="hover:text-white" href="#skills">
              Skills
            </a>
            <a className="hover:text-white" href="#education">
              Education
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <a
              className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/10"
              href={`mailto:${PROFILE.email}`}
            >
              Email
            </a>
            <a
              className="inline-flex items-center justify-center rounded-xl bg-indigo-500 px-3 py-2 text-sm font-semibold text-white hover:bg-indigo-400"
              href="#contact"
            >
              Hire me
            </a>
          </div>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="py-12 sm:py-16">
          <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <div className="flex flex-wrap gap-2">
                <Pill>{PROFILE.title}</Pill>
                <Pill>{PROFILE.location}</Pill>
              </div>
              <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight sm:text-6xl">
                {PROFILE.name}
              </h1>
              <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-white/75 sm:text-lg">
                {PROFILE.summary}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-slate-950 hover:bg-white/90"
                  href="#experience"
                >
                  See my work
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 hover:bg-white/10"
                  href={`https://${PROFILE.github}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
              <div className="mt-8 grid gap-2 text-sm text-white/70">
                <div>
                  <span className="text-white/50">Email:</span>{' '}
                  <a className="hover:text-white" href={`mailto:${PROFILE.email}`}>
                    {PROFILE.email}
                  </a>
                </div>
                <div>
                  <span className="text-white/50">Phone:</span>{' '}
                  <a className="hover:text-white" href={`tel:${PROFILE.phone}`}>
                    {PROFILE.phone}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-900/40">
                <img
                  src={profilePhoto}
                  alt={`${PROFILE.name} profile`}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              <div className="mt-5 grid gap-3">
                <div className="text-sm font-semibold text-white/90">
                  Quick highlights
                </div>
                <ul className="grid gap-2 text-sm text-white/70">
                  <li>Web & Desktop apps (Laravel + Java Swing)</li>
                  <li>Teamwork, leadership, problem solving</li>
                  <li>JavaScript • Python • PHP • Java</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <Section id="about" title="About" subtitle="A quick introduction based on my resume.">
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <p className="text-sm leading-7 text-white/75 sm:text-base">
                {PROFILE.summary}
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-semibold text-white/90">Focus</div>
              <div className="mt-3 flex flex-wrap gap-2">
                <Pill>Laravel</Pill>
                <Pill>Frontend basics</Pill>
                <Pill>Databases</Pill>
                <Pill>Clean teamwork</Pill>
              </div>
              <p className="mt-4 text-sm leading-7 text-white/70">
                Kalau kamu punya target role (mis. Frontend, Backend, Fullstack),
                nanti aku bisa rapihin wording-nya biar lebih spesifik.
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="experience"
          title="Experience & Projects"
          subtitle="Selected works and responsibilities."
        >
          <div className="grid gap-4">
            {PROFILE.experience.map((item) => (
              <article
                key={`${item.org}-${item.date}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="text-base font-semibold text-white/90">
                      {item.role} — {item.org}
                    </div>
                    <div className="mt-1 text-sm text-white/60">{item.date}</div>
                  </div>
                  <div className="flex flex-wrap items-center justify-end gap-2">
                    {'repo' in item.links && item.links.repo ? (
                      <a
                        className="inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10 hover:bg-white/10"
                        href={item.links.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Repo
                      </a>
                    ) : null}
                    {'live' in item.links && item.links.live ? (
                      <a
                        className="inline-flex items-center rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-200 ring-1 ring-indigo-400/30 hover:bg-indigo-500/30"
                        href={item.links.live}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Live
                      </a>
                    ) : null}
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full bg-slate-900/60 px-3 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/75">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/80" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="Tools, technologies, and strengths.">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <div className="flex flex-wrap gap-2">
              {PROFILE.skills.map((s) => (
                <span
                  key={s}
                  className={classNames(
                    'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium',
                    'bg-white/5 text-white/80 ring-1 ring-white/10 hover:bg-white/10',
                  )}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </Section>

        <Section id="education" title="Education">
          <div className="grid gap-4">
            {PROFILE.education.map((e) => (
              <div
                key={e.school}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="text-base font-semibold text-white/90">
                      {e.school}
                    </div>
                    <div className="mt-1 text-sm text-white/70">{e.major}</div>
                  </div>
                  <div className="text-sm text-white/60">{e.date}</div>
                </div>
                <div className="mt-3 text-sm text-white/70">{e.note}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="organizations" title="Organizations & Committees">
          <div className="grid gap-4 sm:grid-cols-2">
            {PROFILE.organizations.map((o) => (
              <div
                key={`${o.name}-${o.date}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
              >
                <div className="text-sm font-semibold text-white/90">{o.name}</div>
                <div className="mt-1 text-sm text-white/70">{o.role}</div>
                <div className="mt-2 text-xs text-white/55">{o.date}</div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="contact"
          title="Contact"
          subtitle="If you'd like to collaborate, feel free to reach out."
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-semibold text-white/90">Reach me</div>
              <div className="mt-4 grid gap-3 text-sm text-white/75">
                <a className="hover:text-white" href={`mailto:${PROFILE.email}`}>
                  {PROFILE.email}
                </a>
                <a className="hover:text-white" href={`tel:${PROFILE.phone}`}>
                  {PROFILE.phone}
                </a>
                <a
                  className="hover:text-white"
                  href={`https://${PROFILE.github}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {PROFILE.github}
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-semibold text-white/90">
                What I need from you next
              </div>
              <ul className="mt-4 grid gap-2 text-sm leading-6 text-white/70">
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400/80" />
                  <span>Foto profil (square 800×800 ideal)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400/80" />
                  <span>List project tambahan + link demo/repo (kalau ada)</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-400/80" />
                  <span>Prefer bahasa (Indonesia/English) untuk isi web</span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        <footer className="border-t border-white/10 py-10 text-sm text-white/50">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>© {new Date().getFullYear()} {PROFILE.name}</div>
            <div className="flex gap-4">
              <a className="hover:text-white" href="#top">
                Back to top
              </a>
              <a
                className="hover:text-white"
                href={`https://${PROFILE.github}`}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  )
}
