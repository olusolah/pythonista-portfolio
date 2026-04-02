export function StatsBar() {
  const stats = [
    { num: '50+', label: 'Projects Delivered' },
    { num: '5★ Rating', label: 'Trusted Service Provider' },
    { num: '$800–3K', label: 'Project Range' },
    { num: '15+', label: 'Platforms Mastered' },
    { num: '∞', label: 'Workflows Built' },
  ]

  return (
    <div className="section-full">
      <div className="stats-bar reveal">
        {stats.map((s) => (
          <div className="stat" key={`${s.num}-${s.label}`}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

