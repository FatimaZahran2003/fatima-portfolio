import React, { useState } from 'react';
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Github, Linkedin, Mail,
  Menu, X, Code2, Sprout, UtensilsCrossed, Layers3, Sparkles, Briefcase, GraduationCap
} from 'lucide-react';

const projects = [
  {
    id: 'geniflora', number: '01', name: 'Geniflora',
    type: 'Graduation Project · AgriTech & AI',
    category: 'flutter',
    summary: 'A plant information and hybridization support platform combining agricultural knowledge with genomic data analysis workflows.',
    tags: ['Flutter', 'Python / Flask', 'Firebase', 'Genomic Data'],
    icon: Sprout, theme: 'plant', images: ['/images/geniflora-01.png','/images/geniflora-02.png','/images/geniflora-03.png','/images/geniflora-04.png'],
    overview: 'Geniflora is a bilingual plant information and hybridization support system designed to help users explore plant knowledge and research workflows in one place.',
    features: [
       ' Browse and search plant information, countries, plant varieties, and common diseases through an organized, user-friendly interface',
       ' Explore plant-specific hybridization studies, breeding methods, research datasets, and scientific references.',
       ' Conduct custom hybridization experiments by selecting parent plants and defining desired traits.',
       ' Upload genomic and phenotype datasets for AI-assisted analysis and trait-based breeding recommendations.',
       ' View experiment results, compare candidate hybrids, and review data-driven insights to support plant breeding decisions.',
       ' Explore genomic selection workflows, including the Apple Genomic Selection module and Bayesian LASSO-based hybrid analysis.',
       ' Listen to plant-related audio samples through integrated audio playback features.',
       ' Authenticate users and manage plant information and experiment records using Firebase Authentication and Firebase data storage.',
       ' Integrate Python and Flask backend services to support genomic analysis, prediction workflows, and experiment processing.'

    ],
    role: 'Computer Engineering Graduation Project (July 2026)',
    note: 'Developed as a comprehensive graduation project focusing on scalable mobile architecture and data integration.'
  },
  {
    id: 'yallaeat', number: '02', name: 'YallaEat.AI',
    type: 'Web Application · Restaurant Tech',
    category: 'dotnet',
    summary: 'An Arabic-first restaurant ordering experience with chatbot-oriented workflows, order tracking, and administrative tools.',
    tags: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL'],
    icon: UtensilsCrossed, theme: 'food', images: ['/images/yallaeat-01.png','/images/yallaeat-02.png','/images/yallaeat-03.png','/images/yallaeat-04.png','/images/yallaeat-05.png'],
    overview: 'YallaEat.AI is a restaurant web application focused on making menu discovery and ordering more conversational, with customer-facing order tools and administrative workflows.',
    features: [
      'Arabic right-to-left chatbot interface and conversation handling.',
      'Menu-backed ordering flows with item updates and order summaries.',
      'Order submission, totals, delivery-fee calculations, and order tracking.',
      'Database-backed menu and order workflows with admin-facing management screens.'
    ],
    role: 'Full-Stack Software Development',
    note: 'Built with robust backend architecture using ASP.NET Core and Entity Framework Core.'
  }
];

const experiences = [
  {
    period: '2025 - 2026',
    role: 'Software Engineering Trainee',
    company: 'ASAL Technologies',
    description: 'Participated in full-stack software development cycles, contributing to AI-powered chatbot features, writing clean and maintainable code, and collaborating in Scrum sprints to meet project milestones.'
  },
  {
    period: '2026',
    role: 'B.Sc. in Computer Engineering',
    company: 'Birzeit University',
    description: 'Earned a B.Sc. in Computer Engineering, focusing on full-stack software development, data structures, and integrating AI into practical applications.'
  }
];

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="header">
      <a className="brand" href="#home" onClick={close}><span className="brand-mark">F<span>.</span></span><span>FATIMA ZAHRAN</span></a>
      <button className="mobile-menu" aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'nav open' : 'nav'}>
        <a href="#about" onClick={close}>About</a>
        <a href="#projects" onClick={close}>Projects</a>
        <a href="#experience" onClick={close}>Experience</a>
        <a href="#skills" onClick={close}>Skills</a>
        <a className="nav-contact" href="#contact" onClick={close}>Let’s talk <ArrowUpRight size={15}/></a>
      </nav>
    </header>
  );
}

function ProjectPreview({ project }) {
  return <div className={`project-preview ${project.theme}`}>
    <img src={project.images[0]} alt={`${project.name} preview`} onError={(e) => { e.target.style.display = 'none'; }} />
    <div className="preview-caption"><span>{project.number} / SELECTED PROJECT</span><b>{project.name}</b></div>
  </div>;
}

