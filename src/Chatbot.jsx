import React, { useState } from 'react';
import { MessageCircle, X, Send, Bot, Sparkles, Zap } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: '¡Hola! Soy el asistente IA de Juan Pablo. ¿En qué puedo ayudarte hoy?',
      options: ['Servicios', 'Desarrollo Web', 'Marketing Digital', 'Contacto']
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const responses = {
    'Servicios': {
      text: '¡Hola! Trabajo con Juan Pablo en desarrollo web y marketing digital. ¿Te gustaría saber más sobre nuestros servicios de desarrollo web o marketing digital?',
      options: ['Desarrollo Web', 'Marketing Digital', 'Háblame de Juan Pablo', 'Contacto']
    },
    'Desarrollo Web': {
      text: '¡Me encanta hablar de desarrollo web! Creamos páginas web modernas y funcionales para emprendedores y empresas. Usamos React, Vite y Tailwind CSS para hacer sitios rápidos y atractivos. ¿Te gustaría ver algunos ejemplos o saber más sobre las tecnologías que usamos?',
      options: ['Ver Tecnologías', 'Ver Ejemplos', 'Tiempos de Desarrollo', 'Contacto']
    },
    'Marketing Digital': {
      text: 'El marketing digital es mi pasión. Ayudamos a las empresas a crecer online con estrategias personalizadas. Gestionamos redes sociales, campañas de publicidad, email marketing y mucho más. ¿Qué aspecto te interesa más?',
      options: ['Redes Sociales', 'Campañas Publicitarias', 'Email Marketing', 'Contacto']
    },
    'Contacto': {
      text: '¡Será un placer conectarte con Juan Pablo! Puedes escribirle directamente o chatear por WhatsApp. Él mismo te atenderá personalmente.',
      options: ['Enviar Email', 'Chatear por WhatsApp', 'Más Información']
    },
    'Ver Tecnologías': {
      text: 'Trabajamos con las mejores herramientas del mercado: React para interfaces dinámicas, Vite para desarrollo rápido, Tailwind CSS para diseños modernos, y herramientas de análisis como Google Analytics. Todo para crear experiencias web excepcionales.',
      options: ['Desarrollo Web', 'Ver Ejemplos', 'Contacto']
    },
    'Tiempos de Desarrollo': {
      text: 'Los tiempos dependen del proyecto, pero normalmente una página web básica está lista en 1-2 semanas. Sitios más complejos pueden tomar 3-4 semanas. Siempre incluimos consultoría gratis para entender exactamente lo que necesitas.',
      options: ['Ver Tecnologías', 'Contacto']
    },
    'Campañas Publicitarias': {
      text: 'Creamos campañas efectivas en Google Ads y Meta (Facebook/Instagram). Nos enfocamos en resultados reales: más clientes, mejor ROI. Cada campaña es personalizada según tus objetivos y presupuesto.',
      options: ['Marketing Digital', 'Redes Sociales', 'Contacto']
    },
    'Redes Sociales': {
      text: '¡Las redes sociales son perfectas para conectar con tu audiencia! Creamos contenido atractivo, programamos publicaciones estratégicas, aumentamos seguidores y medimos resultados. Es como tener un community manager dedicado.',
      options: ['Marketing Digital', 'Campañas Publicitarias', 'Contacto']
    },
    'Email Marketing': {
      text: 'El email marketing sigue siendo uno de los canales más efectivos. Diseñamos newsletters atractivos, segmentamos listas de contactos, automatizamos flujos y analizamos cada campaña para maximizar conversiones.',
      options: ['Marketing Digital', 'Campañas Publicitarias', 'Contacto']
    },
    'Enviar Email': {
      text: '¡Perfecto! Te abro el email ahora mismo. Juan Pablo estará encantado de leerte.',
      options: ['Volver al Inicio'],
      action: 'email'
    },
    'Chatear por WhatsApp': {
      text: '¡Excelente idea! Te conecto directamente con Juan Pablo por WhatsApp. Es la mejor manera de tener una conversación personal.',
      options: ['Volver al Inicio'],
      action: 'whatsapp'
    },
    'Más Información': {
      text: '¿Qué más te gustaría saber? Puedo contarte sobre nuestros proyectos, experiencia o cualquier detalle específico.',
      options: ['Servicios', 'Desarrollo Web', 'Marketing Digital', 'Contacto']
    },
    'Ver Ejemplos': {
      text: 'Juan Pablo tiene un portfolio increíble con proyectos de todo tipo. Te recomiendo que explores su sitio web - hay ejemplos de e-commerce, landing pages, aplicaciones web y mucho más.',
      options: ['Desarrollo Web', 'Contacto']
    },
    'Háblame de Juan Pablo': {
      text: '¡Juan Pablo es increíble! Es un desarrollador full-stack apasionado por crear soluciones digitales que realmente funcionan. Tiene experiencia en React, marketing digital y siempre busca las mejores tecnologías para cada proyecto.',
      options: ['Ver Tecnologías', 'Servicios', 'Contacto']
    },
    'Volver al Inicio': {
      text: '¡Claro! ¿Hay algo más en lo que pueda ayudarte?',
      options: ['Servicios', 'Desarrollo Web', 'Marketing Digital', 'Contacto']
    }
  };

  const handleOptionClick = async (option) => {
    // Agregar mensaje del usuario
    const userMessage = { role: 'user', content: option };
    setMessages(prev => [...prev, userMessage]);

    setIsLoading(true);

    // Simular tiempo de respuesta
    await new Promise(resolve => setTimeout(resolve, 500));

    const response = responses[option];
    if (response) {
      const assistantMessage = {
        role: 'assistant',
        content: response.text,
        options: response.options
      };
      setMessages(prev => [...prev, assistantMessage]);

      // Ejecutar acción si existe
      if (response.action === 'email') {
        window.open('mailto:contact.juannppgd@gmail.com?subject=Consulta%20desde%20portfolio&body=Hola%20Juan%20Pablo,%20contacto%20desde%20tu%20portfolio.', '_blank');
      } else if (response.action === 'whatsapp') {
        window.open('https://wa.me/573219541241?text=Hola%20Juan%20Pablo,%20contacto%20desde%20tu%20portfolio.', '_blank');
      }
    }

    setIsLoading(false);
  };



  return (
    <>
      {/* Botón flotante */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white p-4 rounded-full shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:scale-110 z-50"
          aria-label="Abrir chatbot"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat modal */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-slate-900/95 backdrop-blur-lg rounded-2xl border border-white/10 shadow-2xl z-50 flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
            <div className="flex items-center gap-2">
              <div className="relative">
                <Bot className="w-5 h-5 text-cyan-400" />
                <Sparkles className="w-3 h-3 text-purple-400 absolute -top-1 -right-1 animate-pulse" />
              </div>
              <div>
                <span className="text-white font-semibold text-sm">Asistente IA</span>
                <div className="text-xs text-cyan-300 flex items-center gap-1">
                  <Zap className="w-3 h-3" />
                  <span>Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/70 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
              aria-label="Cerrar chatbot"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 styled-scroll">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-white/10 text-white'
                  }`}
                >
                  <div className="whitespace-pre-line">{msg.content}</div>
                  {msg.options && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {msg.options.map((option, optionIndex) => (
                        <button
                          key={optionIndex}
                          onClick={() => handleOptionClick(option)}
                          className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 hover:from-cyan-500/30 hover:to-purple-500/30 text-cyan-300 hover:text-cyan-200 px-4 py-2 rounded-xl text-sm border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/20"
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
              <div className="flex justify-start">
                <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 text-white p-4 rounded-xl border border-cyan-500/20">
                  <div className="flex items-center gap-3">
                    <div className="relative">
                      <Bot className="w-4 h-4 text-cyan-400 animate-bounce" />
                      <Sparkles className="w-2 h-2 text-purple-400 absolute -top-1 -right-1 animate-ping" />
                    </div>
                    <div className="text-sm text-cyan-300">
                      <span className="animate-pulse">Pensando...</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>


        </div>
      )}
    </>
  );
};

export default Chatbot;
