import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, CheckCircle, Clock, Shield, Users, Calendar, ArrowUpRight, Star, Video, Quote, Briefcase, TrendingUp, Plus, Globe, Banknote, Key, Smartphone, CreditCard } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaTelegram, FaPinterest, FaSnapchat, FaDiscord } from 'react-icons/fa';
import XImage from './assets/X2.png';
import kickImage from './assets/kick.png';

const Academico = () => {
  const [activeSection, setActiveSection] = useState('apoyo-hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [_showShareModal, _setShowShareModal] = useState(false);
  const [_showReviewModal, _setShowReviewModal] = useState(false);
  const navigate = useNavigate();

  const whatsappBase = 'https://wa.me/573219541241?text=';
  const currentYear = new Date().getFullYear();

  const testimonials = [
    {
      name: "María González",
      role: "Estudiante de Ingeniería",
      company: "Universidad Nacional",
      testimonial: "Juan Pablo me ayudó con mi tesis de grado en ingeniería. El trabajo fue excepcional, con referencias académicas perfectas y entregado a tiempo. Su confidencialidad es total. ¡Aprobé con honores!",
      rating: 5,
      avatar: "👩‍🎓"
    },
    {
      name: "Sofia Ramírez",
      role: "Estudiante de Administración",
      company: "Proyecto de Investigación",
      testimonial: "Necesitaba ayuda con mi monografía de grado. Juan Pablo desarrolló todo el contenido con rigor académico, análisis profundos y bibliografía completa. El resultado superó mis expectativas.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Carlos Rodríguez",
      role: "Estudiante Virtual",
      company: "Carrera a Distancia",
      testimonial: "Como estudiante virtual con trabajo, no tenía tiempo para mis ensayos. Juan Pablo me apoyó con varios trabajos académicos, siempre entregando a tiempo y con calidad profesional. ¡Me salvó el semestre!",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Miguel Ángel",
      role: "Estudiante de Medicina",
      company: "Trabajos de Investigación",
      testimonial: "Juan Pablo me ayudó con revisiones sistemáticas y artículos científicos. Su experiencia en investigación académica es impresionante. Todo bien estructurado y con metodología correcta.",
      rating: 5,
      avatar: "👨‍⚕️"
    },
    {
      name: "Ana López",
      role: "Estudiante de Derecho",
      company: "Tesis Jurídica",
      testimonial: "Mi tesis de derecho quedó perfecta gracias al apoyo de Juan Pablo. Desarrolló argumentos sólidos, jurisprudencia actualizada y formato académico impecable. ¡Altamente recomendado para estudiantes de posgrado!",
      rating: 5,
      avatar: "👩‍⚖️"
    },
    {
      name: "Roberto Silva",
      role: "Estudiante de Economía",
      company: "Análisis Económico",
      testimonial: "Necesitaba ayuda con modelos econométricos y análisis de datos para mi proyecto final. Juan Pablo no solo hizo el trabajo, sino que me explicó el proceso para que aprendiera. Excelente pedagogo.",
      rating: 5,
      avatar: "👨‍💼"
    },
  ];

  useEffect(() => {
    const sections = ['apoyo-hero','apoyo-que','apoyo-valor','apoyo-quien','apoyo-proceso','apoyo-confianza','apoyo-cta'];
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

  const [form, setForm] = useState({ name: '', email: '', subject: '', details: '' });

  const _handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const _handleSubmit = (e) => {
    e.preventDefault();
    const text = encodeURIComponent(`Hola Juan Pablo, necesito apoyo académico. Nombre: ${form.name} Email: ${form.email} Asunto: ${form.subject} Detalles: ${form.details}`);
    window.open(`${whatsappBase}${text}`, '_blank');
  };

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
                  ['apoyo-hero','Inicio'],
                  ['apoyo-que','¿En qué?'],
                  ['apoyo-valor','Propuesta'],
                  ['apoyo-quien','Para quién'],
                  ['apoyo-proceso','Proceso'],
                  ['apoyo-confianza','Garantías'],
                  ['apoyo-cta','Contacto']
                ].map(([id,label]) => (
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

      {isMobileMenuOpen && (
        <div className="fixed top-20 left-0 right-0 mx-2 sm:mx-4 z-40 bg-slate-900/95 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl lg:hidden">
          <div className="flex flex-col space-y-4 p-4">
            {[
              ['apoyo-hero', 'Inicio'],
              ['apoyo-que', '¿En qué?'],
              ['apoyo-valor', 'Propuesta'],
              ['apoyo-quien', 'Para quién'],
              ['apoyo-proceso', 'Proceso'],
              ['apoyo-confianza', 'Garantías'],
              ['apoyo-cta', 'Contacto']
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
      <section id="apoyo-hero" className="min-h-screen flex items-center justify-center text-center px-6 pt-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
              Apoyo profesional para tus trabajos académicos
              <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                Calidad, cumplimiento y acompañamiento experto
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
              Trabajo confidencial y entregas a tiempo.
              <span className="block mt-2 text-cyan-400 font-medium">Soporte personalizado para estudiantes universitarios.</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center animate-fade-in-up delay-300">
            <button onClick={() => { const txt = encodeURIComponent('Hola Juan Pablo, necesito apoyo académico.'); window.open(`${whatsappBase}${txt}`, '_blank'); }} className="group inline-flex items-center gap-4 px-8 py-5 rounded-2xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold text-lg shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1">
              <BookOpen className="w-6 h-6 group-hover:animate-bounce" />
              <span>Solicitar apoyo académico</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
            <button onClick={() => scrollTo('apoyo-que')} className="group text-lg text-white/90 hover:text-cyan-400 underline underline-offset-4 hover:underline-offset-8 transition-all duration-300 hover:scale-105">
              Ver en qué te puedo ayudar
              <div className="w-0 group-hover:w-full h-0.5 bg-cyan-400 transition-all duration-300"></div>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-400 animate-fade-in-up delay-500">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>100% Confidencial</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span>Calidad Garantizada</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-400" />
              <span>Entregas a Tiempo</span>
            </div>
          </div>
        </div>
      </section>

      {/* ¿EN QUÉ TE APOYAMOS? */}
      <section id="apoyo-que" className="px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent leading-tight animate-fade-in-up">
              En qué te puedo ayudar?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Apoyo integral para tus necesidades académicas con calidad profesional y entrega garantizada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {icon: BookOpen, title: 'Trabajos académicos', text: 'Monografías, ensayos, revisiones y entregables.', gradient: 'from-cyan-500/20 to-purple-500/20', hover: 'hover:shadow-cyan-500/25'},
              {icon: CheckCircle, title: 'Evaluaciones y talleres', text: 'Resolución guiada y preparación para exámenes.', gradient: 'from-purple-500/20 to-pink-500/20', hover: 'hover:shadow-purple-500/25'},
              {icon: Video, title: 'Proyectos universitarios', text: 'Desarrollo, documentación y pruebas.', gradient: 'from-pink-500/20 to-orange-500/20', hover: 'hover:shadow-pink-500/25'},
              {icon: Calendar, title: 'Entregables virtuales', text: 'Actividades, tareas y material multimedia.', gradient: 'from-orange-500/20 to-red-500/20', hover: 'hover:shadow-orange-500/25'}
            ].map((card, index) => (
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

      {/* PROPUESTA DE VALOR */}
      <section id="apoyo-valor" className="px-6 py-12 bg-gradient-to-r from-slate-900/10 to-purple-900/5">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Propuesta de valor</h2>
            <ul className="space-y-3 text-slate-300">
              <li className="flex items-start gap-3"><div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-2 rounded-md flex items-center"><CheckCircle className="w-5 h-5 text-white" /></div><div><strong>Calidad académica</strong><div className="text-sm">Trabajo con referencias, estructura y rigor según normas.</div></div></li>
              <li className="flex items-start gap-3"><div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-2 rounded-md flex items-center"><Clock className="w-5 h-5 text-white" /></div><div><strong>Entrega a tiempo</strong><div className="text-sm">Cumplimiento estricto de fechas y entregables.</div></div></li>
              <li className="flex items-start gap-3"><div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-2 rounded-md flex items-center"><Shield className="w-5 h-5 text-white" /></div><div><strong>Confidencialidad</strong><div className="text-sm">Comunicación privada y gestión segura de tu trabajo.</div></div></li>
            </ul>
          </div>

          <div className="rounded-2xl p-6 bg-gradient-to-br from-purple-800/30 to-slate-800/20 border border-white/5 shadow-lg">
            <h3 className="text-xl font-bold mb-3">Incluye</h3>
            <ul className="space-y-2 text-slate-200">
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-cyan-400" /> Desarrollo personalizado según indicaciones del docente</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-cyan-400" /> Revisión y correcciones</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-cyan-400" /> Entrega en formatos requeridos</li>
            </ul>
            <a href="#apoyo-cta" onClick={(e)=>{e.preventDefault(); scrollTo('apoyo-cta');}} className="mt-6 inline-flex items-center gap-3 px-5 py-3 rounded-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold transition shadow">Contactar asesor</a>
          </div>
        </div>
      </section>

      {/* ¿PARA QUIÉN? */}
      <section id="apoyo-quien" className="px-6 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">¿Para quién es este servicio?</h2>
          <p className="text-slate-300 mb-6">Dirigido a estudiantes universitarios, virtuales y profesionales con carga laboral que necesitan apoyo confiable.</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
              <strong className="text-white">Estudiantes universitarios</strong>
              <div className="text-sm text-slate-300 mt-2">Apoyo integral para trabajos y proyectos.</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
              <strong className="text-white">Estudiantes virtuales</strong>
              <div className="text-sm text-slate-300 mt-2">Soporte con entregables y actividades en línea.</div>
            </div>
            <div className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl">
              <strong className="text-white">Personas con carga laboral</strong>
              <div className="text-sm text-slate-300 mt-2">Soluciones rápidas y confiables para cumplir con tus plazos.</div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="apoyo-proceso" className="px-6 py-12 bg-gradient-to-r from-slate-900/10 to-purple-900/5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Proceso de trabajo</h2>
          <p className="text-slate-300 mb-12 max-w-2xl mx-auto">Un proceso estructurado y transparente para garantizar resultados excepcionales.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">1</div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 mx-auto mt-4">
                <BookOpen className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="font-bold text-xl mb-4">Recepción</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Recibo indicaciones detalladas y requisitos específicos del trabajo.</p>
            </div>
            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">2</div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 mx-auto mt-4">
                <CheckCircle className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="font-bold text-xl mb-4">Análisis</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Evaluación detallada del alcance, tiempo y metodología requerida.</p>
            </div>
            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">3</div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 mx-auto mt-4">
                <Clock className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="font-bold text-xl mb-4">Desarrollo</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Trabajo estructurado con referencias académicas y metodología correcta.</p>
            </div>
            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">4</div>
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500/20 to-cyan-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 mx-auto mt-4">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="font-bold text-xl mb-4">Entrega</h3>
              <p className="text-slate-300 text-sm leading-relaxed">Revisión final y posibilidad de correcciones según tus necesidades.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTÍAS */}
      <section id="apoyo-confianza" className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Garantías de calidad</h2>
          <p className="text-slate-300 text-center mb-12 max-w-2xl mx-auto">Trabajo con estándares profesionales y compromiso total con tu éxito académico.</p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-cyan-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 mx-auto">
                <Shield className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="font-bold text-xl mb-4">Confidencialidad</h4>
              <p className="text-slate-300 text-sm leading-relaxed">Gestión privada y segura de todos tus trabajos académicos.</p>
            </div>
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-purple-500/20 to-purple-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 mx-auto">
                <Clock className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="font-bold text-xl mb-4">Entregas a tiempo</h4>
              <p className="text-slate-300 text-sm leading-relaxed">Planificación estratégica para cumplir plazos estrictos.</p>
            </div>
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-purple-600/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200 mx-auto">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="font-bold text-xl mb-4">Comunicación constante</h4>
              <p className="text-slate-300 text-sm leading-relaxed">Seguimiento continuo y soporte personalizado durante todo el proceso.</p>
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

      {/* CTA */}
      <section id="apoyo-cta" className="px-6 py-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent leading-tight">
              Listo para empezar?
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Solicita tu apoyo académico personalizado y recibe una propuesta
              <span className="block mt-2 text-cyan-400 font-medium">completamente gratis</span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <button onClick={() => { const txt = encodeURIComponent('Hola Juan Pablo, necesito apoyo académico.'); window.open(`${whatsappBase}${txt}`, '_blank'); }} className="group inline-flex items-center gap-4 px-10 py-6 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 hover:from-cyan-600 hover:via-purple-600 hover:to-pink-600 text-white font-bold text-xl shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 hover:-translate-y-2">
              <BookOpen className="w-7 h-7 group-hover:animate-bounce" />
              <span>Solicitar apoyo académico</span>
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Sin compromiso</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Propuesta gratuita</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-400" />
                <span>Respuesta inmediata</span>
              </div>
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

export default Academico;