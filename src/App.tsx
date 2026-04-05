import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  Globe, 
  Star, 
  Menu, 
  X, 
  Play,
  Wallet,
  Search,
  Lock,
  MoveRight,
  PhoneCall,
  Users,
  Activity,
  Clock,
  Settings,
  MousePointer2,
  Cpu,
  CreditCard
} from 'lucide-react';
import { useState, useRef, useEffect, useMemo } from 'react';
import { Button } from '@/src/components/ui/button';
import { BlurFade } from '@/src/components/ui/blur-fade';
import { BorderBeam } from '@/src/components/ui/border-beam';
import PricingSection4 from '@/src/components/ui/pricing-section-4';
import GradientButton from '@/src/components/ui/button-1';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="glass-card rounded-full px-6 py-2 flex items-center justify-between shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Zap className="text-white w-5 h-5 fill-white" />
          </div>
          <span className="text-xl font-black tracking-tighter">QuickPaie</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Accueil', 'Fonctionnalités', 'Tarifs', 'Blog'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex text-white/70 hover:text-white">
            Connexion
          </Button>
          <Button size="sm" className="rounded-full px-6 bg-white text-black hover:bg-white/90">
            Démarrer →
          </Button>
          <button className="md:hidden ml-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 right-0 mt-4 glass-card rounded-3xl p-6 flex flex-col gap-4"
        >
          {['Accueil', 'Fonctionnalités', 'Tarifs', 'Blog'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="text-lg font-medium text-white/70"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Intelligente", "Automatisée", "Fluide", "Précise", "Moderne"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2500);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section className="relative pt-32 md:pt-48 pb-20 md:pb-32 px-6 min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Orbs */}
      <div className="glow-orb w-[800px] h-[800px] bg-primary/10 -top-40 -left-40 animate-pulse-glow" />
      <div className="glow-orb w-[600px] h-[600px] bg-secondary/10 bottom-0 -right-20 animate-pulse-glow" style={{ animationDelay: '2s' }} />
      
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Main Hero Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 relative group"
        >
          <div className="w-full h-full glass-card p-8 md:p-16 rounded-[40px] relative overflow-hidden flex flex-col justify-center min-h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <BlurFade delay={0.1} inView>
                <div className="mb-8 inline-block">
                  <span className="font-handwritten text-secondary text-3xl -rotate-6 inline-block drop-shadow-[0_0_10px_rgba(0,204,255,0.5)]">
                    Nouveau standard 2026
                  </span>
                </div>
              </BlurFade>
              
              <BlurFade delay={0.2} inView>
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.85] mb-10">
                  <span className="text-white/40">[</span> La Paie <span className="text-white/40">]</span> Qui Est <br />
                  <span className="relative flex w-full overflow-hidden h-[1.4em] py-2">
                    {titles.map((title, index) => (
                      <motion.span
                        key={index}
                        className="absolute left-0 font-handwritten text-secondary selection:text-white drop-shadow-[0_0_10px_rgba(0,204,255,0.5)]"
                        initial={{ opacity: 0, y: 50 }}
                        animate={
                          titleNumber === index
                            ? { y: 0, opacity: 1 }
                            : { y: titleNumber > index ? -50 : 50, opacity: 0 }
                        }
                        transition={{ type: "spring", stiffness: 100, damping: 20 }}
                      >
                        {title}
                      </motion.span>
                    ))}
                  </span>
                </h1>
              </BlurFade>
              
              <BlurFade delay={0.3} inView>
                <p className="text-white/60 font-light text-lg md:text-xl max-w-xl mb-12 leading-relaxed">
                  Éliminez la complexité administrative avec notre moteur de paie intelligent conçu pour les entreprises de demain. <span className="text-secondary font-bold">Sécurisé, Rapide, Fiable.</span>
                </p>
              </BlurFade>
              
              <BlurFade delay={0.4} inView>
                <div className="flex flex-wrap gap-6">
                <GradientButton className="w-full sm:w-[220px]" height="60px">
                  Essai Gratuit
                </GradientButton>
                <button className="rounded-full h-14 px-10 border-none bg-white/5 hover:bg-white/10 text-white font-medium transition-colors flex items-center gap-2">
                  <Play className="w-5 h-5 fill-white" /> Voir Démo
                </button>
              </div>
              </BlurFade>
            </div>
          </div>
        </motion.div>
        
        {/* Side Visual Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-5 glass-card p-10 rounded-[40px] flex flex-col justify-between relative bg-black/40 overflow-hidden min-h-[600px]"
        >
          <div className="flex justify-between items-center mb-12">
            <span className="text-white/40 uppercase tracking-widest text-[10px] font-black">Performance en temps réel</span>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-secondary">LIVE</span>
              <div className="w-2 h-2 rounded-full bg-secondary shadow-[0_0_15px_#00CCFF] animate-pulse" />
            </div>
          </div>
          
          <div className="relative h-64 w-full flex items-center justify-center overflow-hidden">
            <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid meet">
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                d="M0,150 Q50,140 100,100 T200,80 T300,120 T400,20" 
                fill="none" 
                stroke="url(#gradient-hero)" 
                strokeWidth="5"
                strokeLinecap="round"
              />
              <defs>
                <linearGradient id="gradient-hero" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0066FF" />
                  <stop offset="100%" stopColor="#00CCFF" />
                </linearGradient>
              </defs>
              <motion.circle 
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ repeat: Infinity, duration: 2 }}
                cx="400" cy="20" r="8" fill="#00CCFF" 
              />
            </svg>
          </div>
          
          <div className="grid grid-cols-2 gap-6 mt-10">
            <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-md relative overflow-hidden">
              <div className="text-white/40 text-[10px] uppercase font-black mb-1">Traitement</div>
              <div className="text-3xl font-bold tracking-tighter">0.8ms</div>
            </div>
            <div className="p-6 rounded-3xl bg-white/5 backdrop-blur-md relative overflow-hidden">
              <div className="text-white/40 text-[10px] uppercase font-black mb-1">Précision</div>
              <div className="text-3xl font-bold tracking-tighter">100%</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Stats = () => {
  return (
    <section className="py-12 md:py-16 bg-black/50 backdrop-blur-xl relative z-10">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
        {[
          { label: 'Utilisateurs', value: '12,000+', icon: Users },
          { label: 'Uptime', value: '99.99%', icon: Activity },
          { label: 'Setup', value: '2 min', icon: Clock },
          { label: 'Paie traitée', value: '$3.5B+', icon: Zap },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center flex flex-col items-center"
          >
            <stat.icon className="w-5 h-5 text-secondary mb-3 opacity-50" />
            <div className="text-3xl md:text-5xl font-black text-white tracking-tighter">{stat.value}</div>
            <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-2">{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Features = () => {
  const features = [
    { icon: Zap, title: 'Automatisation Totale', desc: 'Déclenchez les virements et générez les bulletins en un clic.', color: 'text-primary' },
    { icon: ShieldCheck, title: 'Conformité DSN', desc: 'Mises à jour légales en temps réel sans intervention manuelle.', color: 'text-secondary', active: true },
    { icon: BarChart3, title: 'Analytics IA', desc: 'Visualisez vos coûts salariaux avec une précision chirurgicale.', color: 'text-primary' },
    { icon: Globe, title: 'Multi-Devises', desc: 'Gérez vos équipes internationales en toute simplicité.', color: 'text-secondary' },
  ];

  return (
    <section id="fonctionnalités" className="py-16 md:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto mb-16 md:mb-24 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl font-black tracking-tighter mb-6"
        >
          Fonctionnalités <span className="text-gradient">Premium</span>
        </motion.h2>
        <p className="text-white/50 font-light text-lg md:text-xl max-w-2xl mx-auto">La puissance de la technologie au service de votre excellence financière.</p>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {features.map((f, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -10 }}
            className={`glass-card p-10 rounded-[40px] flex flex-col h-full group transition-all relative overflow-hidden`}
          >
            <div className="relative z-10">
              <f.icon className={`${f.color} mb-8 w-12 h-12`} />
              <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
              <p className="text-white/50 font-light text-base mb-10 flex-grow leading-relaxed">{f.desc}</p>
              <Button size="icon" className="rounded-full w-12 h-12 bg-white/5 hover:bg-primary text-white border-none transition-all">
                <ArrowRight className="w-5 h-5 -rotate-45" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Intelligence = () => {
  return (
    <section className="py-16 md:py-32 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 flex flex-col justify-center">
          <motion.h2 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-8xl font-black tracking-tighter mb-10 md:mb-16 italic leading-[0.85]"
          >
            Intelligence de <br /> <span className="text-secondary">Paie Pure</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-card p-10 rounded-[40px] relative overflow-hidden"
            >
              <BorderBeam duration={10} borderWidth={1} lightColor="#0066FF" />
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-8">
                <Zap className="text-primary w-7 h-7" />
              </div>
              <h4 className="font-bold text-2xl mb-4">Calculateur Dynamique</h4>
              <p className="text-white/40 text-base font-light leading-relaxed">
                Calculs instantanés basés sur 400+ variables conventionnelles et mises à jour en temps réel.
              </p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="glass-card p-10 rounded-[40px] relative overflow-hidden"
            >
              <BorderBeam duration={12} borderWidth={1} lightColor="#00CCFF" />
              <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-8">
                <Lock className="text-secondary w-7 h-7" />
              </div>
              <h4 className="font-bold text-2xl mb-4">Coffre-fort Numérique</h4>
              <p className="text-white/40 text-base font-light leading-relaxed">
                Archivage sécurisé à vie pour tous vos collaborateurs, conforme aux normes RGPD les plus strictes.
              </p>
            </motion.div>
          </div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-4 glass-card rounded-[50px] overflow-hidden relative group min-h-[500px]"
        >
          <img 
            className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000" 
            src="https://picsum.photos/seed/finance/800/1200" 
            alt="Dashboard Vision"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-12 flex flex-col justify-end">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              className="bg-secondary text-black px-5 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest w-fit mb-6"
            >
              NOUVEAU
            </motion.div>
            <h3 className="text-4xl font-black mb-4">Dashboard Vision</h3>
            <p className="text-white/60 text-base leading-relaxed">Une vue d'ensemble révolutionnaire sur votre capital humain.</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Steps = () => {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto text-center mb-20 md:mb-32">
        <h2 className="text-4xl md:text-7xl font-black tracking-tighter">Trois étapes vers la liberté</h2>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
        {[
          { num: '01', title: 'Connexion Rapide', desc: "Importez vos données depuis n'importe quel logiciel RH en quelques secondes.", icon: MousePointer2 },
          { num: '02', title: 'Moteur de Paie', desc: "Notre algorithme vérifie 25 points de contrôle légaux pour chaque fiche.", highlight: true, icon: Cpu },
          { num: '03', title: 'Paiement Instantané', desc: "Validez le virement groupé et vos employés reçoivent leurs fonds immédiatement.", icon: CreditCard },
        ].map((step, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="relative"
          >
            <div className="text-[100px] md:text-[150px] font-black text-white/[0.03] absolute -top-20 md:-top-32 -left-8 md:-left-12 z-0 select-none">{step.num}</div>
            <div className={`glass-card p-8 md:p-12 rounded-[40px] md:rounded-[50px] relative z-10 h-full overflow-hidden`}>
              <BorderBeam duration={15} borderWidth={1} lightColor={i % 2 === 0 ? "#0066FF" : "#00CCFF"} />
              <step.icon className="w-10 h-10 text-secondary mb-6 opacity-80" />
              <h3 className="text-2xl md:text-3xl font-bold mb-6">{step.title}</h3>
              <p className="text-white/50 font-light text-base md:text-lg leading-relaxed">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: 'Starter', price: '49', desc: 'Pour les équipes de moins de 10 personnes.', features: ['Paie automatisée', 'DSN simplifiée', 'Support email'] },
    { name: 'Growth', price: '129', desc: 'Pour les entreprises en pleine expansion.', features: ['Tout de Starter', 'Analytics IA illimités', 'Support prioritaire 24/7'], popular: true },
    { name: 'Enterprise', price: 'Custom', desc: 'Solutions sur mesure pour grands groupes.', features: ['Onboarding dédié', 'Sécurité multi-niveaux', 'API personnalisée'], gradient: true },
  ];

  return (
    <section id="tarifs" className="py-32 px-6">
      <div className="max-w-7xl mx-auto text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter">Tarification Transparente</h2>
        <p className="text-white/50 mt-6 text-xl">Pas de frais cachés, juste de la valeur pure.</p>
      </div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {plans.map((plan, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`glass-card p-12 rounded-[50px] flex flex-col h-full relative overflow-hidden`}
          >
            {(plan.popular || plan.gradient) && (
              <BorderBeam 
                duration={8} 
                borderWidth={1.5} 
                lightColor={plan.popular ? "#0066FF" : "#00CCFF"} 
              />
            )}
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-[10px] font-black uppercase tracking-widest px-6 py-1.5 rounded-full shadow-[0_0_20px_rgba(0,102,255,0.5)]">
                Plus Populaire
              </div>
            )}
            
            <div className={`${plan.popular ? 'text-primary' : 'text-white/40'} uppercase tracking-widest text-[10px] font-black mb-10`}>
              {plan.name}
            </div>
            
            <div className={`text-6xl font-black mb-6 ${plan.gradient ? 'text-gradient' : ''}`}>
              {plan.price}{plan.price !== 'Custom' && <span className="text-2xl font-light text-white/40">/mo</span>}
            </div>
            
            <p className="text-white/50 text-base mb-12 leading-relaxed">{plan.desc}</p>
            
            <ul className="space-y-5 mb-14 flex-grow">
              {plan.features.map((f, j) => (
                <li key={j} className="flex items-center gap-4 text-base text-white/80">
                  <CheckCircle2 className="text-secondary w-6 h-6" /> {f}
                </li>
              ))}
            </ul>
            
            <Button 
              size="lg" 
              variant={plan.popular ? 'default' : 'outline'}
              className={`w-full rounded-full border-none ${plan.popular ? 'bg-primary text-white shadow-[0_0_30px_rgba(0,102,255,0.4)]' : 'bg-white/5 text-white hover:bg-white/10'}`}
            >
              Choisir {plan.name}
            </Button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="glow-orb w-[1000px] h-[1000px] bg-primary/10 bottom-[-500px] left-1/2 -translate-x-1/2" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto glass-card p-16 md:p-32 rounded-[80px] text-center relative z-10 overflow-hidden"
      >
        <BorderBeam duration={12} borderWidth={2} lightColor="#00CCFF" />
        <div className="mb-10">
          <span className="font-handwritten text-secondary text-4xl -rotate-2 inline-block drop-shadow-[0_0_10px_rgba(0,204,255,0.5)]">
            C'est le moment !
          </span>
        </div>
        
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter mb-16 leading-[0.85]">
          Prêt à simplifier <br /> <span className="text-gradient">votre paie ?</span>
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <GradientButton className="w-full sm:w-[280px]" height="70px">
            Démarrer Maintenant
          </GradientButton>
          <button className="rounded-full px-16 py-8 text-xl border-none bg-white/5 hover:bg-white/10 text-white font-medium transition-colors">
            Voir Démo
          </button>
        </div>
        
        {/* Rotating Circular Text */}
        <div className="absolute -right-16 -bottom-16 opacity-10 hidden lg:block">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="w-64 h-64 relative"
          >
            <svg className="w-full h-full" viewBox="0 0 200 200">
              <path id="circlePathCTA" d="M 100, 100 m -80, 0 a 80,80 0 1,0 160,0 a 80,80 0 1,0 -160,0" fill="none" />
              <text className="text-[10px] font-black uppercase tracking-[10px] fill-white">
                <textPath xlinkHref="#circlePathCTA">QUICKPAIE • SMART FINANCE • FUTURE OF WORK • </textPath>
              </text>
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-16 md:py-32 px-6 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <span className="font-handwritten text-secondary text-2xl md:text-3xl -rotate-2 inline-block mb-4">
            Parlons de votre projet
          </span>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter">Contactez-nous</h2>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-8 md:p-16 rounded-[60px] relative overflow-hidden"
        >
          <BorderBeam duration={15} borderWidth={1.5} lightColor="#0066FF" />
          
          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Nom Complet</label>
              <input 
                type="text" 
                placeholder="Jean Dupont"
                className="w-full bg-white/5 border-none rounded-full px-8 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Email Professionnel</label>
              <input 
                type="email" 
                placeholder="jean@entreprise.fr"
                className="w-full bg-white/5 border-none rounded-full px-8 py-4 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              />
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Votre Message</label>
              <textarea 
                rows={4}
                placeholder="Comment pouvons-nous vous aider ?"
                className="w-full bg-white/5 border-none rounded-[30px] px-8 py-6 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
              />
            </div>
            <div className="md:col-span-2 flex justify-center mt-4">
              <GradientButton className="w-full" height="70px">
                Envoyer le Message
              </GradientButton>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black w-full px-8 md:px-16 pt-40 pb-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-10">
            <Zap className="text-primary w-8 h-8 fill-primary" />
            <span className="text-3xl font-black tracking-tighter">QuickPaie</span>
          </div>
          <p className="text-white/40 font-light text-base leading-relaxed mb-10">
            La technologie financière de nouvelle génération pour les entreprises qui voient loin.
          </p>
          <div className="flex gap-6">
            {['Twitter', 'LinkedIn', 'GitHub'].map(s => (
              <a key={s} href="#" className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group">
                <span className="sr-only">{s}</span>
                <Globe className="w-5 h-5 text-white/40 group-hover:text-white transition-colors" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-black uppercase tracking-widest text-[10px] text-white mb-10">Produit</h4>
          <ul className="space-y-5">
            {['Fonctionnalités', 'Sécurité', 'Intégrations', 'API'].map(item => (
              <li key={item}>
                <a href="#" className="text-white/40 hover:text-secondary transition-all text-base font-light hover:translate-x-1 inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-black uppercase tracking-widest text-[10px] text-white mb-10">Entreprise</h4>
          <ul className="space-y-5">
            {['À propos', 'Blog', 'Carrières', 'Presse'].map(item => (
              <li key={item}>
                <a href="#" className="text-white/40 hover:text-secondary transition-all text-base font-light hover:translate-x-1 inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="font-black uppercase tracking-widest text-[10px] text-white mb-10">Légal</h4>
          <ul className="space-y-5">
            {['Confidentialité', 'Mentions Légales', 'RGPD', 'Cookies'].map(item => (
              <li key={item}>
                <a href="#" className="text-white/40 hover:text-secondary transition-all text-base font-light hover:translate-x-1 inline-block">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-40 pt-16 flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-white/30 text-sm font-light">
          © 2026 QuickPaie. Tous droits réservés. Fabriqué avec passion pour le futur de la finance.
        </div>
        <div className="flex gap-10 text-[10px] uppercase font-black tracking-widest text-white/20">
          <a href="#" className="hover:text-white transition-colors">Status</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="font-sans selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Intelligence />
      <Steps />
      <PricingSection4 />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
