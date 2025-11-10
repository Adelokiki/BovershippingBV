import { Home } from 'lucide-react';
import { useState, useEffect } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { ParallaxImage } from '../components/ParallaxImage';

export function Shipping() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const shippingImages = [
    '/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % shippingImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section with Animated Background */}
      <section className="relative h-[400px] overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/logistics-header.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e4a66]/90 to-[#0f2a3a]/90"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-down">Logistics Services</h1>
          <div className="flex items-center gap-3 text-sm animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Home className="w-4 h-4" />
            <span>Main Page</span>
            <span className="text-[#00bcd4]">○</span>
            <span>Logistics Services</span>
          </div>
        </div>
      </section>

      {/* Shipping Services Section with Image Carousel */}
      <section className="py-20 bg-white overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-bl from-slate-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="relative overflow-hidden rounded-lg shadow-2xl">
                {shippingImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Shipping Services ${index + 1}`}
                    className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                      index === currentImageIndex
                        ? 'opacity-100 scale-100'
                        : 'opacity-0 scale-105 absolute inset-0'
                    }`}
                  />
                ))}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {shippingImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? 'bg-[#00bcd4] w-8'
                          : 'bg-white/60 hover:bg-white/80'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-4xl font-bold text-[#1e4a66] mb-8">Shipping Services</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                <p>
                  Bover Shipping BV offers a special range of services for all types of ships that dock at the port. Pilotage and towing are the most well-known of these services, and they are offered by a fleet of highly qualified marine harbor vessels. The fleet is equipped with cutting-edge firefighting tools and a dispersant spray arms system to prevent oil pollution. Units of pollution patrols are also prepared to respond swiftly in an emergency. The Marine Department manages an internationally recognized framework for environmental concerns and marine services.
                </p>
                <p>
                  In line with Bover Shipping BV's robust throughput expansion, the number of commercial vessels calling at the port and anchorage has significantly increased over time. To accommodate future growth, Bover Shipping BV has constructed a new service harbor exclusively for service boats and tugboats. The Service Harbour provides a covered "one stop" facility for maritime supply operations. Located south of the present Bover Shipping BV, it is protected by a breakwater and has space for 120 tugboats and service vessels of all sizes.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Oil & Gas Pipeline Section */}
      <section className="py-20 bg-gray-50 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-[#1e4a66] mb-8">Oil & Gas Pipeline</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                <p>
                  The Netherlands boasts a vast network of export pipelines and domestic distribution. About 68% of all crude oil and 27% of all oil products produced in the Netherlands are transported by the state-run pipeline network, which is almost entirely owned and operated by the state. In addition to several export pipelines that deliver oil to markets in western Europe, we also control a number of domestic pipeline networks and pipelines that carry oil to export terminals.
                </p>
                <p>
                  The primary goals of Bover Shipping BV are to minimize the negative effects on the environment and adhere to the most stringent environmental safety regulations. The corporation decommissions old equipment, builds new green areas inside the refinery's sanitary protection zone, and routinely monitors the atmospheric environment in an effort to improve air quality. Authorized on-site wastewater laboratory ensures proper functioning of treatment plants.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="order-1 md:order-2">
              <ParallaxImage src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png" alt="Oil & Gas Pipeline" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Road Trucks Section */}
      <section className="py-20 bg-white overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-bl from-blue-50/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <ParallaxImage src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png" alt="Road Truck Transportation" />
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-4xl font-bold text-[#1e4a66] mb-8">Road Trucks</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                <p>
                  The negative consequences of outside pressures have recently affected the cargo transport business. Road cargo transportation, however, continues to hold its dominant positions in the market. A number of factors contribute to the high volumes of freight transported by road. Regardless of the operating hours of ports, railroads, and airports, trucks are capable of making effective deliveries around the clock.
                </p>
                <p>
                  Utilizing trucks enables flexible routing and cargo tracking using information from GLONASS and contemporary GPS navigation systems. When it comes to short-distance delivery of goods, truck transportation reduces expenses. Bover Shipping BV allows its Clients experience all the advantages of intercity and international road freight transportation. For over many years our expertise have built optimal routes in Asia. They provide transportation in strict compliance with agreed terms at the most competitive prices, taking into account each client's unique needs.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Road Trucks Details Section with Animated Background */}
      <section className="py-20 bg-gradient-to-r from-[#2a3f4d]/95 to-[#1e2d38]/95 relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/fleet.jpg')] bg-cover bg-center opacity-20 transition-transform duration-1000 group-hover:scale-110"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e4a66]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <div className="text-white space-y-6 leading-relaxed">
              <p className="text-lg">
                We can maintain a high standard of service quality and provide a flexible pricing policy by working with major transportation companies. Any kind of goods can be transported by road both internationally and between cities, including:
              </p>

              <ul className="space-y-3 text-lg ml-6">
                <li className="flex items-start">
                  <span className="text-[#00bcd4] mr-3 mt-1">•</span>
                  <span>piece, bulk and liquid cargo;</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00bcd4] mr-3 mt-1">•</span>
                  <span>Full Truck Load (FTL) and groupage cargoes;</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00bcd4] mr-3 mt-1">•</span>
                  <span>heavyweight and oversized freight;</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00bcd4] mr-3 mt-1">•</span>
                  <span>dangerous goods;</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#00bcd4] mr-3 mt-1">•</span>
                  <span>goods requiring transport under a certain temperature regime.</span>
                </li>
              </ul>

              <p className="text-lg pt-4">
                Transporting particular items can be dangerous for the truck, the driver, and occasionally other drivers. Therefore, particular restrictions must be followed when using this mode of transportation. In instance, certain permissions granted by recognized state organizations are used to transport hazardous materials by truck throughout Europe. In order to carry big items by road, a permit and route approval are needed. In accordance with the qualities and dimensions of every load, we deliver safely and effectively while continuously keeping an eye on modifications to the laws governing road transportation.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Railway Section */}
      <section className="py-20 bg-gray-50 overflow-hidden relative group">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left" className="order-2 md:order-1">
              <h2 className="text-4xl font-bold text-[#1e4a66] mb-8">Railway</h2>
              <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
                <p>
                  Regardless of the state of the world economy, there is always a need for rail freight transportation. High carrying capacity, speed, and optimum cargo safety are the segment's dynamic and sustainable features.
                </p>
                <p>
                  In Europe, the CIS, China, and other nations, Bover Shipping BV assists its clients in taking use of all the benefits of rail freight transit. Our staff members evaluate customer requirements and cargo properties, plan the best delivery routes, and calculate expenses.
                </p>
                <p>
                  We arrange rail freight transportation for any items, regardless of delivery location, in accordance with predetermined terms. Because we work closely with trustworthy partners, we are able to maintain a high standard of service quality while offering a flexible pricing policy.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" className="order-1 md:order-2">
              <ParallaxImage src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png" alt="Railway Transportation" />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Call to Action with Animated Background */}
      <section className="py-16 bg-[#1e4a66] relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00bcd4]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection direction="up">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Optimize Your Logistics?</h2>
            <p className="text-gray-300 text-lg mb-8">
              Contact us today to discuss how our comprehensive logistics solutions can support your business needs.
            </p>
            <a
              href="/contact"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = '/contact';
              }}
              className="inline-block bg-[#00bcd4] text-white px-8 py-4 font-semibold hover:bg-[#00a3b8] transition-colors duration-300 shadow-lg transform hover:scale-105 transition-transform"
            >
              Get In Touch
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
