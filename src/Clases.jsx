import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Code, BookOpen, Award, Users, CheckCircle, Calendar, Star, Shield, Plus, Globe, Banknote, Key, Smartphone, CreditCard, ArrowUpRight, Video, Quote, TrendingUp, Briefcase } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaTelegram, FaYoutube, FaPinterest, FaSnapchat, FaDiscord } from 'react-icons/fa';
import XImage from './assets/X2.png';
import kickImage from './assets/kick.png';

const Clases = () => {
  const [activeSection, setActiveSection] = useState('clases-hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [_showReviewModal, _setShowReviewModal] = useState(false);
  const navigate = useNavigate();
  const whatsappLink = 'https://wa.me/573219541241?text=Hola%20Juan%20Pablo%2C%20quiero%20agendar%20mi%20clase%201%20a%201';
  const currentYear = new Date().getFullYear();

  const testimonials = [
    {
      name: "María González",
      role: "Principiante en Programación",
      company: "Estudiante de Desarrollo Web",
      testimonial: "Empecé desde cero y Juan Pablo me guió paso a paso. Sus clases 1 a 1 hicieron que aprender JavaScript fuera divertido y práctico. Ahora puedo crear mis propias páginas web. ¡Recomiendo sus clases al 100%!",
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      name: "Sofia Ramírez",
      role: "Estudiante de Ingeniería",
      company: "Universidad Nacional",
      testimonial: "Las clases personalizadas de Juan Pablo me ayudaron a entender conceptos complejos de algoritmos y estructuras de datos. Mejoré mis notas y ahora programo con confianza. El material incluido es excelente.",
      rating: 5,
      avatar: "👩‍🎓"
    },
    {
      name: "Carlos Rodríguez",
      role: "Cambio de Carrera",
      company: "De Marketing a Desarrollo",
      testimonial: "Quería cambiar de carrera y Juan Pablo me dio el empujón perfecto. Sus clases prácticas y proyectos reales me prepararon para mi nuevo rol como desarrollador. ¡Increíble experiencia!",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Miguel Ángel",
      role: "Desarrollador Junior",
      company: "Clases de Programación Avanzada",
      testimonial: "Las clases personalizadas de Juan Pablo fueron increíbles. Aprendí programación de manera práctica y aplicada. Los materiales y el certificado que incluye son un plus excelente.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Roberto Silva",
      role: "Emprendedor Tecnológico",
      company: "Startup de Software",
      testimonial: "Necesitaba aprender Python para mi proyecto y Juan Pablo me enseñó desde lo básico hasta crear una aplicación funcional. Su enfoque práctico es perfecto para emprendedores.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Pedro Martínez",
      role: "Estudiante Secundario",
      company: "Preparación para Universidad",
      testimonial: "Las clases de Juan Pablo me prepararon para mi carrera en ingeniería de sistemas. Aprendí lógica de programación y ahora me siento listo para la universidad. ¡Excelente profesor!",
      rating: 5,
      avatar: "👨‍🎓"
    },
  ];

  useEffect(() => {
    const sections = [
      'clases-hero', 'clases-valor', 'clases-aquien', 'clases-beneficios', 'clases-proceso', 'clases-cta'
    ];

    const onScroll = () => {
      const scrollPos = window.scrollY + 120;
      sections.forEach(id => {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop && scrollPos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">

      {/* NAVBAR */}
      <nav className="fixed top-4 left-0 right-0 mx-2 sm:mx-4 w-auto z-50 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl">
        <div className="container mx-auto px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              @juannppgd
            </button>

            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-8">
                {[
                  ['clases-hero', 'Inicio'],
                  ['clases-valor', 'Valor'],
                  ['clases-aquien', '¿Para quién?'],
                  ['clases-beneficios', 'Beneficios'],
                  ['clases-m365', 'M365 Excel'],
                  ['clases-proceso', 'Proceso'],
                  ['clases-cta', 'Agenda']
                ].map(([id, label]) => (
                  <button
                    key={id}
                    onClick={() => scrollTo(id)}
                    className={`capitalize transition-all duration-300 ${
                      activeSection === id
                        ? 'text-cyan-400 scale-110'
                        : 'text-white/70 hover:text-white'
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed top-20 left-0 right-0 mx-2 sm:mx-4 z-40 bg-slate-900/95 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl lg:hidden">
          <div className="flex flex-col space-y-4 p-4">
            {[
              ['clases-hero', 'Inicio'],
              ['clases-valor', 'Valor'],
              ['clases-aquien', '¿Para quién?'],
              ['clases-beneficios', 'Beneficios'],
              ['clases-m365', 'M365 Excel'],
              ['clases-proceso', 'Proceso'],
              ['clases-cta', 'Agenda']
            ].map(([id, label]) => (
              <button key={id} onClick={() => { scrollTo(id); setIsMobileMenuOpen(false); }} className={`capitalize transition-all duration-300 text-left ${
                activeSection === id
                  ? 'text-cyan-400'
                  : 'text-white/70 hover:text-white'
              }`}>{label}</button>
            ))}
          </div>
        </div>
      )}

      {/* HERO */}
      <section id="clases-hero" className="min-h-screen flex items-center justify-center text-center px-6 pt-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
              Domina la programación con clases
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                1 a 1 Personalizadas
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Aprende haciendo: clases prácticas, proyectos reales y acompañamiento continuo.
              <span className="block mt-2 text-cyan-400 font-medium">Material y certificado incluidos.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center animate-fade-in-up delay-300">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
              <Calendar className="w-6 h-6 group-hover:animate-bounce" />
              <span>Agenda tu clase 1 a 1</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <button
              onClick={() => scrollTo('clases-beneficios')}
              className="group text-lg text-white/90 hover:text-cyan-400 underline underline-offset-4 hover:underline-offset-8 transition-all duration-300 hover:scale-105"
            >
              Ver beneficios
              <div className="w-0 group-hover:w-full h-0.5 bg-cyan-400 transition-all duration-300"></div>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-400 animate-fade-in-up delay-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>100% Personalizado</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-400" />
              <span>5.0 Calificación</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-cyan-400" />
              <span>+50 Estudiantes</span>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section id="clases-valor" className="px-6 py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                Propuesta de valor
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed">
                Una experiencia de aprendizaje única, diseñada específicamente para tu éxito en la programación.
              </p>
            </div>

            <ul className="space-y-6">
              <li className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-3 rounded-xl flex items-center group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <strong className="text-xl font-bold text-white mb-2 block">Clases personalizadas</strong>
                  <div className="text-slate-300 leading-relaxed">Adaptadas a tu nivel, ritmo y objetivos (desde cero hasta avanzado).</div>
                </div>
              </li>

              <li className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 p-3 rounded-xl flex items-center group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <strong className="text-xl font-bold text-white mb-2 block">Enfoque práctico</strong>
                  <div className="text-slate-300 leading-relaxed">Aprendes construyendo: ejercicios guiados, mini-proyectos y código revisado a fondo.</div>
                </div>
              </li>

              <li className="group flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-pink-500/10 to-orange-500/10 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-r from-pink-400 to-orange-500 p-3 rounded-xl flex items-center group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <strong className="text-xl font-bold text-white mb-2 block">Material y certificado</strong>
                  <div className="text-slate-300 leading-relaxed">Documentos, ejercicios y certificado al finalizar cada curso o plan.</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-50"></div>
            <div className="relative rounded-3xl p-8 bg-gradient-to-br from-slate-800/60 to-purple-900/40 border border-white/10 shadow-2xl backdrop-blur-sm">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-black mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">¿Qué incluye?</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto"></div>
              </div>

              <ul className="space-y-4">
                <li className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">Clases en vivo 1 a 1</span>
                </li>
                <li className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">Plan de aprendizaje personalizado</span>
                </li>
                <li className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">Material de estudio y ejercicios</span>
                </li>
                <li className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">Seguimiento y feedback continuo</span>
                </li>
                <li className="flex items-start gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">Certificado digital al finalizar</span>
                </li>
              </ul>

              <div className="mt-8 text-center">
                <a href={whatsappLink} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                  <Calendar className="w-6 h-6 group-hover:animate-bounce" />
                  <span>Agenda ahora</span>
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IS IT FOR */}
      <section id="clases-aquien" className="px-6 py-20 bg-gradient-to-r from-slate-900/20 to-purple-900/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              ¿Para quién es este servicio?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Perfecto si quieres aprender desde cero, reforzar bases o avanzar con proyectos reales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">1</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Principiantes</h3>
                <p className="text-slate-300 leading-relaxed">Primera clase sin presión, enfoque paso a paso desde los fundamentos básicos.</p>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">2</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Estudiantes de Ingeniería</h3>
                <p className="text-slate-300 leading-relaxed">Refuerza materias universitarias y aplica conceptos en proyectos reales.</p>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-pink-500/10 to-orange-500/10 border border-pink-400/20 hover:border-pink-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-pink-400 to-orange-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">3</span>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Cambio de Carrera</h3>
                <p className="text-slate-300 leading-relaxed">Rutas rápidas con foco en empleo y proyectos profesionales.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS CARDS */}
      <section id="clases-beneficios" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Beneficios clave
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Descubre por qué miles eligen nuestras clases personalizadas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[{
              icon: Users,
              title: '1 a 1',
              text: 'Atención total y foco exclusivo en tus necesidades específicas',
              gradient: 'from-cyan-500/20 to-purple-500/20',
              hover: 'hover:shadow-cyan-500/25'
            },{
              icon: Star,
              title: 'Personalizado',
              text: 'Contenido y ritmo adaptado perfectamente a tus metas',
              gradient: 'from-purple-500/20 to-pink-500/20',
              hover: 'hover:shadow-purple-500/25'
            },{
              icon: TrendingUp,
              title: 'Acompañamiento',
              text: 'Seguimiento real y revisión detallada de tu código',
              gradient: 'from-pink-500/20 to-orange-500/20',
              hover: 'hover:shadow-pink-500/25'
            },{
              icon: Award,
              title: 'Proyectos',
              text: 'Casos prácticos que demuestran resultados tangibles',
              gradient: 'from-orange-500/20 to-red-500/20',
              hover: 'hover:shadow-orange-500/25'
            }].map((card, index) => (
              <div key={card.title} className={`group relative p-8 rounded-3xl bg-gradient-to-br ${card.gradient} border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl ${card.hover} backdrop-blur-sm`}>
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center opacity-20 group-hover:opacity-100 transition-opacity">
                  <span className="text-white font-bold text-sm">{index + 1}</span>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <card.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold mb-4 text-white">{card.title}</h4>
                  <p className="text-slate-300 leading-relaxed">{card.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MICROSOFT 365 - EXCEL AVANZADO */}
      <section id="clases-m365" className="px-6 py-20 bg-gradient-to-r from-slate-900/10 via-purple-900/20 to-slate-900/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Microsoft 365 - Excel Avanzado
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Lleva tus hojas de cálculo al siguiente nivel con automatización real, dashboards interactivos y plantillas listos para aplicar en tu empresa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
            <div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 to-purple-500/10 border border-cyan-400/20 backdrop-blur-sm hover:border-cyan-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Por qué invertir en Excel Avanzado</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-400 mt-1" /> Automatiza tareas repetitivas con macros y Power Query.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-400 mt-1" /> Construye dashboards dinámicos para decisiones de negocio rápidas.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-400 mt-1" /> Domina fórmulas avanzadas y modelado con datos reales.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-400 mt-1" /> Trabajo colaborativo en tiempo real en Microsoft 365.</li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-400/20 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-white">Material práctico incluido</h3>
              <p className="text-slate-300 leading-relaxed mb-4">
                Clases enfocadas en aprendizaje aplicado a partir de casos de uso reales (ventas, finanzas y gestión de proyectos) con plantillas 100% descargables.
              </p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-400 mt-1" /> Plantillas para presupuestos, flujo de caja y KPI.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-400 mt-1" /> Ejercicios resueltos y guía paso a paso.</li>
                <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-green-400 mt-1" /> Estrategias de reporte y storytelling con datos.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'Plantillas listas para usar', description: 'Descarga archivos que puedes ajustar a tu negocio y usar desde el primer día.', icon: Briefcase },
              { title: 'Ciclos con casos reales', description: 'Ejercicios basados en escenarios de ventas, compras, datos de proyecto y más.', icon: TrendingUp },
              { title: 'Soporte post-clase', description: 'Accede a seguimiento durante 30 días tras finalizar el taller.', icon: Users },
            ].map((item) => (
              <div key={item.title} className="group p-6 rounded-2xl bg-gradient-to-br from-slate-800/60 to-purple-900/40 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-2xl backdrop-blur-sm">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">{item.title}</h4>
                <p className="text-slate-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold text-lg shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
              <Calendar className="w-6 h-6" />
              Reserva tu sesión de Excel Avanzado
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section id="clases-proceso" className="px-6 py-20 bg-gradient-to-r from-slate-900/10 to-purple-900/5">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              Proceso de trabajo
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Un método probado que garantiza tu éxito en el aprendizaje
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 opacity-30"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{
                icon: CheckCircle,
                title: 'Diagnóstico',
                text: 'Evaluación inicial completa de tu nivel y objetivos específicos',
                color: 'from-cyan-400 to-cyan-600',
                delay: '0'
              },{
                icon: Users,
                title: 'Plan Personalizado',
                text: 'Ruta de aprendizaje diseñada exclusivamente para ti',
                color: 'from-purple-400 to-purple-600',
                delay: '200'
              },{
                icon: Code,
                title: 'Clases Prácticas',
                text: 'Sesiones en vivo con ejercicios y proyectos reales',
                color: 'from-pink-400 to-pink-600',
                delay: '400'
              },{
                icon: Award,
                title: 'Seguimiento',
                text: 'Feedback continuo, entregables y certificado final',
                color: 'from-orange-400 to-orange-600',
                delay: '600'
              }].map((step, index) => (
                <div key={step.title} className={`group relative animate-fade-in-up`} style={{ animationDelay: `${step.delay}ms` }}>
                  <div className="p-8 rounded-3xl bg-gradient-to-br from-slate-800/60 to-purple-900/40 border border-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl backdrop-blur-sm">
                    <div className="text-center">
                      <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <step.icon className="w-10 h-10 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold mb-4 text-white">{step.title}</h3>
                      <p className="text-slate-300 leading-relaxed">{step.text}</p>
                    </div>
                  </div>

                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

 {/* Reviews Section */}
      <section id="reseñas" className="py-2 px-4 dark:bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-7 animate-float">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Reseñas de Clientes Satisfechos
            </span>
          </h2>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x styled-scroll">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 dark:bg-card dark:border-card snap-center"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white dark:text-primary">{testimonial.name}</h3>
                    <p className="text-cyan-400 text-sm dark:text-cyan-300">{testimonial.role} - {testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 dark:text-secondary italic">"{testimonial.testimonial}"</p>

                <div className="mt-4 flex items-center text-sm text-gray-400 dark:text-secondary">
                  <Shield className="w-4 h-4 mr-2 text-green-400"/>
                  Cliente Verificado
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <div className="inline-flex items-center gap-2 text-gray-400 dark:text-secondary">
              <span className="text-sm md:hidden">Desliza para conocer más</span>
              <span className="hidden md:block text-sm animate-pulse italic">Haz scroll lateral para ver más</span>
              <ArrowUpRight className="w-5 h-5 animate-pulse" />
            </div>
          </div>

        </div>
      </section>


            {/* Payment Methods Section */}
      <section id="pagos" className="py-4 px-4 dark:bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 animate-float">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Métodos de Pago Aceptados
            </span>
          </h2>

          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto dark:text-secondary">
            Acepto diversos métodos de pago para que puedas elegir el que más te convenga. ¡Paga de manera segura y sencilla!
          </p>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x styled-scroll">
            {/* PayPal */}
            <div className="group flex-shrink-0 w-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:shadow-2xl hover:shadow-purple-500/20 text-center dark:bg-card dark:border-card snap-center">
              <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-white font-semibold dark:text-primary">PayPal</h3>
            </div>

            {/* Transferencias bancarias */}
            <div className="group flex-shrink-0 w-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:shadow-2xl hover:shadow-cyan-500/20 text-center dark:bg-card dark:border-card snap-center">
              <Banknote className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-white font-semibold dark:text-primary">Transferencias Bancarias</h3>
            </div>

            {/* Llaves electrónicas */}
            <div className="group flex-shrink-0 w-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:shadow-2xl hover:shadow-purple-500/20 text-center dark:bg-card dark:border-card snap-center">
              <Key className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-white font-semibold dark:text-primary">Llaves Electrónicas</h3>
            </div>

            {/* PSE */}
            <div className="group flex-shrink-0 w-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:shadow-2xl hover:shadow-cyan-500/20 text-center dark:bg-card dark:border-card snap-center">
              <Smartphone className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-white font-semibold dark:text-primary">PSE</h3>
            </div>

            {/* Efecty */}
            <div className="group flex-shrink-0 w-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:shadow-2xl hover:shadow-purple-500/20 text-center dark:bg-card dark:border-card snap-center">
              <Smartphone className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-white font-semibold dark:text-primary">Efecty</h3>
            </div>

            {/* Tarjetas de débito */}
            <div className="group flex-shrink-0 w-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:shadow-2xl hover:shadow-cyan-500/20 text-center dark:bg-card dark:border-card snap-center">
              <CreditCard className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-white font-semibold dark:text-primary">Tarjetas de Débito</h3>
            </div>

            {/* Tarjetas de crédito */}
            <div className="group flex-shrink-0 w-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:shadow-2xl hover:shadow-purple-500/20 text-center dark:bg-card dark:border-card snap-center">
              <CreditCard className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-white font-semibold dark:text-primary">Tarjetas de Crédito</h3>
            </div>
          </div>
          <div className="text-center mt-4">
            <div className="inline-flex items-center gap-2 text-gray-400 dark:text-secondary">
              <span className="text-sm md:hidden">Desliza para conocer más</span>
              <span className="hidden md:block text-sm animate-pulse italic">Haz scroll lateral para ver más</span>
              <ArrowUpRight className="w-5 h-5 animate-pulse" />
            </div>
          </div>
        </div>
      </section>


      {/* CTA */}
      <section id="clases-cta" className="px-6 py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
              Listo para empezar?
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Reserva tu primera clase 1 a 1 y recibe un diagnóstico inicial
              <span className="block mt-2 text-cyan-400 font-medium">completamente gratuito</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-4 px-10 py-6 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold text-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
              <Calendar className="w-7 h-7 group-hover:animate-bounce" />
              <span>Agenda tu clase 1 a 1</span>
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Diagnóstico gratuito</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Respuesta inmediata</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="footer" className="py-12 px-4 border-t border-white/10 bg-gradient-to-br from-slate-900/50 to-purple-900/30 backdrop-blur-sm dark:bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          {/* Social Media Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 animate-float">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ¡Conectemos y Crezcamos Juntos! 
              </span>
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg dark:text-secondary">
              Sígueme en mis redes sociales para contenido sobre desarrollo web, marketing digital y mucho más
            </p>
            
            {/* Social Media Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-blue-600/20 to-blue-800/20 hover:from-blue-500/30 hover:to-blue-700/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-socialfade dark:bg-card dark:border-card"
              >
                <FaFacebook className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1 dark:text-primary">Facebook</div>
                <div className="text-blue-300 text-xs opacity-80 dark:text-secondary">Social & Updates</div>
                <ArrowUpRight className="w-4 h-4 text-blue-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-pink-600/20 to-purple-800/20 hover:from-pink-500/30 hover:to-purple-700/30 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 animate-socialfade dark:bg-card dark:border-card"
              >
                <FaInstagram className="w-8 h-8 text-pink-400 mx-auto mb-3 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1 dark:text-primary">Instagram</div>
                <div className="text-pink-300 text-xs opacity-80 dark:text-secondary">Visual Content</div>
                <ArrowUpRight className="w-4 h-4 text-pink-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-blue-700/20 to-blue-900/20 hover:from-blue-600/30 hover:to-blue-800/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-600/20 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/20 animate-socialfade dark:bg-card dark:border-card"
              >
                <FaLinkedin className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1 dark:text-primary">LinkedIn</div>
                <div className="text-blue-300 text-xs opacity-80 dark:text-secondary">Professional</div>
                <ArrowUpRight className="w-4 h-4 text-blue-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* X */}
              <a
                href="https://x.com/juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-gray-700/20 to-black/20 hover:from-gray-600/30 hover:to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-500/20 hover:border-gray-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/20 animate-socialfade dark:bg-card dark:border-card"
              >
                <img src={XImage} alt="X" className="w-8 h-8 mx-auto mb-3 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1 dark:text-primary">X</div>
                <div className="text-gray-300 text-xs opacity-80 dark:text-secondary">Social Network</div>
                <ArrowUpRight className="w-4 h-4 text-gray-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-red-600/20 to-black/20 hover:from-red-500/30 hover:to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 animate-socialfade dark:bg-card dark:border-card"
              >
                <FaTiktok className="w-8 h-8 mx-auto mb-3 text-red-400 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1 dark:text-primary">TikTok</div>
                <div className="text-red-300 text-xs opacity-80 dark:text-secondary">Short Videos</div>
                <ArrowUpRight className="w-4 h-4 text-red-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-red-600/20 to-red-800/20 hover:from-red-500/30 hover:to-red-700/30 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 animate-socialfade dark:bg-card dark:border-card"
              >
                <FaYoutube className="w-8 h-8 mx-auto mb-3 text-red-400 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1 dark:text-primary">YouTube</div>
                <div className="text-red-300 text-xs opacity-80 dark:text-secondary">Videos & Tutorials</div>
                <ArrowUpRight className="w-4 h-4 text-red-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-sky-600/20 to-blue-800/20 hover:from-sky-500/30 hover:to-blue-700/30 backdrop-blur-sm rounded-2xl p-6 border border-sky-500/20 hover:border-sky-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20 animate-socialfade dark:bg-card dark:border-card"
              >
                <FaTelegram className="w-8 h-8 mx-auto mb-3 text-sky-400 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1 dark:text-primary">Telegram</div>
                <div className="text-sky-300 text-xs opacity-80 dark:text-secondary">Secure Chat</div>
                <ArrowUpRight className="w-4 h-4 text-sky-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Pinterest */}
              <a
                href="https://www.pinterest.com/juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-red-700/20 to-red-900/20 hover:from-red-600/30 hover:to-red-800/30 backdrop-blur-sm rounded-2xl p-6 border border-red-600/20 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20 animate-socialfade dark:bg-card dark:border-card"
              >
                <FaPinterest className="w-8 h-8 mx-auto mb-3 text-red-400 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1 dark:text-primary">Pinterest</div>
                <div className="text-red-300 text-xs opacity-80 dark:text-secondary">Inspiration</div>
                <ArrowUpRight className="w-4 h-4 text-red-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Snapchat */}
              <a
                href="https://www.snapchat.com/add/juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 hover:from-yellow-500/30 hover:to-yellow-700/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 animate-socialfade dark:bg-card dark:border-card"
              >
                <FaSnapchat className="w-8 h-8 text-yellow-400 mx-auto mb-3 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1 dark:text-primary">Snapchat</div>
                <div className="text-yellow-300 text-xs opacity-80 dark:text-secondary">Add Me</div>
                <ArrowUpRight className="w-4 h-4 text-yellow-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Kick */}
              <a
                href="https://kick.com/juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-green-600/20 to-green-800/20 hover:from-green-500/30 hover:to-green-700/30 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 animate-socialfade dark:bg-card dark:border-card"
              >
                <img src={kickImage} alt="Kick" className="w-8 h-8 mx-auto mb-3 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1 dark:text-primary">Kick</div>
                <div className="text-green-300 text-xs opacity-80 dark:text-secondary">Streaming</div>
                <ArrowUpRight className="w-4 h-4 text-green-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Discord */}
              <a
                className="group bg-gradient-to-br from-indigo-600/20 to-purple-800/20 hover:from-indigo-500/30 hover:to-purple-700/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 animate-socialfade dark:bg-card dark:border-card"
              >
                <FaDiscord className="w-8 h-8 text-indigo-400 mx-auto mb-3 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1 dark:text-primary">Discord</div>
                <div className="text-indigo-300 text-xs opacity-80 dark:text-secondary">juannppgd</div>
              </a>

              {/* Ir a pagina principal */}
              <button
                onClick={() => navigate('/')}
                className="group bg-gradient-to-br from-cyan-600/20 to-purple-800/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 transition-all duration-300"
              >
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-white font-semibold text-sm mb-1 dark:text-primary">Ir a pagina principal</div>
                <div className="text-cyan-300 text-xs opacity-80 dark:text-secondary">Ir a pagina principal</div>
                <ArrowUpRight className="w-4 h-4 text-cyan-300 mx-auto mt-2" />
              </button>
            </div>
          </div>

        

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-8 dark:border-card">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-400 mb-2 dark:text-secondary">
                  © {currentYear} Juan Pablo Gutiérrez Díaz. Todos los derechos reservados.
                </p>
<p className="text-sm text-gray-500 dark:text-secondary">
  Diseñado y desarrollado por <strong>Juan Pablo Gutiérrez Díaz</strong>, especialista en desarrollo web y marketing digital, creando experiencias digitales ágiles y orientadas a resultados.
    <br />
  ¿Quieres saber más o agendar una asesoría? Escríbeme a{" "}
  <a
    href="mailto:contact.juannppgd@gmail.com"
    className="text-blue-500 hover:underline"
    title="Haz clic para escribirme"
  >
    contact.juannppgd@gmail.com
  </a>
</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Clases;