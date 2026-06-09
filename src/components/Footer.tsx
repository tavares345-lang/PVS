import React from 'react';
import Logo from './Logo';
import { Phone, Instagram, Mail, MapPin, ShieldAlert, Heart, CalendarClock } from 'lucide-react';

interface FooterProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Footer({ onScrollTo }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (e: React.MouseEvent, sectionId: string) => {
    e.preventDefault();
    onScrollTo(sectionId);
  };

  return (
    <footer className="bg-black text-[#A1A1AA] border-t border-white/5 font-sans">
      {/* Upper footer columns */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-12 gap-12">
        
        {/* Brand identity column */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <Logo className="h-14" />
          
          <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            A <strong>PVS Transporte Executivo</strong> é uma empresa de transporte premium localizada na região metropolitana de Belo Horizonte, MG. Especialistas em viagens corporativas, eventos exclusivos e transfers de aeroporto com discrição, pontualidade e máximo rigor de classe.
          </p>

          {/* Socials shortcut links */}
          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/pvstransporte.executivo/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#E5C158] hover:text-black hover:border-[#E5C158] text-white transition-all duration-300"
              title="Siga no Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/5531987581645?text=Ol%C3%A1%21+Gostaria+de+realizar+um+or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-[#E5C158] hover:text-black hover:border-[#E5C158] text-white transition-all duration-300"
              title="Solicite no WhatsApp"
            >
              <Phone className="w-5 h-5 fill-white hover:fill-black" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="md:col-span-3">
          <h4 className="text-white font-sans font-black text-xs uppercase tracking-widest mb-6 border-l-2 border-[#E5C158] pl-3">
            Explorar
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href="#home"
                onClick={(e) => handleLinkClick(e, 'home')}
                className="hover:text-[#E5C158] text-gray-300 transition-colors"
              >
                Início (Apresentação)
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleLinkClick(e, 'about')}
                className="hover:text-[#E5C158] text-gray-300 transition-colors"
              >
                Quem Somos
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleLinkClick(e, 'services')}
                className="hover:text-[#E5C158] text-gray-300 transition-colors"
              >
                Nossos Serviços
              </a>
            </li>
            <li>
              <a
                href="#fleet"
                onClick={(e) => handleLinkClick(e, 'fleet')}
                className="hover:text-[#E5C158] text-gray-300 transition-colors"
              >
                Veículos / Frota VIP
              </a>
            </li>
            <li>
              <a
                href="#simulator"
                onClick={(e) => handleLinkClick(e, 'simulator')}
                className="hover:text-[#E5C158] text-gray-300 transition-colors"
              >
                Simulador de Tarifas
              </a>
            </li>
          </ul>
        </div>

        {/* Support and contact parameters Column */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <h4 className="text-white font-sans font-black text-xs uppercase tracking-widest border-l-2 border-[#E5C158] pl-3">
            Atendimento & Contato
          </h4>
          
          <div className="space-y-4 text-sm text-gray-300">
            {/* Phone */}
            <div className="flex items-start gap-3">
              <Phone className="w-4.5 h-4.5 text-[#E5C158] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-extrabold tracking-wider leading-none">
                  Ligue ou WhatsApp
                </p>
                <a
                  href="tel:+5531987581645"
                  className="hover:text-[#E5C158] font-bold text-white transition-colors"
                >
                  +55 (31) 98758-1645
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3">
              <Mail className="w-4.5 h-4.5 text-[#E5C158] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-extrabold tracking-wider leading-none">
                  Fale com a Diretoria
                </p>
                <a
                  href="mailto:contato@pvstransportes.com"
                  className="hover:text-[#E5C158] text-white transition-colors"
                >
                  contato@pvstransportes.com
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-3">
              <MapPin className="w-4.5 h-4.5 text-[#E5C158] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-extrabold tracking-wider leading-none">
                  Sede Administrativa
                </p>
                <p className="text-white leading-relaxed">
                  Belo Horizonte, Região Metropolitana, MG - Brasil
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="flex items-start gap-3">
              <CalendarClock className="w-4.5 h-4.5 text-[#E5C158] shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] uppercase text-gray-500 font-extrabold tracking-wider leading-none">
                  Disponibilidade Operacional
                </p>
                <p className="text-white font-bold">
                  24 horas por dia / 7 dias por semana
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Under footer legal signature bar */}
      <div className="border-t border-white/5 bg-neutral-950 py-8 text-xs text-gray-500">
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>
            &copy; {currentYear} <strong>PVS TRANSPORTE EXECUTIVO LTDA</strong>. Todos os direitos reservados. CNPJ sob consulta.
          </p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-[#E5C158]" />
              <span>contato@pvstransportes.com</span>
            </span>
            <span className="flex items-center gap-1">
              <ShieldAlert className="w-3.5 h-3.5 text-[#E5C158]" />
              <span>Segurança Cadastrada ANTT / DER-MG</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
