import { useEffect, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const links = [
    { name: "About", href: "about" },
    { name: "Skills", href: "skills" },
    { name: "Experience", href: "experience" },
    { name: "Projects", href: "projects" },
    { name: "Resume", href: "resume" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const onScroll = () => {
      let current = "";
      links.forEach((l) => {
        const el = document.getElementById(l.href);
        if (!el) return;
        const r = el.getBoundingClientRect();
        if (r.top <= 120 && r.bottom >= 120) current = l.href;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 bg-gray-950/90 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-bold text-lg text-white">Bhavnesh</span>

        {/* Desktop */}
        <div className="hidden md:flex space-x-6 text-sm">
          {links.map((l) => (
            <a
              key={l.name}
              href={`#${l.href}`}
              className={
                active === l.href
                  ? "text-white font-medium"
                  : "text-gray-400 hover:text-white"
              }
            >
              {l.name}
            </a>
          ))}
        </div>

        {/* Mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-300"
        >
          ☰
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-gray-950 border-t border-gray-800">
          <div className="px-6 py-4 space-y-4">
            {links.map((l) => (
              <a
                key={l.name}
                href={`#${l.href}`}
                onClick={() => setOpen(false)}
                className={
                  active === l.href
                    ? "block text-white font-medium"
                    : "block text-gray-400 hover:text-white"
                }
              >
                {l.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
