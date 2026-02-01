import React, { useState, useEffect } from 'react';
import {
  Menu, X, Sun, Moon, MessageCircle, ChevronRight,
  AlertTriangle, CheckCircle, Quote, Star,
  TrendingUp, Trophy, Shield,
  ArrowUpRight, Banknote, Key, CreditCard, Globe,
  Smartphone, Users, Briefcase
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaTelegram, FaPinterest, FaSnapchat, FaDiscord } from 'react-icons/fa';
import XImage from './assets/X2.png';
import kickImage from './assets/kick.png';

const CVService = () => {
  const [activeSection, setActiveSection] = useState('cv-hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const whatsappLink = 'https://wa.me/573219541241';
  const currentYear = new Date().getFullYear();

  const testimonials = [
    {
      name: "María González",
      role: "Ingeniera de Sistemas",
      company: "Empresa Tecnológica",
      testimonial: "Juan Pablo optimizó mi CV con palabras clave técnicas específicas. Ahora paso todos los filtros ATS y he recibido ofertas de empresas top. ¡Su enfoque en ATS es excepcional!",
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      name: "Carlos Rodríguez",
      role: "Desarrollador Full Stack",
      company: "Startup Innovadora",
      testimonial: "Mi CV fue completamente rediseñado para ATS. Incluyó métricas cuantificables y proyectos destacados. Conseguí entrevistas en 5 empresas importantes en solo dos semanas.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Ana López",
      role: "Especialista en Marketing Digital",
      company: "Agencia de Publicidad",
      testimonial: "Juan Pablo transformó mi CV enfocándolo en resultados medibles y herramientas ATS-friendly. Ahora tengo un perfil profesional que destaca en cualquier proceso de selección.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Roberto Silva",
      role: "Analista de Datos",
      company: "Consultora Financiera",
      testimonial: "La optimización para ATS incluyó keywords de análisis de datos y SQL. Mi CV ahora supera filtros automáticos y he tenido múltiples entrevistas. ¡Totalmente recomendado!",
      rating: 5,
      avatar: "👨‍💼"
    },
  ];

  const _scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };



  /* =========================
     Scroll spy
  ========================= */
  useEffect(() => {
    const sections = [
      'cv-hero', 'cv-problem', 'cv-included',
      'cv-price', 'cv-benefits', 'cv-credibility', 'cv-cta'
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-4 inset-x-4 z-50 backdrop-blur-xl rounded-2xl shadow-2xl bg-white/10 border border-white/20">
        <div className="flex items-center justify-between px-6 py-4">
          <button
            onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }}
            className="font-black text-2xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            @juannppgd
          </button>

          <div className="hidden lg:flex gap-8">
            {[
              ['cv-hero', 'Inicio'],
              ['cv-problem', 'Problema'],
              ['cv-included', 'Incluye'],
              ['cv-price', 'Precio'],
              ['cv-credibility', 'Confianza'],
              ['cv-cta', 'Contacto']
            ].map(([id, label]) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                aria-current={activeSection === id ? 'page' : undefined}
                className={`px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                  activeSection === id
                    ? 'text-cyan-400 scale-110 bg-cyan-400/10 shadow-lg shadow-cyan-500/20'
                    : 'text-white/70 hover:text-white hover:bg-white/5 hover:scale-105'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-xl border border-white/20 bg-white/5 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* ================= MOBILE MENU ================= */}
      {isMobileMenuOpen && (
        <div className="fixed top-24 inset-x-4 z-40 rounded-2xl p-6 space-y-4 bg-slate-900/95 backdrop-blur-xl border border-white/20 shadow-2xl">
          {['cv-hero','cv-problem','cv-included','cv-price','cv-benefits','cv-credibility','cv-cta']
            .map(id => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                  activeSection === id ? 'text-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-500/20' : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
              >
                {id.replace('cv-', '').charAt(0).toUpperCase() + id.replace('cv-', '').slice(1)}
              </button>
          ))}
        </div>
      )}

      {/* ================= HERO ================= */}
      <section id="cv-hero" className="min-h-screen flex items-center justify-center text-center px-6 pt-32">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight text-white animate-fade-in">
            Consigue más entrevistas con una{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
              Hoja de Vida optimizada para ATS
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ajusto tu perfil para superar filtros de IA y llegar a reclutadores reales.
          </p>
          <a
            href={whatsappLink}
            className="inline-flex items-center gap-3 px-12 py-6 rounded-full
              bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600
              text-white font-bold text-xl shadow-2xl hover:shadow-cyan-500/25
              transition-all duration-300 hover:scale-110 active:scale-95 ring-4 ring-cyan-500/20 hover:ring-cyan-400/40"
          >
            <MessageCircle className="w-6 h-6" />
            Contactar ahora
          </a>
        </div>
      </section>

      {/* ================= PROBLEMA + SOLUCIÓN ================= */}
      <section id="cv-problem" className="py-4 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-black mb-6 text-white leading-tight">
              ¿Por qué la mayoría de hojas de vida son descartadas?
            </h2>
            <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Descubre cómo los sistemas ATS filtran candidatos y cómo solucionarlo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
            <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 p-8 rounded-3xl border border-red-500/20 hover:border-red-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20 backdrop-blur-sm">
              <AlertTriangle className="w-16 h-16 text-red-400 mx-auto mb-4 animate-bounce" />
              <h3 className="text-2xl font-bold mb-4 text-white">El Problema</h3>
              <ul className="space-y-3 text-slate-300 text-base">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  La mayoría de CVs son descartados por sistemas ATS
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  Hasta el 75% de aplicaciones nunca llegan a humanos
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  Formatos incompatibles y palabras clave irrelevantes
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
                  Estructura pobre que no destaca al candidato
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 p-8 rounded-3xl border border-green-500/20 hover:border-green-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 backdrop-blur-sm">
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4 animate-pulse" />
              <h3 className="text-2xl font-bold mb-4 text-white">La Solución</h3>
              <ul className="space-y-3 text-slate-300 text-base">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Optimización completa para sistemas ATS
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Diseño profesional que supera filtros automáticos
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Contenido persuasivo enfocado en reclutadores
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                  Estructura que destaca tus logros y habilidades
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ¿QUÉ INCLUYE EL SERVICIO? ================= */}
      <section id="cv-included" className="py-4 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-white leading-tight">
            ¿Qué incluye el servicio?
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-white/5 to-cyan-500/5 p-6 rounded-3xl text-center transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 border border-white/10 hover:border-cyan-400/30 backdrop-blur-sm group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Diseño y Estructura Profesional</h3>
              <p className="text-slate-300 text-base leading-relaxed">Layout moderno y atractivo que destaca tu perfil</p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-purple-500/5 p-6 rounded-3xl text-center transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 border border-white/10 hover:border-purple-400/30 backdrop-blur-sm group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-purple-500/20 to-purple-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Star className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Contenido Persuasivo</h3>
              <p className="text-slate-300 text-base leading-relaxed">Redacción enfocada en reclutadores y resultados</p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-green-500/5 p-6 rounded-3xl text-center transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20 border border-white/10 hover:border-green-400/30 backdrop-blur-sm group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-green-500/20 to-green-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-green-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Optimización para ATS</h3>
              <p className="text-slate-300 text-base leading-relaxed">Palabras clave y formato compatible con sistemas de filtrado</p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-orange-500/5 p-6 rounded-3xl text-center hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/20 border border-white/10 hover:border-orange-400/30 backdrop-blur-sm group">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <ChevronRight className="w-8 h-8 text-orange-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Recomendaciones de Presentación</h3>
              <p className="text-slate-300 text-base leading-relaxed">Consejos para entrevistas y procesos de selección</p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-blue-500/5 p-6 rounded-3xl text-center transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 border border-white/10 hover:border-blue-400/30 backdrop-blur-sm group md:col-span-2 lg:col-span-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-600/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Quote className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Revisión y Feedback Detallado</h3>
              <p className="text-slate-300 text-base leading-relaxed">Análisis completo y sugerencias para mejorar tu presentación profesional</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PRECIO Y OFERTA ================= */}
      <section id="cv-price" className="py-4 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-12 text-white leading-tight">
            Precio y Oferta Especial
          </h2>

          <div className="bg-gradient-to-br from-white/10 to-cyan-500/5 p-12 rounded-3xl max-w-2xl mx-auto relative overflow-hidden border border-white/20 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 backdrop-blur-sm">
            <div className="absolute top-4 right-4 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse shadow-lg">
              ¡Oferta Limitada!
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-3xl line-through text-gray-400">US $84</span>
                <span className="text-6xl font-black text-white">US $19</span>
              </div>
              <p className="text-lg text-slate-300">Inversión única con resultados garantizados</p>
            </div>

            <div className="mb-8">
              <p className="text-base text-slate-300 mb-4">Sensación de oportunidad y urgencia:</p>
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-4 border border-cyan-500/20">
                <p className="font-bold text-white text-lg">¡Aprovecha esta oferta antes de que termine!</p>
              </div>
            </div>

            <a
              href={whatsappLink}
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full
                bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600
                text-white font-bold text-lg shadow-2xl hover:shadow-cyan-500/25
                transition-all duration-300 hover:scale-110 active:scale-95 ring-4 ring-cyan-500/20 hover:ring-cyan-400/40"
            >
              <MessageCircle className="w-6 h-6" />
              Contactar ahora
            </a>
          </div>
        </div>
      </section>

      {/* ================= CONFIANZA Y CREDIBILIDAD ================= */}
      <section id="cv-credibility" className="py-4 px-6">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-6xl font-black text-center mb-12 text-white leading-tight">
            Confianza y Credibilidad
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-white/5 to-cyan-500/5 p-8 rounded-3xl text-center border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 backdrop-blur-sm group">
              <Quote className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-bold mb-3 text-white text-lg">Diseñado para pasar filtros ATS reales</p>
              <p className="text-slate-300 text-base leading-relaxed">Optimizado para empresas modernas y sistemas de reclutamiento</p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-purple-500/5 p-8 rounded-3xl text-center border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm group">
              <Trophy className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-bold mb-3 text-white text-lg">Experiencia Comprobada</p>
              <p className="text-slate-300 text-base leading-relaxed">Más de 50 CVs optimizados con resultados exitosos</p>
            </div>

            <div className="bg-gradient-to-br from-white/5 to-yellow-500/5 p-8 rounded-3xl text-center border border-white/10 hover:border-yellow-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20 backdrop-blur-sm group">
              <Star className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <p className="font-bold mb-3 text-white text-lg">Enfoque Profesional</p>
              <p className="text-slate-300 text-base leading-relaxed">Atención personalizada y compromiso con tu éxito</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section id="reseñas" className="py-2 px-4">
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
                className="flex-shrink-0 w-80 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 snap-center"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{testimonial.avatar}</div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-cyan-400 text-sm">{testimonial.role} - {testimonial.company}</p>
                  </div>
                </div>

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-300 italic">"{testimonial.testimonial}"</p>

                <div className="mt-4 flex items-center text-sm text-gray-400">
                  <Shield className="w-4 h-4 mr-2 text-green-400"/>
                  Cliente Verificado
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <div className="inline-flex items-center gap-2 text-gray-400">
              <span className="text-sm md:hidden">Desliza para conocer más</span>
              <span className="hidden md:block text-sm animate-pulse italic">Haz scroll lateral para ver más</span>
              <ArrowUpRight className="w-5 h-5 animate-pulse" />
            </div>
          </div>

        </div>
      </section>

           {/* Payment Methods Section */}
      <section id="pagos" className="py-4 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6 animate-float">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Métodos de Pago Aceptados
            </span>
          </h2>

          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
            Acepto diversos métodos de pago para que puedas elegir el que más te convenga. ¡Paga de manera segura y sencilla!
          </p>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x styled-scroll">
            {/* PayPal */}
            <div className="group flex-shrink-0 w-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:shadow-2xl hover:shadow-purple-500/20 text-center snap-center">
              <Globe className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-white font-semibold">PayPal</h3>
            </div>

            {/* Transferencias bancarias */}
            <div className="group flex-shrink-0 w-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:shadow-2xl hover:shadow-cyan-500/20 text-center snap-center">
              <Banknote className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-white font-semibold">Transferencias Bancarias</h3>
            </div>

            {/* Llaves electrónicas */}
            <div className="group flex-shrink-0 w-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:shadow-2xl hover:shadow-purple-500/20 text-center snap-center">
              <Key className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-white font-semibold">Llaves Electrónicas</h3>
            </div>

            {/* PSE */}
            <div className="group flex-shrink-0 w-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:shadow-2xl hover:shadow-cyan-500/20 text-center snap-center">
              <Smartphone className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-white font-semibold">PSE</h3>
            </div>

            {/* Efecty */}
            <div className="group flex-shrink-0 w-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:shadow-2xl hover:shadow-purple-500/20 text-center snap-center">
              <Smartphone className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-white font-semibold">Efecty</h3>
            </div>

            {/* Tarjetas de débito */}
            <div className="group flex-shrink-0 w-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:shadow-2xl hover:shadow-cyan-500/20 text-center snap-center">
              <CreditCard className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-white font-semibold">Tarjetas de Débito</h3>
            </div>

            {/* Tarjetas de crédito */}
            <div className="group flex-shrink-0 w-64 bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:shadow-2xl hover:shadow-purple-500/20 text-center snap-center">
              <CreditCard className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:animate-bounce" />
              <h3 className="text-white font-semibold">Tarjetas de Crédito</h3>
            </div>
          </div>
          <div className="text-center mt-4">
            <div className="inline-flex items-center gap-2 text-gray-400">
              <span className="text-sm md:hidden">Desliza para conocer más</span>
              <span className="hidden md:block text-sm animate-pulse italic">Haz scroll lateral para ver más</span>
              <ArrowUpRight className="w-5 h-5 animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section id="cv-cta" className="py-24 px-6">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-white">
            ¡No esperes más para destacar!
          </h2>
          <p className="text-xl mb-10 text-slate-300">
            Transforma tu CV y aumenta tus oportunidades de conseguir el trabajo de tus sueños.
          </p>

          <div className="mb-8">
            <p className="text-lg mb-4 text-slate-300">Copy emocional y orientado a acción:</p>
            <div className="bg-white/5 p-6 rounded-2xl max-w-md mx-auto">
              <p className="font-bold text-white">Tu futuro profesional está a solo un mensaje de distancia</p>
            </div>
          </div>

          <a
            href={whatsappLink}
            className="inline-flex items-center gap-2 px-12 py-6 rounded-full
              bg-cyan-500 hover:bg-cyan-600 text-white font-bold text-xl
              transition hover:scale-105 active:scale-95 shadow-xl"
          >
            Contactar con Juan Pablo <MessageCircle />
          </a>
        </div>
      </section>


      {/* ================= FOOTER ================= */}
{/* Footer */}
      <footer id="footer" className="py-12 px-4 border-t border-white/10 bg-gradient-to-br from-slate-900/50 to-purple-900/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          {/* Social Media Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 animate-float">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ¡Conectemos y Crezcamos Juntos!
              </span>
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
              Sígueme en mis redes sociales para contenido sobre desarrollo web, marketing digital y mucho más
            </p>
            
            {/* Social Media Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-blue-600/20 to-blue-800/20 hover:from-blue-500/30 hover:to-blue-700/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-socialfade"
              >
                <FaFacebook className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1">Facebook</div>
                <div className="text-blue-300 text-xs opacity-80">Social & Updates</div>
                <ArrowUpRight className="w-4 h-4 text-blue-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-pink-600/20 to-purple-800/20 hover:from-pink-500/30 hover:to-purple-700/30 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/20 hover:border-pink-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20 animate-socialfade"
              >
                <FaInstagram className="w-8 h-8 text-pink-400 mx-auto mb-3 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1">Instagram</div>
                <div className="text-pink-300 text-xs opacity-80">Visual Content</div>
                <ArrowUpRight className="w-4 h-4 text-pink-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-blue-700/20 to-blue-900/20 hover:from-blue-600/30 hover:to-blue-800/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-600/20 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-600/20 animate-socialfade"
              >
                <FaLinkedin className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1">LinkedIn</div>
                <div className="text-blue-300 text-xs opacity-80">Professional</div>
                <ArrowUpRight className="w-4 h-4 text-blue-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* X */}
              <a
                href="https://x.com/juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-gray-700/20 to-black/20 hover:from-gray-600/30 hover:to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-500/20 hover:border-gray-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-500/20 animate-socialfade"
              >
                <img src={XImage} alt="X" className="w-8 h-8 mx-auto mb-3 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1">X</div>
                <div className="text-gray-300 text-xs opacity-80">Social Network</div>
                <ArrowUpRight className="w-4 h-4 text-gray-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* TikTok */}
              <a
                href="https://www.tiktok.com/@juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-red-600/20 to-black/20 hover:from-red-500/30 hover:to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 animate-socialfade"
              >
                <FaTiktok className="w-8 h-8 mx-auto mb-3 text-red-400 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1">TikTok</div>
                <div className="text-red-300 text-xs opacity-80">Short Videos</div>
                <ArrowUpRight className="w-4 h-4 text-red-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-red-600/20 to-red-800/20 hover:from-red-500/30 hover:to-red-700/30 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 animate-socialfade"
              >
                <FaYoutube className="w-8 h-8 mx-auto mb-3 text-red-400 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1">YouTube</div>
                <div className="text-red-300 text-xs opacity-80">Videos & Tutorials</div>
                <ArrowUpRight className="w-4 h-4 text-red-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-sky-600/20 to-blue-800/20 hover:from-sky-500/30 hover:to-blue-700/30 backdrop-blur-sm rounded-2xl p-6 border border-sky-500/20 hover:border-sky-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20 animate-socialfade"
              >
                <FaTelegram className="w-8 h-8 mx-auto mb-3 text-sky-400 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1">Telegram</div>
                <div className="text-sky-300 text-xs opacity-80">Secure Chat</div>
                <ArrowUpRight className="w-4 h-4 text-sky-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Pinterest */}
              <a
                href="https://www.pinterest.com/juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-red-700/20 to-red-900/20 hover:from-red-600/30 hover:to-red-800/30 backdrop-blur-sm rounded-2xl p-6 border border-red-600/20 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-600/20 animate-socialfade"
              >
                <FaPinterest className="w-8 h-8 mx-auto mb-3 text-red-400 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1">Pinterest</div>
                <div className="text-red-300 text-xs opacity-80">Inspiration</div>
                <ArrowUpRight className="w-4 h-4 text-red-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Snapchat */}
              <a
                href="https://www.snapchat.com/add/juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-yellow-600/20 to-yellow-800/20 hover:from-yellow-500/30 hover:to-yellow-700/30 backdrop-blur-sm rounded-2xl p-6 border border-yellow-500/20 hover:border-yellow-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/20 animate-socialfade"
              >
                <FaSnapchat className="w-8 h-8 text-yellow-400 mx-auto mb-3 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1">Snapchat</div>
                <div className="text-yellow-300 text-xs opacity-80">Add Me</div>
                <ArrowUpRight className="w-4 h-4 text-yellow-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Kick */}
              <a
                href="https://kick.com/juannppgd"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-green-600/20 to-green-800/20 hover:from-green-500/30 hover:to-green-700/30 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 animate-socialfade"
              >
                <img src={kickImage} alt="Kick" className="w-8 h-8 mx-auto mb-3 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1">Kick</div>
                <div className="text-green-300 text-xs opacity-80">Streaming</div>
                <ArrowUpRight className="w-4 h-4 text-green-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Discord */}
              <a
                className="group bg-gradient-to-br from-indigo-600/20 to-purple-800/20 hover:from-indigo-500/30 hover:to-purple-700/30 backdrop-blur-sm rounded-2xl p-6 border border-indigo-500/20 hover:border-indigo-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20 animate-socialfade"
              >
                <FaDiscord className="w-8 h-8 text-indigo-400 mx-auto mb-3 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1">Discord</div>
                <div className="text-indigo-300 text-xs opacity-80">juannppgd</div>
              </a>

              {/* Ir a pagina principal */}
              <button
                onClick={() => navigate('/')}
                className="group bg-gradient-to-br from-cyan-600/20 to-purple-800/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/20 transition-all duration-300"
              >
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-white font-semibold text-sm mb-1">Ir a pagina principal</div>
                <div className="text-cyan-300 text-xs opacity-80">Ir a pagina principal</div>
                <ArrowUpRight className="w-4 h-4 text-cyan-300 mx-auto mt-2" />
              </button>
            </div>
          </div>

        

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-400 mb-2">
                  © {currentYear} Juan Pablo Gutiérrez Díaz. Todos los derechos reservados.
                </p>
<p className="text-sm text-gray-500">
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

/* ================= ICONS ================= */
const Phone = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5.11 3h3a2 2 0 0 1 2 1.72" />
  </svg>
);

const Clock = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

export default CVService;
