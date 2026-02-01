import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Truck, Shield, Users, BookOpen, ArrowUpRight, Star, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaYoutube, FaTelegram, FaPinterest, FaSnapchat, FaDiscord } from 'react-icons/fa';
import XImage from './assets/X2.png';
import kickImage from './assets/kick.png';

const Venta = () => {
  const [activeSection, setActiveSection] = useState('venta-hero');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const currentYear = new Date().getFullYear();

  const mercadoLink = 'https://listado.mercadolibre.com.co/_CustId_458406036?item_id=MCO1405179747&category_id=MCO180874&seller_id=458406036&client=recoview-selleritems&recos_listing=true#origin=upp&component=sellerData&typeSeller=classic';
  const marketplaceLink = 'https://www.facebook.com/marketplace/profile/100028152081570/';
  const whatsappEdu = 'https://wa.me/573219541241?text=Hola%2C%20quiero%20informaci%C3%B3n%20para%20aprender%20a%20montar%20mi%20e-commerce';

  const initialTestimonials = [
    {
      name: "María González",
      role: "Compradora Frecuente",
      company: "Cliente MercadoLibre",
      testimonial: "Compré varios productos en la tienda de Juan Pablo y siempre todo llega en perfectas condiciones. Los envíos son rápidos y el empaque es excelente. ¡Totalmente confiable!",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Sofia Ramírez",
      role: "Emprendedora",
      company: "Aprendió a Vender Online",
      testimonial: "Tomé las clases de Juan Pablo para montar mi e-commerce y ahora vendo exitosamente en Marketplace. Sus estrategias de precios y publicación hicieron que mis ventas se duplicaran. ¡Excelente maestro!",
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      name: "Carlos Rodríguez",
      role: "Comprador",
      company: "Cliente Facebook Marketplace",
      testimonial: "Encontré productos increíbles en la tienda de Juan Pablo en Marketplace. El trato directo y los precios justos me convencieron. Todo llegó bien embalado y a tiempo.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Miguel Ángel",
      role: "Nuevo Vendedor",
      company: "Empezó con MercadoLibre",
      testimonial: "Gracias a las clases de Juan Pablo, aprendí a publicar productos correctamente en MercadoLibre. Ahora tengo mi propia tienda y las ventas van muy bien. ¡Sus consejos son oro puro!",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Ana López",
      role: "Compradora Satisfecha",
      company: "Cliente Recurrente",
      testimonial: "He comprado varias veces en las tiendas de Juan Pablo y nunca me ha defraudado. Productos de calidad, envíos seguros y atención al cliente excepcional. ¡Recomiendo al 100%!",
      rating: 5,
      avatar: "👩"
    },
    {
      name: "Roberto Silva",
      role: "Emprendedor Digital",
      company: "Aprendió Estrategias de Venta",
      testimonial: "Las clases de Juan Pablo me enseñaron todo sobre gestión de inventarios y estrategias de venta en marketplaces. Mi tienda ahora genera ingresos constantes. ¡Un experto en ventas online!",
      rating: 5,
      avatar: "👨‍💼"
    },
  ];

  const [testimonials, setTestimonials] = useState(initialTestimonials);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [reviewForm, setReviewForm] = useState({ name: '', role: '', company: '', rating: 5, testimonial: '' });

  const handleReviewChange = (e) => setReviewForm({ ...reviewForm, [e.target.name]: e.target.value });

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const newReview = {
      name: reviewForm.name || 'Anónimo',
      role: reviewForm.role || 'Cliente',
      company: reviewForm.company || '',
      testimonial: reviewForm.testimonial || '',
      rating: parseInt(reviewForm.rating || 5, 10),
      avatar: '🧑'
    };
    setTestimonials(prev => [newReview, ...prev]);
    setReviewForm({ name: '', role: '', company: '', rating: 5, testimonial: '' });
    setShowReviewModal(false);

    // optional: scroll to reviews section to show the new review
    setTimeout(() => document.getElementById('reseñas')?.scrollIntoView({ behavior: 'smooth' }), 200);
  };

  useEffect(() => {
    const sections = ['venta-hero', 'venta-tiendas', 'venta-beneficios', 'venta-acciones', 'reseñas', 'footer'];

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
      <nav className="fixed top-4 inset-x-4 z-50 backdrop-blur-xl rounded-2xl shadow-2xl bg-white/10 border border-white/20">
        <div className="flex items-center justify-between px-6 py-4">
          <button onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }} className="font-black text-2xl bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">@juannppgd</button>

          <div className="hidden lg:flex gap-8">
            {[
              ['venta-hero', 'Inicio'],
              ['venta-tiendas', 'Tiendas'],
              ['venta-beneficios', 'Beneficios'],
              ['reseñas', 'Reseñas'],
              ['venta-acciones', 'Próximo Paso'],
              ['footer', 'Contacto']
            ].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} aria-current={activeSection === id ? 'page' : undefined} className={`px-4 py-2 rounded-lg font-medium ${activeSection === id ? 'text-cyan-400 scale-110 bg-cyan-400/10 shadow-lg shadow-cyan-500/20' : 'text-white/70'}`}>
                {label}
              </button>
            ))}
          </div>

          <div className="flex gap-2">
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-3 rounded-xl border border-white/20 bg-white/5">{isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}</button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed top-24 inset-x-4 z-40 rounded-2xl p-6 space-y-4 bg-slate-900/95 backdrop-blur-xl border border-white/10 shadow-2xl animate-in slide-in-from-top-2 duration-300">
          {[
            ['venta-hero', 'Inicio'],
            ['venta-tiendas', 'Tiendas'],
            ['venta-beneficios', 'Beneficios'],
            ['reseñas', 'Reseñas'],
            ['venta-acciones', 'Próximo Paso'],
            ['footer', 'Contacto']
          ].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} className={`block w-full text-left px-4 py-3 rounded-lg ${activeSection === id ? 'text-cyan-400 bg-cyan-400/10' : 'text-slate-300'}`}>{label}</button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="venta-hero" className="min-h-screen flex items-center justify-center text-center px-6 pt-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 animate-pulse"></div>
        <div className="relative z-10 max-w-4xl">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-cyan-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-4">🚀 Tiendas Profesionales</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
            Convierte tus productos en
            <span className="block mt-2 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">ventas reales</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">Compra segura y ventas profesionales en Marketplace y MercadoLibre. Tiendas verificadas, envíos confiables y atención directa.</p>

          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
            <a href="#venta-tiendas" onClick={(e)=>{e.preventDefault(); scrollTo('venta-tiendas');}} className="group inline-flex items-center gap-3 px-8 py-5 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
              <ShoppingCart className="w-6 h-6 group-hover:animate-bounce" />
              <span>Explorar tiendas</span>
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
            <a href={whatsappEdu} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-white/80 hover:text-white transition-all duration-300 hover:bg-white/5">
              <BookOpen className="w-5 h-5" />
              <span>Quiero aprender a vender</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-400" />
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-4 h-4 text-cyan-400" />
              <span>Envíos Rápidos</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-purple-400" />
              <span>Atención 24/7</span>
            </div>
          </div>
        </div>
      </section>

      {/* TIENDAS */}
      <section id="venta-tiendas" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Nuestras Tiendas Verificadas
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Explora nuestras tiendas profesionales en las plataformas más confiables de Colombia
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-yellow-500/10 via-yellow-500/5 to-slate-800/30 border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/10 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400/20 to-yellow-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img src="/assets/mercadolibre-logo.png" alt="MercadoLibre" className="w-12 h-12 object-contain" onError={(e)=>{e.target.style.display='none'}} />
                    <ShoppingCart className="w-8 h-8 text-yellow-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-xl text-white">MercadoLibre</h3>
                      <span className="px-2 py-1 bg-green-500/20 text-green-400 text-xs rounded-full border border-green-400/20">Verificado</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">Ventas verificadas con reputación consolidada. Envíos seguros, productos con garantía y atención al cliente profesional.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>4.9/5</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>+500 ventas</span>
                    </div>
                  </div>
                  <a href={mercadoLink} target="_blank" rel="noreferrer" className="group/btn inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/25">
                    <span>Visitar Tienda</span>
                    <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            <div className="group relative p-8 rounded-3xl bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-slate-800/30 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <img src="/assets/marketplace-logo.png" alt="Marketplace" className="w-12 h-12 object-contain" onError={(e)=>{e.target.style.display='none'}} />
                    <Users className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-bold text-xl text-white">Facebook Marketplace</h3>
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-400/20">Local</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">Trato directo y personal. Ofertas exclusivas, cercanía local y productos listos para entrega inmediata.</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-slate-400">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>4.8/5</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Truck className="w-4 h-4" />
                      <span>Envío gratis</span>
                    </div>
                  </div>
                  <a href={marketplaceLink} target="_blank" rel="noreferrer" className="group/btn inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-semibold hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                    <span>Ver Tienda</span>
                    <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section id="venta-beneficios" className="px-6 py-20 bg-gradient-to-r from-slate-900/10 to-purple-900/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Por qué elegirnos
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Garantizamos una experiencia de compra excepcional con estándares profesionales
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="group p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-white/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 backdrop-blur-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-cyan-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <CheckIcon className="w-8 h-8 text-cyan-400" />
              </div>
              <h4 className="font-bold text-xl mb-3 text-white">Productos verificados</h4>
              <p className="text-slate-300 leading-relaxed">Cada producto cuenta con verificación de calidad y descripciones detalladas para tu tranquilidad.</p>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-white/10 hover:border-green-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 backdrop-blur-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-green-400/20 to-green-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="font-bold text-xl mb-3 text-white">Pagos seguros</h4>
              <p className="text-slate-300 leading-relaxed">Transacciones 100% protegidas con múltiples métodos de pago certificados y confiables.</p>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-white/10 hover:border-blue-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 backdrop-blur-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-400/20 to-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="font-bold text-xl mb-3 text-white">Envíos confiables</h4>
              <p className="text-slate-300 leading-relaxed">Seguimiento en tiempo real y embalaje profesional para entregas seguras y puntuales.</p>
            </div>

            <div className="group p-8 rounded-3xl bg-gradient-to-br from-slate-800/50 to-slate-900/30 border border-white/10 hover:border-purple-400/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 backdrop-blur-sm text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-purple-400/20 to-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="font-bold text-xl mb-3 text-white">Atención directa</h4>
              <p className="text-slate-300 leading-relaxed">Soporte personalizado 24/7 con atención humana para resolver todas tus consultas.</p>
            </div>
          </div>
        </div>
      </section>


            {/* ================= REVIEWS ================= */}
      <section id="reseñas" className="py-4 px-4">
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

      {showReviewModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setShowReviewModal(false)} aria-hidden />
          <form onSubmit={handleReviewSubmit} className="relative z-10 w-full max-w-xl bg-[#081025] rounded-2xl p-6 border border-white/10 shadow-2xl">
            <h3 className="text-xl font-bold mb-4">Agregar Reseña</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
              <input name="name" value={reviewForm.name} onChange={handleReviewChange} placeholder="Tu nombre" className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white" required />
              <input name="role" value={reviewForm.role} onChange={handleReviewChange} placeholder="Rol (e.g. Cliente)" className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white" />
            </div>
            <input name="company" value={reviewForm.company} onChange={handleReviewChange} placeholder="Compañía" className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white mb-3" />
            <textarea name="testimonial" value={reviewForm.testimonial} onChange={handleReviewChange} placeholder="Tu reseña" className="w-full px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white mb-3" rows={4} required />
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <label className="text-sm text-slate-300">Puntaje:</label>
                <select name="rating" value={reviewForm.rating} onChange={handleReviewChange} className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white">
                  <option value={5}>5</option>
                  <option value={4}>4</option>
                  <option value={3}>3</option>
                  <option value={2}>2</option>
                  <option value={1}>1</option>
                </select>
              </div>

              <div className="flex items-center gap-3">
                <button type="button" onClick={() => setShowReviewModal(false)} className="px-4 py-2 rounded-md bg-white/5 text-white">Cancelar</button>
                <button type="submit" className="px-4 py-2 rounded-md bg-cyan-500 text-black font-semibold">Enviar</button>
              </div>
            </div>
          </form>
        </div>
      )}

        

      {/* ACCIONES PRINCIPALES */}
      <section id="venta-acciones" className="px-6 py-20 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-cyan-900/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 animate-pulse"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-400/10 to-purple-400/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-4">🚀 Tu Próximo Paso</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight bg-gradient-to-r from-white via-cyan-100 to-purple-100 bg-clip-text text-transparent">
            Listo para dar el salto?
          </h2>

          <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Compra productos verificados con envío seguro o aprende las estrategias profesionales para montar tu propio e-commerce desde cero.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center justify-center">
            <a href={mercadoLink} target="_blank" rel="noreferrer" className="group relative inline-flex items-center gap-4 px-10 py-6 rounded-2xl bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold shadow-2xl hover:shadow-yellow-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <ShoppingCart className="w-7 h-7 group-hover:animate-bounce relative z-10" />
              <div className="text-left relative z-10">
                <div className="text-lg font-bold">Compra en Línea</div>
                <div className="text-sm opacity-80">Productos verificados</div>
              </div>
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
            </a>

            <a href={marketplaceLink} target="_blank" rel="noreferrer" className="group relative inline-flex items-center gap-4 px-10 py-6 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <FaFacebook className="w-7 h-7 group-hover:animate-bounce relative z-10" />
              <div className="text-left relative z-10">
                <div className="text-lg font-bold">Compra en Marketplace</div>
                <div className="text-sm opacity-80">Productos locales</div>
              </div>
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
            </a>

            <a href={whatsappEdu} target="_blank" rel="noreferrer" className="group relative inline-flex items-center gap-4 px-10 py-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <BookOpen className="w-7 h-7 group-hover:animate-bounce relative z-10" />
              <div className="text-left relative z-10">
                <div className="text-lg font-bold">Aprende a Montar</div>
                <div className="text-sm opacity-80">Tu E-commerce</div>
              </div>
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform relative z-10" />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:animate-pulse" />
              <h4 className="font-bold text-lg mb-2">Compra Segura</h4>
              <p className="text-slate-300 text-sm">Transacciones protegidas y productos garantizados</p>
            </div>

            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/30 transition-all duration-300 hover:scale-105">
              <TrendingUp className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:animate-pulse" />
              <h4 className="font-bold text-lg mb-2">Aprende y Crece</h4>
              <p className="text-slate-300 text-sm">Estrategias probadas para emprendedores exitosos</p>
            </div>

            <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-400/30 transition-all duration-300 hover:scale-105">
              <Users className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:animate-pulse" />
              <h4 className="font-bold text-lg mb-2">Atención Personal</h4>
              <p className="text-slate-300 text-sm">Soporte directo y consultoría especializada</p>
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

// Small inline icon used in benefits (to avoid extra imports failing if CheckIcon not present)
const CheckIcon = ({ className = '' }) => (
  <svg className={`w-6 h-6 text-cyan-400 ${className}`} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
);

export default Venta;