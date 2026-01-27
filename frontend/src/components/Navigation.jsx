import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { path: "/", label: "Home" },
    { path: "/projects", label: "Projects" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${isScrolled ? "bg-black/80 backdrop-blur border-b border-white/10" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link to="/" className="text-xl font-semibold tracking-widest text-white">
          <span className="text-pink-500">&lt;</span>
          PORTFOLIO
          <span className="text-pink-500">/&gt;</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-10">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-sm uppercase tracking-widest transition
                ${location.pathname === link.path ? "text-pink-500" : "text-gray-300 hover:text-white"}
              `}
            >
              {link.label}
              <span
                className={`absolute left-0 -bottom-1 h-[2px] bg-pink-500 transition-all
                  ${location.pathname === link.path ? "w-full" : "w-0 hover:w-full"}
                `}
              />
            </Link>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden fixed top-0 right-0 h-screen w-[70%] bg-black/95 backdrop-blur-xl
          transform transition-transform duration-300
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col items-center justify-center h-full gap-10">
          {links.map(link => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsMenuOpen(false)}
              className={`text-lg uppercase tracking-widest
                ${location.pathname === link.path ? "text-pink-500" : "text-gray-300"}
              `}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
