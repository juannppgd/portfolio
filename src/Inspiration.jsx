import React from 'react';
import { ArrowUpRight, Sparkles, Target, TrendingUp, Users, Globe, Award, HeartPulse, Star, ChevronDown, Zap, Brain, CheckCircle, XCircle, Clock, DollarSign, MapPin, Calendar } from 'lucide-react';

const Inspiration = () => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-4 left-0 right-0 mx-2 sm:mx-4 w-auto z-50 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl">
        <div className="container mx-auto px-4 py-3 sm:px-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => window.location.href = '/'}
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
            >
              @juannppgd
            </button>
            <div className="flex items-center space-x-4">
              <button
onClick={() => window.location.href = '/'}
                className="text-white/70 hover:text-white transition-all duration-300"
              >
                ← Volver
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="text-center z-10 px-4 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Construye tu futuro,
            </span>
            <br />
            <span className="text-white">disfruta tu vida</span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              y vive de lo digital
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto font-light">
            Imagina despertar cada mañana con libertad total: trabajar desde cualquier lugar del mundo,
            generar ingresos estables mientras construyes algo que realmente te apasiona.
            Esta no es una fantasía. Es mi realidad diaria.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection('historia')}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5" />
              Conoce cómo empecé
            </button>
          </div>

          <div className="flex flex-col items-center mt-8">
            <h2 className="text-gray-300 mb-4 text-lg font-semibold">
              Sigue leyendo para inspirarte
            </h2>
            <div className="animate-bounce">
              <ChevronDown className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Mi Historia Section */}
      <section id="historia" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Mi Historia: De la Incertidumbre a la Libertad
            </span>
          </h2>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/30">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-full flex-shrink-0">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Antes estaba completamente perdido</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    No tenía idea de qué hacer con mi vida. No me sentía comodo llamando "Jefe" a alguien, buscaba trabajos que no me llenaban,
                    y cada día me sentía más frustrado. El futuro se veía como una niebla.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full flex-shrink-0">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">El deporte era mi único refugio</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Encontré consuelo en el ejercicio físico. Corría kilómetros, levantaba pesas, me exigía al máximo.
                    Pero incluso ahí, sentía que faltaba algo más profundo, algo que diera sentido real a mi existencia.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-green-400/30">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-full flex-shrink-0">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">La vida dio un giro inesperado</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Una lesión me obligó a parar. Sin el deporte como escape, me enfrenté a mí mismo por primera vez. Estando completamente solo, sin distracciones,
                    Empecé a cuestionar todo: mis elecciones, mis miedos, mis limitaciones autoimpuestas.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 border border-orange-400/30">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-full flex-shrink-0">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Descubrí el mundo digital</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Curioso, empecé a explorar internet. Vi cómo personas normales creaban negocios online,
                    generaban ingresos pasivos, viajaban mientras trabajaban. "Si ellos pueden, ¿por qué yo no?", pensé.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-pink-400/30">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 p-4 rounded-full flex-shrink-0">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">Empecé a generar oportunidades y crecer</h3>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    Aprendí desarrollo web, marketing digital, análisis de datos. Cada skill nueva era una victoria.
                    Empecé a cobrar por mis servicios, luego a enseñar, después a crear productos. La libertad llegó gradualmente,
                    pero llegó. Hoy vivo de lo digital, ayudo a otros a hacer lo mismo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentalidad que cambia todo Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              La Mentalidad que Cambia Todo
            </span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/30 hover:border-cyan-400/70 transition-all duration-500 transform hover:scale-105">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Disciplina Inquebrantable</h3>
              </div>
              <p className="text-gray-300 text-center">
                No es talento. Es mostrar día tras día. La disciplina construye el puente entre tus sueños y la realidad.
                Cada acción pequeña, repetida consistentemente, crea resultados extraordinarios.
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30 hover:border-purple-400/70 transition-all duration-500 transform hover:scale-105">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enfoque Relentless</h3>
              </div>
              <p className="text-gray-300 text-center">
                El éxito viene de hacer menos cosas, pero mejor. Identifica lo que realmente importa,
                elimina distracciones y ejecuta con intensidad. El enfoque es tu superpoder.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-green-400/30 hover:border-green-400/70 transition-all duration-500 transform hover:scale-105">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Acción Masiva</h3>
              </div>
              <p className="text-gray-300 text-center">
                No esperes perfección. Actúa ahora. Cada paso adelante, por imperfecto que sea,
                te acerca más a tus metas. La acción genera momentum, y el momentum crea resultados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Punto de Quiebre Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-900/20 via-orange-900/20 to-yellow-900/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-sm rounded-3xl p-12 border border-red-400/30">
            <div className="mb-8">
              <div className="bg-gradient-to-r from-red-500 to-orange-500 p-6 rounded-full w-24 h-24 mx-auto mb-6">
                <Zap className="w-12 h-12 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  El Punto de Quiebre
                </span>
              </h2>
            </div>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Hubo un momento exacto donde todo cambió. Fue cuando decidí que ya no podía seguir viviendo
              una vida que no me pertenecía. Dejé de esperar que las cosas mejoraran solas y tomé el control.
            </p>

            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Ese día me miré al espejo y dije: "Basta de excusas. Basta de esperar. Es hora de crear el cambio".
              Ese momento de verdad absoluta cambió todo.
            </p>

            <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-6 border border-red-500/30">
              <p className="text-white font-bold text-lg">
                ¿Cuál es tu punto de quiebre? ¿Cuándo dirás "basta ya"?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Lo que puedes lograr Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Lo que Puedes Lograr con Disciplina
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Ingresos Digitales Estables</h3>
                </div>
                <p className="text-gray-300">
                  Crea múltiples fuentes de ingresos online: desarrollo web, consultorías, productos digitales,
                  marketing para otros. Rompe la dependencia de un solo sueldo.
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Independencia Geográfica</h3>
                </div>
                <p className="text-gray-300">
                  Trabaja desde cualquier lugar del mundo. Playa, montaña, ciudad... tú eliges.
                  La libertad de movimiento que siempre soñaste, ahora es posible.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-green-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-8 border border-green-400/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-green-500 to-teal-500 p-3 rounded-full">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Escalar tus Habilidades</h3>
                </div>
                <p className="text-gray-300">
                  Conviértete en un experto valioso. Cada proyecto te hace mejor, más rápido, más eficiente.
                  Las habilidades digitales se pagan bien y siempre serán demandadas.
                </p>
              </div>

              <div className="bg-gradient-to-br from-orange-500/10 via-red-500/10 to-pink-500/10 backdrop-blur-sm rounded-3xl p-8 border border-orange-400/30">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full">
                    <HeartPulse className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Vida Equilibrada</h3>
                </div>
                <p className="text-gray-300">
                  Establece tus propios horarios. Dedica tiempo real a tu familia, hobbies, salud.
                  El trabajo deja de ser una obligación para convertirse en una herramienta de libertad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Realidad vs Excusas Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Realidad vs Excusas: La Verdad Duele
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-green-400 to-teal-400 bg-clip-text text-transparent">
                  Lo que Dices
                </span>
              </h3>

              <div className="bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-sm rounded-3xl p-6 border border-red-400/30">
                <div className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">"No tengo tiempo"</h4>
                    <p className="text-gray-300 text-sm">Todos tenemos 24 horas. La diferencia está en las prioridades.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-sm rounded-3xl p-6 border border-red-400/30">
                <div className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">"No tengo dinero para invertir"</h4>
                    <p className="text-gray-300 text-sm">Internet está lleno de recursos gratuitos. El mayor costo es tu tiempo y esfuerzo.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-500/10 via-orange-500/10 to-yellow-500/10 backdrop-blur-sm rounded-3xl p-6 border border-red-400/30">
                <div className="flex items-start gap-4">
                  <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">"Soy demasiado mayor/viejo"</h4>
                    <p className="text-gray-300 text-sm">La edad es irrelevante en el mundo digital. Lo que importa es la mentalidad.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  La Realidad
                </span>
              </h3>

              <div className="bg-gradient-to-br from-green-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-6 border border-green-400/30">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Tiempo = Prioridades</h4>
                    <p className="text-gray-300 text-sm">Si algo importa, encuentras tiempo. Netflix puede esperar, tu futuro no.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-6 border border-green-400/30">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Conocimiento Gratuito</h4>
                    <p className="text-gray-300 text-sm">YouTube, documentación gratuita, comunidades online o inclusio puedo dictarte clases. Solo necesitas dedicación.</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-500/10 via-teal-500/10 to-cyan-500/10 backdrop-blur-sm rounded-3xl p-6 border border-green-400/30">
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold mb-2">Nunca es Tarde</h4>
                    <p className="text-gray-300 text-sm">Cada día es una oportunidad para empezar. La experiencia es un activo, no un obstáculo.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-xl text-gray-300 mb-6">
              Las excusas son cómodas, pero te mantienen estancado. La realidad duele, pero te hace crecer.
            </p>
            <p className="text-lg text-white font-semibold">
              ¿Qué eliges hoy?
            </p>
          </div>
        </div>
      </section>

      {/* Prueba Visual / Perfil Section */}
      <section className="py-20 px-4 bg-slate-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 relative">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 p-1 transition-all duration-300">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <img
                  src="/profile-image.jpg"
                  alt="Foto de perfil de Juan Pablo Gutiérrez Díaz, desarrollador web y especialista en marketing digital"
                  className="w-full h-full rounded-full object-cover transition-all duration-300"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Juan Pablo Gutiérrez Díaz 
              <br />
              Desarrollador web y especialista en Marketing digital
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Detrás de cada línea de código, cada estrategia de marketing y cada cliente satisfecho,
            hay una persona que decidió no rendirse. Yo soy esa persona, y tú puedes ser la siguiente historia de éxito.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-500/30">
              <span className="text-cyan-300 text-sm font-semibold">+56 Proyectos Completados</span>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-purple-500/30">
              <span className="text-purple-300 text-sm font-semibold">+125 Clientes Satisfechos</span>
            </div>
            <div className="bg-gradient-to-r from-green-500/20 to-teal-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-green-500/30">
              <span className="text-green-300 text-sm font-semibold">Trabajo Remoto Global</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call To Action Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ver Mi Página Web
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Si mi historia te inspira, mi trabajo te convencerá. Mira mis servicios, casos de éxito y
            descubre cómo puedo ayudarte a crear la vida digital que mereces.
          </p>

          <div className="flex justify-center mb-12">
            <button
              onClick={() => window.open('/', '_self')}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-12 py-6 rounded-full text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-3"
            >
              <Globe className="w-6 h-6" />
              Ver Mi Página Web
            </button>
          </div>

          <p className="text-gray-400 text-sm">
            Tu transformación digital comienza aquí. ¿Estás listo para el cambio?
          </p>
        </div>
      </section>
    </div>
  );
};

export default Inspiration;