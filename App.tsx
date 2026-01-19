
import React, { useState, useCallback } from 'react';
import {
  BRAND_NAME,
  TITLE,
  LINKS,
  SERVICES,
  VALUE_PROPS,
  PROCESS_STEPS,
  PROOF_CASES,
  STATS,
  TRUSTED_COMPANIES
} from './constants';
import Button from './components/Button';
import Navbar from './components/Navbar';
import Reveal from './components/Reveal';
import FullScreenViewer from './components/FullScreenViewer';
import {
  ShieldCheck,
  ExternalLink,
  MessageSquare,
  ChevronRight,
  CheckCircle2,
  TrendingUp,
  Linkedin,
  Globe,
  Youtube as YoutubeIcon,
  Activity,
  Zap,
  Maximize2
} from 'lucide-react';

const App: React.FC = () => {
  const websiteProofs = PROOF_CASES.filter(p => p.category === 'website');
  const youtubeProofs = PROOF_CASES.filter(p => p.category === 'youtube');

  // Fullscreen viewer state
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentViewerImages, setCurrentViewerImages] = useState<{ imageUrl: string; title: string }[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openFullScreen = useCallback((images: { imageUrl: string; title: string }[], startIndex: number) => {
    setCurrentViewerImages(images);
    setCurrentImageIndex(startIndex);
    setIsViewerOpen(true);
  }, []);

  const closeFullScreen = useCallback(() => {
    setIsViewerOpen(false);
  }, []);

  const navigateImage = useCallback((index: number) => {
    setCurrentImageIndex(index);
  }, []);

  return (
    <div className="min-h-screen selection:bg-fuchsia-500/30 selection:text-white pb-12">
      <Navbar />

      <main className="max-w-7xl mx-auto px-6 pt-32 space-y-40">
        
        {/* HERO SECTION */}
        <section className="relative">
          <Reveal animation="scale">
            <div className="glass-card rounded-[3.5rem] p-10 md:p-16 lg:p-20 relative overflow-hidden border-white/10">
              {/* Futuristic Background Accents */}
              <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-fuchsia-600/10 rounded-full blur-[140px]"></div>
              <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px]"></div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                {/* Text Content */}
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="inline-flex items-center space-x-2 bg-slate-800/40 backdrop-blur-md px-6 py-3 rounded-full mb-12 border border-white/10 shadow-inner">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-fuchsia-500"></span>
                    </span>
                    <span className="text-[11px] font-black text-slate-300 uppercase tracking-[0.2em]">Strategy Engine • Optimized</span>
                  </div>

                  <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-white tracking-tighter leading-[0.95] mb-10 max-w-4xl">
                    Strategic <span className="text-transparent bg-clip-text bg-gradient-to-br from-fuchsia-400 via-purple-400 to-pink-400">SEO Intelligence</span> That Scales.
                  </h1>
                  
                  <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mb-12 leading-relaxed">
                    I help high-growth brands and creators dominate search and video algorithms using advanced data-driven organic optimization strategies.
                  </p>

                  <div className="flex flex-wrap justify-center lg:justify-start gap-4 w-full">
                    <Button href={LINKS.FIVERR} variant="fiverr" className="neon-glow-purple px-8 py-4" icon={<ExternalLink className="w-4 h-4"/>}>
                      Fiverr
                    </Button>
                    <Button href={LINKS.FREELANCER} variant="freelancer" className="px-8 py-4" icon={<ExternalLink className="w-4 h-4"/>}>
                      Freelancer
                    </Button>
                    <Button href={LINKS.WHATSAPP} variant="whatsapp" className="neon-glow-fuchsia px-8 py-4" icon={<MessageSquare className="w-4 h-4"/>}>
                      WhatsApp
                    </Button>
                  </div>
                </div>

                {/* Hero Image Section */}
                <div className="relative group perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent blur-3xl -z-10 rounded-full"></div>
                  <div className="relative glass-card-dark rounded-[3rem] p-6 border-white/10 overflow-hidden transform transition-transform duration-700 hover:rotate-y-12">
                    <img
                      src="/person.jpeg"
                      alt={BRAND_NAME}
                      className="w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] object-cover rounded-[2.5rem] shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Decorative Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/40 via-transparent to-transparent pointer-events-none"></div>
                    <div className="absolute bottom-6 left-6 right-6 p-6 glass-card border-white/5 rounded-2xl">
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-[10px] font-black text-fuchsia-400 uppercase tracking-widest mb-1">Strategist</p>
                          <h4 className="text-white font-bold text-lg">{BRAND_NAME}</h4>
                        </div>
                        <div className="bg-fuchsia-500/20 p-2 rounded-xl">
                          <ShieldCheck className="w-6 h-6 text-fuchsia-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* METRICS & LOGO CLOUD SECTION */}
        <section className="space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <Reveal key={idx} delay={idx * 100} animation="fade-up">
                <div className="glass-card-dark rounded-3xl p-10 flex flex-col items-center text-center group border-white/5 hover:border-fuchsia-500/30 transition-all duration-700 hover:bg-slate-900/40">
                  <div className={`text-4xl md:text-6xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r ${stat.color} group-hover:scale-110 transition-transform duration-700`}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal animation="fade-up">
            <div className="glass-card rounded-[3rem] p-12 border-white/5 bg-slate-950/20 backdrop-blur-3xl">
              <div className="text-center mb-12">
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-[0.5em]">Global Ecosystem Presence</p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
                {TRUSTED_COMPANIES.map((company, idx) => (
                  <div key={idx} className="flex items-center space-x-4 opacity-40 hover:opacity-100 transition-all duration-700 hover:scale-110 cursor-default">
                    <div className="text-fuchsia-400">
                      {company.icon}
                    </div>
                    <span className="text-2xl font-bold text-white tracking-tighter">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* PERFORMANCE IDENTITY SECTION */}
        <section id="about" className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <Reveal className="lg:col-span-8 flex h-full" threshold={0.2}>
            <div className="glass-card-accent rounded-[3rem] p-12 md:p-16 flex flex-col justify-center h-full relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                <Activity className="w-48 h-48 text-fuchsia-400" />
              </div>
              <h2 className="text-[10px] font-black text-fuchsia-400 uppercase tracking-[0.4em] mb-8">Executive Profile</h2>
              <p className="text-3xl md:text-5xl font-black text-white leading-[1.1] mb-12">
                I bridge the gap between complex algorithms and sustainable visibility for elite brands.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  "White-hat Intelligence",
                  "Algorithm Forensics",
                  "Performance Architecture",
                  "Transparent Analytics"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-5 group">
                    <div className="bg-fuchsia-500/10 p-3 rounded-2xl border border-fuchsia-500/20 group-hover:bg-fuchsia-500/30 transition-all duration-500 neon-glow-purple">
                      <CheckCircle2 className="w-6 h-6 text-fuchsia-400" />
                    </div>
                    <span className="text-xl font-bold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal className="lg:col-span-4 flex h-full" delay={150} threshold={0.2}>
            <div className="glass-card-dark rounded-[3rem] p-12 md:p-16 flex flex-col items-center justify-center text-white text-center h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative z-10">
                <div className="text-[10rem] font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-700">2+</div>
                <div className="text-[12px] uppercase tracking-[0.5em] font-black text-fuchsia-400 mb-10">Years Professional Authority</div>
                <p className="text-slate-400 text-xl font-medium leading-relaxed max-w-[320px]">
                  Pioneering data-first growth strategies for international digital ecosystems.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* WEBSITE SEO PROOF SECTION */}
        <section id="website-proof">
          <Reveal animation="scale">
            <div className="glass-card-dark rounded-[5rem] p-12 md:p-24 text-white overflow-hidden relative border-white/10">
              <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-fuchsia-600/5 rounded-full blur-[180px] -ml-96 -mt-96"></div>
              
              <div className="relative z-10 text-center mb-32 max-w-5xl mx-auto">
                <div className="flex justify-center mb-10">
                  <div className="bg-fuchsia-500/10 p-6 rounded-[2rem] border border-fuchsia-500/20 neon-glow-purple">
                    <Globe className="w-12 h-12 text-fuchsia-400" />
                  </div>
                </div>
                <h2 className="text-[10px] font-black text-fuchsia-400 uppercase tracking-[0.6em] mb-10">Performance Case Logs</h2>
                <h3 className="text-5xl md:text-8xl font-black mb-12 tracking-tight leading-[0.9]">
                  Global Search <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">Dominance</span>
                </h3>
                <p className="text-2xl md:text-3xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
                  Data-backed growth metrics across international retail and technical e-commerce ecosystems.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {websiteProofs.map((proof, idx) => (
                  <Reveal key={idx} delay={idx * 200} threshold={0.1}>
                    <div className="group glass-card rounded-[3.5rem] overflow-hidden hover:border-fuchsia-500/50 transition-all duration-1000 shadow-2xl bg-slate-900/40 border-white/10">
                      <div className="p-10 border-b border-white/5 bg-slate-800/30 flex items-center justify-between">
                        <span className="text-[14px] font-black text-white uppercase tracking-[0.2em]">{proof.title}</span>
                        <div className="bg-fuchsia-500/10 px-6 py-2 rounded-full border border-fuchsia-500/20">
                           <span className="text-[10px] font-black text-fuchsia-400 uppercase">Growth Verified</span>
                        </div>
                      </div>
                      <div
                        className="relative overflow-hidden aspect-[16/10] border-b border-white/5 cursor-pointer"
                        onClick={() => openFullScreen(websiteProofs, idx)}
                      >
                        <img
                          src={proof.imageUrl}
                          alt={proof.title}
                          className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors duration-1000"></div>
                        {/* Fullscreen hint overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="bg-slate-900/80 backdrop-blur-sm px-6 py-3 rounded-2xl border border-fuchsia-500/30 flex items-center space-x-3">
                            <Maximize2 className="w-5 h-5 text-fuchsia-400" />
                            <span className="text-sm font-semibold text-white">Click to expand</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-12">
                        <p className="text-slate-400 font-medium leading-relaxed text-xl line-clamp-3 group-hover:line-clamp-none transition-all duration-1000">
                          {proof.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* YOUTUBE PROOF SECTION */}
        <section id="proof">
          <Reveal animation="scale">
            <div className="glass-card-dark rounded-[5rem] p-12 md:p-24 text-white overflow-hidden relative border-white/10">
              <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[180px] -mr-96 -mt-96"></div>
              
              <div className="relative z-10 text-center mb-32 max-w-5xl mx-auto">
                <div className="flex justify-center mb-10">
                  <div className="bg-purple-500/10 p-6 rounded-[2rem] border border-purple-500/20 neon-glow-fuchsia">
                    <YoutubeIcon className="w-12 h-12 text-purple-400" />
                  </div>
                </div>
                <h2 className="text-[10px] font-black text-purple-400 uppercase tracking-[0.6em] mb-10">Video Authority Metrics</h2>
                <h3 className="text-5xl md:text-8xl font-black mb-12 tracking-tight leading-[0.9]">
                  YouTube <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Growth Engine</span>
                </h3>
                <p className="text-2xl md:text-3xl text-slate-400 font-medium max-w-3xl mx-auto leading-relaxed">
                  Watch-time scaling and semantic keyword architecture for elite video creators.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {youtubeProofs.map((proof, idx) => (
                  <Reveal key={idx} delay={(idx % 3) * 150} threshold={0.1}>
                    <div className="group bg-slate-900/60 border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-purple-500/40 transition-all duration-1000 shadow-2xl">
                      <div className="p-6 border-b border-white/5 bg-slate-800/40 flex items-center justify-between">
                        <span className="text-[11px] font-black text-slate-300 uppercase tracking-[0.2em]">{proof.title}</span>
                        <TrendingUp className="w-5 h-5 text-fuchsia-400" />
                      </div>
                      <div
                        className="relative overflow-hidden aspect-[16/9] cursor-pointer"
                        onClick={() => openFullScreen(youtubeProofs, idx)}
                      >
                        <img
                          src={proof.imageUrl}
                          alt={proof.title}
                          className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-slate-950/60 group-hover:bg-slate-950/30 transition-colors duration-1000"></div>
                        {/* Fullscreen hint overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="bg-slate-900/80 backdrop-blur-sm px-5 py-2 rounded-xl border border-purple-500/30 flex items-center space-x-2">
                            <Maximize2 className="w-4 h-4 text-purple-400" />
                            <span className="text-xs font-semibold text-white">Click to expand</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              <div className="mt-24 text-center relative z-10">
                <Reveal delay={200}>
                  <Button href={LINKS.WHATSAPP} variant="whatsapp" className="px-20 py-8 shadow-2xl text-xl font-black tracking-tighter neon-glow-fuchsia">
                    SCALE CHANNEL PERFORMANCE
                  </Button>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </section>

        {/* FINAL CALL TO ACTION */}
        <section id="contact">
          <Reveal animation="scale">
            <div className="glass-card-accent rounded-[6rem] p-16 md:p-32 lg:p-48 text-center relative overflow-hidden border-fuchsia-500/30">
              <div className="absolute -top-40 -right-40 w-[800px] h-[800px] bg-fuchsia-600/15 rounded-full blur-[200px]"></div>
              <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-purple-600/15 rounded-full blur-[200px]"></div>
              
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-16 tracking-tighter leading-[0.85]">
                Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">Growth Protocol.</span>
              </h2>
              <p className="text-2xl md:text-4xl text-slate-400 font-medium mb-24 max-w-5xl mx-auto leading-tight">
                Accelerate organic reach and establish digital authority with precision data deployment.
              </p>

              <div className="flex flex-wrap justify-center items-center gap-10">
                <Button href={LINKS.FIVERR} variant="fiverr" className="px-20 py-8 text-2xl font-black uppercase tracking-tighter neon-glow-purple">
                  Fiverr
                </Button>
                <Button href={LINKS.FREELANCER} variant="freelancer" className="px-20 py-8 text-2xl font-black uppercase tracking-tighter">
                  Freelancer
                </Button>
                <Button href={LINKS.WHATSAPP} variant="whatsapp" className="px-20 py-8 text-2xl font-black uppercase tracking-tighter neon-glow-fuchsia">
                  WhatsApp
                </Button>
              </div>
            </div>
          </Reveal>
        </section>

      </main>

      <footer className="mt-40 py-24 px-6">
        <div className="max-w-7xl mx-auto glass-card-dark rounded-[4rem] p-16 md:p-20 flex flex-col lg:flex-row justify-between items-center gap-20 border-white/10 shadow-3xl">
          <div className="flex flex-col items-center lg:items-start">
            <span className="text-5xl font-black text-white tracking-tighter">{BRAND_NAME}</span>
            <span className="text-[12px] text-slate-500 font-black uppercase tracking-[0.6em] mt-6 leading-none">{TITLE}</span>
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-end gap-x-16 gap-y-10">
            <a href={LINKS.FIVERR} className="text-sm font-black text-slate-400 hover:text-white transition-colors uppercase tracking-[0.3em]">Fiverr</a>
            <a href={LINKS.FREELANCER} className="text-sm font-black text-slate-400 hover:text-white transition-colors uppercase tracking-[0.3em]">Freelancer</a>
            <a href={LINKS.LINKEDIN} className="text-sm font-black text-slate-400 hover:text-white transition-colors uppercase tracking-[0.3em]">LinkedIn</a>
            <a href={LINKS.WHATSAPP} className="text-sm font-black text-slate-400 hover:text-white transition-colors uppercase tracking-[0.3em]">WhatsApp</a>
          </div>

          <div className="text-[11px] font-black text-slate-600 tracking-[0.6em] uppercase">
            &copy; {new Date().getFullYear()} • Strategic SEO Intelligence
          </div>
        </div>
      </footer>

      {/* Fullscreen Viewer */}
      <FullScreenViewer
        images={currentViewerImages}
        currentIndex={currentImageIndex}
        isOpen={isViewerOpen}
        onClose={closeFullScreen}
        onNavigate={navigateImage}
      />
    </div>
  );
};

export default App;
