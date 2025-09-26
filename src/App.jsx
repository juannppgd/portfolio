import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, ChevronDown, ExternalLink, Code, Briefcase, GraduationCap, Settings, User, Send, Github, Linkedin, Facebook, Instagram, Twitter, MessageCircle, ArrowUpRight, Moon, Sun, Zap, Palette, Brain, Award, Trophy, BookOpen, Sparkles, Star, Crown, Medal, Globe, Cpu, Smartphone, Shield, Target, BarChart, HeartPulse, Lock, Video, Quote, CreditCard, Banknote, Key } from 'lucide-react';
import emailjs from '@emailjs/browser';
import perfil from './assets/profile-image.jpg';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('inicio');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [showExperienceModal, setShowExperienceModal] = useState(false);
  const [errors, setErrors] = useState({});
  const [darkMode, setDarkMode] = useState(false);


  const typingText = "Frontend Development | Automation | HTML/CSS/JavaScript | React, Vite y Tailwind CSS | Python (AI)";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    // Verificar preferencia guardada en localStorage
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode !== null) {
      setDarkMode(JSON.parse(savedDarkMode));
    } else {
      // Por defecto, usar modo oscuro
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Aplicar clase al body según el modo
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // Guardar preferencia en localStorage
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    let i = 0;
    let interval;
    let timeout;

    const startTyping = () => {
      interval = setInterval(() => {
        setDisplayedText(typingText.slice(0, i));
        i++;
        if (i > typingText.length) {
          clearInterval(interval);
          timeout = setTimeout(() => {
            i = 0;
            setDisplayedText("");
            startTyping();
          }, 4000); // espera 4 segundos antes de repetir
        }
      }, 50);
    };

    startTyping();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
    const sections = ['inicio', 'estudios', 'experiencia', 'habilidades', 'servicios', 'impacto', 'reseñas', 'contacto'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validación mejorada de email
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    return emailRegex.test(email);
  };

const handleSubmit = (e) => {
  e.preventDefault();

  // Check honeypot for bot detection
  const honeypotValue = e.target.honeypot.value;
  if (honeypotValue) {
    // Bot detected, do not send
    console.log('Bot detected via honeypot');
    return;
  }

  let newErrors = {};
  if (!formData.name.trim()) newErrors.name = "El nombre es obligatorio";
  if (!formData.email.trim()) newErrors.email = "El correo es obligatorio";
  else if (!validateEmail(formData.email)) newErrors.email = "Por favor, ingresa un correo electrónico válido (ej: usuario@dominio.com)";
  if (!formData.message.trim()) newErrors.message = "El mensaje es obligatorio";
  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    // 1️⃣ Enviar correo de confirmación al visitante
    emailjs.send('service_s5qyr4s', 'template_oyoptw3', {
      to_email: formData.email,
      from_name: 'Juan Pablo',
      name: formData.name,
      message: formData.message // puedes personalizar este mensaje en la plantilla
    }, 'gUsdYXpB3K94QxqYM')
      .then((result) => {
        console.log(`Correo de confirmación enviado a ${formData.email}:`, result.text);
      })
      .catch((error) => {
        console.error('Error al enviar correo de confirmación:', error.text);
      });

    // 2️⃣ Enviar notificación a ti con los datos del formulario
    emailjs.send('service_s5qyr4s', 'template_1hbf3wn', {
      name: formData.name,
      email: formData.email,
      message: formData.message
    }, 'gUsdYXpB3K94QxqYM')
      .then((result) => {
        console.log('Notificación enviada al administrador:', result.text);
      })
      .catch((error) => {
        console.error('Error al enviar notificación al administrador:', error.text);
      });

    // 3️⃣ Mostrar modal y limpiar formulario
    setShowModal(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setShowModal(false), 3000);
  }
};



  const experiences = [
    {
      title: "Performance Marketing 💼",
      company: "Siigo S.A.S",
      period: "2025",
      description: "Ejecución de campañas de e-mail marketing y SMS a nivel LATAM.",
      achievements: [
        "Aumento del engagement mediante optimización de segmentos y pruebas A/B",
        "Implementación de reportes de desempeño para toma de decisiones estratégicas",
        "Gestión de campañas que impactaron directamente en leads de diferentes países LATAM",
        "Optimización de la tasa de apertura y clics en campañas de SMS & e-mail marketing",
      ]
    }
  ];

  const education = [
    {
      title: "Ingeniería de Sistemas",
      institution: "Universidad Nacional Abierta y a Distancia (UNAD)",
      status: "En curso",
      type: "university"
    },
    {
      title: "Tecnólogo en Análisis y Desarrollo de Software",
      institution: "Servicio Nacional de Aprendizaje (SENA)",
      status: "En curso",
      type: "technical"
    },
    {
      title: "Tecnólogo en Desarrollo Publicitario",
      institution: "Servicio Nacional de Aprendizaje (SENA)",
      status: "Finalizado 2025",
      type: "technical",
      certificateLink: "https://1drv.ms/i/c/49ebc614e8d47685/EZ1WpiYf_UVMvb3AImaMrSIBNFA-TIQKyqbTT9lY-6aeww?e=SpHlH4"
    },
    {
      title: "Técnico Laboral en Programación Web y Desarrollo de Aplicaciones Móviles",
      institution: "Instituto Iberoamericano",
      status: "Finalizado 2024",
      type: "technical",
      certificateLink: "https://1drv.ms/i/c/49ebc614e8d47685/EWLkme08toBHjCHmCt2n-N4B3YdACK-FfwqXUzzDyf8vEw?e=wQwCfh"
    },
    {
      title: "Comunicación Social y Periodismo",
      institution: "Universidad Nacional Abierta y a Distancia (UNAD)",
      status: "Estudios Parciales",
      type: "university"
    }
  ];

