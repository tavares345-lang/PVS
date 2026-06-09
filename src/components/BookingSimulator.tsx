import React, { useState, useEffect } from 'react';
import { BookingFormState, VehicleCategory } from '../types';
import { MapPin, Calendar, Clock, Users, Briefcase, FileText, Send, CheckCircle2, CarFront } from 'lucide-react';

interface BookingSimulatorProps {
  selectedCategory: VehicleCategory;
  onSetCategory: (category: VehicleCategory) => void;
}

export default function BookingSimulator({ selectedCategory, onSetCategory }: BookingSimulatorProps) {
  const [formData, setFormData] = useState<BookingFormState>({
    serviceType: 'airport_cnf',
    name: '',
    origin: 'Belo Horizonte (Savassi / Centro)',
    destination: 'Aeroporto Internacional de Confins (CNF)',
    date: '',
    time: '',
    passengers: 2,
    luggage: 2,
    vehicleCategory: selectedCategory,
    observations: '',
    flightNumber: '',
    tripType: 'business',
    bilingualDriver: false,
    babySeat: false,
    faturamentoPJ: false,
  });

  // Sync category selected outside in Fleet component
  useEffect(() => {
    setFormData((state) => ({ ...state, vehicleCategory: selectedCategory }));
  }, [selectedCategory]);

  const handleFieldChange = (field: keyof BookingFormState, value: any) => {
    setFormData((state) => {
      const newState = { ...state, [field]: value };
      if (field === 'vehicleCategory') {
        onSetCategory(value as VehicleCategory);
      }
      return newState;
    });
  };

  // Preset location pairs to guide beautiful input choice and fast mock scenarios
  const serviceTypePresets = [
    { value: 'airport_cnf', label: 'Transfer Confins (CNF)' },
    { value: 'intercity', label: 'Viagem Intermunicipal' },
    { value: 'daily_8h', label: 'Diária Executiva (Disponibilidade)' },
    { value: 'events', label: 'Eventos / Casamento' },
  ];

  const handleApplyPreset = (service: string) => {
    let originVal = '';
    let destVal = '';

    if (service === 'airport_cnf') {
      originVal = 'Belo Horizonte (Savassi / Centro)';
      destVal = 'Aeroporto Internacional de Confins (CNF)';
    } else if (service === 'daily_8h') {
      originVal = 'Belo Horizonte (Hotel / Residência)';
      destVal = 'Disponibilidade Local (Diária de 8h/100km)';
    } else {
      originVal = '';
      destVal = '';
    }

    setFormData((state) => ({
      ...state,
      serviceType: service,
      origin: originVal,
      destination: destVal,
    }));
  };

  const generateWhatsAppURL = () => {
    const phone = '5531987581645';
    
    // Friendly localized labels
    const categoryLabels: Record<VehicleCategory, string> = {
      executive_sedan: '🚗 Sedã Executivo (Corolla/Fusion ou similar)',
      premium_suv: '🚙 SUV Premium 4x4 (SW4/Compass ou similar)',
    };
 
    const serviceLabels: Record<string, string> = {
      airport_cnf: '🛫 Transfer Aeroporto de Confins (CNF)',
      intercity: '🛣️ Viagem Intermunicipal / Rodoviária',
      daily_8h: '⏱️ Diária / Veículo à Disponibilidade',
      events: '💍 Logística de Evento / Casamento',
    };

    const tripTypeLabels: Record<string, string> = {
      business: 'Trabalho / Corporativo',
      leisure: 'Lazer / Turismo',
      wedding: 'Casamento / Evento Social',
    };
 
    const textMessage = `*PVS TRANSPORTE EXECUTIVO - SOLICITAÇÃO DE ORÇAMENTO*
--------------------------------------------------
 
*👤 Solicitante:* ${formData.name || 'Não informado'}
*📋 Serviço:* ${serviceLabels[formData.serviceType] || formData.serviceType}
*📍 Local de Embarque:* ${formData.origin || 'A combinar'}
*🏁 Destino da Viagem:* ${formData.destination || 'A combinar'}
 
*📅 Data da Viagem:* ${formData.date ? formData.date.split('-').reverse().join('/') : 'A agendar'}
*⏰ Horário de Saída:* ${formData.time || 'A definir'}
 
*👥 Passageiros:* ${formData.passengers} pessoa(s)
*💼 Volumes de Malas:* ${formData.luggage} mala(s)
 
*🚘 Categoria Desejada:*
${categoryLabels[formData.vehicleCategory] || formData.vehicleCategory}
 
*⚙️ Preferências & Detalhes da Viagem:*
• Motivo / Tipo de Viagem: ${tripTypeLabels[formData.tripType || ''] || 'A definir'}
${formData.flightNumber ? `• Número do Voo para Monitoramento: ${formData.flightNumber}\n` : ''}• Motorista Bilíngue necessário? ${formData.bilingualDriver ? 'Sim' : 'Não'}
• Necessita Cadeira de Bebê? ${formData.babySeat ? 'Sim' : 'Não'}
• Faturamento Mensal PJ? ${formData.faturamentoPJ ? 'Sim, de interesse' : 'Não'}
 
${formData.observations ? `*📝 Observações Adicionais:* ${formData.observations}\n` : ''}--------------------------------------------------
_Enviado através do cotador digital do site oficial._`;
 
    const encodedText = encodeURIComponent(textMessage);
    return `https://wa.me/${phone}?text=${encodedText}`;
  };

  return (
    <section id="simulator" className="py-24 bg-[#0d0d10] relative">
      {/* Absolute ambient lights */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#E5C158]/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#E5C158] font-sans font-black text-xs uppercase tracking-[0.25em] bg-[#E5C158]/5 border border-[#E5C158]/10 px-4 py-1.5 rounded-full inline-block mb-3">
            AGENDAMENTO INTELIGENTE
          </span>
          <h2 className="text-3xl md:text-5xl font-sans font-black text-white tracking-tight uppercase">
            SIMULE SEU <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFE082] via-[#E5C158] to-[#B57C1E]">ORÇAMENTO PREMIUM</span>
          </h2>
          <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed mt-4">
            Escolha o itinerário, a data e a categoria do veículo de sua preferência. Nosso sistema simula instantaneamente o orçamento estimado e formata sua colagem direta no WhatsApp para validação imediata.
          </p>
        </div>

        {/* Dynamic Dual Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* LEFT: Complete Interactive Form (8 columns) */}
          <div className="lg:col-span-7 bg-black/60 border border-white/5 rounded-2xl p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Requester name */}
              <div>
                <label className="block text-[#E5C158] text-xs font-sans font-extrabold uppercase tracking-widest mb-3">
                  1. Identificação do Solicitante
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleFieldChange('name', e.target.value)}
                    placeholder="Seu Nome Completo"
                    className="w-full bg-white/2 border border-white/5 focus:border-[#E5C158] focus:bg-white/5 text-sm font-sans tracking-wide text-white py-3.5 px-4 rounded-xl outline-none transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Type of Service Header presets */}
              <div>
                <label className="block text-[#E5C158] text-xs font-sans font-extrabold uppercase tracking-widest mb-3">
                  2. Modalidade de Transporte
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {serviceTypePresets.map((preset) => (
                    <button
                      key={preset.value}
                      type="button"
                      onClick={() => handleApplyPreset(preset.value)}
                      className={`text-left px-4 py-3 rounded-xl border text-xs font-sans font-bold transition-all duration-300 cursor-pointer ${
                        formData.serviceType === preset.value
                          ? 'border-[#E5C158] bg-[#E5C158]/5 text-white'
                          : 'border-white/5 bg-white/2 text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Origin and Destination side-by-side */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-gray-400 text-xs font-sans font-bold uppercase tracking-wider mb-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E5C158]" />
                    <span>Local de Embarque (Origem)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.origin}
                    onChange={(e) => handleFieldChange('origin', e.target.value)}
                    placeholder="Ex: Endereço completo ou Hotel em BH"
                    className="w-full bg-white/2 border border-white/5 focus:border-[#E5C158] focus:bg-white/5 text-sm font-sans tracking-wide text-white py-3.5 px-4 rounded-xl outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-400 text-xs font-sans font-bold uppercase tracking-wider mb-2.5">
                    <MapPin className="w-3.5 h-3.5 text-[#E5C158] rotate-180" />
                    <span>Local de Desembarque (Destino)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.destination}
                    onChange={(e) => handleFieldChange('destination', e.target.value)}
                    placeholder="Ex: Confins ou outra Cidade"
                    className="w-full bg-white/2 border border-white/5 focus:border-[#E5C158] focus:bg-white/5 text-sm font-sans tracking-wide text-white py-3.5 px-4 rounded-xl outline-none transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Date & Time Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="flex items-center gap-2 text-gray-400 text-xs font-sans font-bold uppercase tracking-wider mb-2.5">
                    <Calendar className="w-3.5 h-3.5 text-[#E5C158]" />
                    <span>Data Agenda</span>
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => handleFieldChange('date', e.target.value)}
                    className="w-full bg-white/2 border border-white/5 focus:border-[#E5C158] focus:bg-white/5 text-sm font-sans text-white py-3.5 px-4 rounded-xl outline-none transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="flex items-center gap-2 text-gray-400 text-xs font-sans font-bold uppercase tracking-wider mb-2.5">
                    <Clock className="w-3.5 h-3.5 text-[#E5C158]" />
                    <span>Horário da Partida</span>
                  </label>
                  <input
                    type="time"
                    value={formData.time}
                    onChange={(e) => handleFieldChange('time', e.target.value)}
                    className="w-full bg-white/2 border border-white/5 focus:border-[#E5C158] focus:bg-white/5 text-sm font-sans text-white py-3.5 px-4 rounded-xl outline-none transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Interactive Fleet categorization cards */}
              <div>
                <label className="flex items-center gap-2 text-[#E5C158] text-xs font-sans font-extrabold uppercase tracking-widest mb-3">
                  <CarFront className="w-3.5 h-3.5" />
                  <span>3. Escolha do Veículo (Sincronizado)</span>
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(['executive_sedan', 'premium_suv'] as VehicleCategory[]).map((cat) => {
                    const titles: Record<VehicleCategory, string> = {
                      executive_sedan: 'Sedã Luxo',
                      premium_suv: 'SUV 4x4',
                    };
                    const icons: Record<VehicleCategory, string> = {
                      executive_sedan: '🚗',
                      premium_suv: '🚙',
                    };
                    return (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => handleFieldChange('vehicleCategory', cat)}
                        className={`py-4 rounded-xl border text-center transition-all duration-300 cursor-pointer ${
                          formData.vehicleCategory === cat
                            ? 'border-[#E5C158] bg-[#E5C158]/5 text-[#E5C158]'
                            : 'border-white/5 bg-white/2 text-gray-400 hover:text-white'
                        }`}
                      >
                        <span className="text-xl block">{icons[cat]}</span>
                        <span className="font-sans font-black text-[10px] uppercase tracking-wider block mt-1">
                          {titles[cat]}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Passengers and Luggage */}
              <div className="grid grid-cols-2 gap-6 bg-white/2 p-4 rounded-xl border border-white/5">
                <div className="text-center">
                  <span className="flex items-center justify-center gap-1 text-gray-400 text-xs font-sans font-bold uppercase tracking-wider mb-2">
                    <Users className="w-3.5 h-3.5 text-[#E5C158]" />
                    Passageiros
                  </span>
                  <div className="flex items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => handleFieldChange('passengers', Math.max(1, formData.passengers - 1))}
                      className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#E5C158]/20 text-white font-sans font-bold flex items-center justify-center cursor-pointer transition-colors"
                    >
                      -
                    </button>
                    <span className="text-lg font-sans text-white font-black w-8">{formData.passengers}</span>
                    <button
                      type="button"
                      onClick={() => handleFieldChange('passengers', Math.min(15, formData.passengers + 1))}
                      className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#E5C158]/20 text-white font-sans font-bold flex items-center justify-center cursor-pointer transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="text-center border-l border-white/5">
                  <span className="flex items-center justify-center gap-1 text-gray-400 text-xs font-sans font-bold uppercase tracking-wider mb-2">
                    <Briefcase className="w-3.5 h-3.5 text-[#E5C158]" />
                    Malas Grandes
                  </span>
                  <div className="flex items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={() => handleFieldChange('luggage', Math.max(0, formData.luggage - 1))}
                      className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#E5C158]/20 text-white font-sans font-bold flex items-center justify-center cursor-pointer transition-colors"
                    >
                      -
                    </button>
                    <span className="text-lg font-sans text-white font-black w-8">{formData.luggage}</span>
                    <button
                      type="button"
                      onClick={() => handleFieldChange('luggage', Math.min(15, formData.luggage + 1))}
                      className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#E5C158]/20 text-white font-sans font-bold flex items-center justify-center cursor-pointer transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Extra Specific details & Questions */}
              <div>
                <label className="block text-[#E5C158] text-xs font-sans font-extrabold uppercase tracking-widest mb-3">
                  4. Preferências & Perguntas Adicionais
                </label>
                
                <div className="space-y-4 bg-white/2 p-4 rounded-xl border border-white/5">
                  {/* Trip purpose */}
                  <div>
                    <label className="block text-gray-400 text-[10px] font-sans font-bold uppercase tracking-wider mb-2">
                      Finalidade / Tipo da Viagem
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[
                        { value: 'business', label: '📊 Corporativo' },
                        { value: 'leisure', label: '🌴 Lazer' },
                        { value: 'wedding', label: '💍 Evento' },
                      ].map((item) => (
                        <button
                          key={item.value}
                          type="button"
                          onClick={() => handleFieldChange('tripType', item.value)}
                          className={`py-2 rounded-lg border text-[11px] font-sans font-bold text-center transition-all duration-300 cursor-pointer ${
                            formData.tripType === item.value
                              ? 'border-[#E5C158] bg-[#E5C158]/5 text-white'
                              : 'border-white/5 bg-white/2 text-gray-400 hover:text-white hover:bg-white/5'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Flight number (if airport cnf selected) */}
                  {formData.serviceType === 'airport_cnf' && (
                    <div>
                      <label className="block text-gray-400 text-[10px] font-sans font-bold uppercase tracking-wider mb-2">
                        Número do Voo (para monitoramento de atrasos)
                      </label>
                      <input
                        type="text"
                        value={formData.flightNumber || ''}
                        onChange={(e) => handleFieldChange('flightNumber', e.target.value)}
                        placeholder="Ex: AD 2450, LA 3211 ou G3 1622"
                        className="w-full bg-white/2 border border-white/5 focus:border-[#E5C158] focus:bg-white/5 text-xs font-sans tracking-wide text-white py-2.5 px-3.5 rounded-xl outline-none transition-all duration-300"
                      />
                    </div>
                  )}

                  {/* Options Checkboxes */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.bilingualDriver || false}
                        onChange={(e) => handleFieldChange('bilingualDriver', e.target.checked)}
                        className="rounded border-white/10 text-[#E5C158] focus:ring-[#E5C158] focus:ring-offset-0 bg-white/5 w-4 h-4 cursor-pointer"
                      />
                      <span className="text-gray-400 group-hover:text-white font-sans text-[11px] transition-colors">
                        🌐 Motorista Bilíngue
                      </span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.babySeat || false}
                        onChange={(e) => handleFieldChange('babySeat', e.target.checked)}
                        className="rounded border-white/10 text-[#E5C158] focus:ring-[#E5C158] focus:ring-offset-0 bg-white/5 w-4 h-4 cursor-pointer"
                      />
                      <span className="text-gray-400 group-hover:text-white font-sans text-[11px] transition-colors">
                        🚼 Cadeira de Bebê
                      </span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={formData.faturamentoPJ || false}
                        onChange={(e) => handleFieldChange('faturamentoPJ', e.target.checked)}
                        className="rounded border-white/10 text-[#E5C158] focus:ring-[#E5C158] focus:ring-offset-0 bg-white/5 w-4 h-4 cursor-pointer"
                      />
                      <span className="text-gray-400 group-hover:text-white font-sans text-[11px] transition-colors">
                        💼 Faturamento PJ
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              {/* Extra specifications */}
              <div>
                <label className="flex items-center gap-2 text-gray-400 text-xs font-sans font-bold uppercase tracking-wider mb-2.5">
                  <FileText className="w-3.5 h-3.5 text-[#E5C158]" />
                  <span>5. Instruções Complementares / Observações</span>
                </label>
                <textarea
                  value={formData.observations}
                  onChange={(e) => handleFieldChange('observations', e.target.value)}
                  placeholder="Ex: Bagagens extras frágeis, necessidade de veículo blindado, solicitar água sem gás..."
                  className="w-full bg-white/2 border border-white/5 focus:border-[#E5C158] focus:bg-white/5 text-sm font-sans tracking-wide text-white py-3.5 px-4 rounded-xl outline-none transition-all duration-300 resize-none h-20"
                />
              </div>

            </div>
          </div>

          {/* RIGHT: Live Estimated Budget & Send Box (5 columns) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#121215] to-[#0d0d10] border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#E5C158]/5 blur-2xl rounded-full" />

            <div>
              {/* Premium Receipt visual element header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div>
                  <h3 className="text-xs uppercase tracking-[0.18em] text-[#E5C158] font-bold font-sans">
                    Solicitação
                  </h3>
                  <p className="text-[10px] text-gray-500 font-sans tracking-tight uppercase">
                    PVS TRANSPORTE PREMIUM
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-[#E5C158]/10 text-[#E5C158] text-[9px] font-sans font-bold uppercase tracking-wider px-2 py-1 rounded-md border border-[#E5C158]/20 animate-pulse">
                    Orçamento Digital
                  </span>
                </div>
              </div>

              {/* Informative text box replaces pricing */}
              <div className="bg-[#E5C158]/5 p-6 rounded-1.5xl border border-[#E5C158]/15 mb-8 text-center p-5 rounded-2xl">
                <span className="text-[10px] text-[#E5C158] font-sans font-extrabold tracking-widest uppercase bg-[#E5C158]/10 px-3 py-1 rounded-full border border-[#E5C158]/10 inline-block mb-3">
                  Atendimento sob Medida
                </span>
                <h4 className="text-white text-base md:text-lg font-sans font-black uppercase tracking-tight">
                  Cotação Personalizada
                </h4>
                <p className="text-gray-400 font-sans text-xs leading-relaxed mt-2.5">
                  Preencha os detalhes ao lado e envie pelo WhatsApp. Nossa central avaliará seu itinerário personalizado e responderá imediatamente com o melhor valor para sua total segurança, discrição e conforto.
                </p>
              </div>

              {/* Core Security & Quality Trust checklist */}
              <div className="space-y-4 mb-8">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-white font-sans font-bold text-xs uppercase tracking-wide">
                      Acompanhamento de Voo CNF
                    </h5>
                    <p className="text-gray-400 font-sans text-[11px] mt-0.5 leading-normal">
                      A tolerância máxima com o pouso é ilimitada e sem custo extra de hora parada.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-white font-sans font-bold text-xs uppercase tracking-wide">
                      Cancelamento Flexível Gratuito
                    </h5>
                    <p className="text-gray-400 font-sans text-[11px] mt-0.5 leading-normal">
                      Você pode cancelar ou remarcar sua viagem com até 2h de antecedência sem taxas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-4 h-4 text-[#E5C158] shrink-0 mt-0.5" />
                  <div>
                    <h5 className="text-white font-sans font-bold text-xs uppercase tracking-wide">
                      Seguro de Passageiros Integrado
                    </h5>
                    <p className="text-gray-400 font-sans text-[11px] mt-0.5 leading-normal">
                      Todas as viagens possuem cobertura securitária completa APP ativa para os ocupantes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action Button */}
            <div>
              <a
                href={generateWhatsAppURL()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-gradient-to-r from-[#E5C158] to-[#C49E37] text-black font-sans font-black text-xs uppercase tracking-widest py-4 rounded-xl shadow-[0_8px_30px_rgba(229,193,88,0.25)] hover:shadow-[0_8px_35px_rgba(229,193,88,0.45)] hover:scale-[1.01] transition-all duration-300"
              >
                <Send className="w-4 h-4 fill-black" />
                <span>Enviar Cotação</span>
              </a>
              <span className="block text-center text-[10px] text-gray-500 font-sans mt-3">
                Ao clicar, você será redirecionado para o WhatsApp com tudo pronto.
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
