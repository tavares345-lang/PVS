import React from 'react';
import { motion } from 'motion/react';
import { Shield, Sparkles, MapPin, Clock } from 'lucide-react';

import heroCarImage from '../assets/images/hero_executive_car_1780451793418.png';

interface HeroProps {
  onScrollTo: (sectionId: string) => void;
}

export default function Hero({ onScrollTo }: HeroProps) {
  const stats = [
    { label: 'Viagens Realizadas', value: '+10.000', icon: Sparkles },
    { label: 'Aeroporto Atendido', value: 'Confins (CNF)', icon: MapPin },
    { label: 'Atendimento Global', value: '24 horas', icon: Clock },
    { label: 'Segurança Total', value: '100% blindada', icon: Shield, note: 'Rastreamento 24h' },
  ];

  return (
    <section id="home" className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center bg-black overflow-hidden pt-24">
      {/* Dynamic Background Image Layer with Zoom-In */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.15, opacity: 0.2 }}
          animate={{ scale: 1, opacity: 0.55 }}
          transition={{ duration: 2, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src={heroCarImage}
            alt="PVS Transporte Executivo Mercedes"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Luxury Vignette and Color Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/50" />
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#E5C158]/5 blur-[150px] rounded-full pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full py-12 flex flex-col justify-between min-h-[75vh]">
        {/* Main Banner Message */}
        <div className="max-w-3xl my-auto">
          {/* Subtle Golden Subheader Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#E5C158]/30 backdrop-blur-md mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#E5C158] animate-pulse" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#E5C158] font-bold font-sans">
              Serviço Premium BH e Região Metropolitana
            </span>
          </motion.div>

          {/* Premium High-Contrast Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-sans font-black text-white tracking-tight uppercase leading-[0.95]"
          >
            PVS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE082] via-[#E5C158] to-[#B57C1E]">TRANSPORTE</span> <br />
            EXECUTIVO
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-300 font-sans text-base md:text-xl font-normal leading-relaxed mt-6 max-w-2xl"
          >
            Vivencie a máxima sofisticação, discrição e pontualidade rigorosa.
            Transfers dedicados para o Aeroporto de Confins, viagens
            intermunicipais e suporte corporativo com faturamento mensal.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mt-10"
          >
            <a
              href="https://wa.me/5531987581645?text=Ol%C3%A1%21+Gostaria+de+solicitar+um+or%C3%A7amento+para+transporte+executivo+premium."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#E5C158] to-[#C49E37] text-black font-sans font-black text-xs uppercase tracking-widest py-4 px-8 rounded-xl shadow-[0_8px_30px_rgba(229,193,88,0.3)] hover:shadow-[0_8px_40px_rgba(229,193,88,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              Chamar no WhatsApp
            </a>
            <button
              onClick={() => onScrollTo('simulator')}
              className="flex items-center justify-center gap-2 border border-white/10 hover:border-[#E5C158]/50 bg-white/5 hover:bg-white/10 text-white font-sans font-extrabold text-xs uppercase tracking-widest py-4 px-8 rounded-xl backdrop-blur-md cursor-pointer transition-all duration-300"
            >
              Simular Orçamento
            </button>
          </motion.div>
        </div>

        {/* Stats Strip overlay on bottom */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 border-t border-white/5 pt-10 mt-12 bg-black/40 backdrop-blur-sm p-6 rounded-2xl"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex gap-4 items-center">
              <div className="p-3 bg-[#E5C158]/10 rounded-xl border border-[#E5C158]/20 flex-shrink-0">
                <stat.icon className="w-5 h-5 text-[#E5C158]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl md:text-2xl font-sans font-black text-white tracking-tight leading-none">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400 mt-1 tracking-wide uppercase font-semibold font-sans">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
