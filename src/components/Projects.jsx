const PROJECTS = {
  featured: {
    num: '01 / FEATURED PROJECT',
    title: 'LLM Support Agent (RAG + Ticket Triage)',
    desc: 'A support system built for multi-store teams. It classifies incoming tickets, retrieves relevant knowledge (RAG), generates consistent responses, syncs customer records, notifies via messaging, and logs analytics for continuous improvement.',
    stack: ['LLM (OpenAI)', 'RAG', 'Ticket Triage', 'CRM Sync', 'Messaging Alerts', 'Analytics Logging'],
    code: [
      { kw: 'on', fn: 'ticket.created', rest: '()' },
      { arrow: true, fn: 'rag.retrieve', arg: 'knowledge' },
      { arrow: true, fn: 'ai.classify', arg: 'intent' },
      { arrow: true, fn: 'llm.generate', arg: 'response' },
      { arrow: true, fn: 'crm.upsert', arg: 'customer' },
      { arrow: true, fn: 'notify.send', arg: 'reply' },
    ],
    footerNote: '// analytics + feedback loop',
  },
  cards: [
    {
      num: '02',
      title: 'Demand Forecasting & Reorder Recommendations',
      desc: 'A data-science inventory engine that forecasts stock needs and recommends reorders. It combines demand signals, seasonality, and sell-through trends to reduce stockouts, prevent overstocking, and keep catalogs accurate.',
      stack: ['Time-Series Forecasting', 'Prediko', 'Shopify Sync', 'Reorder Automation', 'Experiment Tracking'],
    },
    {
      num: '03',
      title: 'Voice Receptionist (Scheduling + Insights)',
      desc: 'A production voice assistant that answers calls, qualifies leads, books appointments, and summarizes conversations. Includes call analytics to improve intent handling, response quality, and operational routing.',
      stack: ['Voice', 'Retell', 'Twilio', 'Lead Qualification', 'Appointment Scheduling'],
    },
    {
      num: '04 / COMPLEX SYSTEM',
      span2: true,
      title: 'Telemedicine Intake & Patient Education',
      desc: 'A complete telemedicine workflow: AI avatar-led preliminary consults, automated intake, scheduling, and follow-ups. Includes AI video generation for personalized patient education, plus structured outputs for downstream clinical workflows.',
      stack: ['Avatars', 'Video (HeyGen)', 'OpenAI', 'WhatsApp API', 'Scheduling', 'Workflow Orchestration', 'Structured Data Logging'],
    },
    {
      num: '05',
      title: 'Prospecting Intelligence Pipeline (Enrichment + LLM Personalization)',
      desc: 'A data pipeline that extracts prospects, enriches entities, and generates personalized outreach content. Outputs are synced to your CRM/pipeline tools to improve conversion and reduce manual work.',
      stack: ['Clay', 'LLM Personalization', 'Entity Enrichment', 'GoHighLevel', 'Email Delivery'],
    },
    {
      num: '06',
      title: 'Work-Order Intelligence (Ops Orchestration + Reporting)',
      desc: 'An  operations suite that routes work orders, supports technician dispatch, generates client-ready reports, and keeps tracking systems in sync. Designed as software that’s maintainable, observable, and measurable.',
      stack: ['Ops Orchestration', 'Reporting', 'Work-Order Routing', 'Notion Tracking', 'Summarization'],
    },
  ],
}

export function Projects() {
  return (
    <section className="section" id="projects">
      <p className="section-label reveal">// Selected Work</p>
      <h2 className="section-title reveal">Projects</h2>
      <p className="section-sub reveal">A snapshot of the systems I&apos;ve built — across industries, platforms, and complexity levels.</p>

      <div className="projects-mosaic">
        <div className="project-card featured reveal">
          <div>
            <div className="proj-num">{PROJECTS.featured.num}</div>
            <h3 className="proj-title">{PROJECTS.featured.title}</h3>
            <p className="proj-desc">{PROJECTS.featured.desc}</p>
            <div className="proj-stack">
              {PROJECTS.featured.stack.map((p) => (
                <span className="stack-pill" key={`featured-${p}`}>
                  {p}
                </span>
              ))}
            </div>
          </div>

          <div className="proj-code-block">
            <div className="code-line">
              <span className="code-kw">{PROJECTS.featured.code[0].kw}</span>
              <span className="code-fn">{PROJECTS.featured.code[0].fn}</span>()
            </div>
            {PROJECTS.featured.code.slice(1).map((l) => (
              <div className="code-line" key={l.fn}>
                → <span className="code-fn">{l.fn}</span>(<span className="code-str">{l.arg}</span>)
              </div>
            ))}
            <br />
            <div className="code-line">
              <span className="code-ok">✓ workflow complete</span>
            </div>
            <div className="code-line" style={{ color: 'var(--muted)' }}>
              {PROJECTS.featured.footerNote}
            </div>
          </div>
        </div>

        {PROJECTS.cards.map((c) => (
          <div className={`project-card reveal${c.span2 ? ' span2' : ''}`} key={c.num}>
            <div className="proj-num">{c.num}</div>
            <h3 className="proj-title">{c.title}</h3>
            <p className="proj-desc">{c.desc}</p>
            <div className="proj-stack">
              {c.stack.map((p) => (
                <span className="stack-pill" key={`${c.num}-${p}`}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

