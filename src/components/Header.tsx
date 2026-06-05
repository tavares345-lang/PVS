import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, Phone, Instagram } from 'lucide-react';

interface HeaderProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Header({ onScrollTo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Início', id: 'home' },
    { label: 'Sobre Nós', id: 'about' },
    { label: 'Serviços', id: 'services' },
    { label: 'Frota Premium', id: 'fleet' },
    { label: 'Simulador', id: 'simulator' },
  ];

  const handleNavClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollTo(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur-md border-b border-[#E5C158]/20 shadow-lg py-3'
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* LOGO */}
        <button onClick={() => handleNavClick('home')} className="cursor-pointer focus:outline-none">
          <Logo className="h-12 md:h-14" />
        </button>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-gray-300 hover:text-[#E5C158] font-sans text-sm font-medium tracking-wide transition-colors cursor-pointer focus:outline-none"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CALL TO ACTION BUTTON & SOCIALS */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://www.instagram.com/pvstransporte.executivo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#E5C158] p-2 transition-colors duration-200"
            title="Siga-nos no Instagram"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://wa.me/5531998699742?text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+para+transporte+executivo."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-[#E5C158] to-[#C49E37] text-black font-sans font-bold text-xs uppercase tracking-wider py-2.5 px-5 rounded-full shadow-[0_4px_20px_rgba(229,193,88,0.25)] hover:shadow-[0_4px_25px_rgba(229,193,88,0.4)] transition-all duration-300 hover:scale-[1.03]"
          >
            <Phone className="w-4 h-4 fill-black" />
            WhatsApp
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden flex items-center gap-3">
          <a
            href="https://www.instagram.com/pvstransporte.executivo/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-[#E5C158] p-1.5"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-300 hover:text-[#E5C158] p-1 cursor-pointer focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/98 border-b border-[#E5C158]/20 backdrop-blur-xl animate-fade-in py-6 px-6 shadow-xl flex flex-col gap-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="text-left text-gray-300 hover:text-[#E5C158] font-sans text-base font-medium py-1.5 border-b border-gray-900/40"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/5531998699742?text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+para+transporte+executivo."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#E5C158] to-[#C49E37] text-black font-sans font-bold text-sm uppercase tracking-wider py-3 rounded-xl shadow-lg mt-2"
          >
            <Phone className="w-4 h-4 fill-black" />
            Solicitar Orçamento
          </a>
        </div>
      )}
    </header>
  );
}
