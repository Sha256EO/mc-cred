import React, { useEffect, useState } from 'react';
import logo from './assets/img/logo.png';
import nosotros from './assets/img/nosotros.jpg';
import requisitos from './assets/img/service-01.png';
import prestamos from './assets/img/prestamos.jpg';
import creditos from './assets/img/creditos.jpg';
import consumo1 from './assets/img/consumo1.png';
import heroImage from './assets/img/hero.jpg';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [expandedItem, setExpandedItem] = useState(null);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  const toggleItem = (index) => {
    setExpandedItem(expandedItem === index ? null : index);
  };

  useEffect(() => {
    const handleScrollSpy = () => {
      const sections = ['hero', 'about', 'servicios', 'requisitos', 'compras', 'servicios', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScrollSpy);
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  const navItemClass = (section) =>
    `relative px-4 py-2 hover:text-blue-500 transition-all duration-300 ` +
    (activeSection === section
      ? 'text-blue-500 after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gradient-to-r from-blue-500 to-green-400 after:rounded-full'
      : '');

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center p-4">
          <img src={logo} alt="Logo" className="h-10" />
          <nav className="flex space-x-2">
            <button
              onClick={() => handleScroll('hero')}
              className={navItemClass('hero')}
            >
              Inicio
            </button>
            <button
              onClick={() => handleScroll('servicios')}
              className={navItemClass('servicios')}
            >
              Servicios
            </button>
            <button
              onClick={() => handleScroll('requisitos')}
              className={navItemClass('requisitos')}
            >
              Prestamos en Efectivo
            </button>
            <button
              onClick={() => handleScroll('compras')}
              className={navItemClass('compras')}
            >
              Compras
            </button>
            <button onClick={() => handleScroll('afiliados')} className={navItemClass('afiliados')}>
              Afiliados
            </button>
            <button
              onClick={() => handleScroll('about')}
              className={navItemClass('about')}
            >
              Nosotros
            </button>
            <button
              onClick={() => handleScroll('contact')}
              className={navItemClass('contact')}
            >
              Contacto
            </button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="hero"
        className="bg-cover bg-center text-white py-40"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
            Bienvenido a Mc Cred
          </h1>
          <p className="text-xl mb-8 drop-shadow-lg">
            Más de 2000 negocios adheridos y sucursales en todo el país, ofreciendo soluciones financieras rápidas y confiables.
          </p>
          <button
            onClick={() => handleScroll('about')}
            className="bg-blue-500 text-white px-8 py-4 rounded-full shadow-lg hover:bg-green-500 transition-all duration-300"
          >
            Conoce más
          </button>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-16">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">Nuestros Servicios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="relative group bg-white rounded-lg shadow-md">
              <div className="h-80 w-full overflow-hidden relative">
                <img
                  src={prestamos}
                  alt="Préstamos en Efectivo"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:filter group-hover:grayscale group-hover:blur-sm"
                />
                <button
                  onClick={() => handleScroll('requisitos')}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-green-500 hover:scale-110"
                >
                  Más Información
                </button>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-white py-4 px-4 text-center transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-400 group-hover:text-white">
                <h4 className="text-xl font-bold mb-2">Préstamos en Efectivo</h4>
                <p className="text-sm">
                  Son rápidos, accesibles y los más sencillos del mercado. Te ayudamos a alcanzar tus metas financieras.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="relative group bg-white rounded-lg shadow-md">
              <div className="h-80 w-full overflow-hidden relative">
                <img
                  src={creditos}
                  alt="Compras de Consumo"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:filter group-hover:grayscale group-hover:blur-sm"
                />
                <button
                  onClick={() => handleScroll('compras')}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-green-500 hover:scale-110"
                >
                  Más Información
                </button>
              </div>
              <div className="absolute bottom-0 left-0 w-full bg-white py-4 px-4 text-center transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-green-400 group-hover:text-white">
                <h4 className="text-xl font-bold mb-2">Compras de Consumo</h4>
                <p className="text-sm">
                  Disfruta de increíbles beneficios y convenios exclusivos con nuestras tiendas afiliadas. ¡Tu satisfacción es nuestra prioridad!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Requisitos Section */}
      <section id="requisitos" className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src={requisitos} alt="Requisitos" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h3 className="text-2xl font-bold mb-4">Préstamos en Efectivo</h3>
            <p className="mb-4">
              Nuestros préstamos de dinero en efectivo para jubilados, pensionados, empleados públicos/privados, AUH e independientes, son rápidos, a sola firma, sin gastos sorpresa y con mínimos requisitos:
            </p>
            <ul className="list-none space-y-2">
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                DNI
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                Boleta de servicio
              </li>
              <li className="flex items-center">
                <span className="text-green-500 mr-2">✔</span>
                Con o sin recibo de sueldo
              </li>
            </ul>
            <p className="mt-4 mb-6">
              Las cuotas son en fijas y en pesos, con un plan de pago que se acuerda al momento del otorgamiento. No tiene gastos adicionales y tiene la facilidad de pagarlo en cualquiera de nuestras sucursales, o en los comercios habilitados de acuerdo a su conveniencia.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-green-400 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Solicita tu préstamo
            </button>
          </div>
        </div>
      </section>

      {/* Compras Section */}
      <section id="compras" className="py-16 bg-gray-100">
        <div className="container mx-auto flex flex-col md:flex-row items-start gap-6">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">CRÉDITOS A SOLA FIRMA</h3>
            <p className="mb-4">
              Día a día trabajamos pensando en la conveniencia de nuestros clientes, para que seamos la herramienta que le ayude alcanzar sus objetivos y cubrir sus necesidades, con planes flexibles, accesibles y sin costos extras al alcance de quien desee solicitarlo. Con mínimos requisitos (<strong>DNI y boleta de servicio</strong>) en cualquiera de nuestros comercios adheridos en Santiago del Estero, La Banda, Termas, Frías, Añatuya, Loreto y Monteros en la provincia de Tucumán.
            </p>
            <blockquote className="italic text-gray-700 text-lg border-l-4 border-blue-500 pl-4">
              El principal objetivo de nuestra empresa es cubrir sus expectativas, escuchándolo y tratando de darle la alternativa que mejor se adapte a su necesidad específica.
              <br /><br />
              Todo aquello que busques y quieras comprar hacelo con Mc Cred y accede a los increíbles beneficios que tenemos para vos. Eso que tanto deseas, lo puedes hacer posible junto a nosotros!
            </blockquote>
          </div>
          <div className="md:w-1/2">
            <img
              src={consumo1}
              alt="Créditos a Sola Firma"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        <div className="mt-12">
          <h4 className="text-2xl font-bold mb-8 text-center">Beneficios</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-gray-300 rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">📄</div>
              <p className="text-md font-medium">Apertura con mínimos requisitos</p>
            </div>
            {/* Card 2 */}
            <div className="bg-white border border-gray-300 rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">📅</div>
              <p className="text-md font-medium">Primera cuota la pagas a los 60 días</p>
            </div>
            {/* Card 3 */}
            <div className="bg-white border border-gray-300 rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">🏬</div>
              <p className="text-md font-medium">Más de 2000 comercios adheridos</p>
            </div>
            {/* Card 4 */}
            <div className="bg-white border border-gray-300 rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">👨‍💼</div>
              <p className="text-md font-medium">Atención personalizada</p>
            </div>
            {/* Card 5 */}
            <div className="bg-white border border-gray-300 rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">💵</div>
              <p className="text-md font-medium">Sin costo de mantenimiento</p>
            </div>
            {/* Card 6 */}
            <div className="bg-white border border-gray-300 rounded-lg p-6 text-center">
              <div className="text-3xl mb-4">🏷️</div>
              <p className="text-md font-medium">Promociones y beneficios vigentes</p>
            </div>
          </div>
        </div>
      </section>

      {/* Afiliados Section */}
      <section id="afiliados" className="py-16 bg-white">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">Nuestros Afiliados</h3>
          <p className="mb-8 text-gray-700">
            Descubre la diversidad de rubros de nuestros comercios afiliados y aprovecha los beneficios exclusivos que tenemos para ti.
          </p>
          <div className="overflow-hidden relative">
            <div className="flex animate-marquee whitespace-nowrap">
              {['Supermercado Plus', 'Moda Style', 'Electro Hogar', 'Farmacia Salud', 'Librería Mundo', 'Deportes Pro', 'Tecnología Fast', 'Viajes Felices'].map((empresa, index) => (
                <div
                  key={index}
                  className="mx-8 text-xl font-semibold text-gray-800 bg-gray-100 px-4 py-2 rounded-lg shadow-md"
                >
                  {empresa}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img src={nosotros} alt="Sobre Nosotros" className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-10">
            <h3 className="text-2xl font-bold mb-4">Sobre Nosotros</h3>
            <p className="mb-4">
              Mc Cred es una empresa joven nacida en el año 2005, con CAPITALES propios que se dedica a brindar soluciones financieras a sus clientes a través de sus distintas líneas de crédito; en Efectivo y para el Consumo a través de nuestra amplia red de comercios adheridos. La capacidad de adaptarnos a los contextos económicos y de mercado y por supuesto a nuestros clientes nos han llevado hoy a tener 9 sucursales en el norte de país y contar con más de 50 colaboradores altamente capacitadas dispuestas a brindar un servicio de excelencia, logrando así que nuestros clientes de sientan respaldados, atendidos y escuchados.
            </p>
          </div>
        </div>

        {/* Mission, Values, Strengths */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-12">
          <div>
            <div className="flex justify-center mb-4">
              <span className="text-green-500 text-4xl">📌</span>
            </div>
            <h4 className="text-xl font-semibold mb-2">MISIÓN</h4>
            <p>
              Brindar asesoramiento y soluciones financieras a personas y comercios mediante: Préstamos personales y créditos de consumo, adaptados a sus objetivos y posibilidades en un ambiente cómodo y de excelencia.
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-4">
              <span className="text-green-500 text-4xl">⭐</span>
            </div>
            <h4 className="text-xl font-semibold mb-2">VALORES</h4>
            <p>
              Dentro de nuestros valores podemos integrar la transparencia hacia nuestro equipo y hacia nuestros clientes, respeto, responsabilidad, actitud de servicio y excelencia para poder dar lo mejor.
            </p>
          </div>
          <div>
            <div className="flex justify-center mb-4">
              <span className="text-green-500 text-4xl">🌟</span>
            </div>
            <h4 className="text-xl font-semibold mb-2">FORTALEZAS</h4>
            <p>
              Cobertura geográfica en la provincia, presente en las principales ciudades (Capital, La Banda, Termas, Frías y Añatuya), con 2 sucursales en Tucumán (Monteros y Concepción) y 1 en Catamarca (San Fernando del Valle de Catamarca).
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="container mx-auto">
          <h4 className="text-2xl font-bold mb-8 text-center">¿POR QUÉ ELEGIRNOS?</h4>
          <div className="space-y-4">
            {["Préstamos personales simples y rápidos", "Comodidad y calidad en comercios adheridos", "Fiestas con súper descuentos", "Créditos en el acto", "Vacaciones soñadas", "Las mejores promociones", "Sorteos"].map((item, index) => (
              <div
                key={index}
                className={`border rounded-lg p-4 transition-all duration-300 ${expandedItem === index ? 'bg-gradient-to-r from-blue-500 to-green-400 text-white' : ''}`}
              >
                <button
                  className="w-full text-left flex justify-between items-center"
                  onClick={() => toggleItem(index)}
                >
                  <span className="font-semibold text-lg flex items-center">
                    {expandedItem === index && <span className="text-green-500 mr-2">✔</span>}
                    {item}
                  </span>
                  <span className="text-gray-500 transition-transform duration-300" style={{ transform: expandedItem === index ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                    ▼
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${expandedItem === index ? 'max-h-40' : 'max-h-0'}`}
                >
                  <p className="mt-2">
                    {expandedItem === index && (
                      {
                        0: "Con nuestros préstamos personales, obtendrás la solución económica que necesitas de manera inmediata y sin trámites engorrosos.",
                        1: "Disfruta de la comodidad de comprar en comercios asociados que garantizan calidad y confianza.",
                        2: "No te pierdas nuestras exclusivas fiestas con descuentos para clientes leales.",
                        3: "Accede a créditos al instante con nuestras rápidas aprobaciones.",
                        4: "Realiza las vacaciones que siempre soñaste con planes financieros a tu medida.",
                        5: "Aprovecha las mejores promociones diseñadas exclusivamente para ti.",
                        6: "Participa en sorteos exclusivos para clientes y gana premios increíbles."
                      }[index]
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Contáctanos</h3>
            <p className="text-lg font-semibold">Teléfonos:</p>
            <ul className="space-y-2">
              <li>📞 Fijo: (123) 456-7890</li>
              <li>📞 Fijo: (987) 654-3210</li>
              <li>📱 Móvil: +54 9 123 456 789</li>
            </ul>
            <p className="text-lg font-semibold mt-4">Correo Electrónico:</p>
            <p>📧 contacto@mccred.com</p>
            <p className="text-lg font-semibold mt-4">Horarios de Atención:</p>
            <p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-center">Solicita tu Turno</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Tu nombre"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Tu teléfono"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="text"
                placeholder="Motivo de consulta"
                className="w-full p-3 border rounded-lg"
              />
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 w-full"
              >
                Enviar
              </button>
            </form>
          </div>

          {/* Map Section */}
          <div className="text-center md:text-right">
            <h3 className="text-2xl font-bold mb-4">Nuestra Ubicación</h3>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d524.685408342092!2d-64.25909906565154!3d-27.78979872628637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943b5211c1d65b0f%3A0xb41ea98c59bbe7a6!2sMc%20Cred!5e0!3m2!1ses-419!2sar!4v1737989191551!5m2!1ses-419!2sar"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-md"
            ></iframe>
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2025 MiLanding. Todos los derechos reservados.</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default App;
