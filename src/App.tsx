import { useState, useEffect, useRef } from 'react'
import { PROFILE } from './data'
import profilePhoto from './assets/foto_Uisi_Abinaya.jpg'
import {
  Mail, Phone, MapPin, ExternalLink, Code2,
  Menu, X, ChevronUp, Briefcase, GraduationCap,
  Users, Cpu, Send, Download, Star
} from 'lucide-react'

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function LinkedInIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  )
}

function WhatsAppIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  )
}

function useScrollSpy(ids: string[]) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY + 100
      for (const id of [...ids].reverse()) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollY) { setActive(id); return }
      }
      setActive(ids[0])
    }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [ids])
  return active
}

function useVisible(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [threshold])
  return { ref, visible }
}

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useVisible()
  return (
    <div ref={ref} style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {children}
    </div>
  )
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="tag inline-flex items-center rounded-full bg-white/5 px-3 py-1 text-xs font-medium text-white/70 ring-1 ring-white/10 cursor-default">
      {children}
    </span>
  )
}

function NavBar({ active }: { active: string }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const links = ['about', 'experience', 'skills', 'certifications', 'education', 'organizations', 'contact']

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'border-b border-white/10 bg-[#020617]/80 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="group flex items-center gap-2.5">
          <span className="btn-glow relative grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-sm font-bold text-white shadow-lg shadow-indigo-500/30">
            AZ
          </span>
          <span className="hidden text-sm font-semibold text-white/90 sm:block">{PROFILE.name}</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm sm:flex">
          {links.map(id => (
            <a key={id} href={`#${id}`}
              className={`nav-link capitalize ${active === id ? 'text-white active' : 'text-white/60 hover:text-white'}`}>
              {id}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={`mailto:${PROFILE.email}`}
            className="btn-glow hidden items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-white/80 transition hover:bg-white/10 sm:inline-flex">
            <Mail size={14} /> Email
          </a>
          <a href="#contact"
            className="btn-glow inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition hover:opacity-90">
            <Send size={14} /> Hire me
          </a>
          <button onClick={() => setOpen(o => !o)} className="sm:hidden p-2 text-white/70 hover:text-white">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu-enter border-t border-white/10 bg-[#020617]/95 backdrop-blur-xl sm:hidden">
          {links.map(id => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}
              className="flex items-center px-6 py-3 text-sm capitalize text-white/70 hover:bg-white/5 hover:text-white">
              {id}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

function Hero() {
  const [typed, setTyped] = useState('')
  const roles = ['Web Developer', 'Informatics Student', 'Problem Solver', 'Team Leader']
  const [ri, setRi] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = roles[ri]
    const speed = deleting ? 50 : 100
    const timeout = setTimeout(() => {
      if (!deleting && typed === word) {
        setTimeout(() => setDeleting(true), 1500)
        return
      }
      if (deleting && typed === '') {
        setDeleting(false)
        setRi(i => (i + 1) % roles.length)
        return
      }
      setTyped(prev => deleting ? prev.slice(0, -1) : word.slice(0, prev.length + 1))
    }, speed)
    return () => clearTimeout(timeout)
  }, [typed, deleting, ri])

  return (
    <section id="top" className="relative overflow-hidden py-20 sm:py-28">
      {/* Background orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-600/20 blur-3xl" />
        <div className="absolute right-0 top-1/2 h-80 w-80 rounded-full bg-purple-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left */}
          <div className="animate-fadeInUp">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium text-indigo-300">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
              Available for opportunities
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Hi, I'm{' '}
              <span className="text-gradient">{PROFILE.name}</span>
            </h1>

            <div className="mt-3 flex items-center gap-2 text-xl font-medium text-white/60">
              <Code2 size={20} className="text-indigo-400" />
              <span>{typed}</span>
              <span className="cursor-blink text-indigo-400">|</span>
            </div>

            <p className="mt-5 max-w-xl text-base leading-7 text-white/65 sm:text-lg">
              {PROFILE.summary}
            </p>

            <div className="mt-4 flex flex-wrap gap-3 text-sm text-white/55">
              <span className="flex items-center gap-1.5"><MapPin size={14} className="text-indigo-400" />{PROFILE.location}</span>
              <span className="flex items-center gap-1.5"><Phone size={14} className="text-indigo-400" />{PROFILE.phone}</span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#experience"
                className="btn-glow inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg transition hover:bg-white/90">
                <Briefcase size={15} /> See My Work
              </a>
              <a href={PROFILE.githubUrl} target="_blank" rel="noreferrer"
                className="btn-glow inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/90 transition hover:bg-white/10">
                <GithubIcon size={15} /> GitHub
              </a>
              <a href={PROFILE.linkedinUrl} target="_blank" rel="noreferrer"
                className="btn-glow inline-flex items-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-5 py-2.5 text-sm font-semibold text-blue-300 transition hover:bg-blue-500/20">
                <LinkedInIcon size={15} /> LinkedIn
              </a>
              <a href={PROFILE.whatsappUrl} target="_blank" rel="noreferrer"
                className="btn-glow inline-flex items-center gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-5 py-2.5 text-sm font-semibold text-green-300 transition hover:bg-green-500/20">
                <WhatsAppIcon size={15} /> WhatsApp
              </a>
              <a href={`mailto:${PROFILE.email}`}
                className="btn-glow inline-flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-5 py-2.5 text-sm font-semibold text-indigo-300 transition hover:bg-indigo-500/20">
                <Download size={15} /> Contact Me
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="flex justify-center animate-float">
            <div className="relative">
              <div className="profile-ring h-72 w-72 sm:h-80 sm:w-80">
                <div className="profile-ring-inner p-1">
                  <img src={profilePhoto} alt={PROFILE.name} className="h-full w-full rounded-full object-cover" />
                </div>
              </div>
              {/* Badge cards */}
              <div className="absolute -left-8 top-10 glass px-4 py-2.5 text-sm font-semibold text-white shadow-xl animate-fadeInLeft" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-2"><Star size={14} className="text-yellow-400" /> 6th Semester</div>
              </div>
              <div className="absolute -right-8 bottom-10 glass px-4 py-2.5 text-sm font-semibold text-white shadow-xl" style={{ animation: 'fadeInLeft 0.6s 0.6s ease both' }}>
                <div className="flex items-center gap-2"><Code2 size={14} className="text-indigo-400" /> 3 Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mb-10 flex items-center gap-3">
            <Briefcase size={22} className="text-indigo-400" />
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Experience & Projects</h2>
          </div>
        </FadeIn>
        <div className="grid gap-5">
          {PROFILE.experience.map((item, i) => (
            <FadeIn key={item.org} delay={i * 100}>
              <article className="glass glass-hover card-shimmer p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-indigo-400 timeline-dot" />
                      <span className="text-base font-semibold text-white">{item.role}</span>
                    </div>
                    <div className="mt-1 ml-4 text-sm font-medium text-indigo-300">{item.org}</div>
                    <div className="mt-1 ml-4 text-xs text-white/50">{item.date}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {'repo' in item.links && item.links.repo && (
                      <a href={item.links.repo} target="_blank" rel="noreferrer"
                        className="btn-glow inline-flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 ring-1 ring-white/10 hover:bg-white/10">
                        <GithubIcon size={11} /> Repo
                      </a>
                    )}
                    {'live' in item.links && item.links.live && (
                      <a href={item.links.live} target="_blank" rel="noreferrer"
                        className="btn-glow inline-flex items-center gap-1.5 rounded-full bg-indigo-500/20 px-3 py-1 text-xs font-semibold text-indigo-200 ring-1 ring-indigo-400/30 hover:bg-indigo-500/30">
                        <ExternalLink size={11} /> Live
                      </a>
                    )}
                  </div>
                </div>
                <ul className="mt-4 grid gap-2">
                  {item.points.map(p => (
                    <li key={p} className="flex gap-3 text-sm text-white/70">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400/70" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map(t => <Tag key={t}>{t}</Tag>)}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const { ref, visible } = useVisible(0.2)
  return (
    <section id="skills" className="scroll-mt-20 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mb-10 flex items-center gap-3">
            <Cpu size={22} className="text-indigo-400" />
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Skills</h2>
          </div>
        </FadeIn>
        <div ref={ref} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {PROFILE.skills.map((skill, i) => (
            <div key={skill.name}
              className="glass glass-hover card-shimmer p-5"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: `opacity 0.5s ${i * 80}ms ease, transform 0.5s ${i * 80}ms ease`,
              }}>
              <div className="mb-3 flex items-start justify-between gap-2">
                <span className="text-sm font-bold text-white">{skill.name}</span>
                <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                  skill.category === 'Language'  ? 'bg-indigo-500/20 text-indigo-300 ring-1 ring-indigo-500/30'  :
                  skill.category === 'Framework' ? 'bg-purple-500/20 text-purple-300 ring-1 ring-purple-500/30' :
                  skill.category === 'Database'  ? 'bg-cyan-500/20   text-cyan-300   ring-1 ring-cyan-500/30'   :
                                                   'bg-amber-500/20  text-amber-300  ring-1 ring-amber-500/30'
                }`}>{skill.category}</span>
              </div>
              <p className="text-xs leading-5 text-white/55">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Education() {
  return (
    <section id="education" className="scroll-mt-20 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mb-10 flex items-center gap-3">
            <GraduationCap size={22} className="text-indigo-400" />
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Education</h2>
          </div>
        </FadeIn>
        <div className="grid gap-4">
          {PROFILE.education.map(e => (
            <FadeIn key={e.school}>
              <div className="glass glass-hover card-shimmer p-6">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="text-base font-bold text-white">{e.school}</div>
                    <div className="mt-1 text-sm text-indigo-300">{e.major}</div>
                    <div className="mt-2 text-sm text-white/60">{e.note}</div>
                  </div>
                  <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">{e.date}</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function Organizations() {
  return (
    <section id="organizations" className="scroll-mt-20 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mb-10 flex items-center gap-3">
            <Users size={22} className="text-indigo-400" />
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Organizations & Committees</h2>
          </div>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-3">
          {PROFILE.organizations.map((o, i) => (
            <FadeIn key={o.name} delay={i * 80}>
              <div className="glass glass-hover card-shimmer h-full p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400 mb-4">
                  <Users size={18} />
                </div>
                <div className="text-sm font-bold text-white">{o.name}</div>
                <div className="mt-1.5 text-sm text-indigo-300">{o.role}</div>
                <div className="mt-3 text-xs text-white/50">{o.date}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [copied, setCopied] = useState<string | null>(null)
  const copy = (val: string, label: string) => {
    navigator.clipboard.writeText(val)
    setCopied(label)
    setTimeout(() => setCopied(null), 2000)
  }
  return (
    <section id="contact" className="scroll-mt-20 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mb-10 flex items-center gap-3">
            <Send size={22} className="text-indigo-400" />
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Contact</h2>
          </div>
        </FadeIn>
        <div className="grid gap-5 lg:grid-cols-2">
          <FadeIn>
            <div className="glass p-6 h-full">
              <p className="mb-6 text-sm text-white/60 leading-6">
                I'm open to new opportunities, collaborations, and interesting projects. Don't hesitate to reach out!
              </p>
              <div className="grid gap-3">
                {[
                  { icon: Mail, label: 'Email', val: PROFILE.email, href: `mailto:${PROFILE.email}`, color: 'text-indigo-400', bg: 'bg-indigo-500/15' },
                  { icon: Phone, label: 'Phone', val: PROFILE.phone, href: `tel:${PROFILE.phone}`, color: 'text-indigo-400', bg: 'bg-indigo-500/15' },
                  { icon: WhatsAppIcon, label: 'WhatsApp', val: PROFILE.phone, href: PROFILE.whatsappUrl, color: 'text-green-400', bg: 'bg-green-500/15' },
                  { icon: GithubIcon, label: 'GitHub', val: PROFILE.github, href: PROFILE.githubUrl, color: 'text-indigo-400', bg: 'bg-indigo-500/15' },
                  { icon: LinkedInIcon, label: 'LinkedIn', val: PROFILE.linkedin, href: PROFILE.linkedinUrl, color: 'text-blue-400', bg: 'bg-blue-500/15' },
                ].map(({ icon: Icon, label, val, href, color, bg }) => (
                  <div key={label} className="glass-hover flex items-center gap-4 rounded-xl border border-white/5 bg-white/3 p-4">
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${bg} ${color}`}>
                      <Icon size={17} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs text-white/45">{label}</div>
                      <a href={href} target={label === 'GitHub' || label === 'LinkedIn' || label === 'WhatsApp' ? '_blank' : undefined} rel="noreferrer"
                        className="truncate text-sm font-medium text-white/85 hover:text-indigo-300 transition-colors">
                        {val}
                      </a>
                    </div>
                    <button onClick={() => copy(val, label)}
                      className="btn-glow shrink-0 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/60 hover:bg-white/10 hover:text-white transition">
                      {copied === label ? '✓ Copied' : 'Copy'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="glass p-6 h-full flex flex-col justify-between">
              <div>
                <div className="mb-4 text-sm font-semibold text-white">Quick Message</div>
                <input placeholder="Your name" className="mb-3 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/35 outline-none focus:border-indigo-500/50 focus:bg-white/8 transition" />
                <input placeholder="Your email" className="mb-3 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/35 outline-none focus:border-indigo-500/50 focus:bg-white/8 transition" />
                <textarea rows={4} placeholder="Your message..." className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/35 outline-none focus:border-indigo-500/50 focus:bg-white/8 transition resize-none" />
              </div>
              <a href={`mailto:${PROFILE.email}`}
                className="btn-glow mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/25 hover:opacity-90 transition">
                <Send size={15} /> Send via Email
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}

function Certifications() {
  return (
    <section id="certifications" className="scroll-mt-20 py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <FadeIn>
          <div className="mb-10 flex items-center gap-3">
            <Star size={22} className="text-indigo-400" />
            <h2 className="text-2xl font-bold text-white sm:text-3xl">Certifications</h2>
          </div>
        </FadeIn>
        <div className="grid gap-4 sm:grid-cols-2">
          {PROFILE.certifications.map((cert, i) => (
            <FadeIn key={cert.code} delay={i * 100}>
              <div className="glass glass-hover card-shimmer p-5 h-full">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                        cert.issuer === 'Dicoding'
                          ? 'bg-blue-500/20 text-blue-300 ring-1 ring-blue-500/30'
                          : 'bg-teal-500/20 text-teal-300 ring-1 ring-teal-500/30'
                      }`}>{cert.issuer}</span>
                      <span className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                        cert.category === 'Data & AI'
                          ? 'bg-purple-500/15 text-purple-300'
                          : 'bg-orange-500/15 text-orange-300'
                      }`}>{cert.category}</span>
                    </div>
                    <div className="text-sm font-bold text-white">{cert.title}</div>
                    <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/45">
                      <span>Issued: <span className="text-white/65">{cert.date}</span></span>
                      <span>Valid until: <span className="text-white/65">{cert.validUntil}</span></span>
                    </div>
                    <div className="mt-1.5 font-mono text-xs text-indigo-400/70">ID: {cert.code}</div>
                  </div>
                  <a href={cert.url} target="_blank" rel="noreferrer"
                    className="btn-glow shrink-0 inline-flex items-center gap-1.5 rounded-xl border border-indigo-500/30 bg-indigo-500/10 px-3 py-2 text-xs font-semibold text-indigo-300 transition hover:bg-indigo-500/20">
                    <ExternalLink size={12} /> Verify
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

function BackToTop() {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const h = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])
  return (
    <a href="#top" className={`back-to-top btn-glow flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/30 ${show ? 'visible' : ''}`}>
      <ChevronUp size={20} />
    </a>
  )
}

export default function App() {
  const navIds = ['about', 'experience', 'skills', 'certifications', 'education', 'organizations', 'contact']
  const active = useScrollSpy(navIds)

  return (
    <div className="min-h-dvh bg-[#020617] text-white">
      <NavBar active={active} />
      <main>
        <Hero />

        {/* About */}
        <section id="about" className="scroll-mt-20 py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <FadeIn>
              <div className="mb-10 flex items-center gap-3">
                <Star size={22} className="text-indigo-400" />
                <h2 className="text-2xl font-bold text-white sm:text-3xl">About Me</h2>
              </div>
            </FadeIn>
            <div className="grid gap-5 lg:grid-cols-3">
              <FadeIn delay={0}>
                <div className="glass glass-hover card-shimmer p-6 lg:col-span-2">
                  <p className="text-sm leading-7 text-white/70 sm:text-base">{PROFILE.summary}</p>
                </div>
              </FadeIn>
              <FadeIn delay={100}>
                <div className="glass glass-hover card-shimmer p-6">
                  <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-indigo-400">Focus Areas</div>
                  <div className="flex flex-wrap gap-2">
                    {['Laravel', 'PHP', 'JavaScript', 'Databases', 'Team Work', 'Leadership'].map(t => <Tag key={t}>{t}</Tag>)}
                  </div>
                  <div className="mt-6 grid grid-cols-2 gap-3 text-center">
                    {[{ n: '3+', l: 'Projects' }, { n: '6th', l: 'Semester' }, { n: '3+', l: 'Orgs' }, { n: '10+', l: 'Skills' }].map(s => (
                      <div key={s.l} className="rounded-xl bg-white/5 p-3">
                        <div className="text-xl font-bold text-gradient">{s.n}</div>
                        <div className="text-xs text-white/50">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <Experience />
        <Skills />
        <Certifications />
        <Education />
        <Organizations />
        <Contact />

        <footer className="border-t border-white/10 py-8 text-sm text-white/40">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 sm:px-6">
            <div>© {new Date().getFullYear()} <span className="text-white/60">{PROFILE.name}</span></div>
            <div className="flex gap-5">
              <a href="#top" className="hover:text-white transition">Back to top ↑</a>
              <a href={PROFILE.githubUrl} target="_blank" rel="noreferrer" className="hover:text-white transition flex items-center gap-1">
                <GithubIcon size={13} /> GitHub
              </a>
              <a href={PROFILE.linkedinUrl} target="_blank" rel="noreferrer" className="hover:text-white hover:text-blue-300 transition flex items-center gap-1">
                <LinkedInIcon size={13} /> LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </main>
      <BackToTop />
    </div>
  )
}
