const INDUSTRIES = [
  { icon: '🛍️', label: 'Finance & Fintech' },
  { icon: '🏥', label: 'Healthcare & Telemedicine' },
  { icon: '🏠', label: 'Real Estate' },
  { icon: '🏗️', label: 'Facilities Management' },
  { icon: '🧪', label: 'Lab & Scientific Supply' },
  { icon: '💈', label: 'E-commerce & Retail' },
  { icon: '🏨', label: 'Logistics & Supply Chain' },
  { icon: '📈', label: 'SaaS & Tech' },
  { icon: '🎓', label: 'Education' },
  { icon: '💼', label: 'Professional Services' },
  { icon: '🚀', label: 'Startups' },
  { icon: '🌍', label: 'Agricultural Cooperatives' },
]

export function Industries() {
  return (
    <section className="section">
      <p className="section-label reveal">// Who I&apos;ve Worked With</p>
      <h2 className="section-title reveal">Industries Served</h2>
      <p className="section-sub reveal">
        I&apos;ve delivered automation across wildly different industries. The tools change. The approach stays the same: understand the business, then engineer the solution.
      </p>

      <div className="industries-wrap reveal">
        {INDUSTRIES.map((i) => (
          <div className="industry-chip" key={i.label}>
            <span className="industry-chip-icon">{i.icon}</span> {i.label}
          </div>
        ))}
      </div>
    </section>
  )
}

