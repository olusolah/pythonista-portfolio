export function NavBar() {
  return (
    <nav>
      <div className="nav-logo">TOJ</div>
      <ul className="nav-links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="nav-badge">● Available for Projects</div>
    </nav>
  )
}

