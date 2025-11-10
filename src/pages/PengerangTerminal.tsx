import { Link } from 'react-router-dom';
import { Database, AlarmClock } from 'lucide-react';
import { CountUpNumber } from '../components/CountUpNumber';
import { AnimatedSection } from '../components/AnimatedSection';

export function PengerangTerminal() {
  return (
    <>
      <section className="relative h-[400px] overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/image%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy%20copy.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
        <div className="absolute inset-0 bg-[#1e4a66] bg-opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-down">Pengerang Terminal</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="rounded-full overflow-hidden w-full max-w-md mx-auto aspect-square shadow-2xl">
                  <img
                    src="/image copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy copy.png"
                    alt="Pengerang Terminal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-4xl font-bold text-[#1e4a66] mb-6">Pengerang Terminal</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  Bover Shipping B.V is an industrial terminal specifically designed to store crude, processed petroleum, petrochemical, and gaseous products. It is located within the Pengerang Integrated Complex and spans around 1.5 million square meters. With 11 berths and a maximum sea depth of 24 meters, the terminal features a deepwater jetty facility that can accommodate Very Large Crude Carriers (VLCC).
                </p>
                <p>
                  We carry out the plan of delivery. Bover Shipping B.V provides customized Terminal Tugs that satisfy the needs of each site, whether operating beside protected jetties or in open water. Bover Shipping B.V specializes in high quality maritime support packages for oil terminals globally.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#1e4a66] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up">
            <h2 className="text-3xl font-bold text-center mb-12">Numbers</h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedSection direction="up" delay={100}>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Database className="w-12 h-12 text-[#7ab8d1]" strokeWidth={1} />
                </div>
                <div className="text-3xl font-bold mb-2">
                  <CountUpNumber end={176364} duration={2000} /> cbm
                </div>
                <div className="text-sm text-gray-300">Storage Capacity</div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200}>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <Database className="w-12 h-12 text-[#7ab8d1]" strokeWidth={1} />
                </div>
                <div className="text-3xl font-bold mb-2">
                  <CountUpNumber end={81} duration={2000} />
                </div>
                <div className="text-sm text-gray-300">Storage Tanks</div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={300}>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-12 h-12 text-[#7ab8d1]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                  </svg>
                </div>
                <div className="text-3xl font-bold mb-2">
                  <CountUpNumber end={25} duration={2000} />
                </div>
                <div className="text-sm text-gray-300">Draught Meter</div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={400}>
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <AlarmClock className="w-12 h-12 text-[#7ab8d1]" strokeWidth={1} />
                </div>
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-sm text-gray-300">Services</div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <AnimatedSection direction="right">
              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-white bg-[#1e4a66] px-4 py-2 mb-4">Terminal Facts</h3>

                <div className="space-y-3 px-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Tank Types</h4>
                    <p className="text-gray-700 text-sm">Coated Mild Steel, Coated Steel</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Tank Sizes</h4>
                    <p className="text-gray-700 text-sm">500 – 43,000 cbm | 3,145 – 270,470 bbl</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Jetty Capacities</h4>
                    <p className="text-gray-700 text-sm">125,000 dwt</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Access Types</h4>
                    <p className="text-gray-700 text-sm">Vessels, Barges, Tankers, Rail Cars, Tank Trucks, ISO Container, Jetty, Pipeline, CEPS (Central European Pipeline System) Connection, Tank-to-Tank</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Products</h4>
                    <p className="text-gray-700 text-sm">Clean Petroleum Products, Petrochemicals, Gases</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Services</h4>
                    <p className="text-gray-700 text-sm">Connection to long-distance pipelines, Pipeline connections to refineries, Pipeline connections to chemical industry, Dedicated pipelines for chemicals, Tank-to-tank transfer, Ship-to-ship transfer, Ship-to-ship transfer via shoreline, Barge loading and unloading, Vessel loading and unloading, Vessel type: Small (&lt; 25,000 dwt), Vessel type: Handy (25,000 - 50,000 dwt), Vessel type: Panamax (50,000 - 80,000 dwt), Railcar loading, Railcar unloading, Truck loading, Truck unloading, Truck weighing, ISO container loading & unloading, Make & Break Bulk, Ethanol denaturing, Nitrogen blanketing, Butanizing, Additivation services, Blending services, Filtration, Heating, Independent surveyor's lab on site, ICE delivery location, Customs & excise services, Fiscal warehouse</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-white bg-[#1e4a66] px-4 py-2 mb-4">Terminal Location</h3>

                <div className="space-y-4 px-4">
                  <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.2!2d104.2433!3d1.3581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMjEnMjkuMiJOIDEwNMKwMTQnMzUuOSJF!5e0!3m2!1sen!2smy!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full"
                    ></iframe>
                  </div>

                  <a
                    href="https://maps.google.com/?q=Pengerang+Integrated+Complex,+Johor,+Malaysia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs text-[#1565c0] hover:underline"
                  >
                    View larger map
                  </a>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
