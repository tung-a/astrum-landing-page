import React from "react";
import {
  Sparkles,
  Play,
  Moon,
  Star,
  MessageCircle,
  Layout,
  ChevronRight,
  Instagram,
  Mail,
} from "lucide-react";

function App() {
  return (
    <div className="min-h-screen bg-[#0F0015] text-white selection:bg-purple-500 selection:text-white">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#0F0015]/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles className="text-[#FFD700]" size={24} />
            <span className="text-2xl font-bold tracking-tight">Astrum</span>
          </div>
          <button
            onClick={() => alert("Em breve nas lojas!")}
            className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full text-sm font-semibold transition-all"
          >
            Baixar App
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 flex flex-col items-center text-center overflow-hidden">
        {/* Glow de fundo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] -z-10" />

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FFD700]/30 bg-[#FFD700]/10 text-[#FFD700] text-sm font-medium mb-6 animate-fade-in">
          <Star size={14} fill="#FFD700" /> O Guia Espiritual da Geração Z
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight max-w-4xl">
          Sintonize sua{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-orange-400">
            frequência
          </span>
          .
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
          Combine a sabedoria ancestral do Tarot e da Astrologia com
          Inteligência Artificial. Transforme ansiedade em autoconhecimento com
          o Astrum.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="bg-[#FFD700] text-black px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,215,0,0.3)]">
            Entrar na Lista de Espera <ChevronRight size={20} />
          </button>
          <button className="px-8 py-4 rounded-xl font-bold text-lg border border-white/20 hover:bg-white/5 transition-all">
            Saber Mais
          </button>
        </div>
      </section>

      {/* --- VÍDEOS (OBRIGATÓRIOS) --- */}
      <section className="py-20 px-6 bg-[#160825] border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Conheça o Projeto
            </h2>
            <p className="text-gray-400">
              Veja nossa visão de negócio e o produto em ação.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* VÍDEO 1: PITCH */}
            <VideoCard
              title="Pitch do Negócio"
              duration="3 min"
              description="Modelo de negócio, mercado e estratégia de crescimento."
              // videoUrl="SEU_LINK_YOUTUBE_AQUI"
            />

            {/* VÍDEO 2: MVP */}
            <VideoCard
              title="Demonstração do MVP"
              duration="5 min"
              description="Tour pelo Oráculo IA, Loja de Skins e Mapa Astral."
              // videoUrl="SEU_LINK_YOUTUBE_AQUI"
            />
          </div>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
            Por que o Astrum?
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={<MessageCircle size={32} className="text-[#FFD700]" />}
              title="Oráculo IA"
              description="Um guia que lembra suas conversas passadas e contextualiza conselhos com seu mapa astral."
            />
            <FeatureCard
              icon={<Layout size={32} className="text-[#FFD700]" />}
              title="Gamificação"
              description="Economia de skins e colecionáveis. Personalize seu baralho de Tarot e seu avatar."
            />
            <FeatureCard
              icon={<Moon size={32} className="text-[#FFD700]" />}
              title="Rituais Diários"
              description="Agenda de bem-estar integrada para aplicar os conselhos místicos na sua rotina prática."
            />
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 border-t border-white/10 bg-[#0A000E]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="text-[#FFD700]" size={20} />
              <span className="text-xl font-bold">Astrum</span>
            </div>
            <p className="text-sm text-gray-500">© 2025 China Corporations.</p>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-[#FFD700] transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#FFD700] transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Componentes Auxiliares ---

function VideoCard({ title, duration, description, videoUrl }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#FFD700]/30 transition-colors group">
      {/* Placeholder do Vídeo (ou iframe se tiver URL) */}
      <div className="aspect-video bg-black/50 relative flex items-center justify-center overflow-hidden">
        {videoUrl ? (
          <iframe
            src={videoUrl}
            className="w-full h-full"
            title={title}
            allowFullScreen
            frameBorder="0"
          />
        ) : (
          // Placeholder enquanto não tem vídeo
          <>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent" />
            <div className="relative z-10 flex flex-col items-center gap-3">
              <div className="w-16 h-16 bg-[#FFD700] rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer">
                <Play fill="black" className="ml-1 text-black" size={28} />
              </div>
              <span className="text-xs font-bold tracking-widest text-[#FFD700] uppercase bg-black/40 px-3 py-1 rounded-full backdrop-blur-sm">
                Em Breve
              </span>
            </div>
          </>
        )}
      </div>

      {/* Informações */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <span className="text-xs font-mono text-gray-400 bg-white/10 px-2 py-1 rounded">
            {duration}
          </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
      <div className="w-14 h-14 bg-[#FFD700]/10 rounded-xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}

export default App;
