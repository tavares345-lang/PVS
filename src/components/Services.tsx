import React from 'react';
import { Plane, Building, Heart, Shield, Clock, Compass } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Transfer de Aeroporto',
      subtitle: 'Aeroporto Internacional de Confins (CNF)',
      icon: Plane,
      description: 'Receptivo de alto padrão com acompanhamento em tempo real de voos. Aguardamos no desembarque com placa de identificação digital e carregamos sua bagagem até o veículo.',
      bullets: [
        'Rastreamento ativo de voo (sem taxa por atraso)',
        'Receptivo personalizado no saguão de desembarque',
        'Auxílio completo com malas e bagagem pesada',
        'Veículo pré-climatizado e pronto para saída imediata'
      ]
    },
    {
      title: 'Viagens & Suporte Corporate',
      subtitle: 'Deslocamentos Intermunicipais e Interestaduais',
      icon: Building,
      description: 'Estrutura premium para deslocamentos rodoviários rápidos ou viagens executivas para fábricas, fazendas ou reuniões governamentais dentro e fora de Minas Gerais.',
      bullets: [
        'Motoristas experientes em rodovias estaduais',
        'Suporte a agendas complexas e reuniões em sequência',
        'Água mineral, carregador e Wi-Fi de alta velocidade',
        'Disponibilidade para viagens de longa distância'
      ]
    },
    {
      title: 'Eventos Executivos & Casamentos',
      subtitle: 'Logística Completa para Grandes Comemorações',
      icon: Heart,
      description: 'Coordenamos o transporte de noivas, padrinhos, convidados VIP, comitivas de convenções internacionais e palestrantes com sincronia cirúrgica e maestria profissional.',
      bullets: [
        'Carro da noiva clássico revestido e polido',
        'Coleta coordenada de convidados ou palestrantes',
        'Padrão rigoroso de vestimenta social (terno completo)',
        'Veículos amplos e confortáveis para deslocamento de delegações'
      ]
    },
    {
      title: 'Disponibilidade e Diárias (Hour)',
      subtitle: 'Carro e Motorista Dedicados por Período',
      icon: Clock,
      description: 'Tenha total liberdade e comodidade com um motorista executivo bilíngue à sua inteira disposição por horas ou diárias inteiras para cumprir seus compromissos locais em BH.',
      bullets: [
        'Total flexibilidade de trajetos em Belo Horizonte',
        'Esperas prolongadas sem alteração de valor fixado',
        'Atendimento de conselhos de diretores e roadshows',
        'Tarifas competitivas com quilometragem livre'
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-[#0a0a0c] border-y border-white/5 relative">
      {/* Visual neon effects */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#E5C158]/3 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gray-500/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Sections Header with Subhead */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#E5C158] font-sans font-black text-xs uppercase tracking-[0.25em] bg-[#E5C158]/5 border border-[#E5C158]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            NOSSAS SOLUÇÕES
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-black text-white tracking-tight uppercase leading-tight">
            NOSSOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE082] via-[#E5C158] to-[#B57C1E]">SERVIÇOS EXECUTIVE</span>
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed mt-4">
            Desenvolvemos soluções personalizadas que satisfazem plenamente os mais elevados padrões de transporte executivo. Pontualidade impecável, tranquilidade absoluta e conforto superior em todos os sentidos.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-black/50 border border-white/5 hover:border-[#E5C158]/30 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(229,193,88,0.06)] flex flex-col justify-between"
            >
              <div>
                {/* Icons Header & Card Meta Title */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-4 bg-[#E5C158]/5 rounded-xl border border-[#E5C158]/15 group-hover:bg-[#E5C158] group-hover:text-black transition-all duration-500 text-[#E5C158]">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] text-gray-500 font-sans font-bold uppercase tracking-widest bg-white/2 px-3 py-1 rounded-full group-hover:text-[#E5C158] group-hover:bg-[#E5C158]/5 transition-colors">
                    Serviço Premium
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-sans font-black text-white uppercase group-hover:text-[#E5C158] transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-[#E5C158] font-bold uppercase tracking-wider font-sans mt-1">
                  {service.subtitle}
                </p>

                <p className="text-gray-400 font-sans text-sm leading-relaxed mt-4">
                  {service.description}
                </p>

                {/* Sub-Bullets List */}
                <ul className="mt-6 space-y-2.5 border-t border-white/5 pt-6">
                  {service.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-300 font-sans">
                      <span className="text-[#E5C158] mt-0.5 font-bold">✓</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Individual Quote Request shortcut */}
              <div className="mt-8 pt-4 border-t border-white/5 flex justify-end">
                <a
                  href={`https://wa.me/5531998699742?text=Ol%C3%A1%21+Gostaria+de+um+or%C3%A7amento+espec%C3%ADfico+para+o+servi%C3%A7o+de%3A+${encodeURIComponent(service.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs uppercase tracking-wider text-white group-hover:text-[#E5C158] font-sans font-black flex items-center gap-1.5 hover:underline"
                >
                  Orçar este serviço <span className="text-[#E5C158]">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Billing Notice banner */}
        <div className="mt-16 bg-gradient-to-r from-black via-[#0d0d10] to-black border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 hover:border-[#E5C158]/25 transition-all duration-300">
          <div className="flex gap-4 items-center flex-col md:flex-row text-center md:text-left">
            <div className="p-4 bg-white/5 rounded-full text-[#E5C158]">
              <Compass className="w-6 h-6 animate-spin-slow" />
            </div>
            <div>
              <h4 className="text-white font-sans font-black uppercase text-base tracking-wide">
                Faturamento Mensal para Empresas (Pessoa Jurídica)
              </h4>
              <p className="text-gray-400 font-sans text-sm mt-1 max-w-xl">
                Facilite a rotina financeira da sua empresa. Atendemos com faturamento mensal fechado, emissão de nota fiscal eletrônica corporativa (NFe) e relatórios detalhados de utilização.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/5531998699742?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+a+modalidade+de+Faturamento+Mensal+para+minha+Empresa+PJ."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto bg-white/5 border border-white/10 text-white hover:border-[#E5C158] hover:text-[#E5C158] font-sans font-bold text-xs uppercase tracking-widest py-3.5 px-6 rounded-xl transition-all duration-300 text-center flex-shrink-0"
          >
            Cadastrar PJ / Contato
          </a>
        </div>

      </div>
    </section>
  );
}
