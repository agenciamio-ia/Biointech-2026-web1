/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'motion/react';
import { 
  Menu, X, Rocket, Eye, Factory, Layers, Wind, Leaf, Droplets, 
  FlaskConical, ShieldCheck, MapPin, CheckCircle, Zap, Building2, 
  Map, Mail, Camera, Network, Share2, Phone, Instagram, Facebook
} from 'lucide-react';

// --- Components ---

const AnimatedCounter = ({ from, to, suffix = "", duration = 2 }: { from: number, to: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(from);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [isInView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// --- Main App ---

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nosotros', href: '#nosotros' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Planta Guayacán', href: '#guayacan' },
    { name: 'Sistemas', href: '#sistemas' },
  ];

  return (
    <div className="font-body text-dark bg-surface selection:bg-secondary/20 selection:text-primary-dark">
      
      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/573160445790" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25d366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:bg-[#128c7e] transition-all duration-300 flex items-center justify-center"
        aria-label="Contact on WhatsApp"
      >
        <Phone className="w-6 h-6 fill-current" />
      </a>

      {/* Navigation */}
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'glass-nav py-3 shadow-sm' : 'bg-transparent py-5'}`}>
        <nav className="max-w-7xl mx-auto px-6 md:px-8 flex justify-between items-center" aria-label="Navegación principal">
          <div className="flex items-center gap-3">
            <a href="#inicio" className="flex items-center" aria-label="Ir al inicio de Biointech">
              <img src="http://biointech.co/2026/wp-content/uploads/logo-Biointech-png-2.png" alt="Logotipo de Biointech S.A.S. - Soluciones Ambientales" className="h-14 md:h-16 object-contain bg-white/90 p-1 rounded" />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 font-headline uppercase font-bold text-sm">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className={`transition-all duration-300 hover:scale-110 hover:shadow-lg px-2 py-1 rounded-md ${isScrolled ? 'text-dark/80 hover:text-primary' : 'text-white/90 hover:text-white'}`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a 
              href="#contacto"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-2 rounded-md font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
            >
              CONTACTO
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-primary"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label="Alternar menú de navegación"
          >
            {isMobileMenuOpen ? <X className={isScrolled ? 'text-dark' : 'text-white'} /> : <Menu className={isScrolled ? 'text-dark' : 'text-white'} />}
          </button>
        </nav>

        {/* Mobile Nav */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-surface shadow-xl py-4 px-6 flex flex-col gap-4 border-t border-neutral/20" role="menu">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-dark font-headline font-bold uppercase text-sm py-2 border-b border-neutral/10"
                role="menuitem"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contacto"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-md font-bold text-sm uppercase tracking-wider text-center mt-2 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              role="menuitem"
            >
              CONTACTO
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden" aria-label="Sección principal">
        {/* Background Image with Parallax feel */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          role="img"
          aria-label="Fondo industrial de la planta Biointech"
          style={{ 
            backgroundImage: 'url(http://biointech.co/2026/wp-content/uploads/banner-biointech-web.jpeg)',
            backgroundAttachment: 'fixed'
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/80 via-primary/50 to-dark/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full grid grid-cols-1 md:grid-cols-12 pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="md:col-start-6 md:col-span-7 space-y-8 text-shadow-sm"
          >
            <h1 className="text-4xl md:text-4xl lg:text-5xl font-headline font-extrabold text-white leading-[1.1] tracking-tighter uppercase">
              Soluciones <span className="text-secondary-light">Integrales</span> para el Tratamiento de Residuos Industriales
            </h1>
            <p className="text-lg md:text-xl text-white/90 font-light max-w-2xl border-l-4 border-secondary pl-6">
              Sostenibilidad, Innovación, Responsabilidad Ambiental. Liderando la transición industrial hacia el futuro.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#nosotros" className="bg-gradient-to-br from-primary to-primary-dark text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl hover:shadow-primary/20 transition-all">
                Conocer más
              </a>
              <a href="#servicios" className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/20 transition-all text-center">
                Nuestros Servicios
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-24 bg-surface" aria-labelledby="nosotros-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-surface-container-low rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="http://biointech.co/2026/wp-content/uploads/2026/03/Banner-Biointech-v22.jpg" 
                  alt="Ingeniero de Biointech inspeccionando equipos de tratamiento de residuos" 
                  title="Inspección de equipos industriales en Biointech"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-surface-container p-8 rounded-2xl shadow-xl max-w-xs hidden md:block border border-white">
                <p className="text-primary-dark font-headline font-extrabold text-5xl mb-2">
                  <AnimatedCounter from={0} to={20} suffix="+" />
                </p>
                <p className="text-dark font-bold uppercase tracking-widest text-xs">Años de excelencia en gestión ambiental</p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs">Quiénes Somos</span>
                <h2 id="nosotros-heading" className="text-4xl md:text-5xl font-headline font-extrabold text-primary-dark tracking-tighter leading-tight">
                  Compromiso con la Precisión Industrial
                </h2>
                <p className="text-dark/70 text-lg leading-relaxed">
                  Biointech S.A.S. nace de la necesidad de armonizar los procesos industriales pesados con la preservación de nuestros ecosistemas. No solo tratamos residuos; redefinimos la economía circular a través de la ciencia y la tecnología de vanguardia.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                <div className="flex gap-5 p-6 bg-surface-container-low rounded-xl group hover:bg-primary transition-all duration-300">
                  <Rocket className="text-secondary group-hover:text-secondary-light w-8 h-8 shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-primary-dark group-hover:text-white text-lg mb-1">Misión</h3>
                    <p className="text-dark/70 group-hover:text-white/80 text-sm leading-relaxed">
                      Transformar pasivos ambientales en activos productivos mediante innovación técnica constante.
                    </p>
                  </div>
                </div>
                <div className="flex gap-5 p-6 bg-surface-container-low rounded-xl group hover:bg-primary transition-all duration-300">
                  <Eye className="text-secondary group-hover:text-secondary-light w-8 h-8 shrink-0" aria-hidden="true" />
                  <div>
                    <h3 className="font-bold text-primary-dark group-hover:text-white text-lg mb-1">Visión</h3>
                    <p className="text-dark/70 group-hover:text-white/80 text-sm leading-relaxed">
                      Ser el referente latinoamericano en biotecnología aplicada al tratamiento de residuos industriales para 2030.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications Parallax Banner */}
      <section className="relative py-24 md:py-32 flex items-center overflow-hidden" aria-label="Certificaciones RUC y CSS">
        {/* Parallax Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          role="img"
          aria-label="Fondo de certificaciones RUC y CSS"
          style={{ 
            backgroundImage: 'url(http://biointech.co/2026/wp-content/uploads/banner-ley-RUC-CSS-2-e1774368166460.jpg)',
            backgroundAttachment: 'fixed'
          }}
        />
        {/* Gradient Overlays for readability */}
        <div className="absolute inset-0 bg-primary-dark/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/95 via-primary-dark/80 to-transparent" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <span className="text-secondary-light font-bold tracking-[0.3em] uppercase text-xs">Respaldo y Normativa</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-headline font-extrabold text-white leading-tight tracking-tighter">
                Apruebe su empresa con las certificaciones <span className="text-secondary-light">RUC y CSS</span> que le brinda Biointech SAS
              </h2>
              <p className="text-white/80 text-lg border-l-4 border-secondary-light pl-4 leading-relaxed">
                Garantice el cumplimiento normativo y eleve los estándares de seguridad, salud en el trabajo y protección ambiental con nuestro equipo de expertos.
              </p>
              <div className="pt-4">
                <a href="#contacto" className="inline-block bg-secondary hover:bg-secondary-light text-white hover:text-earth-dark px-8 py-4 rounded-lg font-bold text-sm uppercase tracking-wider transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Solicitar Asesoría
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex justify-center lg:justify-end"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/20 max-w-md transform lg:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="http://biointech.co/2026/wp-content/uploads/banner-ley-RUC-certificacion-e1774367897596.jpg" 
                  alt="Certificación RUC y CSS otorgada por Biointech" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-surface-container-low" aria-labelledby="servicios-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs">Capacidades</span>
              <h2 id="servicios-heading" className="text-4xl md:text-5xl font-headline font-extrabold text-primary-dark tracking-tighter">Servicios Especializados</h2>
            </div>
            <div className="h-px bg-neutral flex-grow hidden md:block mb-4 mx-8 opacity-50"></div>
            <p className="text-dark/70 text-right md:w-1/3 text-sm leading-relaxed">
              Infraestructura de vanguardia para la gestión integral de la cadena de residuos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { icon: Factory, title: "MICROREFINERIA", desc: "Tecnología avanzada para la recuperación de hidrocarburos y aceites industriales.", color: "primary" },
              { icon: Layers, title: "GEOCONTENEDORES", desc: "Sistemas de deshidratación y confinamiento de lodos industriales de alta eficiencia.", color: "secondary" },
              { icon: Wind, title: "TERMO-CENTRIFUGADO", desc: "Separación mecánica de fases asistida por temperatura para fluidos complejos.", color: "primary" },
              { icon: Leaf, title: "BIOREMEDACIÓN", desc: "Uso de procesos biológicos para la descontaminación de suelos y aguas.", color: "secondary" },
              { icon: Droplets, title: "TRATAMIENTO DE AGUAS", desc: "Sistemas integrales para la potabilización y tratamiento de vertimientos industriales.", color: "primary" },
              { icon: FlaskConical, title: "INVESTIGACIÓN Y DESARROLLO", desc: "Laboratorio dedicado a la creación de nuevas soluciones para desafíos ambientales.", color: "secondary" },
              { icon: ShieldCheck, title: "CUMPLIMIENTO DE LEY RUC", desc: "Garantía total de cumplimiento normativo y estándares de seguridad industrial.", color: "primary" },
              { icon: ShieldCheck, title: "CERTIFICACIÓN CSS", desc: "Acompañamiento experto para la obtención de certificaciones de seguridad y salud.", color: "secondary" },
            ].map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`bg-surface-container-lowest p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border-b-4 border-transparent flex flex-col h-full ${service.color === 'primary' ? 'hover:border-primary' : 'hover:border-secondary'}`}
              >
                <div className={`w-14 h-14 bg-surface-container rounded-xl flex items-center justify-center mb-6 transition-colors ${service.color === 'primary' ? 'group-hover:bg-primary' : 'group-hover:bg-secondary'}`}>
                  <service.icon className={`w-7 h-7 transition-colors ${service.color === 'primary' ? 'text-primary group-hover:text-white' : 'text-secondary group-hover:text-white'}`} />
                </div>
                <h3 className="font-headline font-bold text-primary-dark mb-3 uppercase text-sm tracking-wide">{service.title}</h3>
                <p className="text-dark/70 text-sm leading-relaxed mb-6 flex-grow">{service.desc}</p>
                
                <a 
                  href="https://biointech.co/2026/servicios.html" 
                  className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors ${service.color === 'primary' ? 'text-primary group-hover:text-primary-dark' : 'text-secondary group-hover:text-secondary-light'}`}
                >
                  Ver más detalles
                  <Share2 className="w-3 h-3" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-surface overflow-hidden" aria-labelledby="proceso-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs">Metodología</span>
            <h2 id="proceso-heading" className="text-4xl md:text-5xl font-headline font-extrabold text-primary-dark tracking-tighter">Nuestro Proceso Operativo</h2>
            <p className="text-dark/70 text-lg">
              Un enfoque sistemático y riguroso para garantizar resultados óptimos en cada intervención ambiental.
            </p>
          </div>

          <div className="relative">
            {/* Connection Line (Desktop) */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-neutral/30 hidden lg:block -translate-y-1/2 z-0" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
              {[
                { step: "01", title: "Evaluación Inicial", desc: "Análisis detallado del pasivo ambiental y caracterización técnica de residuos.", icon: Building2 },
                { step: "02", title: "Ingeniería Aplicada", desc: "Diseño de la solución biotecnológica a medida según los requerimientos del cliente.", icon: FlaskConical },
                { step: "03", title: "Ejecución en Sitio", desc: "Despliegue de equipos y personal especializado para el tratamiento integral.", icon: Factory },
                { step: "04", title: "Certificación Final", desc: "Entrega de reportes de cumplimiento y avales ambientales oficiales.", icon: ShieldCheck },
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="relative mb-8">
                    <div className="w-20 h-20 bg-surface-container-lowest rounded-full flex items-center justify-center shadow-lg border-4 border-surface group-hover:border-secondary transition-all duration-500 z-10 relative">
                      <item.icon className="w-8 h-8 text-primary group-hover:text-secondary transition-colors" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-headline font-black text-xs shadow-md z-20">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="font-headline font-bold text-primary-dark mb-3 uppercase text-sm tracking-wide">{item.title}</h3>
                  <p className="text-dark/70 text-sm leading-relaxed px-4">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Planta Guayacán Section */}
      <section id="guayacan" className="relative py-24 bg-primary-dark overflow-hidden" aria-labelledby="guayacan-heading">
        <div className="absolute inset-0 opacity-10 mix-blend-overlay">
          <img 
            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2940&auto=format&fit=crop" 
            alt="Fondo de planos industriales" 
            role="presentation"
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              <div className="space-y-4">
                <span className="text-secondary-light font-bold tracking-[0.3em] uppercase text-xs">Operación Principal</span>
                <h2 id="guayacan-heading" className="text-4xl md:text-4xl font-headline font-extrabold text-white tracking-tighter">Planta Guayacán</h2>
                <div className="flex items-center gap-2 text-surface-container">
                  <MapPin className="text-secondary-light w-5 h-5" />
                  <span className="uppercase tracking-widest text-sm font-bold">Casanare, Colombia</span>
                </div>
              </div>
              <p className="text-surface-container-low/80 text-lg leading-relaxed">
                Nuestra planta insignia representa la cúspide de la ingeniería ambiental en Colombia. Con una escala industrial sin precedentes, la Planta Guayacán integra procesos biotecnológicos complejos para la restauración de suelos y tratamiento de fluidos industriales.
              </p>
              
              <div className="grid grid-cols-2 gap-8 py-4">
                <div className="border-l-2 border-secondary-light pl-5">
                  <div className="text-white font-headline font-extrabold text-4xl mb-1">
                    <AnimatedCounter from={0} to={400} suffix="T" />
                  </div>
                  <h3 className="text-surface-container/70 text-xs uppercase font-bold tracking-widest">Capacidad Mensual</h3>
                </div>
                <div className="border-l-2 border-secondary-light pl-5">
                  <div className="text-white font-headline font-extrabold text-4xl mb-1">
                    <AnimatedCounter from={0} to={98} suffix="%" />
                  </div>
                  <h3 className="text-surface-container/70 text-xs uppercase font-bold tracking-widest">Eficiencia Bio-remediación</h3>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="aspect-video bg-dark rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <img 
                  src="http://biointech.co/2026/wp-content/uploads/2026/03/Banner-Biointech-v21.jpg" 
                  alt="Instalaciones de la Planta industrial Guayacán en Casanare" 
                  title="Planta Guayacán - Biointech"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                />
              </div>
              {/* Decorative corners */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-secondary-light transition-all group-hover:-top-6 group-hover:-left-6"></div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-secondary-light transition-all group-hover:-bottom-6 group-hover:-right-6"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Banner Section */}
      <section className="py-16 bg-white border-y border-neutral/10" aria-label="Certificaciones Biointech">
        <div className="max-w-7xl mx-auto px-6 md:px-8 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-5xl"
          >
            <img 
              src="http://biointech.co/2026/wp-content/uploads/Certificaciones-biointech-2.jpeg" 
              alt="Certificaciones y avales de Biointech S.A.S." 
              className="w-full h-auto object-contain shadow-sm rounded-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Systems Section */}
      <section id="sistemas" className="py-24 bg-surface" aria-labelledby="sistemas-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="bg-surface-container-low rounded-[2rem] p-6 md:p-12 overflow-hidden shadow-sm border border-neutral/20">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-8 p-4 lg:p-0">
                <div className="space-y-4">
                  <span className="text-secondary font-bold tracking-[0.3em] uppercase text-xs">Transformación Digital</span>
                  <h2 id="sistemas-heading" className="text-4xl font-headline font-extrabold text-primary-dark tracking-tighter leading-tight">
                    Sistema de Información Biointech
                  </h2>
                </div>
                <p className="text-dark/70 leading-relaxed text-lg">
                  Control total en tiempo real. Nuestro dashboard propietario permite el monitoreo digital, control de variables críticas y optimización algorítmica de cada proceso de tratamiento.
                </p>
                <ul className="space-y-5">
                  {[
                    "Trazabilidad 360° de residuos",
                    "Monitoreo remoto 24/7",
                    "Reportes automatizados de cumplimiento"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 font-bold text-primary-dark">
                      <CheckCircle className="text-secondary w-6 h-6 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="lg:col-span-7 relative">
                <div className="bg-primary/5 rounded-2xl p-4 md:p-8 backdrop-blur-sm border border-primary/10">
                  <img 
                    src="http://biointech.co/2026/wp-content/uploads/web-medidores-biointech-v2b.jpg" 
                    alt="Dashboard del Sistema de Información Biointech mostrando métricas en tiempo real" 
                    title="Dashboard de Monitoreo Biointech"
                    className="rounded-xl shadow-2xl border border-white/50 w-full"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-surface-container-lowest p-6 rounded-2xl shadow-xl border border-neutral/20 hidden sm:block">
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center">
                      <Zap className="text-secondary w-7 h-7" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-dark/50 uppercase tracking-widest mb-1">Estado del Sistema</p>
                      <p className="text-primary-dark font-black text-lg">OPERATIVO 100%</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-surface-container-lowest" aria-labelledby="contacto-heading">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-12">
              <div className="space-y-4">
                <h2 id="contacto-heading" className="text-4xl md:text-5xl font-headline font-extrabold text-primary-dark tracking-tighter uppercase">
                  Conversemos sobre el Futuro
                </h2>
                <p className="text-dark/70 text-lg">
                  Estamos listos para optimizar su gestión ambiental con precisión industrial.
                </p>
              </div>
              
              <address className="space-y-8 not-italic">
                <div className="flex gap-6 items-start group">
                  <div className="text-secondary bg-surface-container p-4 rounded-xl group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Building2 className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark uppercase text-sm tracking-widest mb-2">Oficina Central</h3>
                    <p className="text-dark/70">Bogotá, Colombia</p>
                    <p className="text-dark/60 text-sm mt-1">Calle 171 No. 55A-41 Villa del Prado</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start group">
                  <div className="text-secondary bg-surface-container p-4 rounded-xl group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Map className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark uppercase text-sm tracking-widest mb-2">Planta de Operaciones</h3>
                    <p className="text-dark/70">Casanare, Colombia</p>
                  </div>
                </div>
                
                <div className="flex gap-6 items-start group">
                  <div className="text-secondary bg-surface-container p-4 rounded-xl group-hover:bg-secondary group-hover:text-white transition-colors">
                    <Mail className="w-6 h-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-bold text-primary-dark uppercase text-sm tracking-widest mb-2">Canales Directos</h3>
                    <p className="text-dark/70"><a href="mailto:analista.administrativo@biointech.co" className="hover:text-primary transition-colors">analista.administrativo@biointech.co</a></p>
                    <p className="text-dark/70 mt-1"><a href="tel:+573160445790" className="hover:text-primary transition-colors">+57 3160445790</a></p>
                  </div>
                </div>
              </address>
            </div>
            
            <div className="bg-surface-container-low p-8 md:p-10 rounded-3xl border border-neutral/20 shadow-sm">
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-dark/60">Nombre Completo</label>
                  <input 
                    type="text" 
                    placeholder="Juan Pérez"
                    className="w-full bg-transparent border-none border-b-2 border-neutral/50 focus:border-secondary focus:ring-0 px-0 py-2 transition-colors placeholder:text-dark/30"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-dark/60">WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="+57 300 000 0000"
                    className="w-full bg-transparent border-none border-b-2 border-neutral/50 focus:border-secondary focus:ring-0 px-0 py-2 transition-colors placeholder:text-dark/30"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-dark/60">Correo e-mail</label>
                  <input 
                    type="email" 
                    placeholder="juan@empresa.com"
                    className="w-full bg-transparent border-none border-b-2 border-neutral/50 focus:border-secondary focus:ring-0 px-0 py-2 transition-colors placeholder:text-dark/30"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-dark/60">Asunto / Servicio de Interés</label>
                  <select className="w-full bg-transparent border-none border-b-2 border-neutral/50 focus:border-secondary focus:ring-0 px-0 py-2 transition-colors text-dark">
                    <option>MICROREFINERIA</option>
                    <option>GEOCONTENEDORES</option>
                    <option>TERMO-CENTRIFUGADO</option>
                    <option>BIOREMEDACIÓN</option>
                    <option>TRATAMIENTO DE AGUAS</option>
                    <option>INVESTIGACIÓN Y DESARROLLO</option>
                    <option>Cumplimiento de ley RUC</option>
                    <option>Otros</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-dark/60">Mensaje requerimiento</label>
                  <textarea 
                    rows={4}
                    placeholder="Cuéntenos sobre su requerimiento..."
                    className="w-full bg-transparent border-none border-b-2 border-neutral/50 focus:border-secondary focus:ring-0 px-0 py-2 transition-colors placeholder:text-dark/30 resize-none"
                  ></textarea>
                </div>
                
                <button className="w-full bg-primary hover:bg-primary-dark text-white py-4 rounded-xl font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-xl active:scale-[0.98]">
                  Enviar Solicitud
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-earth-dark text-white py-16 px-6 md:px-8" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">Pie de página</h2>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
            <div className="space-y-6 lg:pr-8">
              <img src="http://biointech.co/2026/wp-content/uploads/logo-Biointech-png-2.png" alt="Logotipo de Biointech S.A.S." className="h-16 object-contain bg-white/90 p-2 rounded-lg" />
              <p className="text-white/60 text-sm leading-relaxed">
                Líderes en biotecnología aplicada a la remediación industrial y gestión integral de residuos.
              </p>
              <div className="flex gap-4">
                <a href="https://www.instagram.com/biointechsas/" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Instagram" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary-light hover:text-earth-dark transition-colors">
                  <Instagram className="w-5 h-5" aria-hidden="true" />
                </a>
                <a href="https://www.facebook.com/BiointechSAS/" target="_blank" rel="noopener noreferrer" aria-label="Síguenos en Facebook" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-secondary-light hover:text-earth-dark transition-colors">
                  <Facebook className="w-5 h-5" aria-hidden="true" />
                </a>
              </div>
            </div>
            
            <nav className="space-y-6" aria-label="Navegación del pie de página">
              <h3 className="font-bold text-secondary-light uppercase text-xs tracking-widest">Navegación</h3>
              <ul className="space-y-3">
                {navLinks.map(link => (
                  <li key={link.name}>
                    <a href={link.href} className="text-white/60 hover:text-white text-sm transition-colors inline-flex items-center gap-2 group">
                      <span className="w-1 h-1 rounded-full bg-secondary-light opacity-0 group-hover:opacity-100 transition-opacity" aria-hidden="true"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="space-y-6">
              <h3 className="font-bold text-secondary-light uppercase text-xs tracking-widest">Presencia & Legal</h3>
              <ul className="space-y-3">
                <li className="text-white/60 text-sm">Casanare</li>
                <li className="text-white/60 text-sm">Bogotá</li>
                <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Condiciones del Servicio</a></li>
                <li><a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Política de Privacidad</a></li>
              </ul>
            </div>
            
            <address className="space-y-6 not-italic">
              <h3 className="font-bold text-secondary-light uppercase text-xs tracking-widest">Contacto</h3>
              <div className="space-y-3 text-sm text-white/60 leading-relaxed">
                <p>Biointech S.A.S. Industrial Precision & Ecological Stewardship.</p>
                <p className="pt-2">
                  <a href="mailto:analista.administrativo@biointech.co" className="hover:text-secondary-light transition-colors">
                    analista.administrativo@biointech.co
                  </a>
                </p>
                <p><a href="tel:+573160445790" className="hover:text-secondary-light transition-colors">+57 316 044 5790</a></p>
              </div>
            </address>
          </div>
          
          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} Biointech S.A.S. Industrial Precision & Ecological Stewardship. <br className="md:hidden" />
              <span className="md:ml-2">Powered by: <a href="https://agenciamio.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary-light transition-colors">AgenciaMIO.com</a></span>
            </p>
            <div className="flex items-center gap-3 bg-white/5 px-4 py-2 rounded-full">
              <div className="w-2 h-2 rounded-full bg-secondary-light animate-pulse"></div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-secondary-light">Sistema Activo</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
