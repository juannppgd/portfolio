import React, { useState } from 'react';
import { TrendingUp, BarChart3, PieChart, CheckCircle, Star, Users, Shield, MessageCircle, CreditCard, Banknote, Key, Smartphone, Target, Award, Calendar, Zap, Brain, ChevronDown, ChevronUp } from 'lucide-react';

const ExcelHabitos = () => {
  const [activeTab, setActiveTab] = useState('mensual');

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573219541241?text=Hola%20Juan%20Pablo%2C%20vi%20la%20plantilla%20de%20H%C3%81BITOS%20en%20tu%20portafolio%20y%20quiero%20comprarla%20por%20%245%20USD.%20%C2%BFC%C3%B3mo%20procedemos%3F', '_blank');
  };

  const toggleTab = (tab) => {
    setActiveTab(activeTab === tab ? '' : tab);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
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
          <div className="text-4xl font-bold text-cyan-400 mb-8">$5 USD (pago único, acceso de por vida)</div>
          <button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center mx-auto"
          >
            🔥 Quiero mi plantilla ahora
          </button>
        </div>

        {/* Demo Visual */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
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
        <div className="mb-16">
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
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
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

        {/* Vista Previa en Detalle */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Vista Previa en Detalle</h2>
          <div className="space-y-4">
            <div className="border border-white/10 rounded-lg">
              <button
                onClick={() => toggleTab('mensual')}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
              >
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
              <button
                onClick={() => toggleTab('semanal')}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
              >
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
              <button
                onClick={() => toggleTab('grafico')}
                className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition-colors"
              >
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
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros usuarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-xl mr-4">
                  M
                </div>
                <div>
                  <h4 className="font-semibold">María G.</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
              </div>
              <p className="text-white/80">"Pasé de 30% a 85% de cumplimiento en 2 meses. ¡Increíble transformación!"</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-xl mr-4 mb-4">
                C
              </div>
              <div>
                <h4 className="font-semibold">Carlos R.</h4>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/80">"La mejor inversión de $5 que hice en 2026. Mi productividad se disparó."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contador */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <Zap className="w-6 h-6 text-cyan-400 mr-3" />
            <span className="text-lg font-semibold">Más de 1,200 hábitos rastreados esta semana</span>
          </div>
        </div>

        {/* Métodos de Pago */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Métodos de Pago</h2>
          <p className="text-center text-white/80 mb-8">Aceptamos todos los métodos de pago populares en Colombia y LATAM</p>
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
              <p className="text-sm">PSE / Efecty</p>
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
            <span className="text-lg font-semibold text-purple-400">Bono sorpresa: Incluye plantilla de metas anuales + calendario 2026</span>
          </div>
          <div className="inline-flex items-center bg-red-500/10 border border-red-500/30 rounded-full px-6 py-3">
            <Users className="w-6 h-6 text-red-400 mr-3" />
            <span className="text-lg font-semibold text-red-400">Oferta especial: 47 personas viendo esto ahora</span>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mb-16">
          <button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-6 px-12 rounded-full text-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center mx-auto"
          >
            <MessageCircle className="w-8 h-8 mr-3" />
            ¡Quiero mi plantilla de hábitos ahora! 🚀
          </button>
          <p className="text-white/70 mt-4">Pago único de $5 USD. Sin suscripciones. Acceso inmediato.</p>
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
        <div className="text-center text-white/60 text-sm">
          <p>© 2026 Juan Pablo Gutiérrez. Todos los derechos reservados.</p>
          <p>Política de privacidad | Contacto: juannppgd@gmail.com</p>
        </div>

      </div>
    </div>
  );
};

export default ExcelHabitos;