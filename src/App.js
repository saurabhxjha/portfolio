import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      {/* Global Animated Gradient + Blobs Background */}
      <div className="fixed inset-0 -z-30 bg-gradient-to-br from-blue-900 via-purple-800 to-pink-700 bg-[length:200%_200%] animate-gradient" />
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute top-[-12rem] left-[-12rem] w-[40rem] h-[40rem] bg-purple-500/60 rounded-full blur-[120px] animate-blob1" />
        <div className="absolute top-[-10rem] right-[-10rem] w-[36rem] h-[36rem] bg-pink-500/50 rounded-full blur-[100px] animate-blob2" />
        <div className="absolute bottom-[-14rem] left-[-8rem] w-[44rem] h-[44rem] bg-blue-400/50 rounded-full blur-[120px] animate-blob3" />
        <div className="absolute bottom-[-12rem] right-[-14rem] w-[40rem] h-[40rem] bg-yellow-300/40 rounded-full blur-[100px] animate-blob4" />
      </div>
      {/* High-quality animated SVG tech assets */}
      <div className="fixed inset-0 -z-10 pointer-events-none w-full h-full">
        {/* Animated circuit lines */}
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" fill="none" className="absolute left-0 top-0 w-full h-full opacity-10 blur-[1.5px]">
          <g className="animate-float-slow">
            <polyline points="200,300 400,500 600,400 800,600" stroke="#38bdf8" strokeWidth="3" opacity="0.18" fill="none" />
            <polyline points="1400,200 1600,400 1800,300 1900,500" stroke="#a78bfa" strokeWidth="3" opacity="0.13" fill="none" />
            <polyline points="500,900 700,700 900,900 1100,800" stroke="#f472b6" strokeWidth="3" opacity="0.13" fill="none" />
          </g>
        </svg>
        {/* Floating code icons */}
        <svg className="absolute left-[10vw] top-[15vh] w-16 h-16 opacity-20 animate-float" viewBox="0 0 48 48" fill="none">
          <rect x="8" y="8" width="32" height="32" rx="8" fill="#0ea5e9" fillOpacity="0.18" />
          <path d="M18 24L22 28L30 20" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg className="absolute right-[12vw] top-[30vh] w-20 h-20 opacity-15 animate-float-reverse" viewBox="0 0 48 48" fill="none">
          <circle cx="24" cy="24" r="20" fill="#a78bfa" fillOpacity="0.13" />
          <rect x="16" y="16" width="16" height="16" rx="4" fill="#fff" fillOpacity="0.08" />
        </svg>
        {/* Faded 3D shape (cube) */}
        <svg className="absolute left-[60vw] top-[60vh] w-24 h-24 opacity-10 animate-rotate-slow" viewBox="0 0 64 64" fill="none">
          <rect x="8" y="8" width="48" height="48" rx="12" fill="#facc15" fillOpacity="0.10" />
          <rect x="16" y="16" width="32" height="32" rx="8" fill="#fff" fillOpacity="0.06" />
        </svg>
        {/* Faint grid dots pattern */}
        <svg width="100%" height="100%" viewBox="0 0 1920 1080" fill="none" className="absolute left-0 top-0 w-full h-full opacity-10">
          <defs>
            <pattern id="dots2" x="0" y="0" width="36" height="36" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="#fff" fillOpacity="0.08" />
            </pattern>
          </defs>
          <rect width="1920" height="1080" fill="url(#dots2)" />
        </svg>
      </div>
      <div className="relative z-10 bg-black/70 dark:bg-black/80 min-h-screen w-full text-white transition-colors duration-300">
        <Navbar />
        {/* Animated Tech Background Assets */}
        <div className="fixed inset-0 -z-50 pointer-events-none">
          {/* SVG Grid Pattern */}
          <svg width="100%" height="100%" viewBox="0 0 1920 1080" fill="none" className="absolute w-full h-full opacity-20">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="40" height="40" fill="none" />
                <circle cx="20" cy="20" r="1.5" fill="#38bdf8" fillOpacity="0.12" />
              </pattern>
            </defs>
            <rect width="1920" height="1080" fill="url(#grid)" />
          </svg>
          {/* Floating Cube */}
          <div className="absolute left-[10vw] top-[30vh] w-20 h-20 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-400 rounded-2xl shadow-2xl opacity-30 blur-sm animate-spin-slow" />
          {/* Floating Code Icon (Emoji) */}
          <div className="absolute right-[12vw] top-[60vh] text-5xl opacity-40 animate-float-slow select-none">
            💻
          </div>
        </div>
        <main className="pt-20 flex flex-col gap-0">
          <Hero />
          <div className="animate-fadeIn" style={{ animationDelay: '0.2s' }}><About /></div>
          <div className="animate-fadeIn" style={{ animationDelay: '0.3s' }}><Services /></div>
          <div className="animate-fadeIn" style={{ animationDelay: '0.4s' }}><Projects /></div>
          <div className="animate-fadeIn" style={{ animationDelay: '0.6s' }}><Contact /></div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
