import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, BarChart3, PieChart, DollarSign, CheckCircle, Star, Users, Shield, MessageCircle, CreditCard, Banknote, Key, Smartphone, Globe, Target, Award, Menu, X, Zap, Globe2, Brain, Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const ExcelGastos = () => {
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [country, setCountry] = useState('CO');
  const [activeTab, setActiveTab] = useState('mensual');

  const getPriceInfo = () => {
    return country === 'CO' ? { amount: 19000, currency: 'COP', symbol: '19.000' } : { amount: 7, currency: 'USD', symbol: '$7' };
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = ['hero', 'demo', 'features', 'benefits', 'transformations', 'preview', 'testimonials', 'science', 'pricing', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const timer = setTimeout(updateActiveSection, 100);
    window.addEventListener('scroll', updateActiveSection);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, []);

  const handleWhatsAppClick = () => {
    const priceInfo = getPriceInfo();
    window.open(`https://wa.me/573219541241?text=Hola%20Juan%20Pablo%2C%20vi%20la%20plantilla%20de%20gastos%20en%20tu%20portafolio%20y%20quiero%20comprarla%20por%20${priceInfo.amount}%20${priceInfo.currency}.%20%C2%BFC%C3%B3mo%20procedemos%3F`, '_blank');
  };

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? '' : tab);
  };

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMobileMenuOpen(false);
  };

  const priceInfo = getPriceInfo();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">

      {/* NAVBAR */}
      <nav className={`fixed top-4 left-0 right-0 mx-2 sm:mx-4 w-auto z-50 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl transition-all duration-300 ${isScrolled ? 'scale-95' : ''}`}>
        <div className="container mx-auto px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between">
            <button onClick={() => { navigate('/'); setIsMobileMenuOpen(false); }} className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              @juannppgd
            </button>

            <div className="flex items-center space-x-4">
              {/* Desktop Navigation */}
              <div className="hidden lg:flex space-x-8">
                {[
                  ['hero', 'Inicio'],
                  ['demo', 'Demo'],
                  ['features', 'Características'],
                  ['transformations', 'Transformaciones'],
                  ['science', 'Ciencia'],
                  ['pricing', 'Precios'],
                  ['contact', 'Contacto']
                ].map(([id, label]) => (
                  <button key={id} onClick={() => scrollTo(id)} className={`capitalize transition-all duration-300 ${activeSection === id ? 'text-cyan-400 scale-110' : 'text-white/70 hover:text-white'}`}>
                    {label}
                  </button>
                ))}
              </div>

              {/* Mobile Menu Toggle */}
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="lg:hidden p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110" aria-label="Toggle mobile menu">
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
              ['hero', 'Inicio'],
              ['demo', 'Demo'],
              ['features', 'Características'],
              ['transformations', 'Transformaciones'],
              ['science', 'Ciencia'],
              ['pricing', 'Precios'],
              ['contact', 'Contacto']
            ].map(([id, label]) => (
              <button key={id} onClick={() => scrollTo(id)} className={`capitalize transition-all duration-300 text-left ${activeSection === id ? 'text-cyan-400' : 'text-white/70 hover:text-white'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-16 max-w-4xl pt-24">
        
        {/* Hero Section */}
        <div id="hero" className="text-center mb-16">
                    <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
                      <Users className="w-4 h-4 text-cyan-400 mr-2" />
                      <span className="text-sm font-semibold">Más de 330 personas ya la usan</span>
                    </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Domina tus finanzas en 5 min/día
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Plantilla Excel profesional para control de gastos personales
          </p>
        </div>

        {/* Demo Visual */}
        <div id="demo" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Vista Previa de la Plantilla</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-6 text-center">
              <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold text-blue-400 mb-2">Vista Mensual</h3>
              <div className="text-xs text-white/70 space-y-1">
                <div>🍕 Comida: $45.000 ✅</div>
                <div>🚗 Transporte: $25.000 ✅</div>
                <div>🛒 Supermercado: $120.000 ❌</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6 text-center">
              <BarChart3 className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold text-green-400 mb-2">Progreso Semanal</h3>
              <div className="text-xs text-white/70 space-y-1">
                <div>Lunes: 85%</div>
                <div>Martes: 92%</div>
                <div>Miércoles: 78%</div>
                <div>Jueves: 88%</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-xl p-6 text-center">
              <PieChart className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold text-purple-400 mb-2">Análisis por Categoría</h3>
              <div className="text-xs text-white/70 space-y-1">
                <div>🔥 Necesidades: 55%</div>
                <div>🏆 Ahorro: 25%</div>
                <div>📊 Gastos: 20%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Características */}
        <div id="features" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Control Diario/Semanal/Mensual</h3>
                <p className="text-white/70">Registra tus gastos en tiempo real y visualiza patrones a lo largo del tiempo.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <DollarSign className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Colores Inteligentes</h3>
                <p className="text-white/70">Verde para inversiones, rojo para gastos innecesarios. Toma decisiones visuales.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <BarChart3 className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Tablas Dinámicas</h3>
                <p className="text-white/70">Análisis automático de tus patrones de gasto por categoría.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Target className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Regla 50/30/20</h3>
                <p className="text-white/70">Distribución automática: 50% necesidades, 30% deseos, 20% ahorro.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios Emocionales */}
        <div id="benefits" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">¿Por qué necesitas esto?</h2>
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-xl text-white/80 mb-4">"Deja de preguntarte a dónde se fue tu dinero"</p>
              <p className="text-white/70">Obtén claridad financiera con reportes automáticos.</p>
            </div>
            <div className="text-center">
              <p className="text-xl text-white/80 mb-4">"Ahorra para ese viaje soñado"</p>
              <p className="text-white/70">Visualiza tu progreso hacia metas financieras.</p>
            </div>
            <div className="text-center">
              <p className="text-xl text-white/80 mb-4">"Motívate con barras de logro"</p>
              <p className="text-white/70">Celebra cada semana que cumples tus objetivos.</p>
            </div>
          </div>
        </div>

        {/* Transformaciones Reales */}
        <div id="transformations" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Transformaciones Reales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Ahorro de $1.200/mes</h3>
              <p className="text-white/70">Juan identificó gastos innecesarios y ahora ahorra para su casa propia.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">Control total del presupuesto</h3>
              <p className="text-white/70">María ahora sabe exactamente cuánto gasta en cada categoría.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Metas financieras cumplidas</h3>
              <p className="text-white/70">Carlos alcanzó su meta de viaje en 6 meses usando las visualizaciones.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Libertad financiera</h3>
              <p className="text-white/70">De deudas a inversiones inteligentes en 90 días.</p>
            </div>
          </div>
        </div>

        {/* Vista Previa en Detalle */}
        <div id="preview" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Vista Previa en Detalle</h2>
          <div className="space-y-4">
            <div className="border border-white/10 rounded-lg">
              <button onClick={() => toggleTab('mensual')} className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors">
                <span className="font-semibold">Vista Mensual</span>
                {activeTab === 'mensual' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {activeTab === 'mensual' && (
                <div className="p-4 border-t border-white/10">
                  <div className="text-sm text-white/70 space-y-2">
                    <div>🍕 Comida: $45.000 ✅ $38.000 ✅ $52.000 ❌ $41.000 ✅ $49.000 ✅ $43.000 ✅ $47.000 ❌ $39.000 ✅ $51.000 ✅ $44.000 ✅ $46.000 ✅ $42.000 ✅ $48.000 ✅ $40.000 ✅ $50.000 ✅ $45.000 ✅ $43.000 ✅ $47.000 ✅ $41.000 ✅ $49.000 ✅ $44.000 ✅ $46.000 ✅ $42.000 ✅ $48.000 ✅ $40.000 ✅ $50.000 ✅</div>
                    <div>🚗 Transporte: $25.000 ✅ $22.000 ✅ $28.000 ✅ $24.000 ❌ $26.000 ✅ $23.000 ✅ $27.000 ✅ $25.000 ❌ $29.000 ✅ $24.000 ✅ $26.000 ✅ $22.000 ✅ $28.000 ✅ $23.000 ✅ $27.000 ✅ $25.000 ✅ $24.000 ✅ $26.000 ✅ $22.000 ✅ $28.000 ✅ $23.000 ✅ $27.000 ✅ $25.000 ✅ $24.000 ✅ $26.000 ✅</div>
                    <div>🛒 Supermercado: $120.000 ❌ $95.000 ✅ $110.000 ✅ $105.000 ✅ $115.000 ❌ $100.000 ✅ $108.000 ✅ $112.000 ✅ $98.000 ✅ $107.000 ✅ $103.000 ✅ $109.000 ✅ $96.000 ✅ $111.000 ✅ $102.000 ✅ $106.000 ✅ $99.000 ✅ $104.000 ✅ $101.000 ✅ $113.000 ✅ $97.000 ✅ $108.000 ✅ $105.000 ✅ $100.000 ✅ $109.000 ✅</div>
                    <div className="mt-4 font-semibold">Presupuesto cumplido: 78%</div>
                  </div>
                </div>
              )}
            </div>
            <div className="border border-white/10 rounded-lg">
              <button onClick={() => toggleTab('semanal')} className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors">
                <span className="font-semibold">Vista Semanal</span>
                {activeTab === 'semanal' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {activeTab === 'semanal' && (
                <div className="p-4 border-t border-white/10">
                  <div className="text-sm text-white/70 space-y-2">
                    <div>Lunes: 85% ($190.000 gastado)</div>
                    <div>Martes: 92% ($165.000 gastado)</div>
                    <div>Miércoles: 78% ($210.000 gastado)</div>
                    <div>Jueves: 88% ($180.000 gastado)</div>
                    <div>Viernes: 82% ($195.000 gastado)</div>
                    <div>Sábado: 75% ($220.000 gastado)</div>
                    <div>Domingo: 90% ($170.000 gastado)</div>
                  </div>
                </div>
              )}
            </div>
            <div className="border border-white/10 rounded-lg">
              <button onClick={() => toggleTab('grafico')} className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors">
                <span className="font-semibold">Gráfico de Ahorro</span>
                {activeTab === 'grafico' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {activeTab === 'grafico' && (
                <div className="p-4 border-t border-white/10">
                  <div className="text-sm text-white/70 space-y-2">
                    <div>🍕 Comida: ████████░░ 80% del presupuesto</div>
                    <div>🚗 Transporte: ██████████ 100% del presupuesto</div>
                    <div>🛒 Supermercado: ██████░░░░ 60% del presupuesto</div>
                    <div className="mt-4">📈 Ahorro total: +15% esta semana</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Prueba Social */}
        <div id="testimonials" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros usuarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  A
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Ana G.</h4>
                  <p className="text-sm text-white/60">Bogotá, Colombia</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full font-semibold">
                  +$200 ahorrado
                </div>
              </div>
              <p className="text-white/80 italic">"Ahorré $200 en mi primer mes usando esta plantilla. ¡Increíble! Ahora tengo control total de mis finanzas."</p>
              <div className="mt-4 text-xs text-white/50">Hace 2 semanas</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  C
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Carlos M.</h4>
                  <p className="text-sm text-white/60">Medellín, Colombia</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                <div className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded-full font-semibold">
                  Regla 50/30/20
                </div>
              </div>
              <p className="text-white/80 italic">"La regla 50/30/20 cambió mi forma de gastar. Ahora ahorro automáticamente y veo mi dinero crecer."</p>
              <div className="mt-4 text-xs text-white/50">Hace 1 mes</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  L
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Laura S.</h4>
                  <p className="text-sm text-white/60">Cali, Colombia</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                <div className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full font-semibold">
                  0% gastos sorpresa
                </div>
              </div>
              <p className="text-white/80 italic">"Ya no tengo gastos sorpresa. Todo está bajo control y mi presupuesto familiar funciona perfecto."</p>
              <div className="mt-4 text-xs text-white/50">Hace 3 semanas</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  J
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Juan P.</h4>
                  <p className="text-sm text-white/60">Barranquilla, Colombia</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                <div className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full font-semibold">
                  Meta cumplida
                </div>
              </div>
              <p className="text-white/80 italic">"Conseguí el dinero para mi viaje a Europa en 3 meses. Esta plantilla me ayudó a visualizar mi progreso diario."</p>
              <div className="mt-4 text-xs text-white/50">Hace 1 semana</div>
            </div>
          </div>

          {/* Estadísticas de satisfacción */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold text-cyan-400 mb-1">4.9/5</div>
              <div className="text-sm text-white/70">Calificación promedio</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold text-green-400 mb-1">98%</div>
              <div className="text-sm text-white/70">Satisfacción</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold text-purple-400 mb-1">230+</div>
              <div className="text-sm text-white/70">Usuarios activos</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold text-yellow-400 mb-1">24/7</div>
              <div className="text-sm text-white/70">Soporte disponible</div>
            </div>
          </div>
        </div>

        {/* Por qué funciona científicamente */}
        <div id="science" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">¿Por qué funciona? Ciencia probada</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4">
              <Brain className="w-12 h-12 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Finanzas conductuales</h3>
                <p className="text-white/70">Basado en la ciencia de Richard Thaler: el seguimiento consciente cambia el comportamiento financiero.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Target className="w-12 h-12 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Refuerzo positivo</h3>
                <p className="text-white/70">Cada ahorro logrado activa dopamina, creando hábitos saludables de gasto.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <TrendingUp className="w-12 h-12 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Visualización del progreso</h3>
                <p className="text-white/70">Los gráficos activan el sistema de recompensa cerebral, motivándote a ahorrar más.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Calendar className="w-12 h-12 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Consistencia y momentum</h3>
                <p className="text-white/70">El seguimiento diario crea momentum psicológico que hace más fácil continuar ahorrando.</p>
              </div>
            </div>
          </div>
        </div>


        {/* Métodos de Pago */}
        <div id="pricing" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Métodos de Pago</h2>
          <p className="text-center text-white/80 mb-8">Aceptamos todos los métodos de pago populares en Colombia y LATAM ({country === 'INT' ? 'PayPal para internacionales' : 'PSE, Efecty, Nequi, PayPal'})</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <CreditCard className="w-12 h-12 text-blue-400 mx-auto mb-2" />
              <p className="text-sm">Tarjetas</p>
            </div>
            <div className="text-center">
              <Banknote className="w-12 h-12 text-green-400 mx-auto mb-2" />
              <p className="text-sm">Transferencias</p>
            </div>
            <div className="text-center">
              <Key className="w-12 h-12 text-purple-400 mx-auto mb-2" />
              <p className="text-sm">Llaves electrónicas</p>
            </div>
            <div className="text-center">
              <Smartphone className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
              <p className="text-sm">{country === 'INT' ? 'PayPal' : 'PSE / Efecty'}</p>
            </div>
          </div>
        </div>

        {/* Garantía y Bono */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3">
            <Shield className="w-6 h-6 text-green-400 mr-3" />
            <span className="text-lg font-semibold text-green-400">7 días de garantía - Si no te gusta, te devolvemos el 100%</span>
          </div>
          <div className="inline-flex items-center bg-purple-500/10 border border-purple-500/30 rounded-full px-6 py-3">
            <Award className="w-6 h-6 text-purple-400 mr-3" />
            <span className="text-lg font-semibold text-purple-400">Pago único • Acceso de por vida • Soporte incluido</span>
          </div>
            <div className="inline-flex items-center bg-red-500/10 border border-red-500/30 rounded-full px-6 py-3">
            <Users className="w-6 h-6 text-red-400 mr-3" />
            <span className="text-lg font-semibold text-red-400">Oferta especial: 37 personas viendo esto ahora</span>
          </div>

          <div className="max-w-md mx-auto bg-slate-800/50 border border-white/20 rounded-2xl p-8 text-center shadow-xl">
            <div className="text-5xl font-bold text-white mb-6">
              {priceInfo.symbol} {priceInfo.currency}
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex gap-4 justify-center">
                <button
                  onClick={() => setCountry('CO')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-colors ${country === 'CO' ? 'bg-cyan-600 text-white shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  Colombia - 19.000 COP
                </button>
                <button
                  onClick={() => setCountry('INT')}
                  className={`px-6 py-3 rounded-xl font-semibold transition-colors ${country === 'INT' ? 'bg-cyan-600 text-white shadow-lg' : 'bg-white/10 text-white hover:bg-white/20'}`}
                >
                  Internacional - $7 USD
                </button>
              </div>
              
              <div className="text-sm text-white/70 space-y-1">
                <div>PSE • Daviplata • Efecty (Colombia)</div>
                <div>PayPal • Tarjetas (Internacional)</div>
              </div>
            </div>
            
            <button 
              onClick={handleWhatsAppClick}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Comprar ahora por WhatsApp
            </button>
          </div>
        </div>

        {/* FAQ */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Cómo recibo la plantilla?</h3>
              <p className="text-white/70">Después del pago, te envío el archivo Excel por email y WhatsApp en menos de 5 minutos.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Es fácil de usar?</h3>
              <p className="text-white/70">Sí, incluye instrucciones detalladas en PDF. Solo necesitas Excel básico. Funciona en PC, Mac y móviles.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Tiene garantía?</h3>
              <p className="text-white/70">7 días de garantía. Si no te gusta, te devuelvo el 100% del dinero sin preguntas.</p>
            </div>
          </div>
          <div className="text-center mt-8 text-white/60">
            Incluye instrucciones en PDF + soporte por WhatsApp
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-white/60 text-sm border-t border-white/10 pt-8">
          <p className="mb-4">© 2026 Juan Pablo Gutiérrez Díaz. Todos los derechos reservados.</p>
          <p className="mb-6">Diseñado y desarrollado por Juan Pablo Gutiérrez Díaz, especialista en desarrollo web y marketing digital, creando experiencias digitales ágiles y orientadas a resultados.</p>
          <p className="mb-4">¿Quieres saber más o agendar una asesoría? Escríbeme a contact.juannppgd@gmail.com</p>
          <div className="flex justify-center space-x-4">
            <button onClick={() => navigate('/')} className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-full text-sm transition-all duration-300 transform hover:scale-105">
              Ver página web
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExcelGastos;
