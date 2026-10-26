import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [activeItem, setActiveItem] = useState<string>('Home');
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const lastScrollY = useRef(0);

  const navLinks = [
    { label: 'Home', href: '#hero', sectionId: 'hero' },
    { label: 'Ecosystem', href: '#about', sectionId: 'about' },
    { label: 'Use Cases', href: '#use-cases', sectionId: 'use-cases' },
    { label: 'About', href: '#collaboration', sectionId: 'collaboration' },
  ];

  useEffect(() => {
    let frameId = 0;

    const handleScroll = () => {
      if (frameId) return;

      frameId = window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const scrollPosition = currentScrollY + window.innerHeight * 0.35;

        for (let i = navLinks.length - 1; i >= 0; i--) {
          const el = document.getElementById(navLinks[i].sectionId);
          if (el && scrollPosition >= el.offsetTop) {
            setActiveItem(navLinks[i].label);
            break;
          }
        }

        if (currentScrollY < 60) {
          setIsVisible(true);
        } else if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current) {
          setIsVisible(true);
        }

        lastScrollY.current = currentScrollY;
        frameId = 0;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault();
    setActiveItem(label);
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-5 sm:top-7 md:top-8 left-0 right-0 z-50 px-5 sm:px-8 md:px-12 lg:px-16 pointer-events-none transition-all duration-300 ease-in-out ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-24 opacity-0'
      }`}
    >
      {/* Transparent header row strictly matching reference screenshot image_9ee6b9a3.png */}
      <nav className="w-full flex items-center justify-between pointer-events-auto">
        {/* 1. IMDX Logo on the far left: Clean, elegant white typography */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero', 'Home')}
          aria-label="IMDX home"
          className="text-lg sm:text-xl font-medium tracking-tight text-white hover:text-[#E1E0CC] transition-colors select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]"
        >
          IMDX
        </a>

        {/* 2. Navigation links aligned horizontally on right + 3. Circular menu button */}
        <div className="flex items-center gap-4 sm:gap-7 md:gap-9">
          <ul className="flex items-center gap-3 sm:gap-6 md:gap-8 list-none m-0 p-0">
            {navLinks.map((item, index) => {
              const isActive = activeItem === item.label;
              const isHovered = hoveredIdx === index;
              return (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.label)}
                    onMouseEnter={() => setHoveredIdx(index)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    aria-current={isActive ? 'page' : undefined}
                    className="text-[11px] sm:text-[13px] md:text-sm font-medium tracking-normal transition-colors duration-200 cursor-pointer block select-none whitespace-nowrap py-1 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]"
                    style={{
                      color: isActive || isHovered ? '#FFFFFF' : 'rgba(255, 255, 255, 0.78)',
                    }}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Menu trigger */}
          <button
            onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMenuOpen}
            aria-controls="primary-navigation-menu"
            className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-black/40 hover:bg-black/60 border border-white/20 hover:border-white/40 backdrop-blur-sm flex items-center justify-center text-white transition-all duration-200 cursor-pointer shadow-md group shrink-0"
          >
            {isMenuOpen ? (
              <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:scale-105 transition-transform" />
            ) : (
              <Menu className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white group-hover:scale-105 transition-transform" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="primary-navigation-menu"
            className="absolute right-5 sm:right-8 md:right-12 lg:right-16 top-12 sm:top-14 md:top-16 w-56 rounded-2xl border border-white/10 bg-[#111111]/95 p-2 shadow-2xl backdrop-blur-xl"
          >
            <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-[0.18em] text-primary/70">
              Navigate IMDX
            </div>
            <ul className="m-0 list-none space-y-1 p-0">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.label)}
                    className="block rounded-xl px-3 py-2.5 text-sm text-gray-300 transition-colors hover:bg-white/[0.08] hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="border-t border-white/[0.08] pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setIsMenuOpen(false);
                    onContactClick();
                  }}
                  className="block w-full rounded-xl px-3 py-2.5 text-left text-sm text-primary transition-colors hover:bg-white/[0.08] hover:text-white"
                >
                  Contact IMDX
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};
