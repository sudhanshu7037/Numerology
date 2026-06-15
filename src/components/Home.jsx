import React, { useState } from 'react';
import { Sun, Moon, Heart, User, Compass, Sparkles, ArrowRight, Calendar, RefreshCw, Award, HelpCircle } from 'lucide-react';
import { calculateLifePath } from '../utils/numerologyCalc';

export default function Home({ setCurrentTab, onBeginWithDob }) {
  const [dobInput, setDobInput] = useState('');
  const [miniResult, setMiniResult] = useState(null);
  const [miniLoading, setMiniLoading] = useState(false);

  const handleMiniCalculate = (e) => {
    e.preventDefault();
    if (!dobInput) return;
    setMiniLoading(true);
    setMiniResult(null);

    // Cosmic processing simulation
    setTimeout(() => {
      const result = calculateLifePath(dobInput);
      
      const meanings = {
        1: { title: "The Pioneer & Leader", desc: "Driven by independence, high individuality, and original creative power. You carve unique paths where others follow." },
        2: { title: "The Diplomat & Peacemaker", desc: "Guided by harmony, deep intuition, and cooperation. You excel at healing rifts and resolving conflicts." },
        3: { title: "The Creative Expresser", desc: "Vibrating with artistic expression, joyful communication, and rich social imagination. You bring light to the dark." },
        4: { title: "The Methodical Builder", desc: "Grounded in structure, loyalty, logical discipline, and stability. You construct foundations that endure." },
        5: { title: "The Visionary Adventurer", desc: "Driven by progressive change, freedom, versatility, and multi-faceted experiences. You thrive on expansion." },
        6: { title: "The Loving Nurturer", desc: "Governed by cosmic responsibility, healing power, unconditional care, and deep domestic harmony." },
        7: { title: "The Mystic Seeker", desc: "Aligned with analytical analysis, absolute truth, inner solitude, and deep spiritual intelligence." },
        8: { title: "The Karmic Authority", desc: "Anchored in material mastery, abundance, karmic balance, and powerful executive leadership." },
        9: { title: "The Humane Philanthropist", desc: "Representing universal completion, selfless global service, deep empathy, and artistic completion." },
        11: { title: "The Intuitive Messenger", desc: "Master Vibration of spiritual illumination. You act as an energetic bridge between physical and cosmic realms." },
        22: { title: "The Master Architect", desc: "Master Vibration of practical manifestation. You possess the power to ground grand dreams into physical reality." },
        33: { title: "The Cosmic Guardian", desc: "Master Vibration of pure compassion. You serve as a protective guide, healer, and teacher of teachers." }
      };

      setMiniResult({
        number: result,
        ...meanings[result] || { title: "Cosmic Frequency", desc: "Your unique number frequency holds sacred universal codes." }
      });
      setMiniLoading(false);
    }, 1200);
  };

  const coreNumbers = [
    {
      title: "Life Path",
      subtitle: "Lifetime Trajectory",
      icon: Sun,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      description: "Derived from your birth date, it maps your primary lifetime trajectory, main lessons, and the core path you walk."
    },
    {
      title: "Destiny",
      subtitle: "Innate Potential",
      icon: Moon,
      color: "text-violet-400 bg-violet-500/10 border-violet-500/20",
      description: "Calculated from your full birth name, it reveals your natural capabilities, talents, and what you are destined to build."
    },
    {
      title: "Soul Urge",
      subtitle: "Inner Desires",
      icon: Heart,
      color: "text-rose-400 bg-rose-500/10 border-rose-500/20",
      description: "Determined by vowels in your name, it represents your deepest desires, silent motivations, and what feeds your inner self."
    },
    {
      title: "Personality",
      subtitle: "Outer Vibration",
      icon: User,
      color: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
      description: "Extracted from consonants, it shows how you present yourself to the world and how others perceive your vibration."
    }
  ];

  const masterCards = [
    {
      number: "11",
      archetype: "The Intuitive Messenger",
      frontDesc: "Psychic Gateway & Vision",
      backText: "The 11 vibration acts as a bridge between the spiritual and physical realms. It holds deep intuitive awareness, spiritual illumination, and a high sensitivity to energy."
    },
    {
      number: "22",
      archetype: "The Master Builder",
      frontDesc: "Manifestation & Practical Mastery",
      backText: "The 22 vibration merges the intuitive dreams of the 11 with the disciplined form of the 4, enabling the materialization of large-scale ideals and global goals."
    },
    {
      number: "33",
      archetype: "The Master Teacher",
      frontDesc: "Pure Devotion & Divine Guidance",
      backText: "The 33 vibration represents the teacher of teachers. It is centered around ultimate spiritual protection, unconditional compassion, healing, and artistic devotion."
    }
  ];

  const steps = [
    {
      num: "01",
      title: "Input Coordinates",
      desc: "Enter your full birth name letters and exact date of birth coordinates."
    },
    {
      num: "02",
      title: "Decrypt Frequencies",
      desc: "Our Pythagorean engine maps the letters and numbers into core vibrational grids."
    },
    {
      num: "03",
      title: "Align & Manifest",
      desc: "Receive your PDF analysis and email confirmation detailing your cosmic blueprints."
    }
  ];

  return (
    <div className="w-full space-y-16 animate-fade-in text-center">
      
      {/* Hero Section Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-8 sm:py-12 glass-panel rounded-3xl border border-mystic-gold/15 overflow-hidden shadow-2xl pulse-gold-glow bg-gradient-to-b from-mystic-purple/20 via-mystic-dark/10 to-transparent p-6 sm:p-10 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        {/* Left Side: Text and CTA */}
        <div className="lg:col-span-6 space-y-6 text-left relative z-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mystic-gold/10 border border-mystic-gold/30 text-[10px] font-semibold text-mystic-gold uppercase tracking-[0.25em] animate-pulse">
            <Sparkles className="h-3 w-3" />
            Pythagorean Esoteric Engine
          </div>
          
          <h2 className="font-serif text-3xl sm:text-5xl font-extrabold text-white tracking-wider leading-tight">
            Unlock the Mysteries of Your <span className="text-mystic-gold glow-gold block sm:inline">Cosmic Code</span>
          </h2>
          
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans">
            Every name and birth date vibrates with a hidden mathematical signature. Aetheria calculates your cosmic configurations to align your character, desires, and actions with the universe.
          </p>

          <div className="pt-2">
            <button
              onClick={() => setCurrentTab('form')}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-base font-bold bg-mystic-gold text-mystic-dark hover:bg-mystic-gold-light hover:scale-[1.02] active:scale-95 transition-all duration-300 shadow-lg shadow-mystic-gold/25 cursor-pointer border-t border-amber-300"
            >
              <Compass className="h-5 w-5 animate-spin-slow group-hover:rotate-45 transition-transform" />
              Begin Your Calculation
              <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Right Side: Interactive Mini Calculator Widget */}
        <div className="lg:col-span-6 relative z-10 w-full max-w-md mx-auto">
          {/* Circular Orbit Backdrops floating behind card */}
          <div className="absolute -top-10 -right-10 w-48 h-48 bg-mystic-gold/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

          <div className="glass-panel p-6 rounded-3xl border border-white/10 bg-mystic-dark/80 relative overflow-hidden shadow-2xl min-h-[300px] flex flex-col justify-center">
            
            {miniLoading ? (
              <div className="flex flex-col items-center justify-center space-y-4 py-8 animate-pulse">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <div className="absolute inset-0 border-2 border-dashed border-mystic-gold/30 rounded-full animate-orbit-3" />
                  <div className="absolute inset-2 border border-dotted border-violet-500/50 rounded-full animate-orbit-2" />
                  <Compass className="h-6 w-6 text-mystic-gold animate-spin" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-serif text-sm font-semibold tracking-wider text-mystic-gold uppercase">Aligning Coordinates</h4>
                  <p className="text-[10px] text-gray-400 font-sans">Scanning Pythagorean frequencies...</p>
                </div>
              </div>
            ) : miniResult ? (
              <div className="space-y-4 text-center animate-fade-in">
                <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                  {/* Glowing pulse rings */}
                  <div className="absolute inset-0 border border-dashed border-mystic-gold/30 rounded-full animate-orbit-3" />
                  <div className="absolute inset-2 border border-dotted border-violet-500/40 rounded-full animate-orbit-2" />
                  
                  {/* Center Number Block */}
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-mystic-gold via-amber-400 to-yellow-300 flex items-center justify-center text-mystic-dark font-serif font-black text-3xl shadow-[0_0_20px_rgba(245,158,11,0.5)] animate-float">
                    {miniResult.number}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[9px] uppercase font-bold tracking-widest text-mystic-gold bg-mystic-gold/10 px-2.5 py-0.5 rounded-full border border-mystic-gold/20 inline-block">
                    Your Life Path Vibration
                  </span>
                  <h4 className="font-serif text-lg font-bold text-white tracking-wide">{miniResult.title}</h4>
                  <p className="text-[11px] leading-relaxed text-gray-300 font-sans max-w-[280px] mx-auto">
                    {miniResult.desc}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 justify-center items-center pt-2">
                  <button
                    onClick={() => onBeginWithDob(dobInput)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold bg-mystic-gold text-mystic-dark hover:bg-mystic-gold-light hover:scale-105 active:scale-95 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <Award className="h-3.5 w-3.5" />
                    Get Full Analysis
                  </button>
                  <button
                    onClick={() => {
                      setMiniResult(null);
                      setDobInput('');
                    }}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-medium bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                  >
                    <RefreshCw className="h-3.5 w-3.5" />
                    Try Another
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleMiniCalculate} className="space-y-4">
                <div className="text-center space-y-1">
                  <h3 className="font-serif text-lg font-bold text-white tracking-wide">
                    Instant Life Path Calculation
                  </h3>
                  <p className="text-gray-400 text-xs font-sans">
                    Reveal your primary cosmic frequency right now.
                  </p>
                </div>

                <div className="space-y-2 text-left">
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5 text-mystic-gold" />
                    Select Date of Birth
                  </label>
                  <input
                    type="date"
                    required
                    value={dobInput}
                    onChange={(e) => setDobInput(e.target.value)}
                    className="w-full bg-mystic-dark border border-white/10 focus:border-mystic-gold/40 rounded-xl px-4 py-3 text-sm text-gray-200 outline-none transition-all placeholder:text-gray-650 font-sans"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold bg-mystic-gold text-mystic-dark hover:bg-mystic-gold-light hover:scale-[1.01] active:scale-[0.99] transition-all shadow-md shadow-mystic-gold/10 cursor-pointer"
                >
                  <Compass className="h-4 w-4" />
                  Calculate Frequency
                </button>
              </form>
            )}

          </div>
        </div>
      </section>

      {/* Core Blueprints Cards Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
            The Four Core Blueprints
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm">
            Discover the mathematical building blocks of your spiritual character
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreNumbers.map((number, idx) => {
            const IconComponent = number.icon;
            return (
              <div
                key={idx}
                className="glass-panel p-6 rounded-3xl border border-white/5 bg-mystic-purple/10 flex flex-col justify-between items-start transition-all duration-500 hover:border-mystic-gold/30 hover:bg-mystic-purple/20 hover:-translate-y-2 group shadow-xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.5)]"
              >
                <div className="space-y-4 text-left">
                  <div className={`p-3 rounded-2xl border shrink-0 w-fit ${number.color} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-serif text-lg font-bold text-white tracking-wide group-hover:text-mystic-gold transition-colors">
                      {number.title}
                    </h4>
                    <span className="text-[9px] font-semibold text-violet-300 uppercase tracking-wider block font-mono">
                      {number.subtitle}
                    </span>
                  </div>
                  <p className="text-gray-400 text-[11px] leading-relaxed font-sans">
                    {number.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* How it Works / Alignment Workflow Map */}
      <section className="space-y-8 py-4">
        <div className="text-center space-y-2">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Cosmic Alignment Map
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm">
            The mathematical journey to map your frequency configurations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto px-4">
          {steps.map((step, idx) => (
            <div key={idx} className="relative flex flex-col items-center text-center space-y-4 group">
              {/* Connecting animated line for desktop */}
              {idx < 2 && (
                <div className="hidden md:block absolute top-[28px] left-[60%] w-[80%] border-t border-dashed border-mystic-gold/20 z-0 pointer-events-none group-hover:border-mystic-gold/45 transition-colors duration-500" />
              )}
              
              <div className="relative z-10 w-14 h-14 rounded-full border border-white/10 bg-mystic-dark flex items-center justify-center font-serif text-lg font-black text-mystic-gold-light group-hover:border-mystic-gold/50 shadow-md group-hover:scale-105 transition-all duration-300">
                {step.num}
              </div>
              <div className="space-y-1">
                <h4 className="font-serif text-base font-bold text-white tracking-wide group-hover:text-mystic-gold transition-colors">
                  {step.title}
                </h4>
                <p className="text-gray-400 text-xs leading-relaxed max-w-[240px] mx-auto font-sans">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3D Interactive Master Numbers Flip Cards */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
            Sacred Master Vibrations
          </h3>
          <p className="text-gray-400 text-xs sm:text-sm">
            Hover over the master configurations to flip and reveal their deeper meanings
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {masterCards.map((card, idx) => (
            <div key={idx} className="flip-card w-full h-[220px]">
              <div className="flip-card-inner w-full h-full">
                
                {/* Front Side */}
                <div className="flip-card-front w-full h-full flex flex-col justify-center items-center border border-white/5 bg-mystic-purple/20 glass-panel p-6 shadow-xl relative overflow-hidden">
                  {/* Micro gradient shine */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-mystic-gold/2 to-transparent pointer-events-none" />
                  <span className="font-serif text-5xl font-black text-mystic-gold glow-gold mb-2 block">
                    {card.number}
                  </span>
                  <h4 className="text-sm font-serif font-bold text-white tracking-wider uppercase">
                    {card.archetype}
                  </h4>
                  <span className="text-[10px] text-violet-300 tracking-widest uppercase mt-2 font-mono">
                    {card.frontDesc}
                  </span>
                </div>

                {/* Back Side */}
                <div className="flip-card-back w-full h-full flex flex-col justify-center items-center border border-mystic-gold/30 bg-mystic-purple/50 glass-panel p-6 shadow-2xl">
                  <h4 className="text-xs font-serif font-bold text-mystic-gold tracking-widest uppercase mb-2">
                    {card.archetype}
                  </h4>
                  <p className="text-[11px] leading-relaxed text-gray-300 font-sans">
                    {card.backText}
                  </p>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Quote Banner */}
      <section className="glass-panel p-8 rounded-3xl border border-white/5 text-center relative overflow-hidden bg-gradient-to-r from-mystic-indigo/10 to-mystic-purple/10 max-w-2xl mx-auto pulse-purple-glow">
        <div className="max-w-xl mx-auto space-y-4">
          <p className="font-serif text-base sm:text-lg italic text-violet-300">
            "Numbers rule the universe. They are the symbols of divine order, aligning the soul with the harmony of the spheres."
          </p>
          <span className="block text-[10px] uppercase tracking-widest text-mystic-gold font-bold">
            — Pythagoras of Samos
          </span>
        </div>
      </section>

    </div>
  );
}
