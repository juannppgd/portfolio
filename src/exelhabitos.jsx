import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TrendingUp, BarChart3, PieChart, CheckCircle, Star, Users, Shield, MessageCircle, CreditCard, Banknote, Key, Smartphone, Target, Award, Calendar, Zap, Brain, ChevronDown, ChevronUp, Menu, X, Globe2 } from 'lucide-react';

const ExcelHabitos = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('mensual');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [country, setCountry] = useState('CO');

  const getPriceInfo = () => {
    return country === 'CO' ? { amount: 19000, currency: 'COP', symbol: '19.000' } : { amount: 7, currency: 'USD', symbol: '$7' };
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = ['hero', 'features', 'benefits', 'transformations', 'preview', 'testimonials', 'science', 'pricing', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const priceInfo = getPriceInfo();
    window.open(`https://wa.me/573219541241?text=Hola%20Juan%20Pablo%2C%20vi%20la%20plantilla%20de%20H%C3%81BITOS%20en%20tu%20portafolio%20y%20quiero%20comprarla%20por%20${priceInfo.amount}%20${priceInfo.currency}.%20%C2%BFC%C3%B3mo%20procedemos%3F`, '_blank');
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
            <span className="text-sm font-semibold">Más de 230 personas ya la usan</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Domina tus hábitos diarios en 2026
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Rastrea, mide y mejora tu cumplimiento día a día. Visualiza tu progreso semanal, mensual y anual con gráficos automáticos.
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
                <div>🏋️ Gym: ✅✅❌✅✅</div>
                <div>📖 Leer: ✅✅✅❌✅</div>
                <div>🧘 Meditar: ❌✅✅✅❌</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6 text-center">
              <BarChart3 className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold text-green-400 mb-2">Progreso Semanal</h3>
              <div className="text-xs text-white/70 space-y-1">
                <div>Lunes: 80%</div>
                <div>Martes: 100%</div>
                <div>Miércoles: 60%</div>
                <div>Jueves: 90%</div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-500/30 rounded-xl p-6 text-center">
              <PieChart className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="font-semibold text-purple-400 mb-2">Tablero Anual</h3>
              <div className="text-xs text-white/70 space-y-1">
                <div>🔥 Racha actual: 12 días</div>
                <div>🏆 Mejor mes: 95%</div>
                <div>📊 Total hábitos: 1,200</div>
              </div>
            </div>
          </div>
        </div>

        {/* Características */}
        <div id="features" className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-start space-x-4">
              <BarChart3 className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Progreso en %</h3>
                <p className="text-white/70 text-sm">Cada día, semana y mes con porcentaje automático</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Checkboxes visuales</h3>
                <p className="text-white/70 text-sm">Marca tus hábitos con un clic</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <TrendingUp className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Gráficos dinámicos</h3>
                <p className="text-white/70 text-sm">Barras, líneas y heatmap de cumplimiento</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Target className="w-8 h-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Metas y rachas</h3>
                <p className="text-white/70 text-sm">Streak actual, mejor racha del año</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Calendar className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Vista diaria/semanal/mensual</h3>
                <p className="text-white/70 text-sm">3 niveles de detalle</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Zap className="w-8 h-8 text-red-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Copiable mes a mes</h3>
                <p className="text-white/70 text-sm">Duplica fácilmente para todo 2026</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Smartphone className="w-8 h-8 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Compatible con móvil</h3>
                <p className="text-white/70 text-sm">Usa la plantilla desde tu celular</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Brain className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold mb-2">Análisis inteligente</h3>
                <p className="text-white/70 text-sm">"Tu mejor día fue X con Y%"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Beneficios Emocionales */}
        <div id="benefits" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">¿Por qué necesitas esto?</h2>
          <div className="space-y-6">
            <div className="text-center">
              <p className="text-xl text-white/80 mb-4">"Nunca más olvides un hábito importante"</p>
              <p className="text-white/70">Recordatorios visuales y seguimiento automático.</p>
            </div>
            <div className="text-center">
              <p className="text-xl text-white/80 mb-4">"Visualiza tu progreso y motívate a seguir"</p>
              <p className="text-white/70">Gráficos que te muestran cuánto has avanzado.</p>
            </div>
            <div className="text-center">
              <p className="text-xl text-white/80 mb-4">"Transforma tu disciplina en datos reales"</p>
              <p className="text-white/70">Convierte tus esfuerzos en métricas tangibles.</p>
            </div>
          </div>
        </div>

        {/* Transformaciones Reales */}
        <div id="transformations" className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Transformaciones Reales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <div className="text-6xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">De 45% a 92% de cumplimiento</h3>
              <p className="text-white/70">María logró mantener 6 hábitos diarios consistentes durante 3 meses.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🔥</div>
              <h3 className="text-xl font-semibold mb-2">Racha de 127 días consecutivos</h3>
              <p className="text-white/70">Carlos rompió su récord personal de disciplina con esta herramienta.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">Mejor mes: 98% de éxito</h3>
              <p className="text-white/70">Ana celebró su mes perfecto con visualizaciones motivadoras.</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-4">💪</div>
              <h3 className="text-xl font-semibold mb-2">Disciplina transformada</h3>
              <p className="text-white/70">De procrastinador a persona productiva en 60 días.</p>
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
                    <div>🏋️ Gym: ✅✅❌✅✅✅✅❌✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅</div>
                    <div>📖 Leer: ✅✅✅❌✅✅✅✅❌✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅</div>
                    <div>🧘 Meditar: ❌✅✅✅❌✅✅✅✅❌✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅✅</div>
                    <div className="mt-4 font-semibold">Cumplimiento: 78%</div>
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
                    <div>Lunes: 80% (4/5 hábitos)</div>
                    <div>Martes: 100% (5/5 hábitos)</div>
                    <div>Miércoles: 60% (3/5 hábitos)</div>
                    <div>Jueves: 90% (4.5/5 hábitos)</div>
                    <div>Viernes: 70% (3.5/5 hábitos)</div>
                    <div>Sábado: 85% (4.25/5 hábitos)</div>
                    <div>Domingo: 95% (4.75/5 hábitos)</div>
                  </div>
                </div>
              )}
            </div>
            <div className="border border-white/10 rounded-lg">
              <button onClick={() => toggleTab('grafico')} className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors">
                <span className="font-semibold">Gráfico de Progreso</span>
                {activeTab === 'grafico' ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
              </button>
              {activeTab === 'grafico' && (
                <div className="p-4 border-t border-white/10">
                  <div className="text-sm text-white/70 space-y-2">
                    <div>🏋️ Gym: ████████░░ 80%</div>
                    <div>📖 Leer: ██████████ 100%</div>
                    <div>🧘 Meditar: ██████░░░░ 60%</div>
                    <div className="mt-4">📈 Tendencia: +15% esta semana</div>
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
                  M
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">María G.</h4>
                  <p className="text-sm text-white/60">Madrid, España</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                <div className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded-full font-semibold">
                  +55% cumplimiento
                </div>
              </div>
              <p className="text-white/80 italic">"Pasé de 30% a 85% de cumplimiento en 2 meses. ¡Increíble transformación! Ahora mis hábitos son parte de mi rutina."</p>
              <div className="mt-4 text-xs text-white/50">Hace 3 semanas</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  C
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Carlos R.</h4>
                  <p className="text-sm text-white/60">Buenos Aires, Argentina</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                <div className="bg-blue-500/20 text-blue-400 text-xs px-2 py-1 rounded-full font-semibold">
                  Mejor inversión
                </div>
              </div>
              <p className="text-white/80 italic">"La mejor inversión de $7 que hice en 2026. Mi productividad se disparó y ahora tengo hábitos saludables."</p>
              <div className="mt-4 text-xs text-white/50">Hace 1 mes</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  S
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Sofia L.</h4>
                  <p className="text-sm text-white/60">Santiago, Chile</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                <div className="bg-yellow-500/20 text-yellow-400 text-xs px-2 py-1 rounded-full font-semibold">
                  127 días racha
                </div>
              </div>
              <p className="text-white/80 italic">"Rompí mi récord personal con 127 días consecutivos. Esta herramienta me mantiene motivada diariamente."</p>
              <div className="mt-4 text-xs text-white/50">Hace 2 semanas</div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 md:col-span-2 lg:col-span-1">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-xl font-bold mr-4">
                  A
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Andrés M.</h4>
                  <p className="text-sm text-white/60">Lima, Perú</p>
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
                <div className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded-full font-semibold">
                  Disciplina total
                </div>
              </div>
              <p className="text-white/80 italic">"De procrastinador a persona disciplinada. Los gráficos me ayudan a ver mi progreso y mantenerme motivado."</p>
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
              <div className="text-2xl font-bold text-green-400 mb-1">97%</div>
              <div className="text-sm text-white/70">Tasa de éxito</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold text-purple-400 mb-1">1,200+</div>
              <div className="text-sm text-white/70">Hábitos rastreados</div>
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
                <h3 className="text-xl font-semibold mb-2">Hábitos atómicos</h3>
                <p className="text-white/70">Basado en la ciencia de James Clear: cambios pequeños, consistentes, producen resultados masivos.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Target className="w-12 h-12 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Refuerzo positivo</h3>
                <p className="text-white/70">Cada check marca activa dopamina, creando adicción saludable al progreso.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <TrendingUp className="w-12 h-12 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Visualización del progreso</h3>
                <p className="text-white/70">Los gráficos activan el sistema de recompensa cerebral, motivándote naturalmente.</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Calendar className="w-12 h-12 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Rachas y momentum</h3>
                <p className="text-white/70">Las rachas crean momentum psicológico que hace más fácil continuar.</p>
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
            <span className="text-lg font-semibold text-red-400">Oferta especial: 27 personas viendo esto ahora</span>
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
              <p className="text-white/70">Te la enviamos por WhatsApp/email después del pago. Acceso inmediato.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Necesito saber Excel?</h3>
              <p className="text-white/70">No, es súper fácil. Trae instrucciones paso a paso para principiantes.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Funciona en celular?</h3>
              <p className="text-white/70">Sí, en Excel móvil o Google Sheets. Compatible con todos los dispositivos.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">¿Tiene garantía?</h3>
              <p className="text-white/70">7 días de garantía. Si no te gusta, te devolvemos el 100% sin preguntas.</p>
            </div>
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

export default ExcelHabitos;