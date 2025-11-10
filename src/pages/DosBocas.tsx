import { Database, AlarmClock } from 'lucide-react';
import { CountUpNumber } from '../components/CountUpNumber';
import { AnimatedSection } from '../components/AnimatedSection';

export function DosBocas() {
  return (
    <>
      <section className="relative h-[400px] overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/dos-bocas.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
        <div className="absolute inset-0 bg-[#1e4a66] bg-opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-down">Dos Bocas Terminal</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="rounded-full overflow-hidden w-full max-w-md mx-auto aspect-square shadow-2xl">
                  <img
                    src="/dos-bocas.png"
                    alt="Dos Bocas Terminal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-4xl font-bold text-[#1e4a66] mb-6">Dos Bocas Terminal</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  Strategically positioned in Tabasco, Mexico, Bover Shipping B.V's Dos Bocas Terminal serves as a critical hub for liquid bulk energy products in the Gulf of Mexico region. As a leading independent provider of handling and storage services in Latin America, we play an essential role in supporting vital energy supply chains throughout the region.
                </p>
                <p>
                  Through our state-of-the-art terminal facility located in Dos Bocas, we deliver exceptional services to our clients across Mexico and beyond. Our commitment is to lead our industry in sustainability and safety while balancing profit, environmental responsibility, and people. Safety remains our highest priority as we continuously seek innovative methods to minimize the environmental footprint of our operations. We maintain substantial investments in our infrastructure and consistently deliver strong financial returns for Bover Shipping B.V.
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
                  <CountUpNumber end={450000} duration={2000} /> cbm
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
                  <CountUpNumber end={42} duration={2000} />
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
                  <CountUpNumber end={16} duration={2000} />
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
                    <p className="text-gray-700 text-sm">Coated Mild Steel, Stainless Steel</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Tank Sizes</h4>
                    <p className="text-gray-700 text-sm">800 – 35,000 cbm | 5,032 – 220,150 bbl</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Jetty Capacities</h4>
                    <p className="text-gray-700 text-sm">80,000 dwt</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Access Types</h4>
                    <p className="text-gray-700 text-sm">Vessels, Barges, Tankers, Rail Cars, Tank Trucks, Jetty, Pipeline, Tank-to-Tank</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Products</h4>
                    <p className="text-gray-700 text-sm">Crude Oil, Clean Petroleum Products, Petrochemicals, Heavy Fuel Oil</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Services</h4>
                    <p className="text-gray-700 text-sm">Pipeline connections to refineries, Tank-to-tank transfer, Ship-to-ship transfer, Barge loading and unloading, Vessel loading and unloading, Vessel type: Small (&lt; 25,000 dwt), Vessel type: Handy (25,000 - 50,000 dwt), Vessel type: Panamax (50,000 - 80,000 dwt), Railcar loading, Railcar unloading, Truck loading, Truck unloading, Truck weighing, Nitrogen blanketing, Additivation services, Blending services, Heating, Independent surveyor's lab on site, Customs & excise services</p>
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30360.5!2d-93.2869!3d18.4389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85eda6c0e1c6e9d9%3A0x1234567890abcdef!2sDos%20Bocas%2C%20Tabasco%2C%20Mexico!5e0!3m2!1sen!2smx!4v1234567890"
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
                    href="https://maps.google.com/?q=Dos+Bocas,+Tabasco,+Mexico"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-xs text-[#1e4a66] hover:underline"
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
