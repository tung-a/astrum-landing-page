import React, { useState } from "react";
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
  Users,
  Zap,
  Shield,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F0015] text-white selection:bg-[#FFD700] selection:text-black font-sans overflow-x-hidden">
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-[#0F0015]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => window.scrollTo(0, 0)}
          >
            <div className="bg-gradient-to-tr from-[#FFD700] to-orange-500 p-2 rounded-lg">
              <Sparkles className="text-black" size={20} />
            </div>
            <span className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Astrum
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <button
              onClick={() => scrollToSection("features")}
              className="hover:text-[#FFD700] transition-colors"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("videos")}
              className="hover:text-[#FFD700] transition-colors"
            >
              Apresentação
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="hover:text-[#FFD700] transition-colors"
            >
              Equipe
            </button>
            <button
              onClick={() => alert("Em breve!")}
              className="bg-white text-black px-5 py-2.5 rounded-full font-bold hover:bg-[#FFD700] transition-all transform hover:scale-105"
            >
              Baixar App
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#0F0015] border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl">
            <button
              onClick={() => scrollToSection("features")}
              className="text-left text-lg"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("videos")}
              className="text-left text-lg"
            >
              Apresentação
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-left text-lg"
            >
              Equipe
            </button>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-40 pb-20 px-6 flex flex-col items-center text-center overflow-hidden min-h-[90vh] justify-center">
        {/* Background Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] -z-10" />

        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#FFD700]/20 bg-[#FFD700]/5 text-[#FFD700] text-sm font-medium mb-8">
          <Star size={16} fill="#FFD700" /> O Guia Espiritual da Geração Z
        </div>

        <h1 className="text-5xl md:text-8xl font-bold mb-8 tracking-tight max-w-5xl leading-tight">
          Sintonize sua <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] via-orange-400 to-[#FFD700] bg-[length:200%_auto] animate-gradient">
            frequência.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed">
          Combine a sabedoria ancestral do Tarot e da Astrologia com
          Inteligência Artificial. Transforme ansiedade em autoconhecimento com
          o Astrum.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center mb-16">
          <button className="bg-[#FFD700] text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-[#FFC000] hover:-translate-y-1 transition-all flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,215,0,0.2)]">
            Entrar na Lista de Espera <ChevronRight size={20} />
          </button>
          <button
            onClick={() => scrollToSection("videos")}
            className="px-8 py-4 rounded-xl font-bold text-lg border border-white/10 hover:bg-white/5 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
          >
            <Play size={20} /> Ver Pitch Deck
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-8 border-t border-white/5">
          <Stat number="13B" label="Mercado Global (USD)" />
          <Stat number="70%" label="Público Gen Z" />
          <Stat number="24/7" label="Disponibilidade IA" />
          <Stat number="MVP" label="Funcional" />
        </div>
      </section>

      {/* --- VÍDEOS (OBRIGATÓRIOS) --- */}
      <section id="videos" className="py-24 px-6 bg-[#130520] relative">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Conheça o Projeto
              </h2>
              <p className="text-gray-400 text-lg max-w-xl">
                Veja nossa visão de negócio e o produto em ação.
              </p>
            </div>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-sm font-mono text-red-400">
                GRAVAÇÃO PENDENTE
              </span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* VÍDEO 1: PITCH */}
            <VideoCard
              tag="INVESTIDORES"
              title="Pitch do Negócio"
              duration="3 min"
              description="Nossa visão de mercado, modelo de negócio baseado em microtransações e estratégia de crescimento."
              // videoUrl="SEU_LINK_YOUTUBE_AQUI"
            />

            {/* VÍDEO 2: MVP */}
            <VideoCard
              tag="DEMO DO PRODUTO"
              title="Tour pelo MVP"
              duration="5 min"
              description="Demonstração real do app: Oráculo IA conversando, loja de skins funcionando e geração de mapa astral."
              // videoUrl="SEU_LINK_YOUTUBE_AQUI"
            />
          </div>
        </div>
      </section>

      {/* --- COMO FUNCIONA (NOVA SEÇÃO) --- */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-indigo-900/10 rounded-full blur-[150px] -z-10" />

        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Sua Jornada Mística
            </h2>
            <p className="text-gray-400 text-lg">
              Três passos para conectar sua energia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Linha conectora (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-500/30 to-transparent -z-10" />

            <StepCard
              number="01"
              title="Crie seu Perfil"
              desc="Insira seus dados de nascimento. Nossa IA gera seu Mapa Astral completo instantaneamente."
            />
            <StepCard
              number="02"
              title="Consulte o Oráculo"
              desc="Tire uma carta de Tarot ou converse com o chat sobre suas angústias do dia a dia."
            />
            <StepCard
              number="03"
              title="Customize & Evolua"
              desc="Ganhe Poeira Estelar, desbloqueie skins para suas cartas e conecte-se com amigos."
            />
          </div>
        </div>
      </section>

      {/* --- FEATURES --- */}
      <section id="features" className="py-24 px-6 bg-[#0A0210]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-[#FFD700] font-mono text-sm tracking-wider uppercase">
              Diferenciais
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mt-2">
              Por que o Astrum?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<MessageCircle size={32} className="text-[#FFD700]" />}
              title="Oráculo IA"
              description="Um guia que lembra suas conversas passadas e contextualiza conselhos."
            />
            <FeatureCard
              icon={<Layout size={32} className="text-[#FFD700]" />}
              title="Gamificação"
              description="Economia de skins e colecionáveis. Personalize seu baralho de Tarot."
            />
            <FeatureCard
              icon={<Moon size={32} className="text-[#FFD700]" />}
              title="Rituais Diários"
              description="Agenda de bem-estar para aplicar os conselhos místicos na prática."
            />
            <FeatureCard
              icon={<Users size={32} className="text-[#FFD700]" />}
              title="Círculo Mágico"
              description="Compare compatibilidade astral com seus amigos em tempo real."
            />
          </div>
        </div>
      </section>

      {/* --- EQUIPE (NOVA SEÇÃO) --- */}
      <section id="team" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Quem faz o Astrum
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {/* Nomes extraídos do contexto do usuário */}
            <TeamMember name="Arthur Tung" role="Co-Founder" />
            <TeamMember name="Felipe Freire" role="Co-Founder" />
            <TeamMember name="Kevin Tamayose" role="Co-Founder" />
            <TeamMember name="Filipe Valeriano" role="Co-Founder" />
            <TeamMember name="Luccas Cruz" role="Co-Founder" />
            <TeamMember name="Thiago Costa" role="Co-Founder" />
          </div>
        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#2E004E]/20 to-[#0F0015] -z-20" />

        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            Pronto para sintonizar?
          </h2>
          <p className="text-xl text-gray-400 mb-10">
            Junte-se à revolução do misticismo digital. O futuro do bem-estar é
            personalizado.
          </p>
          <button className="bg-white text-black px-10 py-5 rounded-full font-bold text-xl hover:bg-[#FFD700] hover:scale-105 transition-all shadow-xl">
            Quero Acesso Antecipado
          </button>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Sparkles className="text-[#FFD700]" size={20} />
              <span className="text-xl font-bold">Astrum</span>
            </div>
            <p className="text-sm text-gray-500">
              © 2025 China Corporations. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex gap-8">
            <a
              href="#"
              className="text-gray-400 hover:text-[#FFD700] transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-[#FFD700] transition-colors"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Componentes Auxiliares ---

function Stat({ number, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="text-3xl md:text-4xl font-bold text-white mb-2">
        {number}
      </span>
      <span className="text-sm text-gray-500 font-medium uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

function VideoCard({ title, duration, description, videoUrl, tag }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#FFD700]/30 transition-all group hover:-translate-y-1 duration-300">
      {/* Placeholder do Vídeo */}
      <div className="aspect-video bg-black/50 relative flex items-center justify-center overflow-hidden border-b border-white/5">
        {videoUrl ? (
          <iframe
            src={videoUrl}
            className="w-full h-full"
            title={title}
            allowFullScreen
            frameBorder="0"
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-900/40 to-transparent" />
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(255,215,0,0.4)] group-hover:scale-110 transition-transform cursor-pointer">
                <Play fill="black" className="ml-1 text-black" size={32} />
              </div>
              <span className="text-xs font-bold tracking-widest text-white uppercase bg-black/60 px-4 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                Aguardando Upload
              </span>
            </div>
          </>
        )}
      </div>

      <div className="p-8">
        <div className="flex justify-between items-start mb-4">
          <div>
            <span className="text-[#FFD700] text-xs font-bold tracking-wider mb-2 block">
              {tag}
            </span>
            <h3 className="text-2xl font-bold text-white">{title}</h3>
          </div>
          <span className="text-xs font-mono text-gray-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
            {duration}
          </span>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

function StepCard({ number, title, desc }) {
  return (
    <div className="bg-white/5 p-8 rounded-2xl border border-white/10 relative hover:bg-white/10 transition-colors">
      <div className="text-5xl font-bold text-white/5 mb-6 absolute top-4 right-6">
        {number}
      </div>
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFD700] to-orange-500 flex items-center justify-center mb-6 text-black font-bold shadow-lg">
        {number}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{desc}</p>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-8 rounded-2xl bg-gradient-to-b from-white/5 to-transparent border border-white/5 hover:border-[#FFD700]/20 transition-all hover:-translate-y-1">
      <div className="w-14 h-14 bg-[#FFD700]/10 rounded-xl flex items-center justify-center mb-6 border border-[#FFD700]/20">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 leading-relaxed text-sm">{description}</p>
    </div>
  );
}

function TeamMember({ name, role }) {
  return (
    <div className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-white/5 transition-colors">
      <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 mb-4 flex items-center justify-center text-2xl font-bold">
        {name.charAt(0)}
      </div>
      <h4 className="font-bold text-sm text-white mb-1">{name}</h4>
      <p className="text-xs text-gray-500 uppercase tracking-wider">{role}</p>
    </div>
  );
}

export default App;
