import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CalendarRange, MapPin, BadgeCheck, Compass } from 'lucide-react';

export default function About() {
  const differentials = [
    {
      title: 'Pontualidade Rigorosa',
      desc: 'Monitoramos todos os voos de nossos passageiros em tempo real. Não se preocupe com atrasos ou antecipações – o seu motorista estará pronto esperando antes mesmo do seu desembarque.',
      icon: BadgeCheck,
    },
    {
      title: 'Segurança & Discrição Absolutas',
      desc: 'Seus itinerários permanecem estritamente confidenciais. Nossa equipe é altamente treinada em direção defensiva e atendimento anti-sequestro para garantir uma viagem blindada de preocupações.',
      icon: ShieldCheck,
    },
    {
      title: 'Conforto e Atendimento VIP',
      desc: 'Veículos higienizados equipados com ar-condicionado de dupla zona, água mineral fresca, balas importadas, carregadores de smartphone premium e conexão Wi-Fi de alta velocidade gratuita.',
      icon: Compass,
    },
  ];

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-black to-[#0a0a0c] relative overflow-hidden">
      {/* Background radial effects */}
      <div className="absolute right-0 bottom-0 w-[400px] h-[400px] bg-[#E5C158]/3 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-0 top-1/3 w-[300px] h-[300px] bg-white/2 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: Institutional Text */}
          <div className="lg:col-span-7">
            <span className="text-[#E5C158] font-sans font-bold text-xs uppercase tracking-[0.25em] block mb-3">
              Quem Somos
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-black text-white tracking-tight leading-none uppercase">
              PVS TRANSPORTE EXECUTIVO <br />
              <span className="text-gray-400 font-medium text-2xl md:text-3.5xl lowercase italic block mt-2">
                sua melhor rota com classe e segurança
              </span>
            </h2>

            <div className="h-[2px] w-24 bg-gradient-to-r from-[#E5C158] to-transparent my-6" />

            {/* The Specific description requested by user */}
            <p className="text-gray-300 font-sans text-base md:text-lg leading-relaxed mb-6 font-normal">
              A <strong>PVS Transporte Executivo</strong> é uma empresa de transporte premium localizada na região metropolitana de Belo Horizonte, MG. Eles são especializados em viagens executivas, transfers de aeroporto e eventos.
            </p>

            <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed mb-10">
              Oferecemos um portfólio completo de transporte terrestre sob medida para diretores, executivos corporativos nacionais e internacionais, comitivas oficiais, casamentos luxuosos e transporte de alta privacidade. Atendemos com maestria toda a capital mineira, hotéis credenciados, condomínios da região da Grande BH, e o Aeroporto de Confins (Aeroporto Internacional Tancredo Neves - CNF).
            </p>

            {/* Core Differentials inside the About block */}
            <div className="space-y-6">
              {differentials.map((diff, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/3 border border-transparent hover:border-white/5 transition-all duration-300">
                  <div className="p-3 bg-[#E5C158]/5 border border-[#E5C158]/20 rounded-xl h-12 w-12 flex items-center justify-center flex-shrink-0">
                    <diff.icon className="w-5 h-5 text-[#E5C158]" />
                  </div>
                  <div>
                    <h4 className="text-white font-sans font-extrabold text-sm uppercase tracking-wide">
                      {diff.title}
                    </h4>
                    <p className="text-gray-400 font-sans text-sm leading-relaxed mt-1">
                      {diff.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: High Contrast Photo & Video Look */}
          <div className="lg:col-span-5 relative">
            {/* The Gold Frame */}
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2 border-[#E5C158]" />
            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2 border-[#E5C158]" />
            
            {/* Floating Info card with BH/Confins reference */}
            <div className="absolute -top-8 -right-4 md:right-8 bg-black/90 backdrop-blur-md border border-[#E5C158]/30 px-5 py-4 rounded-xl shadow-2xl z-20 max-w-[200px]">
              <span className="text-[#E5C158] font-black text-2xl font-sans tracking-tight">24h</span>
              <p className="text-xs text-gray-400 font-sans mt-1 leading-normal">
                Disponibilidade imediata para agendamento e suporte corporativo.
              </p>
            </div>

            <div className="absolute -bottom-8 -left-4 bg-[#E5C158] text-black px-5 py-4 rounded-xl shadow-2xl z-20 max-w-[220px]">
              <p className="text-[10px] font-sans font-bold tracking-[0.15em] uppercase text-black/85 leading-none">
                Localização
              </p>
              <h5 className="font-sans font-black text-sm tracking-tight text-black mt-1">
                Belo Horizonte - MG
              </h5>
              <p className="text-xs text-black/80 font-sans leading-relaxed mt-1">
                Atendimento em toda a Grande BH e aeroportos Conexão Confins.
              </p>
            </div>

            {/* Generated driver opening the door image */}
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl bg-[#121214] aspect-video sm:aspect-square md:aspect-auto">
              <img
                src="/src/assets/images/chauffeur_opening_door_1780451808540.png"
                alt="Motorista Executivo PVS abrindo a porta"
                className="w-full h-full object-cover grayscale-15 hover:grayscale-0 transition-all duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