const courses = [
    {
      title: "Conocimientos En Idioma Extranjero (Inglés)",
      institution: "SENA",
      category: "Idiomas",
      icon: <Globe className="w-6 h-6" />,
      certificateLink: "https://1drv.ms/i/c/49ebc614e8d47685/EQoTUq-2gZlJhRZDZwbTa6wB7VriQL5Dbu85Se5ThnhQSw?e=6EnLDE"
    },
    {
      title: "Inteligencia Artificial Nivel Explorador",
      institution: "El Ministerio de Tecnologías de la Información y las Comunicaciones y la Universidad Sergio Arboleda",
      category: "Tecnología",
      icon: <Cpu className="w-6 h-6" />,
      certificateLink: "https://1drv.ms/i/c/49ebc614e8d47685/EdIraN2NUSdFhQIwo1FIbFABEx2FxcidcpPEZHuEqoKYTQ?e=QRSiJk"
    },
    {
      title: "Marketing Digital",
      institution: "Instituto Iberoamericano",
      category: "Marketing",
      icon: <Smartphone className="w-6 h-6" />,
      certificateLink: "https://1drv.ms/i/c/49ebc614e8d47685/ERAImCpoYLtIqLxfVmusqyUBgY1MIQr8cGau-lZkip1MMw?e=Ls6BBg"
    },
    {
      title: "Sistema De Gestión De La Seguridad Y Salud En El Trabajo SG-SST",
      institution: "SENA",
      category: "Seguridad",
      icon: <Shield className="w-6 h-6" />,
      certificateLink: "https://1drv.ms/i/c/49ebc614e8d47685/EUiGeH3ULjhMkHgIYWoU4BsBjvhisfXen8N_8YWAOmF02Q?e=tcJWxF"
    },
    {
      title: "Administración De Servicios Microsoft 365 Y Herramientas De Productividad Para Las Organizaciones 4.0",
      institution: "SENA",
      category: "Productividad",
      icon: <Zap className="w-6 h-6" />,
      certificateLink: "https://1drv.ms/i/c/49ebc614e8d47685/EdIOdRfuLohAkTf0C_v9igQBW_jENgs6DSHutxZMrMdRHg?e=LfnIEF"
    },
    {
      title: "Google Ads",
      institution: "Coursera",
      category: "Publicidad",
      icon: <Target className="w-6 h-6" />,
      certificateLink: "https://1drv.ms/b/c/49ebc614e8d47685/EX95i-OLTRZPjD2Z76y6f9QBOxGJGa82tmLM4UGi8reC7Q?e=wXZEQV"
    },
    {
      title: "Gestión De Procesos De Análisis De Negocio",
      institution: "Coursera",
      category: "Análisis",
      icon: <BarChart className="w-6 h-6" />,
      certificateLink: "https://1drv.ms/b/c/49ebc614e8d47685/EUYFg6gABz1El6SQQ_bJe2MBnNA5mY5n3ymfgJsrlQHWCg?e=a2kbIb"
    },
    {
      title: "Nutrición Y Alimentación En El Desarrollo Humano",
      institution: "SENA",
      category: "Salud",
      icon: <HeartPulse className="w-6 h-6" />,
      certificateLink: "https://1drv.ms/i/c/49ebc614e8d47685/EeK4M0hzL4NDoGHnHLTDo7YBJ41YNbZb-q-sj3UAN-wZyg?e=Yu5LSf"
    },
    {
      title: "Apropiación de Conceptos En Ciberseguridad",
      institution: "SENA",
      category: "Seguridad",
      icon: <Lock className="w-6 h-6" />,
      certificateLink: "https://1drv.ms/i/c/49ebc614e8d47685/EVTntJbkzYBPp5zhPeEl-mYBLlrI6bcxiqzPdz5rYArRUA?e=or6nPW"
    }
];

  const skills = [
    { name: "Pensamiento Crítico y Analítico", level: 95, category: "analytics" },
    { name: "Segmentación de Audiencias", level: 90, category: "marketing" },
    { name: "Análisis y Gestion de Datos", level: 85, category: "analytics" },
    { name: "Pruebas A/B y Optimización", level: 98, category: "analytics" },
    { name: "CRM HubSpot & Masivian", level: 83, category: "tools" },
    { name: "Maquetado web con HTML/CSS", level: 97, category: "development" },
    { name: "Desarrollo con React, Vite y Tailwind CSS", level: 82, category: "development" },
    { name: "Programación en JavaScript & Python (AI)", level: 80, category: "development" },
  ];

  const software = [
    { name: "HubSpot & Masivian", category: "CRM", icon: <Zap className="w-6 h-6 text-white" /> },
    { name: "Automating EmailJS", category: "Email Marketing", icon: <Mail className="w-6 h-6 text-white" /> },
    { name: "Google Ads", category: "Advertising", icon: <Target className="w-6 h-6 text-white" /> },
    { name: "Meta Business Suite", category: "Social Media", icon: <Smartphone className="w-6 h-6 text-white" /> },
    { name: "Google Analytics", category: "Analytics", icon: <BarChart className="w-6 h-6 text-white" /> },
    { name: "Visual Studio Code", category: "Development", icon: <Code className="w-6 h-6 text-white" /> },
    { name: "Producción Audiovisual", category: "Video", icon: <Video className="w-6 h-6 text-white" /> },
    { name: "Diseño Gráfico", category: "Design", icon: <Palette className="w-6 h-6 text-white" /> },
  ];

  const testimonials = [
    {
      name: "María González",
      role: "Emprendedora",
      company: "Tienda Online",
      testimonial: "Juan Pablo transformó mi idea en una página web increíblemente responsiva. Usando Tailwind CSS, se adapta perfectamente a móviles y desktop. ¡Mis ventas aumentaron un 40%!",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Carlos Rodríguez",
      role: "Gerente de Marketing",
      company: "Empresa Tech",
      testimonial: "Sus servicios de marketing digital impulsaron nuestro engagement en un 60%. La integración con Lucide React hizo que los íconos fueran perfectos y profesionales.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Ana López",
      role: "Freelancer",
      company: "Diseño Gráfico",
      testimonial: "El diseño responsivo con Tailwind CSS es impecable. Mi portafolio se ve genial en cualquier dispositivo. ¡Altamente recomendado!",
      rating: 5,
      avatar: "👩‍🎨"
    },
    {
      name: "Pedro Martínez",
      role: "Propietario",
      company: "Restaurante Local",
      testimonial: "Gracias a su desarrollo frontend, mi sitio web atrajo más clientes. La atención al detalle y el uso de mejores prácticas UX/UI es excepcional.",
      rating: 5,
      avatar: "👨‍🍳"
    },
    {
      name: "Laura Sánchez",
      role: "Directora",
      company: "Startup Innovadora",
      testimonial: "Juan Pablo no solo entrega código de calidad, sino que entiende el negocio. Sus campañas de marketing generaron leads de alta calidad.",
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      name: "Diego Torres",
      role: "Consultor",
      company: "Consultoría Digital",
      testimonial: "La combinación de desarrollo web y marketing digital es perfecta. Mi sitio es rápido, responsivo y convierte visitantes en clientes.",
      rating: 5,
      avatar: "👨‍💼"
    }
  ];

  const subtitleTexts = [
    "Educación Formal 📚",
    "Cursos y Certificaciones 🏆",
    "Habilidades",
    "Software y Herramientas",
    "Reseñas de Clientes",
    "Envíame un mensaje 📨"
  ];







