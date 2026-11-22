import React, { useState } from 'react';
import {
  Mail,
  Phone,
  ExternalLink,
  Code2,
  Terminal,
  Award,
  FileText,
  Eye,
  Menu,
  X,
  MapPin,
  Sparkles,
  Copy,
  Check,
  Briefcase,
  ArrowUpRight
} from 'lucide-react';

const GithubIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('All');
  const [copiedField, setCopiedField] = useState('');

  const profile = {
    name: 'Samarth Kapase',
    role: 'Software Developer & Data Analyst',
    location: 'Solapur, Maharashtra, India',
    phone: '+91 9022207314',
    rawPhone: '+919022207314',
    email: 'samarthkapase9022@gmail.com',
    github: 'https://github.com/samarthkapase9022-spec',
    linkedin: 'https://www.linkedin.com/in/samarthkapase'
  };

  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => setCopiedField(''), 2000);
  };

  const skillGroups = [
    {
      title: 'Programming Languages',
      badge: 'Core',
      items: ['Java', 'Python', 'JavaScript (ES6+)', 'SQL']
    },
    {
      title: 'Frontend & Full-Stack',
      badge: 'Web',
      items: ['React.js', 'Tailwind CSS', 'Spring Boot', 'Django', 'REST APIs']
    },
    {
      title: 'Big Data & AI',
      badge: 'Data',
      items: ['PySpark', 'Apache Hive', 'Pandas', 'LangChain', 'Machine Learning']
    },
    {
      title: 'Databases & Cloud',
      badge: 'Infra',
      items: ['MySQL', 'MongoDB', 'AWS (EC2)', 'Docker', 'Git & GitHub']
    }
  ];

  const projects = [
    {
      title: 'Smart Tomato Farm',
      category: 'Full-Stack Web',
      highlight: 'Featured Project',
      tech: ['React.js', 'Tailwind CSS', 'Data Analytics', 'UI/UX'],
      desc: 'Built a responsive precision-agriculture frontend dashboard featuring real-time sensor polling, crop disease detection workflows, and decision-engine visualizations.',
      github: 'https://github.com/jishwar710/smart-tomato-farm',
      live: '#'
    },
    {
      title: 'AgroTrade Platform',
      category: 'Full-Stack Web',
      highlight: 'Web App',
      tech: ['React.js', 'Spring Boot', 'MySQL', 'REST API'],
      desc: 'Digital agricultural marketplace connecting farmers directly with buyers for transparent crop pricing, listing management, and streamlined order tracking.',
      github: profile.github,
      live: '#'
    },
    {
      title: 'FAERS Pharmacovigilance Study',
      category: 'AI & Big Data',
      highlight: 'Data Research',
      tech: ['Python', 'Pandas', 'Healthcare Analytics', 'FDA Data'],
      desc: 'Lifespan-based pharmacovigilance study analyzing age-specific adverse drug reactions (ADRs) across large FDA FAERS datasets with automated drug name standardization.',
      github: profile.github,
      live: '#'
    },
    {
      title: 'LangChain Document QA Bot',
      category: 'AI & Big Data',
      highlight: 'GenAI',
      tech: ['Python', 'LangChain', 'Mixtral-8x7B', 'Gradio'],
      desc: 'Context-aware Question-Answering assistant powered by Hugging Face Mixtral-8x7B-Instruct and Gradio UI for querying technical documents.',
      github: profile.github,
      live: '#'
    },
    {
      title: 'MoneyTrack Expense Manager',
      category: 'Full-Stack Web',
      highlight: 'FinTech',
      tech: ['Java', 'Spring Boot', 'React.js', 'MySQL'],
      desc: 'Personal finance and expense tracking web application featuring category-wise budget analytics, transaction logs, and visual monthly summaries.',
      github: profile.github,
      live: '#'
    }
  ];

  const filteredProjects =
    activeTab === 'All'
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 font-sans relative overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      {/* Ambient Background Glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Navbar */}
      <nav className="sticky top-0 z-40 bg-[#060913]/80 backdrop-blur-xl border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2.5 group">
            <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 flex items-center justify-center font-extrabold text-slate-950 text-sm shadow-lg shadow-indigo-500/25">
              SK
            </span>
            <span className="text-lg font-bold tracking-tight text-white group-hover:text-indigo-400 transition">
              Samarth<span className="text-indigo-400">.dev</span>
            </span>
          </a>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#skills" className="hover:text-white transition">Skills</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#education" className="hover:text-white transition">Education</a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-lg bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 hover:bg-indigo-600 hover:text-white transition"
            >
              Hire Me
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-slate-300 p-1"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg px-6 py-4 space-y-3 border-b border-slate-800">
            <a href="#about" onClick={() => setMenuOpen(false)} className="block text-slate-300 hover:text-indigo-400">About</a>
            <a href="#skills" onClick={() => setMenuOpen(false)} className="block text-slate-300 hover:text-indigo-400">Skills</a>
            <a href="#projects" onClick={() => setMenuOpen(false)} className="block text-slate-300 hover:text-indigo-400">Projects</a>
            <a href="#education" onClick={() => setMenuOpen(false)} className="block text-slate-300 hover:text-indigo-400">Education</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="block text-indigo-400 font-medium">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header id="about" className="relative max-w-6xl mx-auto px-6 pt-16 pb-24 md:pt-24 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 text-xs font-semibold text-emerald-300 bg-emerald-500/10 rounded-full border border-emerald-500/25">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Software Developer & Data Analyst Roles
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12] mb-6">
              Building scalable{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                web apps
              </span>{' '}
              & data solutions.
            </h1>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Hi, I am <strong className="text-white font-semibold">Samarth Kapase</strong> — an MCA student at{' '}
              <span className="text-slate-200">MIT Vishwaprayag University, Solapur</span>. I specialize in full-stack development with{' '}
              <span className="text-indigo-300">React, Java & Spring Boot</span>, alongside{' '}
              <span className="text-cyan-300">Python & Big Data Analytics</span>.
            </p>

            {/* Primary CTA Buttons */}
            <div className="flex flex-wrap gap-3.5 mb-8">
              <a
                href="#projects"
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-cyan-500 text-white font-semibold rounded-xl transition shadow-lg shadow-indigo-500/25 flex items-center gap-2"
              >
                Explore Projects <ArrowUpRight size={18} />
              </a>

              <button
                onClick={() => setResumeOpen(true)}
                className="px-5 py-3 bg-slate-900/90 hover:bg-slate-800 text-slate-100 font-medium rounded-xl border border-slate-700/80 flex items-center gap-2 transition cursor-pointer"
              >
                <Eye size={18} className="text-cyan-400" /> View Resume
              </button>

              <a
                href="/resume.pdf"
                download="Samarth_Kapase_Resume.pdf"
                className="px-5 py-3 bg-slate-900/60 hover:bg-slate-800 text-indigo-300 font-medium rounded-xl border border-indigo-500/30 flex items-center gap-2 transition"
              >
                <FileText size={18} /> Download PDF
              </a>
            </div>

            {/* Quick Contact Pills */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <a
                href={`tel:${profile.rawPhone}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-indigo-500/40 text-slate-300 transition"
              >
                <Phone size={15} className="text-indigo-400" /> {profile.phone}
              </a>
              <span className="inline-flex items-center gap-1.5 text-slate-400">
                <MapPin size={15} className="text-cyan-400" /> Solapur, Maharashtra
              </span>
            </div>
          </div>

          {/* Right Developer Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-slate-800 p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-xs font-mono text-slate-500">samarth.profile.json</span>
              </div>

              <pre className="text-xs sm:text-sm font-mono leading-relaxed overflow-x-auto text-slate-300">
                <code>
                  <span className="text-slate-500">{'{'}</span>
                  {'\n  '}
                  <span className="text-indigo-400">"name"</span>: <span className="text-emerald-300">"Samarth Kapase"</span>,
                  {'\n  '}
                  <span className="text-indigo-400">"degree"</span>: <span className="text-emerald-300">"MCA (2025 - 2027)"</span>,
                  {'\n  '}
                  <span className="text-indigo-400">"university"</span>: <span className="text-emerald-300">"MIT Vishwaprayag"</span>,
                  {'\n  '}
                  <span className="text-indigo-400">"focus"</span>: [
                  {'\n    '}
                  <span className="text-cyan-300">"Full-Stack Development"</span>,
                  {'\n    '}
                  <span className="text-cyan-300">"Data Analysis & Big Data"</span>
                  {'\n  '}],
                  {'\n  '}
                  <span className="text-indigo-400">"phone"</span>: <span className="text-amber-300">"+91 9022207314"</span>,
                  {'\n  '}
                  <span className="text-indigo-400">"openToWork"</span>: <span className="text-purple-400">true</span>
                  {'\n'}
                  <span className="text-slate-500">{'}'}</span>
                </code>
              </pre>

              <div className="mt-5 pt-4 border-t border-slate-800 flex justify-between items-center">
                <div className="flex gap-3">
                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white transition"
                    title="GitHub"
                  >
                    <GithubIcon size={18} />
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white transition"
                    title="LinkedIn"
                  >
                    <LinkedinIcon size={18} />
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="p-2 rounded-lg bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white transition"
                    title="Email"
                  >
                    <Mail size={18} />
                  </a>
                </div>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Sparkles size={13} className="text-indigo-400" /> Ready to Deploy
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section id="skills" className="relative max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/70">
        <div className="mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2">Tech Stack</p>
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Code2 className="text-indigo-400" /> Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="group bg-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-800/90 hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-slate-100 group-hover:text-indigo-300 transition">{group.title}</h3>
                <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  {group.badge}
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-800/90 text-slate-300 text-xs font-medium rounded-lg border border-slate-700/60"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/70">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-2">Portfolio Work</p>
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <Terminal className="text-cyan-400" /> Featured Projects
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="inline-flex p-1 rounded-xl bg-slate-900 border border-slate-800 self-start">
            {['All', 'Full-Stack Web', 'AI & Big Data'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                  activeTab === tab
                    ? 'bg-indigo-600 text-white shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-6 rounded-2xl border border-slate-800 hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {project.highlight}
                  </span>
                  <div className="flex gap-2.5 text-slate-400">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 rounded-lg hover:bg-slate-800 hover:text-white transition"
                      title="View Source Code"
                    >
                      <GithubIcon size={18} />
                    </a>
                    {project.live !== '#' && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg hover:bg-slate-800 hover:text-white transition"
                        title="Live Demo"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-slate-100 group-hover:text-indigo-300 transition mb-2.5">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.desc}</p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium text-slate-300 bg-slate-800/80 px-2.5 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/70">
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400 mb-2">Academic Background</p>
          <h2 className="text-3xl font-bold flex items-center gap-3">
            <Award className="text-indigo-400" /> Education
          </h2>
        </div>

        <div className="relative border-l-2 border-slate-800 ml-3 space-y-8">
          <div className="relative pl-8">
            <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-[#060913]" />
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <div>
                <h3 className="font-bold text-lg text-white">Master of Computer Applications (MCA)</h3>
                <p className="text-slate-400 text-sm">MIT Vishwaprayag University, Solapur</p>
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 text-xs font-semibold self-start md:self-auto">
                2025 – 2027 (Pursuing)
              </span>
            </div>
          </div>

          <div className="relative pl-8">
            <span className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-600 ring-4 ring-[#060913]" />
            <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
              <div>
                <h3 className="font-bold text-lg text-white">Bachelor of Science (B.Sc.) in Computer Science</h3>
                <p className="text-slate-400 text-sm">Undergraduate Degree in Computer Science</p>
              </div>
              <span className="inline-block px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold self-start md:self-auto">
                Graduated 2025
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="relative max-w-6xl mx-auto px-6 py-20 border-t border-slate-800/80">
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 p-8 md:p-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 text-xs font-semibold text-indigo-300 bg-indigo-500/10 rounded-full border border-indigo-500/20">
            <Briefcase size={14} /> Open to Opportunities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Let us Work Together</h2>
          <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto mb-8">
            Looking for entry-level Software Developer or Data Analyst roles. Feel free to reach out directly via phone, email, or LinkedIn.
          </p>

          {/* Direct Contact Cards with Copy */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-between px-5 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <a href={`tel:${profile.rawPhone}`} className="flex items-center gap-3 text-sm font-medium text-slate-200 hover:text-indigo-400 transition">
                <Phone size={18} className="text-indigo-400" /> {profile.phone}
              </a>
              <button
                onClick={() => handleCopy(profile.phone, 'phone')}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer"
                title="Copy Phone Number"
              >
                {copiedField === 'phone' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>

            <div className="flex items-center justify-between px-5 py-3.5 rounded-xl bg-slate-950/80 border border-slate-800">
              <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm font-medium text-slate-200 hover:text-indigo-400 transition truncate">
                <Mail size={18} className="text-cyan-400 shrink-0" /> <span className="truncate">{profile.email}</span>
              </a>
              <button
                onClick={() => handleCopy(profile.email, 'email')}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer shrink-0"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-white text-sm font-medium flex items-center gap-2 transition"
            >
              <GithubIcon size={18} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-indigo-500/50 text-slate-300 hover:text-white text-sm font-medium flex items-center gap-2 transition"
            >
              <LinkedinIcon size={18} /> LinkedIn
            </a>
          </div>
        </div>

        <p className="text-center text-xs text-slate-500 mt-10">
          © 2026 Samarth Kapase • Crafted with React & Tailwind CSS
        </p>
      </footer>

      {/* Resume View Modal */}
      {resumeOpen && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-700 rounded-2xl w-full max-w-4xl h-[86vh] flex flex-col overflow-hidden shadow-2xl">
            <div className="flex justify-between items-center px-6 py-4 border-b border-slate-800 bg-slate-900">
              <div>
                <h3 className="font-bold text-lg text-white">Samarth Kapase — Resume</h3>
                <p className="text-xs text-slate-400">Software Developer & Data Analyst</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href="/resume.pdf"
                  download="Samarth_Kapase_Resume.pdf"
                  className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg flex items-center gap-1.5 transition"
                >
                  <FileText size={16} /> Download PDF
                </a>
                <button
                  onClick={() => setResumeOpen(false)}
                  className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition cursor-pointer"
                  aria-label="Close Resume Preview"
                >
                  <X size={22} />
                </button>
              </div>
            </div>
            <div className="flex-1 bg-slate-950">
              <iframe
                src="/resume.pdf"
                title="Samarth Kapase Resume"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}