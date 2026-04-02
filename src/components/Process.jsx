const STEPS = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'Deep-dive into your current workflow, identify bottlenecks, map data flows, and define success metrics.',
  },
  {
    num: '02',
    title: 'Architecture',
    desc: 'Design the system blueprint — platform selection, integration map, error handling strategy, and scalability plan.',
  },
  {
    num: '03',
    title: 'Build & Test',
    desc: "Develop the automation with real data testing, edge case handling, and iterative refinement until it's bulletproof.",
  },
  {
    num: '04',
    title: 'Deploy & Support',
    desc: 'Live deployment with documentation, training, monitoring setup, and ongoing support to keep everything running.',
  },
]

export function Process() {
  return (
    <section className="section">
      <p className="section-label reveal">// How I Work</p>
      <h2 className="section-title reveal">My Process</h2>
      <p className="section-sub reveal">Clean, repeatable, and always client-first. Every project follows the same proven framework.</p>

      <div className="process-timeline">
        {STEPS.map((s) => (
          <div className="process-step reveal" key={s.num}>
            <div className="step-num">{s.num}</div>
            <div className="step-dot" />
            <div className="step-title">{s.title}</div>
            <div className="step-desc">{s.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

