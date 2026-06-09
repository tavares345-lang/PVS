import React, { useState } from 'react';
import { Vehicle, VehicleCategory } from '../types';
import { Users, Briefcase, Check, Award, ArrowRight } from 'lucide-react';

import chauffeurImage from '../assets/images/chauffeur_opening_door_1780451808540.png';
import premiumSuvImage from '../assets/images/premium_suv_cross_1781014947078.png';

interface FleetProps {
  onSelectCategory: (category: VehicleCategory) => void;
}

export default function Fleet({ onSelectCategory }: FleetProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | VehicleCategory>('all');

  const fleet: Vehicle[] = [
    {
      id: 'executive_sedan',
      name: 'Sedã Executivo',
      className: 'Corporate Classic (Toyota Corolla / Ford Fusion ou similar)',
      passengers: 4,
      luggage: 3,
      description: 'Veículos executivos modernos, com alto grau de discrição e excelente isolamento acústico. Banco de couro, ar-condicionado independente e kit amenidades.',
      features: ['Ar-Condicionado Dual-Zone', 'Bancos em Couro Nobre', 'Kit Amenidades Premium', 'Água Mineral & Balas', 'Carregadores Multi-Cabos'],
      image: chauffeurImage
    },
    {
      id: 'premium_suv',
      name: 'SUV Premium 4x4',
      className: 'High Luxury Class (Toyota Corolla Cross / SW4 ou similar)',
      passengers: 4,
      luggage: 4,
      description: 'Veículo robusto, espaçoso e com posição de dirigir elevada. Ideal para viagens executivas em rodovias, estradas de terra ou passageiros com volume extra de baggage.',
      features: ['Tração 4x4 Ativa', 'Porta-Malas Gigante', 'Suspensão Amortecida VIP', 'Internet Wi-Fi integrada', 'Segurança Sobreelevada'],
      image: premiumSuvImage
    }
  ];

  const filteredFleet = activeFilter === 'all' 
    ? fleet 
    : fleet.filter(car => car.id === activeFilter);

  const filterButtons = [
    { label: 'Todos os Veículos', value: 'all' },
    { label: 'Sedãs Executivos', value: 'executive_sedan' },
    { label: 'SUVs Premium', value: 'premium_suv' },
  ];

  return (
    <section id="fleet" className="py-24 bg-[#0a0a0c] border-b border-white/5 relative">
      {/* Visual glowing points */}
      <div className="absolute right-0 top-1/4 w-80 h-80 bg-[#E5C158]/2 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#E5C158] font-sans font-black text-xs uppercase tracking-[0.25em] bg-[#E5C158]/5 border border-[#E5C158]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            FROTA EXCLUSIVA
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-black text-white tracking-tight uppercase">
            NOSSOS <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE082] via-[#E5C158] to-[#B57C1E]">VEÍCULOS DE LUXO</span>
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed mt-4">
            Frota composta exclusivamente por carros novos, vistoriados, segurados e equipados com máxima comodidade. Escolha a categoria ideal para sua viagem e aproveite uma experiência de alto padrão.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {filterButtons.map((btn) => (
            <button
              key={btn.value}
              onClick={() => setActiveFilter(btn.value as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans uppercase font-extrabold tracking-wider transition-all duration-300 cursor-pointer ${
                activeFilter === btn.value
                  ? 'bg-[#E5C158] text-black shadow-lg shadow-[#E5C158]/20 scale-102'
                  : 'bg-white/5 text-gray-400 hover:text-white border border-white/5 hover:bg-white/10'
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {filteredFleet.map((car) => (
            <div
              key={car.id}
              className="group bg-black/65 border border-white/5 hover:border-[#E5C158]/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_15px_40px_rgba(229,193,88,0.04)] transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image & Capacity badges */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
                
                {/* Tech Specs Badge overlay */}
                <div className="absolute bottom-4 left-4 flex gap-2">
                  <span className="flex items-center gap-1.5 bg-black/85 text-xs text-white px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                    <Users className="w-3.5 h-3.5 text-[#E5C158]" />
                    <span>Até {car.passengers}</span>
                  </span>
                  <span className="flex items-center gap-1.5 bg-black/85 text-xs text-white px-3 py-1.5 rounded-lg border border-white/10 backdrop-blur-md">
                    <Briefcase className="w-3.5 h-3.5 text-[#E5C158]" />
                    <span>Malas: {car.luggage}</span>
                  </span>
                </div>
              </div>

              {/* Specs & Description Info body */}
              <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col">
                      <h3 className="text-white font-sans font-black text-xl uppercase tracking-tight group-hover:text-[#E5C158] transition-colors">
                        {car.name}
                      </h3>
                      <span className="text-[11px] text-gray-500 font-sans tracking-wide mt-0.5">
                        {car.className}
                      </span>
                    </div>
                    <Award className="w-5 h-5 text-[#E5C158] shrink-0" />
                  </div>

                  <p className="text-gray-400 font-sans text-sm leading-relaxed mt-4">
                    {car.description}
                  </p>

                  <div className="h-[1px] bg-white/5 my-6" />

                  {/* Bullet Spec Checklist */}
                  <div className="space-y-2">
                    {car.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2.5">
                        <Check className="w-3.5 h-3.5 text-[#E5C158] shrink-0" />
                        <span className="text-gray-300 font-sans text-xs">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    onClick={() => onSelectCategory(car.id)}
                    className="w-full flex items-center justify-center gap-2 border border-[#E5C158]/20 bg-[#E5C158]/5 hover:bg-[#E5C158] hover:text-black py-3.5 px-5 rounded-xl font-sans font-black text-xs uppercase tracking-widest text-[#E5C158] transition-all duration-300 cursor-pointer"
                  >
                    <span>Selecionar e Simular Rota</span>
                    <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