return (
  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    {/* Navigation */}
    <nav className="fixed top-4 left-0 right-0 mx-4 w-auto z-50 bg-black/20 backdrop-blur-lg border border-white/10 rounded-2xl shadow-xl">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            @juannppgd
          </div>
          
          {/* Navigation Items and Theme Toggle */}
          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden mobile-nav:flex space-x-8">
              {['inicio', 'estudios', 'experiencia', 'habilidades', 'servicios', 'impacto', 'reseñas', 'contacto'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize transition-all duration-300 ${
                    activeSection === section
                      ? 'text-cyan-400 scale-110'
                      : 'text-white/70 hover:text-white'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
            
            {/* Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>


      {/* Hero Section */}
<section
  id="inicio"
  className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 sm:pt-32 md:pt-36 lg:pt-28 xl:pt-24 animate-fadein dark:bg-dark-bg"
>
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="text-center z-10 px-4">
          <div className="mb-8 relative">
            <div className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 p-1 transition-all duration-300">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center overflow-hidden">
                <img
                  src={perfil}
                  alt="Foto de perfil"
                  className="w-full h-full rounded-full object-cover transition-all duration-300"
                />
              </div>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Juan Pablo
            </span>
            <br />
            <span className="text-white dark:text-primary">Gutiérrez Díaz</span>
          </h1>
          
<p className="text-xl md:text-2xl text-white dark:text-primary mb-2 max-w-3xl mx-auto font-light italic">
  Desarrollador De Software | Marketing Digital | Métricas | Performance
</p>
<p className="text-base md:text-lg bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient mb-8 max-w-3xl mx-auto font-semibold tracking-wide">
  {displayedText}
  <span className="animate-blink">|</span>
</p>

          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="https://www.google.com/maps/place/Tunja,+Boyacá,+Colombia" target="_blank" className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors dark:text-secondary">
              <MapPin className="w-5 h-5 text-cyan-400" />
              <span>Tunja, Colombia 🔗</span>
            </a>
            <div className="flex items-center gap-2 text-gray-300 dark:text-secondary">
              <Phone className="w-5 h-5 text-cyan-400" />
              <a href="https://wa.link/ukyqpg" className="text-gray-300 hover:text-cyan-400 transition-colors dark:text-secondary">
                +57 321 954 1241 🔗
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-300 dark:text-secondary">
              <Mail className="w-5 h-5 text-cyan-400" />
              <a href="mailto:contact.juannppgd@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors dark:text-secondary">
                contact.juannppgd@gmail.com 🔗
              </a>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollToSection('contacto')}
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 hover:animate-glow"
            >
              Contáctame
            </button>

            <a
              href="https://www.instagram.com/juannppgd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 hover:animate-glow flex items-center gap-2"
            >
              <Video className="w-5 h-5" />
              Instagram
            </a>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-white/50 dark:text-secondary" />
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="estudios" className="pt-16 pb-8 px-4 dark:bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-float">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Formación Académica
            </span>
          </h2>
          
          {/* Academic Education */}
          <div className="mb-16">
            <h3 id="subtitle-0" className="text-2xl font-bold text-white mb-4 text-center dark:text-primary">
              {subtitleTexts[0]}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
{education.map((edu, index) => {
  const iconColor = edu.type === 'university' ? 'from-purple-500 to-purple-400' : 'from-cyan-500 to-cyan-400';
  return (
    <div
      key={index}
      className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 hover:animate-cardpop dark:bg-card dark:border-card"
    >
      <div className="flex items-center mb-4">
        <div className={`p-3 rounded-full bg-gradient-to-r ${iconColor} mr-3 group-hover:animate-bounce`}>
          <Award className="w-8 h-8 text-white" />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          edu.type === 'university' ? 'bg-purple-500/20 text-purple-300' : 'bg-cyan-500/20 text-cyan-300'
        }`}>
          {edu.status}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2 dark:text-primary">{edu.title}</h3>
      <p className="text-gray-300 mb-4 dark:text-secondary" id={`detail-${index}`}>
        {edu.institution}
      </p>
      {edu.certificateLink && (
        <a
          href={edu.certificateLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25 flex items-center justify-center gap-2 backdrop-blur-sm border border-white/20"
        >
          <Award className="w-3 h-3" />
          Ver Certificado
        </a>
      )}
    </div>
  );
})}
            </div>
          </div>

          {/* Courses and Certifications */}
          <div>
            <h3 id="subtitle-1" className="text-2xl font-bold text-white mb-4 text-center animate-float dark:text-primary">
              {subtitleTexts[1]}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
{courses.map((course, index) => {
  const categoryColors = {
    'Marketing': 'from-pink-500 to-pink-400',
    'Publicidad': 'from-pink-500 to-pink-400',
    'Tecnología': 'from-blue-500 to-blue-400',
    'Seguridad': 'from-red-500 to-red-400',
    'Análisis': 'from-green-500 to-green-400',
    'Idiomas': 'from-yellow-500 to-yellow-400',
    'Productividad': 'from-indigo-500 to-indigo-400'
  };
  const iconBg = categoryColors[course.category] || 'from-gray-500 to-gray-400';
  return (
    <div
      key={index}
      className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:animate-cardpop group dark:bg-card dark:border-card"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className={`p-3 rounded-full bg-gradient-to-r ${iconBg} text-white text-2xl group-hover:animate-bounce`}>
          {course.icon}
        </div>
        <div className="flex-1">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold mb-2 inline-block ${
            course.category === 'Marketing' || course.category === 'Publicidad' ? 'bg-pink-500/20 text-pink-300' :
            course.category === 'Tecnología' ? 'bg-blue-500/20 text-blue-300' :
            course.category === 'Seguridad' ? 'bg-red-500/20 text-red-300' :
            course.category === 'Análisis' ? 'bg-green-500/20 text-green-300' :
            course.category === 'Idiomas' ? 'bg-yellow-500/20 text-yellow-300' :
            course.category === 'Productividad' ? 'bg-indigo-500/20 text-indigo-300' :
            'bg-gray-500/20 text-gray-300'
          }`}>
            {course.category}
          </span>
        </div>
      </div>
      <h4 className="text-white font-semibold text-sm mb-2 leading-tight dark:text-primary">{course.title}</h4>
      <p className="text-gray-400 text-xs dark:text-secondary mb-3" id={`detail-${education.length + index}`}>
        {course.institution}
      </p>
      <a
        href={course.certificateLink}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-white/10 hover:bg-white/20 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-white/25 flex items-center justify-center gap-2 backdrop-blur-sm border border-white/20"
      >
        <Award className="w-3 h-3" />
        Ver Certificado
      </a>
    </div>
  );
})}
            </div>

            {/* Ver Todo Button */}
            <div className="text-center mt-12">
              <a
                href="https://1drv.ms/f/c/49ebc614e8d47685/EjX5_TBjKctHgBxEthZy_kEBBrhoeYLnzBxZclzGu5xMDQ?e=d5g93U"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white text-sm font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25"
              >
                <Award className="w-4 h-4" />
                Ver Todos los Certificados
              </a>
              <p className="text-gray-400 text-xs mt-2 dark:text-secondary">
                Accede a mi carpeta completa de certificaciones
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experiencia" className="py-8 px-4 bg-black/20 dark:bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-float">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Experiencia Profesional
            </span>
          </h2>

{experiences.map((exp, index) => {
  return (
    <div
      key={index}
      className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-500 transform hover:scale-[1.02] mb-8 dark:bg-card dark:border-card"
    >
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-gradient-to-r from-cyan-500 to-purple-500 p-3 rounded-xl">
          <Briefcase className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-white mb-2 dark:text-primary">{exp.title}</h3>
          <p className="text-cyan-400 font-semibold mb-2 dark:text-cyan-300">{exp.company}</p>
          <p className="text-gray-400 mb-4 dark:text-secondary">{exp.period}</p>
          <p className="text-gray-300 mb-6 dark:text-secondary" id={`detail-${education.length + courses.length + index}`}>
            {exp.description}
          </p>
        </div>
      </div>
      
      <div className="ml-16">
        <h4 className="text-lg font-semibold text-white mb-4 dark:text-primary">Logros destacados:</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {exp.achievements.map((achievement, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-300 dark:text-secondary">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
})}

          {/* Ver toda la experiencia profesional Button */}
          <div className="text-center mt-12">
            <button
              onClick={() => setShowExperienceModal(true)}
              className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-green-500/25 hover:animate-glow flex items-center gap-2 mx-auto max-w-xs"
            >
              <Briefcase className="w-4 h-4" />
              Ver toda la experiencia profesional
            </button>
          </div>
        </div>
      </section>

      {/* Skills & Software Section */}
      <section id="habilidades" className="py-8 px-4 dark:bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-float">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Habilidades & Software
            </span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Skills */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 dark:bg-card dark:border-card">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 dark:text-primary">
                <Settings className="w-6 h-6 text-cyan-400" />
                Habilidades
              </h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium dark:text-primary">{skill.name}</span>
                      <span className="text-cyan-400 font-bold dark:text-cyan-300">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden dark:bg-gray-600">
                      <div
                        className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full transition-all duration-1000 ease-out animate-pulse"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Software */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 dark:bg-card dark:border-card">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3 dark:text-primary">
                <Code className="w-6 h-6 text-purple-400" />
                Software y Herramientas
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {software.map((tool, index) => {
                  return (
                    <div
                      key={index}
                      className="bg-white/5 rounded-xl p-4 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 group dark:bg-card dark:border-card"
                    >
                      <div className="text-2xl mb-2 group-hover:animate-bounce">{tool.icon}</div>
<h4 className="font-semibold text-sm mb-1 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent dark:text-primary">{tool.name}</h4>
                      <p className="text-gray-400 text-xs dark:text-secondary" id={`detail-${education.length + courses.length + experiences.length + index}`}>
                        {tool.category}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-8 px-4 bg-black/20 dark:bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-float">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Servicios Digitales
            </span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Desarrollo Web */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 dark:bg-card dark:border-card">
            <div className="flex flex-col items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4 dark:text-primary">Páginas Web para Empresarios y Emprendedores</h3>
                <p className="text-gray-300 mb-6 dark:text-secondary">
                  ¿Necesitas destacar en la web? Desarrollo páginas web profesionales y atractivas para que tu negocio 
                  tenga presencia en línea. Perfectas para:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 dark:text-secondary">Emprendedores que inician su negocio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 dark:text-secondary">Pequeñas empresas que necesitan presencia digital</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 dark:text-secondary">Profesionales independientes que quieren atraer más clientes</span>
                  </li>
                </ul>
                <p className="text-gray-300 mb-6 dark:text-secondary">
                  Mis páginas web incluyen diseño responsivo, optimización para buscadores, 
                  y son completamente personalizadas según las necesidades de tu negocio.
                </p>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Solicita tu página web
                </button>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center dark:border-card">
                    <Code className="w-16 h-16 text-cyan-400" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center dark:border-card">
                    <ExternalLink className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center dark:border-card">
                    <User className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Marketing Digital */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 dark:bg-card dark:border-card">
            <div className="flex flex-col items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4 dark:text-primary">Marketing Digital para Impulsar tu Negocio</h3>
                <p className="text-gray-300 mb-6 dark:text-secondary">
                  ¿Quieres aumentar tus ventas y presencia online? Ofrezco servicios de marketing digital completos para impulsar tu negocio. Ideales para:
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 dark:text-secondary">Empresas que buscan crecimiento digital</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 dark:text-secondary">Negocios locales que quieren expandirse</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-300 dark:text-secondary">Profesionales que necesitan más leads</span>
                  </li>
                </ul>
                <p className="text-gray-300 mb-6 dark:text-secondary">
                  Mis servicios incluyen análisis de datos, estrategias personalizadas, campañas de SMS y email marketing, gestión de redes sociales, CRM y mucho más.
                </p>
                <button
                  onClick={() => scrollToSection('contacto')}
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Solicita tu consulta de marketing
                </button>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative">
                  <div className="w-64 h-64 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center dark:border-card">
                    <BarChart className="w-16 h-16 text-cyan-400" />
                  </div>
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center dark:border-card">
                    <Target className="w-8 h-8 text-purple-400" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center dark:border-card">
                    <Mail className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div className="absolute top-1/2 -right-8 w-20 h-20 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full backdrop-blur-sm border border-white/10 flex items-center justify-center dark:border-card">
                    <Smartphone className="w-7 h-7 text-green-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-8 animate-zoom-down dark:text-primary">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Mi stack de desarrollo
              </span>
            </h3>
            
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              {/* HTML/CSS/JavaScript */}
              <div className="group flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 dark:bg-card dark:border-card">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-full mb-4 group-hover:animate-bounce">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2 dark:text-primary">HTML/CSS/JS</h4>
                <p className="text-gray-400 text-sm dark:text-secondary">Desarrollo Web</p>
              </div>

              {/* React */}
              <div className="group flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 dark:bg-card dark:border-card">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-3 rounded-full mb-4 group-hover:animate-bounce">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2 dark:text-primary">React</h4>
                <p className="text-gray-400 text-sm dark:text-secondary">Frontend</p>
              </div>

              {/* Vite */}
              <div className="group flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 dark:bg-card dark:border-card">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full mb-4 group-hover:animate-bounce">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2 dark:text-primary">Vite</h4>
                <p className="text-gray-400 text-sm dark:text-secondary">Build Tool</p>
              </div>

              {/* Tailwind CSS */}
              <div className="group flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 dark:bg-card dark:border-card">
                <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-3 rounded-full mb-4 group-hover:animate-bounce">
                  <Palette className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2 dark:text-primary">Tailwind CSS</h4>
                <p className="text-gray-400 text-sm dark:text-secondary">Styling</p>
              </div>

              {/* Python (AI) */}
              <div className="group flex flex-col items-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 dark:bg-card dark:border-card">
                <div className="bg-gradient-to-r from-yellow-500 to-orange-500 p-3 rounded-full mb-4 group-hover:animate-bounce">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-white font-semibold text-lg mb-2 dark:text-primary">Python (AI)</h4>
                <p className="text-gray-400 text-sm dark:text-secondary">Inteligencia Artificial</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <button
                onClick={() => scrollToSection('contacto')}
                className="text-gray-300 mb-4 dark:text-secondary hover:text-cyan-400 transition-colors cursor-pointer text-lg font-semibold"
              >Agenda una asesoría personalizada y descubre cómo desarrollo proyectos como este.
              </button>
              <div className="animate-bounce">
                <ChevronDown className="w-8 h-8 text-cyan-400" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Impacto Section */}
      <section id="impacto" className="py-8 px-4 bg-black/20 dark:bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-float">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              El Impacto de la Tecnología y el Marketing
            </span>
          </h2>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Diseño Responsivo */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 dark:bg-card dark:border-card">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 dark:text-primary">Diseño Responsivo</h3>
              </div>
              <p className="text-gray-300 mb-6 dark:text-secondary">
                Cada pixel cuenta. Mi enfoque en el diseño responsivo asegura que tu sitio se vea perfecto en cualquier dispositivo, desde móviles hasta pantallas ultra-wide.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 dark:text-secondary">Adaptación perfecta a móviles, tablets y desktop</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 dark:text-secondary">Optimización de velocidad de carga</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 dark:text-secondary">Experiencia de usuario fluida</span>
                </li>
              </ul>
            </div>

            {/* Impacto Tecnológico */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-purple-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 dark:bg-card dark:border-card">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 dark:text-primary">Impacto Tecnológico</h3>
              </div>
              <p className="text-gray-300 mb-6 dark:text-secondary">
                La tecnología transforma negocios. Utilizo las últimas herramientas para crear soluciones innovadoras que impulsan el crecimiento.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 dark:text-secondary">React + Vite para rendimiento óptimo</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 dark:text-secondary">Tailwind CSS para diseños modernos</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 dark:text-secondary">Integración con IA y automatización</span>
                </li>
              </ul>
            </div>

            {/* Impacto del Marketing */}
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 dark:bg-card dark:border-card">
              <div className="text-center mb-6">
                <div className="bg-gradient-to-r from-green-500 to-teal-500 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 dark:text-primary">Impacto del Marketing</h3>
              </div>
              <p className="text-gray-300 mb-6 dark:text-secondary">
                El marketing digital impulsa resultados. Mis estrategias generan leads cualificados y aumentan conversiones.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 dark:text-secondary">Campañas que aumentan engagement +60%</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 dark:text-secondary">Optimización A/B para mejores resultados</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-300 dark:text-secondary">Análisis de datos para decisiones estratégicas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reseñas" className="py-8 px-4 dark:bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-float">
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
                  <Shield className="w-4 h-4 mr-2 text-green-400" />
                  Cliente Verificado
                </div>
              </div>
            ))}
          </div>


        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="pb-8 pt-8 px-4 bg-black/20 dark:bg-dark-bg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-float">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Contáctame
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 dark:bg-card dark:border-card">
                <Mail className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2 dark:text-primary">Email</h3>
                <a href="mailto:contact.juannppgd@gmail.com" className="text-gray-300 hover:text-cyan-400 transition-colors dark:text-secondary">
                contact.juannppgd@gmail.com 🔗
              </a>
              </div>
              
              <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-400/50 transition-all duration-300 dark:bg-card dark:border-card">
                <Phone className="w-8 h-8 text-purple-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2 dark:text-primary">Teléfono</h3>
                <p className="text-gray-300 dark:text-secondary">
                  <a href="https://wa.link/ukyqpg" className="text-gray-300 hover:text-purple-400 transition-colors dark:text-secondary">
                    +57 321 954 1241 🔗
                  </a>
                </p>
              </div>
              
              <div className="bg-gradient-to-r from-white/5 to-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300 dark:bg-card dark:border-card">
                <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-2 dark:text-primary">Ubicación</h3>
                <p className="text-gray-300 dark:text-secondary">
                  <a href="https://www.google.com/maps/place/Tunja,+Boyacá,+Colombia" target="_blank" className="text-gray-300 hover:text-cyan-400 transition-colors dark:text-secondary">
                    Tunja, Colombia 🔗
                  </a>
                </p>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10 dark:bg-card dark:border-card">
              <h3 id="subtitle-5" className="text-2xl font-bold text-white mb-6 dark:text-primary">
                {subtitleTexts[5]}
              </h3>
              
              <form
                action="https://formsubmit.co/juanpabgd16@gmail.com"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="_next" value="http://localhost:3000/contacto" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_autorespond" value="Gracias por contactarme. Pronto estaremos en contacto." />
                <input type="hidden" name="_subject" value="Confirmación de Contacto" />
                {/* Honeypot field for bot detection */}
                <input
                  type="text"
                  name="honeypot"
                  style={{ display: 'none' }}
                  tabIndex="-1"
                  autoComplete="off"
                />

                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="¿Cómo te llamas?"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300 dark:bg-card dark:border-card dark:text-primary ${errors.name ? 'border-red-400' : ''}`}
                    required
                  />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300 dark:bg-card dark:border-card dark:text-primary ${errors.email ? 'border-red-400' : ''}`}
                    required
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Cuéntame sobre tu proyecto, tus ideas o lo que necesitas. ¿Cómo prefieres que te contacte?"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300 resize-none styled-scroll dark:bg-card dark:border-card dark:text-primary dark:placeholder-gray-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-2xl hover:shadow-cyan-500/25"
                >
                  <Send className="w-5 h-5" />
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods Section */}
      <section id="pagos" className="py-8 px-4 dark:bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 animate-float">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Métodos de Pago Aceptados
            </span>
          </h2>

          <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto dark:text-secondary">
            Aceptamos diversos métodos de pago para que puedas elegir el que más te convenga. ¡Paga de manera segura y sencilla!
          </p>

          <div className="flex gap-6 overflow-x-auto pb-4 snap-x styled-scroll">
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
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-4 border-t border-white/10 bg-gradient-to-br from-slate-900/50 to-purple-900/30 backdrop-blur-sm dark:bg-dark-bg">
        <div className="max-w-6xl mx-auto">
          {/* Social Media Section */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4 animate-float">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                ¡Conectemos y Crezcamos Juntos! 
              </span>
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg dark:text-secondary">
              Sígueme en mis redes sociales para contenido sobre marketing digital, desarrollo web y mucho más 📈
            </p>
            
            {/* Social Media Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/juannppgd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-blue-600/20 to-blue-800/20 hover:from-blue-500/30 hover:to-blue-700/30 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20 animate-socialfade dark:bg-card dark:border-card"
              >
                <Facebook className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:animate-bounce" />
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
                <Instagram className="w-8 h-8 text-pink-400 mx-auto mb-3 group-hover:animate-bounce" />
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
                <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1 dark:text-primary">LinkedIn</div>
                <div className="text-blue-300 text-xs opacity-80 dark:text-secondary">Professional</div>
                <ArrowUpRight className="w-4 h-4 text-blue-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* X (Twitter) */}
              <a 
                href="https://x.com/juannppgd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-gray-800/20 to-black/20 hover:from-gray-700/30 hover:to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/20 hover:border-gray-600/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/20 animate-socialfade dark:bg-card dark:border-card"
              >
                <Twitter className="w-8 h-8 text-gray-300 mx-auto mb-3 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1 dark:text-primary">X</div>
                <div className="text-gray-300 text-xs opacity-80 dark:text-secondary">Quick Updates</div>
                <ArrowUpRight className="w-4 h-4 text-gray-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* TikTok */}
              <a 
                href="https://www.tiktok.com/@juannppgd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-red-600/20 to-black/20 hover:from-red-500/30 hover:to-gray-900/30 backdrop-blur-sm rounded-2xl p-6 border border-red-500/20 hover:border-red-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 animate-socialfade dark:bg-card dark:border-card"
              >
                <div className="w-8 h-8 mx-auto mb-3 text-red-400 group-hover:animate-bounce text-2xl">🎵</div>
                <div className="text-white font-semibold text-sm mb-1 dark:text-primary">TikTok</div>
                <div className="text-red-300 text-xs opacity-80 dark:text-secondary">Short Videos</div>
                <ArrowUpRight className="w-4 h-4 text-red-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* WhatsApp */}
              <a 
                href="https://wa.link/ukyqpg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-green-600/20 to-green-800/20 hover:from-green-500/30 hover:to-green-700/30 backdrop-blur-sm rounded-2xl p-6 border border-green-500/20 hover:border-green-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20 animate-socialfade animate-bounce dark:bg-card dark:border-card"
              >
                <MessageCircle className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:animate-bounce" />
                <div className="text-white font-semibold text-sm mb-1 dark:text-primary">WhatsApp</div>
                <div className="text-green-300 text-xs opacity-80 dark:text-secondary">Direct Chat</div>
                <ArrowUpRight className="w-4 h-4 text-green-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              {/* Telegram */}
              <a 
                href="https://t.me/juannppgd" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-sky-600/20 to-blue-800/20 hover:from-sky-500/30 hover:to-blue-700/30 backdrop-blur-sm rounded-2xl p-6 border border-sky-500/20 hover:border-sky-400/50 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20 animate-socialfade dark:bg-card dark:border-card"
              >
                <div className="w-8 h-8 mx-auto mb-3 text-sky-400 group-hover:animate-bounce text-2xl">✈️</div>
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
                <div className="w-8 h-8 mx-auto mb-3 text-red-400 group-hover:animate-bounce text-2xl">📌</div>
                <div className="text-white font-semibold text-sm mb-1 dark:text-primary">Pinterest</div>
                <div className="text-red-300 text-xs opacity-80 dark:text-secondary">Inspiration</div>
                <ArrowUpRight className="w-4 h-4 text-red-300 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-white/10 pt-8 dark:border-card">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-center md:text-left">
                <p className="text-gray-400 mb-2 dark:text-secondary">
                  © 2025 Juan Pablo Gutiérrez Díaz. Todos los derechos reservados.
                </p>
                <p className="text-sm text-gray-500 dark:text-secondary">
                  Construido con tecnologías de vanguardia para frontend, automatización y procesamiento inteligente.🌐 
                  <br></br>¿Quieres saber más o agendar una asesoría? Escríbeme a contact.juannppgd@gmail.com 🗒️
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <a href="https://wa.link/ukyqpg" target="_blank" rel="noopener noreferrer">
                  <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-full px-4 py-2 border border-cyan-500/30 dark:border-card animate-glow-repeat hover:animate-glow">
                    <span className="text-cyan-300 text-sm font-semibold dark:text-cyan-300">🚀 Quiero pasar al siguiente nivel Ahora Mismo</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {showModal && (
  <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadein dark:bg-black/60">
      <div className="bg-gradient-to-br from-cyan-500/90 to-purple-500/90 rounded-3xl p-8 shadow-2xl border border-white/20 text-center animate-cardpop dark:bg-card dark:border-card">
      <Send className="w-12 h-12 mx-auto text-white mb-4 animate-bounce" />
      <h4 className="text-2xl font-bold text-white mb-2 dark:text-primary">¡Mensaje enviado!</h4>
      <p className="text-lg text-white/80 mb-2 dark:text-secondary">Te contactaremos pronto 🚀</p>
      <div className="mt-4">
        <span className="bg-white/10 text-cyan-200 px-4 py-2 rounded-full font-semibold dark:bg-white/10 dark:text-cyan-200">Gracias por escribir</span>
      </div>
    </div>
  </div>
)}

      {showExperienceModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 backdrop-blur-sm animate-fadein dark:bg-black/60 p-4">
          <div className="bg-gradient-to-br from-green-500/90 to-teal-500/90 rounded-3xl p-4 sm:p-6 md:p-8 shadow-2xl border border-white/20 text-center animate-cardpop dark:bg-card dark:border-card max-w-sm sm:max-w-md md:max-w-lg mx-4">
            <Briefcase className="w-10 h-10 sm:w-12 sm:h-12 mx-auto text-white mb-4 animate-bounce" />
            <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 dark:text-primary">¡Contrátame para desbloquear todo mi potencial! 🚀</h4>
            <p className="text-base sm:text-lg text-white/80 mb-2 dark:text-secondary">Descubre todo lo que puedo ofrecerte</p>
            <div className="mt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  scrollToSection('contacto');
                  setShowExperienceModal(false);
                }}
                className="w-full sm:w-auto bg-white/20 hover:bg-white/30 text-white px-4 sm:px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Contáctame
              </button>
              <button
                onClick={() => setShowExperienceModal(false)}
                className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white px-4 sm:px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      )}

      <><style dangerouslySetInnerHTML={{
  __html: `
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% {
            transform: translate3d(0,0,0);
          }
          40%, 43% {
            transform: translate3d(0, -30px, 0);
          }
          70% {
            transform: translate3d(0, -15px, 0);
          }
          90% {
            transform: translate3d(0, -4px, 0);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: .5;
          }
        }

        .animate-bounce {
          animation: bounce 1s infinite;
        }

        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        html {
          scroll-behavior: smooth;
        }
      ` }} /><style>
    {`
  .animate-blink {
    animation: blink 1s steps(2, start) infinite;
  }
  @keyframes blink {
    to {
      visibility: hidden;
    }
  }

  .animate-float {
    animation: floatTitle 2.5s ease-in-out infinite;
  }
  @keyframes floatTitle {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-12px); }
  }

  .animate-fadein {
    animation: fadeIn 1.2s cubic-bezier(0.4,0,0.2,1) both;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px);}
    to { opacity: 1; transform: translateY(0);}
  }

  .animate-cardpop {
    animation: cardPop 0.4s cubic-bezier(0.4,0,0.2,1);
  }
  @keyframes cardPop {
    0% { transform: scale(1);}
    60% { transform: scale(1.08);}
    100% { transform: scale(1.05);}
  }

  .animate-glow {
    animation: glowBtn 1.2s ease-in-out;
  }

  .animate-glow-repeat {
    animation: glowBtn 1.2s ease-in-out infinite 4s;
  }
  @keyframes glowBtn {
    0% { box-shadow: 0 0 0 0 rgba(34,211,238,0.4);}
    70% { box-shadow: 0 0 40px 10px rgba(139,92,246,0.4);}
    100% { box-shadow: 0 0 0 0 rgba(34,211,238,0.4);}
  }

  .animate-socialfade {
    animation: socialFade 1.2s cubic-bezier(0.4,0,0.2,1) both;
  }
  @keyframes socialFade {
    from { opacity: 0; transform: scale(0.8);}
    to { opacity: 1; transform: scale(1);}
  }

  .animate-zoom-down {
    animation: zoomDown 2.5s ease-in-out infinite;
  }
  @keyframes zoomDown {
    0%, 100% { transform: scale(1) translateY(0); }
    50% { transform: scale(0.95) translateY(10px); }
  }

  .styled-scroll::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  .styled-scroll::-webkit-scrollbar-track {
    background: transparent;
  }
  .styled-scroll::-webkit-scrollbar-thumb {
    background: rgba(34, 211, 238, 0.5);
    border-radius: 4px;
  }
  .styled-scroll::-webkit-scrollbar-thumb:hover {
    background: rgba(34, 211, 238, 0.7);
  }
  .styled-scroll {
    scrollbar-width: thin;
    scrollbar-color: rgba(34, 211, 238, 0.5) transparent;
  }

  
`}
  </style></>
    </div>
  );
};

export default Portfolio;