function App() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [filter, setFilter] = useState('all');
  const [copied, setCopied] = useState(false);

  const openProject = (project) => { setActiveProject(project); setActiveImage(0); };
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText('fatimazahran2003@gmail.com'); setCopied(true); setTimeout(() => setCopied(false), 3000); }
    catch { window.location.href = 'mailto:fatimazahran2003@gmail.com'; }
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="site-shell">
      <Header />
      <main>
        {/* HERO SECTION */}
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> COMPUTER ENGINEER </div>
            <h1>Thoughtful code.<br/><span>Meaningful</span> solutions.</h1>
            <p className="hero-intro">I’m Fatima, a Computer Engineer who builds practical digital experiences across web development, data-driven tools, and AI-focused applications.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-quiet" href="#contact">Get in touch <ArrowDownRight size={17}/></a>
            </div>
            <div className="hero-meta">
              <span><i>01</i> Web Development</span>
              <span><i>02</i> AI & Data Workflows</span>
              <span><i>03</i> Full-stack Apps</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="visual-orbit orbit-one"/><div className="visual-orbit orbit-two"/>
            <div className="hero-code-card">
              <div className="code-card-head"><span className="code-dots"><i/><i/><i/></span><span>building.solutions</span><Code2 size={15}/></div>
              <div className="code-lines">
                <p><em>const</em> developer = {'{'}</p>
                <p className="indent"><b>name</b>: <strong>"Fatima"</strong>,</p>
                <p className="indent"><b>focus</b>: [</p>
                <p className="indent deeper"><strong>"Web Apps"</strong>,</p>
                <p className="indent deeper"><strong>"AI Solutions"</strong></p>
                <p className="indent">],</p>
                <p className="indent"><b>status</b>: <strong>"Ready for Hire"</strong></p>
                <p>{'}'};</p>
              </div>
              <div className="code-card-foot"><span className="status-dot"/> Birzeit University Graduate</div>
            </div>
            <div className="float-chip chip-top"><Sparkles size={15}/> Computer Engineer</div>
            <div className="float-chip chip-bottom"><Layers3 size={15}/> Agile & Scrum Trained</div>
            <div className="hero-index">PORTFOLIO <span>2026</span></div>
          </div>
          <a href="#about" className="scroll-cue"><span/> SCROLL TO EXPLORE</a>
        </section>

        {/* ABOUT SECTION */}
        <section className="about section-wrap" id="about">
          <div className="section-kicker">A LITTLE ABOUT ME <span>01 / 05</span></div>
          <div className="about-grid">
            <h2>Engineering ideas<br/>into <span>useful things.</span></h2>
            <div className="about-text">
              <p>I hold a B.Sc. in Computer Engineering from Birzeit University with hands-on training at ASAL Technologies. I enjoy turning complex technical requirements into clean, scalable, and user-friendly software.</p>
              <p>My expertise spans full-stack web engineering, Flutter mobile apps, and machine learning/genomic data workflows. I value maintainable code, rigorous engineering, and building user-centric solutions.</p>
              <a href="#contact" className="text-link">Let's discuss an opportunity <ArrowUpRight size={16}/></a>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section className="projects section-wrap" id="projects">
          <div className="section-kicker">SELECTED WORK <span>02 / 05</span></div>
          <div className="section-heading">
            <div>
              <h2>Projects with<br/><span>a purpose.</span></h2>
              <p>Key applications showcasing software engineering, AI integration, and full-stack development.</p>
            </div>
            <div className="project-filters">
              <button className={filter === 'all' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('all')}>All</button>
              <button className={filter === 'flutter' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('flutter')}>Flutter & AI</button>
              <button className={filter === 'dotnet' ? 'filter-btn active' : 'filter-btn'} onClick={() => setFilter('dotnet')}>C# & .NET</button>
            </div>
          </div>
          <div className="project-grid">
            {filteredProjects.map(project => {
              const Icon = project.icon;
              return (
                <article className="project-card" key={project.id}>
                  <button className="project-open" onClick={() => openProject(project)} aria-label={`View ${project.name} details`}><ArrowUpRight size={18}/></button>
                  <button className="preview-button" onClick={() => openProject(project)} aria-label={`Open ${project.name}`}><ProjectPreview project={project}/></button>
                  <div className="project-info">
                    <div className="project-type">{project.type}</div>
                    <div className="project-title-row">
                      <h3>{project.name}</h3>
                      <Icon size={21} strokeWidth={1.5}/>
                    </div>
                    <p>{project.summary}</p>
                    <div className="tag-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
                    <button className="details-link" onClick={() => openProject(project)}>Explore project <ArrowRight size={15}/></button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        {/* EXPERIENCE & EDUCATION SECTION */}
        <section className="experience section-wrap" id="experience">
          <div className="section-kicker">BACKGROUND <span>03 / 05</span></div>
          <div className="section-heading">
            <h2>Experience &<br/><span>Education.</span></h2>
            <p>My academic foundation and professional training background.</p>
          </div>
          <div className="exp-grid">
            {experiences.map((exp, idx) => (
              <div className="exp-card" key={idx}>
                <div className="exp-header">
                  <div className="exp-icon-box">
                    {exp.company.includes('University') ? <GraduationCap size={20}/> : <Briefcase size={20}/>}
                  </div>
                  <div>
                    <span className="exp-period">{exp.period}</span>
                    <h3>{exp.role}</h3>
                  </div>
                </div>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="skills section-wrap" id="skills">
          <div className="section-kicker">WHAT I WORK WITH <span>04 / 05</span></div>
          <div className="section-heading">
            <h2>Tools for turning<br/><span>ideas into reality.</span></h2>
            <p>A practical toolkit across frontend interfaces, backend systems, databases, and data workflows.</p>
          </div>
          <div className="skill-grid">
            <div className="skill-card"><span className="skill-number">01</span><Code2/><h3>Frontend</h3><p>React, JavaScript, HTML5, CSS3, Flutter UI</p></div>
            <div className="skill-card"><span className="skill-number">02</span><Layers3/><h3>Backend</h3><p>C#, ASP.NET Core, Python, Flask, REST APIs</p></div>
            <div className="skill-card"><span className="skill-number">03</span><Sprout/><h3>Data & AI</h3><p> Artificial Intelligence, Machine Learning, Generative AI, Prompt Engineering, Introduction to RAG, Python analytics</p></div>
            <div className="skill-card"><span className="skill-number">04</span><Sparkles/><h3>Databases & Tools</h3><p>Firebase, SQL, Entity Framework Core, Git & Scrum</p></div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact section-wrap" id="contact">
          <div className="section-kicker">LET’S CONNECT <span>05 / 05</span></div>
          <div className="contact-panel">
            <div>
              <div className="eyebrow"><span className="status-dot"/> OPEN TO OPPORTUNITIES</div>
              <h2>Looking for a dedicated<br/><span>Computer Engineer?</span></h2>
              <p>I am actively looking for software engineering and development roles where I can contribute, grow, and build impactful applications.</p>
            </div>
            <div className="contact-links">
              <button onClick={copyEmail} className="contact-link">
                <span><Mail/> {copied ? 'Email copied to clipboard!' : 'fatimazahran2003@gmail.com'}</span>
                <ArrowUpRight/>
              </button>
              <a className="contact-link" href="https://www.linkedin.com/in/fatima-zahran-2aa6b5335/" target="_blank" rel="noreferrer">
                <span><Linkedin/> LinkedIn profile</span>
                <ArrowUpRight/>
              </a>
              <a className="contact-link" href="https://github.com/FatimaZahran2003" target="_blank" rel="noreferrer">
                <span><Github/> GitHub profile</span>
                <ArrowUpRight/>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer section-wrap">
        <a className="brand" href="#home"><span className="brand-mark">F<span>.</span></span><span>FATIMA ZAHRAN</span></a>
        <span>Designed with intention · © 2026</span>
        <a href="#home" className="back-top">Back to top ↑</a>
      </footer>

      {activeProject && (
        <div className="modal-backdrop" role="presentation" onClick={() => setActiveProject(null)}>
          <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setActiveProject(null)} aria-label="Close project details"><X/></button>
            <div className={`gallery-main ${activeProject.theme}`}>
              <img src={activeProject.images[activeImage]} alt={`${activeProject.name} preview`} onError={(e) => { e.target.style.display = 'none'; }} />
              <span className="gallery-count">{String(activeImage + 1).padStart(2,'0')} / 04</span>
            </div>
            <div className="gallery-thumbs">
              {activeProject.images.map((src, index) => (
                <button className={index === activeImage ? 'thumb active' : 'thumb'} onClick={() => setActiveImage(index)} key={index} aria-label={`Show image ${index + 1}`}>
                  <img src={src} alt="" onError={(e) => { e.target.style.display = 'none'; }} />
                </button>
              ))}
            </div>
            <div className="modal-content">
              <div className="project-type">{activeProject.type}</div>
              <h2 id="modal-title">{activeProject.name}</h2>
              <p className="modal-overview">{activeProject.overview}</p>
              <h3>Key features</h3>
              <ul>{activeProject.features.map(feature => <li key={feature}>{feature}</li>)}</ul>
              <h3>Technology stack</h3>
              <div className="tag-list">{activeProject.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              <div className="role-note">
                <b>Project context</b>
                <p>{activeProject.role}</p>
                <small>{activeProject.note}</small>
              </div>
              <button className="button button-primary modal-done" onClick={() => setActiveProject(null)}>Back to portfolio <ArrowRight size={16}/></button>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;