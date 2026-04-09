import React from 'react';
import { TrendingUp, BarChart3, PieChart, DollarSign, CheckCircle, Star, Users, Shield, MessageCircle, CreditCard, Banknote, Key, Smartphone, Globe, Target, Award } from 'lucide-react';

const ExcelGastos = () => {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/573219541241?text=Hola%20Juan%20Pablo%2C%20vi%20la%20plantilla%20de%20gastos%20en%20tu%20portafolio%20y%20quiero%20comprarla%20por%20%245%20USD.%20%C2%BFC%C3%B3mo%20procedemos%3F', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Domina tus finanzas en 5 min/día
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Plantilla Excel profesional para control de gastos personales
          </p>
          <div className="text-6xl font-bold text-cyan-400 mb-8">$5 USD</div>
          <button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-full text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
          >
            ¡Quiero mi plantilla ahora!
          </button>
        </div>

        {/* Demo Visual */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold text-center mb-8">Vista Previa de la Plantilla</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 rounded-xl p-6 text-center">
              <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="font-semibold text-green-400">Inversiones</h3>
              <p className="text-sm text-white/70">Colores verdes para gastos inteligentes</p>
            </div>
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/20 border border-red-500/30 rounded-xl p-6 text-center">
              <BarChart3 className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="font-semibold text-red-400">Malos Gastos</h3>
              <p className="text-sm text-white/70">Alertas rojas para gastos innecesarios</p>
            </div>
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/30 rounded-xl p-6 text-center">
              <PieChart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold text-blue-400">Dashboard</h3>
              <p className="text-sm text-white/70">Gráficos y análisis visual</p>
            </div>
          </div>
        </div>

        {/* Características */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Características Principales</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-16">
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

        {/* Prueba Social */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros usuarios</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-xl mr-4">
                  A
                </div>
                <div>
                  <h4 className="font-semibold">Ana G.</h4>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                </div>
              </div>
              <p className="text-white/80">"Ahorré $200 en mi primer mes usando esta plantilla. ¡Increíble!"</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-xl mr-4 mb-4">
                C
              </div>
              <div>
                <h4 className="font-semibold">Carlos M.</h4>
                <div className="flex text-yellow-400 mb-4">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-white/80">"La regla 50/30/20 cambió mi forma de gastar. Ahora ahorro automáticamente."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contador Social */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3">
            <Users className="w-6 h-6 text-cyan-400 mr-3" />
            <span className="text-lg font-semibold">Más de 230 personas ya la usan</span>
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
              <p className="text-sm">PSE</p>
            </div>
            <div className="text-center">
              <Smartphone className="w-12 h-12 text-cyan-400 mx-auto mb-2" />
              <p className="text-sm">Efecty</p>
            </div>
          </div>
        </div>

        {/* Garantía */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3">
            <Shield className="w-6 h-6 text-green-400 mr-3" />
            <span className="text-lg font-semibold text-green-400">Garantía de devolución de dinero por 7 días</span>
          </div>
        </div>

        {/* CTA Final */}
        <div className="text-center mb-16">
          <button
            onClick={handleWhatsAppClick}
            className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-6 px-12 rounded-full text-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center mx-auto"
          >
            <MessageCircle className="w-8 h-8 mr-3" />
            ¡Quiero mi plantilla ahora!
          </button>
        </div>

        {/* FAQ */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
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

      </div>
    </div>
  );
};

export default ExcelGastos;