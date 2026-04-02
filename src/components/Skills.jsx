const SKILLS = [
  {
    accent: '#00ffc8',
    icon: '🐍',
    name: 'Python Development',
    desc: 'Creating Python-powered automation, data pipelines, and APIs for reliable, high-performance workflows.',
    tags: ['Python', 'FastAPI', 'Flask', 'Pandas', 'AsyncIO', 'Requests', 'Redis'],
  },
  {
    accent: '#6c2bd9',
    icon: '🤖',
    name: 'Integration & Agents',
    desc: 'Embedding LLMs, AI agents, and intelligent logic directly into business workflows. Not just chatbots — real, decision-making automation.',
    tags: ['OpenAI / GPT-4', 'Agents', 'Prompt Engineering', 'Retell', 'Voice', 'Chatbots', 'Claude API', 'Google AI Studio'],
  },
  {
    accent: '#ff6b35',
    icon: '📊',
    name: 'Data Science & Analytics',
    desc: 'Turning raw data into actionable insights, predictive models, and data-driven solutions that help businesses make smarter decisions.',
    tags: ['Pandas', 'SQL', 'Jupyter', 'Tableau', 'Predictive Modeling', 'Data Cleaning', 'Data Visualization'],
  },
  {
    accent: '#ffde59',
    icon: '🌐',
    name: 'Full-Stack Web Development',
    desc: 'Building responsive, dynamic web applications with modern technologies, seamless APIs, and scalable backend systems.',
    tags: ['React', 'Node.js', 'MongoDB', 'Git', 'JavaScript', 'GitHub,'],
  },
  {
    accent: '#6c2bd9',
    icon: '🗄️',
    name: 'Database Design',
    desc: 'Designing efficient, scalable, and secure databases for web apps, data pipelines, and backend systems.',
    tags: ['PostgreSQL', 'MongoDB', 'MySQL', 'Database optimization', 'Data migrations', 'schema design'],
  },
  {
    accent: '#ffde59',
    icon: '🧠',
    name: 'Deep Learning',
    desc: 'Building advanced AI models for computer vision, NLP, and predictive analytics using state-of-the-art frameworks.',
    tags: ['TensorFlow', 'PyTorch', 'Keras', 'OpenCV', 'Transformers', 'NumPy', 'GPU-accelerated training (CUDA)'],
  },
  {
    accent: '#00ffc8',
    icon: '🔗',
    name: 'API & Platform Integration',
    desc: 'Connecting any platform to any platform. OAuth flows, REST and GraphQL APIs, webhook architectures, and multi-platform data pipelines.',
    tags: ['REST APIs', 'GraphQL', 'OAuth 2.0', 'JSON / XML', 'Postman', 'API Documentation', 'Custom Integrations'],
  },
  {
    accent: '#6c2bd9',
    icon: '📊',
    name: 'Outbound Lead Generation',
    desc: 'Data enrichment, personalized outreach at scale, multi-touch sequences, and intelligent lead scoring pipelines that convert.',
    tags: ['Clay', 'LinkedIn Scraping', 'Lead Enrichment', 'Cold Email', 'Instantly', 'Smartlead', 'Personalization'],
  },
  {
    accent: '#ffde59',
    icon: '🧠',
    name: 'Cloud & Deployment',
    desc: 'Deploying, scaling, and managing applications with cloud services, containerization, and automated pipelines for reliable performance.',
    tags: ['AWS', 'Docker & Docker Compose', 'CI/CD (GitHub Actions)', 'Kubernetes', 'Serverless deployment', 'Monitoring & logging'],
  },
]

export function Skills() {
  return (
    <section className="section" id="skills">
      <p className="section-label reveal">// What I Master</p>
      <h2 className="section-title reveal">Full Stack of Skills</h2>
      <p className="section-sub reveal">
        I combine AI engineering, software development, and data science to build reliable products and intelligent workflows.
      </p>

      <div className="skills-categories">
        {SKILLS.map((s) => (
          <div className="skill-cat reveal" style={{ '--accent-cat': s.accent }} key={s.name}>
            <span className="skill-cat-icon">{s.icon}</span>
            <div className="skill-cat-name">{s.name}</div>
            <div className="skill-cat-desc">{s.desc}</div>
            <div className="skill-tags">
              {s.tags.map((t) => (
                <span className="skill-tag" key={`${s.name}-${t}`}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

