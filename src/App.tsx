import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Fleet from './components/Fleet';
import BookingSimulator from './components/BookingSimulator';
import Footer from './components/Footer';
import { VehicleCategory } from './types';
import { MessageSquare, HelpCircle, ChevronDown, Star, Milestone } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const [selectedVehicleCategory, setSelectedVehicleCategory] = useState<VehicleCategory>('executive_sedan');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const scrollAnchor = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleFleetCategorySelection = (category: VehicleCategory) => {
    setSelectedVehicleCategory(category);
    setTimeout(() => {
      scrollAnchor('simulator');
    }, 150);
  };

  const testimonials = [
    {
      name: 'Luana Silveira',
      role: 'Gerente Logística Sênior',
      company: 'Gerdau S.A.',
      text: 'Empresa excepcional! Utilizamos para atender nossa comitiva de diretores internacionais vindos da Alemanha. O motorista bilíngue se apresentou impecável e demonstrou pontualidade britânica no receptivo de Confins.',
      rating: 5,
    },
    {
      name: 'Dr. Renato Abreu',
      role: 'Diretor Clínico',
      company: 'MedGrupo BH',
      text: 'Faço viagens intermunicipais regulares partindo de Belo Horizonte para Congonhas e Conselheiro Lafaiete. A experiência de segurança é incomparável, os carros cheiram a limpeza absoluta e os motoristas são extremamente profissionais.',
      rating: 5,
    },
    {
      name: 'Carlos Vasconcellos',
      role: 'Diretor de Relações Corporativas',
      company: 'Fórum FIEMG',
      text: 'Atendimento VIP primoroso. Organizaram toda a logística dos palestrantes do nosso fórum executivo nacional de forma cirúrgica. A modalidade de faturamento corporativo para PJ facilitou enormemente nosso controle financeiro.',
      rating: 5,
    },
  ];

  const faqs = [
    {
      q: 'Como funciona o receptivo no Aeroporto de Confins?',
      a: 'Nossos motoristas realizam o monitoramento eletrônico do seu voo em tempo real. Assim que a aeronave pousa, o motorista se posiciona no saguão de desembarque principal segurando uma tabuleta digital com o seu nome ou logomarca da sua empresa, auxiliando imediatamente com todas as malas até o veículo pré-climatizado.',
    },
    {
      q: 'Se o meu voo atrasar, pagarei alguma taxa extra de espera?',
      a: 'Não. Nosso compromisso é com a tranquilidade da sua chegada. Como rastreamos ativamente os voos, se o seu pouso sofrer atrasos de qualquer período, o motorista se adaptará e estará pronto no horário efetivo do seu desembarque, sem qualquer cobrança extra de hora paralisada.',
    },
    {
      q: 'Como funciona a cobrança faturada mensal para empresas (PJ)?',
      a: 'Cadastramos empresas e geramos acordos com faturamento mensal. Consolidamos todas as corridas realizadas no período com demonstrativos descrevendo datas, passageiros, itinerários e horários de entrada/saída, emitindo uma única Nota Fiscal de Serviços eletrônica (NFSe) com prazo de pagamento estendido.',
    },
    {
      q: 'Os carros são higienizados e quais são os diferenciais de bordo?',
      a: 'Nossa frota passa por completo processo bactericida e higienização minuciosa antes de cada embarque. Fornecemos cortesia completa de água mineral gelada, balas selecionadas, adaptadores de tomada e carregadores rápidos multi-cabos para celular, além de rede Wi-Fi interna de banda larga gratuita.',
    },
    {
      q: 'Com quanta antecedência preciso realizar o meu agendamento?',
      a: 'Recomendamos que reservas de transfers ou diárias com motorista executivo sejam feitas com pelo menos 6 horas de antecedência. Em casos de comitivas especiais de eventos ou casamentos, sugerimos ao menos 48h de planejamento, contudo, dispomos de atendimento suporte 24h para chamadas emergenciais no WhatsApp.',
    }
  ];

  return (
    <div className="bg-black min-h-screen text-gray-100 flex flex-col justify-between overflow-x-hidden antialiased selection:bg-[#E5C158] selection:text-black">
      
      {/* 1. Header/Navbar */}
      <Header onScrollTo={scrollAnchor} />

      {/* 2. Hero Presentation section */}
      <Hero onScrollTo={scrollAnchor} />

      {/* 3. About Institutional section */}
      <About />

      {/* 4. Complete Services list */}
      <Services />

      {/* 5. Fleet selection and specifications */}
      <Fleet onSelectCategory={handleFleetCategorySelection} />

      {/* 6. Dynamic Booking Simulator panel */}
      <BookingSimulator
        selectedCategory={selectedVehicleCategory}
        onSetCategory={setSelectedVehicleCategory}
      />

      {/* 7. Corporate Testimonials segment */}
      <section className="py-24 bg-[#0a0a0c] border-b border-white/5 relative">
        <div className="absolute top-1/4 right-0 w-84 h-84 bg-[#E5C158]/2 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-[#E5C158] font-sans font-bold text-xs uppercase tracking-[0.2em] bg-[#E5C158]/5 border border-[#E5C158]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              RECONHECIMENTO DE PARCEIROS
            </span>
            <h2 className="text-3xl md:text-5xl font-sans font-black text-white tracking-tight uppercase">
              QUEM VIAJA CONOSCO <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE082] via-[#E5C158] to-[#B57C1E]">RECOMENDA</span>
            </h2>
            <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed mt-4">
              A satisfação dos nossos clientes e empresas parceiras é o reflexo da nossa dedicação absoluta à integridade, pontualidade rigorosa e atendimento humanizado.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((test, idx) => (
              <div
                key={idx}
                className="bg-black/60 border border-white/5 p-6 md:p-8 rounded-2xl flex flex-col justify-between hover:border-[#E5C158]/35 transition-all duration-300"
              >
                <div>
                  <div className="flex gap-1 mb-4 text-[#E5C158]">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4.5 h-4.5 fill-[#E5C158] stroke-none" />
                    ))}
                  </div>
                  <p className="text-gray-300 font-sans text-sm leading-relaxed italic">
                    "{test.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4 mt-8 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#E5C158] to-[#C49E37] flex items-center justify-center text-black font-sans font-black text-sm">
                    {test.name[0]}
                  </div>
                  <div>
                    <h4 className="text-white font-sans font-bold text-sm tracking-wide">
                      {test.name}
                    </h4>
                    <p className="text-xs text-gray-500 font-sans">
                      {test.role} • <strong className="text-[#E5C158]">{test.company}</strong>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Interactive FAQ Accordion block */}
      <section className="py-24 bg-[#0d0d10] relative">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#E5C158] font-sans font-bold text-xs uppercase tracking-[0.2em] bg-[#E5C158]/5 border border-[#E5C158]/10 px-4 py-1.5 rounded-full inline-block mb-3">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="text-2xl md:text-4xl font-sans font-black text-white tracking-tight uppercase">
              REMOVA SUAS DÚVIDAS E AGENDE
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-black/55 border border-white/5 rounded-2xl overflow-hidden transition-all duration-350"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left py-5 px-6 md:px-8 flex items-center justify-between gap-4 text-white hover:text-[#E5C158] font-sans font-bold text-sm md:text-base cursor-pointer focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#E5C158] transition-transform duration-350 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </button>
                  
                  {isOpen && (
                    <div className="px-6 md:px-8 pb-6 border-t border-white/2 pt-4">
                      <p className="text-gray-400 font-sans text-sm leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Prompt banner under FAQ to connect with direct call */}
          <div className="mt-12 text-center bg-black/40 border border-white/5 p-6 rounded-xl">
            <p className="text-sm text-gray-400">
              Ainda tem alguma dúvida específica para sua viagem?
            </p>
            <a
              href="https://wa.me/5531987581645?text=Ol%C3%A1%21+Gostaria+de+tirar+uma+d%C3%BAvida+sobre+o+servi%C3%A7o+de+transporte+executivo."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#E5C158] font-black uppercase tracking-wider font-sans mt-2.5 hover:underline"
            >
              Fale diretamente com nosso setor operacional no WhatsApp <span>→</span>
            </a>
          </div>

        </div>
      </section>

      {/* 9. Footer with address details, legal and social connections */}
      <Footer onScrollTo={scrollAnchor} />

    </div>
  );
}
