import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Bot, Sparkles, Zap, RotateCcw } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '¡Hola! 👋 Soy el asistente programado de Juan Pablo. ¿En qué puedo ayudarte hoy?',
      options: ['Servicios', 'Desarrollo Web', 'Marketing Digital', 'Preguntas Frecuentes', 'Contacto']
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Auto-scroll al último mensaje
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Prevenir scroll del body cuando el chat está abierto en móvil
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const responses = {
    'Servicios': {
      text: 'Juan Pablo ofrece dos servicios principales. ¿Sobre cuál te gustaría saber más?',
      options: ['Desarrollo Web', 'Marketing Digital', 'Háblame de Juan Pablo', 'Contacto']
    },
    'Desarrollo Web': {
      text: 'Desarrollo páginas web modernas con React, Vite y Tailwind CSS. Sitios 100% personalizados, responsivos y optimizados para convertir visitantes en clientes. Ideales para emprendedores, pymes y profesionales. ¿Qué te gustaría saber?',
      options: ['Ver Tecnologías', 'Tiempos de Desarrollo', '¿Incluye Hosting?', 'Contacto']
    },
    'Marketing Digital': {
      text: 'Servicios completos de marketing digital: campañas de email/SMS, gestión de redes sociales, SEO, SEM y análisis de datos. Estrategias personalizadas para impulsar tu negocio online. ¿Qué aspecto te interesa?',
      options: ['Email Marketing', 'Redes Sociales', 'Análisis de Datos', 'Contacto']
    },
    'Contacto': {
      text: '¡Perfecto! Juan Pablo estará encantado de ayudarte. ¿Cómo prefieres contactarlo?',
      options: ['WhatsApp', 'Enviar Email', 'Ver Teléfono', 'Más Información']
    },
    'Ver Tecnologías': {
      text: 'Stack tecnológico:\n\n• Frontend: React + Vite + Tailwind CSS\n• Backend: Node.js\n• Bases de datos: MySQL\n• Automatización: Python (IA)\n• Control de versiones: Git & GitHub\n• Apps móviles: React Native\n\nTodo para crear soluciones modernas y escalables.',
      options: ['Desarrollo Web', 'Ver Ejemplos', 'Contacto']
    },
    'Tiempos de Desarrollo': {
      text: 'Los tiempos varían según complejidad:\n\n• Landing page básica: 3-5 días\n• Sitio corporativo: 1-2 semanas\n• E-commerce completo: 3-4 semanas\n\nIncluye consultoría gratuita inicial para definir tu proyecto.',
      options: ['¿Incluye Hosting?', 'Ver Tecnologías', 'Contacto']
    },
    '¿Incluye Hosting?': {
      text: '¡Sí! El primer año incluye:\n\n✓ Hosting y dominio gratis*\n✓ Correo corporativo\n✓ Configuración DNS\n✓ Certificado SSL\n✓ 3 meses de soporte gratis\n\n*Aplican términos y condiciones',
      options: ['Desarrollo Web', 'Contacto']
    },
    'Email Marketing': {
      text: 'Campañas de email y SMS marketing con:\n\n• Segmentación de audiencias\n• Pruebas A/B para optimización\n• Automatización con EmailJS\n• Análisis de resultados\n• CRM integrado (HubSpot/Masivian)\n\nAumento de engagement garantizado.',
      options: ['Marketing Digital', 'Análisis de Datos', 'Contacto']
    },
    'Redes Sociales': {
      text: 'Gestión profesional de redes sociales:\n\n• Creación de contenido atractivo\n• Programación estratégica\n• Análisis de métricas\n• Community management\n• Campañas en Meta Business Suite\n\nConecta mejor con tu audiencia.',
      options: ['Marketing Digital', 'Email Marketing', 'Contacto']
    },
    'Análisis de Datos': {
      text: 'Toma decisiones basadas en datos:\n\n• Google Analytics integrado\n• Reportes personalizados\n• Segmentación avanzada\n• Optimización continua\n• KPIs y métricas clave\n\nTransforma datos en resultados.',
      options: ['Marketing Digital', 'Email Marketing', 'Contacto']
    },
    'WhatsApp': {
      text: '¡Excelente! Te conecto con Juan Pablo por WhatsApp. Es la forma más rápida de conversar directamente. 💬',
      options: ['Volver al Inicio'],
      action: 'whatsapp'
    },
    'Enviar Email': {
      text: 'Te abro el email para que puedas escribir directamente. Juan Pablo responde en menos de 24 horas. 📧',
      options: ['Volver al Inicio'],
      action: 'email'
    },
    'Ver Teléfono': {
      text: 'Puedes llamar o escribir por WhatsApp:\n\n📱 +57 321 954 1241\n\n¿Prefieres que abramos WhatsApp directamente?',
      options: ['WhatsApp', 'Volver al Inicio']
    },
    'Más Información': {
      text: '¿Qué más te gustaría saber? Puedo contarte sobre:\n\n• Proyectos realizados\n• Experiencia profesional\n• Certificaciones\n• Métodos de pago\n• Trabajo internacional',
      options: ['Servicios', 'Háblame de Juan Pablo', 'Contacto']
    },
    'Ver Ejemplos': {
      text: 'Juan Pablo tiene un portfolio con diversos proyectos:\n\n• E-commerce\n• Landing pages\n• Sitios corporativos\n• Aplicaciones web\n\nExplora su sitio web para ver casos de éxito y testimonios reales.',
      options: ['Desarrollo Web', 'Contacto']
    },
    'Háblame de Juan Pablo': {
      text: 'Juan Pablo es desarrollador web full-stack y experto en performance marketing. Experiencia en React, Python (IA), y marketing digital. Trabaja con clientes en toda LATAM desde Colombia. Certificado en múltiples tecnologías y metodologías.',
      options: ['Ver Tecnologías', 'Servicios', 'Contacto']
    },
    'Volver al Inicio': {
      text: '¡Perfecto! ¿Hay algo más en lo que pueda ayudarte? 😊',
      options: ['Servicios', 'Desarrollo Web', 'Marketing Digital', 'Preguntas Frecuentes', 'Contacto']
    },
    'Preguntas Frecuentes': {
      text: 'Aquí van algunas preguntas frecuentes:\n\n• ¿Trabajas con clientes internacionales? Sí, en toda LATAM.\n• ¿Ofreces mantenimiento? Sí, planes disponibles.\n• ¿Qué métodos de pago aceptas? Transferencia, PayPal, cripto.\n\n¿Cuál te gustaría profundizar?',
      options: ['Mantenimiento', 'Pagos', 'Contacto']
    },
    'Mantenimiento': {
      text: 'Planes de mantenimiento:\n\n• Básico: Actualizaciones menores\n• Premium: Soporte completo, backups\n• Anual: Descuento disponible\n\nGarantiza que tu sitio esté siempre actualizado.',
      options: ['Preguntas Frecuentes', 'Contacto']
    },
    'Pagos': {
      text: 'Aceptamos:\n\n• Transferencias bancarias\n• PayPal\n• Mercado Pago\n• Criptomonedas (USDT, BTC)\n\n50% anticipo, 50% al finalizar.',
      options: ['Preguntas Frecuentes', 'Contacto']
    }
  };

  const handleOptionClick = async (option) => {
    if (isLoading) return;

    if (option === 'Reiniciar Chat') {
      setMessages([
        {
          role: 'assistant',
          content: '¡Hola! 👋 Soy el asistente programado de Juan Pablo. ¿En qué puedo ayudarte hoy?',
          options: ['Servicios', 'Desarrollo Web', 'Marketing Digital', 'Preguntas Frecuentes', 'Contacto']
        }
      ]);
      return;
    }

    const userMessage = { role: 'user', content: option };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    await new Promise(resolve => setTimeout(resolve, 600));

    const response = responses[option];
    if (response) {
      const assistantMessage = {
        role: 'assistant',
        content: response.text,
        options: response.options
      };
      setMessages(prev => [...prev, assistantMessage]);

      if (response.action === 'email') {
        setTimeout(() => {
          window.open('mailto:contact.juannppgd@gmail.com?subject=Consulta%20desde%20el%20chatbot&body=Hola%20Juan%20Pablo,%0A%0AMe%20contacto%20desde%20tu%20portfolio%20web.%0A%0A', '_blank');
        }, 500);
      } else if (response.action === 'whatsapp') {
        setTimeout(() => {
          window.open('https://wa.me/573219541241?text=Hola%20Juan%20Pablo,%20me%20contacto%20desde%20tu%20portfolio%20web.%20', '_blank');
        }, 500);
      }
    }

    setIsLoading(false);
  };

  return (
    <>
      {/* Botón flotante con animación de pulso */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 md:bottom-6 md:right-6 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white p-3 md:p-4 rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-110 z-50 animate-pulse hover:animate-none"
          aria-label="Abrir chatbot"
        >
          <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse"></span>
        </button>
      )}

      {/* Overlay para móvil */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Chat modal responsivo */}
      {isOpen && (
        <div className="fixed inset-x-0 bottom-0 md:bottom-6 md:right-6 md:left-auto w-full md:w-[400px] lg:w-[420px] h-[85vh] md:h-[600px] md:max-h-[85vh] bg-slate-900/98 backdrop-blur-xl md:rounded-2xl border-0 md:border border-white/10 shadow-2xl z-50 flex flex-col overflow-hidden rounded-t-3xl md:rounded-t-2xl">
          {/* Header mejorado */}
          <div className="flex items-center justify-between p-4 md:p-5 border-b border-white/10 bg-gradient-to-r from-slate-800/90 to-slate-900/90 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="relative flex-shrink-0">
                <div className="w-10 h-10 md:w-11 md:h-11 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
                  <Bot className="w-5 h-5 md:w-6 md:h-6 text-white" />
                </div>
                <Sparkles className="w-3 h-3 text-yellow-400 absolute -top-0.5 -right-0.5 animate-pulse" />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-slate-900 animate-pulse"></span>
              </div>
              <div className="min-w-0">
                <span className="text-white font-semibold text-sm md:text-base block truncate">Asistente Juan Pablo</span>
                <div className="text-xs text-cyan-300 flex items-center gap-1">
                  <Zap className="w-3 h-3 flex-shrink-0" />
                  <span>En línea</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10 active:scale-95 flex-shrink-0"
              aria-label="Cerrar chatbot"
            >
              <X className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </div>

          {/* Messages área con scroll personalizado */}
          <div className="flex-1 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4 bg-gradient-to-b from-slate-900/50 to-slate-950/50 custom-scrollbar">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
              >
                <div
                  className={`max-w-[85%] md:max-w-[80%] p-3 md:p-3.5 rounded-2xl ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/20'
                      : 'bg-white/10 text-white backdrop-blur-sm border border-white/10 shadow-lg'
                  }`}
                >
                  <div className="whitespace-pre-line text-sm md:text-sm leading-relaxed">{msg.content}</div>
                  {msg.options && (
                    <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/20">
                      {msg.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          onClick={() => handleOptionClick(option)}
                          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/40 hover:to-purple-500/40 active:from-cyan-500/50 active:to-purple-500/50 text-cyan-300 hover:text-cyan-100 px-3 md:px-3.5 py-2 md:py-2.5 rounded-lg text-xs md:text-xs font-medium border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-cyan-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                          disabled={isLoading}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start animate-fadeIn">
                <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm text-white p-3 md:p-4 rounded-2xl border border-cyan-500/20 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Bot className="w-5 h-5 text-cyan-400 animate-bounce" />
                      <Sparkles className="w-2.5 h-2.5 text-purple-400 absolute -top-1 -right-1 animate-ping" />
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs md:text-sm text-cyan-300">Escribiendo</span>
                      <div className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer con branding y reset */}
          <div className="p-3 md:p-4 border-t border-white/10 bg-slate-900/90 backdrop-blur-sm">
            <div className="flex items-center justify-between">
              <div className="text-center text-xs text-white/40">
                Asistente programado por <span className="text-cyan-400 font-semibold">Juan Pablo</span>
              </div>
              <button
                onClick={() => handleOptionClick('Reiniciar Chat')}
                className="text-white/60 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10 active:scale-95 flex-shrink-0"
                aria-label="Reiniciar chat"
                title="Reiniciar conversación"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        /* Scrollbar personalizado */
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }

        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.3);
          border-radius: 10px;
          margin: 4px;
        }

        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: linear-gradient(180deg, #06b6d4 0%, #a855f7 100%);
          border-radius: 10px;
          border: 2px solid rgba(15, 23, 42, 0.3);
        }

        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(180deg, #0891b2 0%, #9333ea 100%);
        }

        /* Firefox */
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #06b6d4 rgba(15, 23, 42, 0.3);
        }

        /* Evitar que el contenido se mueva cuando aparece el scrollbar */
        .custom-scrollbar {
          overflow-y: scroll;
        }
      `}</style>
    </>
  );
};

export default Chatbot;