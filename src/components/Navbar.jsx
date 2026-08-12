import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const nav = [
    ["/", "Home"],
    ["/mbbs-in-bulgaria", "MBBS in Bulgaria"],
    ["/countries", "Destinations"],
    ["/courses", "Courses"],
    ["/universities", "Universities"],
    ["/services", "Services"],
    ["/about", "About Us"],
    ["/contact", "Contact"],
  ];

  return (
    <header className="navbar">
      <div className="container nav-inner">
        <Link
          to="/"
          className="logo"
          aria-label="Oasis Educares Home"
          onClick={() => setOpen(false)}
        >
          <img
            className="brand-logo"
            src="/navbarlogo.png"
            alt="Oasis Educares"
          />
        </Link>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            type="button"
            className="menu-btn"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X size={21} /> : <Menu size={21} />}
          </button>
        </div>

        <nav className={open ? "nav-links open" : "nav-links"}>
          {nav.map(([to, label]) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              {label}
            </NavLink>
          ))}

          <ThemeToggle />

          <Link
            to="/apply"
            className="nav-cta"
            onClick={() => setOpen(false)}
          >
            Apply Now
          </Link>
        </nav>
      </div>
    </header>
  );
}
