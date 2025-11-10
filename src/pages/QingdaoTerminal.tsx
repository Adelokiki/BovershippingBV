import { Link } from 'react-router-dom';
import { Database, AlarmClock } from 'lucide-react';
import { CountUpNumber } from '../components/CountUpNumber';
import { AnimatedSection } from '../components/AnimatedSection';

export function QingdaoTerminal() {
  return (
    <>
      <section className="relative h-[400px] overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/fleet.jpg')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
        <div className="absolute inset-0 bg-[#1e4a66] bg-opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-down">Qingdao Terminal</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="rounded-full overflow-hidden w-full max-w-md mx-auto aspect-square shadow-2xl">
                  <img
                    src="/image copy copy copy copy copy copy copy.png"
                    alt="Qingdao Terminal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-4xl font-bold text-[#1e4a66] mb-6">Qingdao Terminal</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  The Port of Qingdao is a seaport on the Yellow Sea that is located close to Qingdao (also known as Tsingtao) in Shandong Province, China.
                </p>
                <p>
                  It ranks seventh in terms of overall cargo volume in 2019 and is among the top ten busiest ports worldwide. The Qingdao port authorities have granted us a storage sublease to operate in the port, which facilitates the storage of goods for our Chinese clients.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Services</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-[#1e4a66] mt-1">•</span>
                    <span>storage of oil products</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1e4a66] mt-1">•</span>
                    <span>Container handling with the use of chains or special equipment other than standard spreader</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1e4a66] mt-1">•</span>
                    <span>Receiving/Delivering of 20/40' loaded, empty, and OOG-containers to/from terminal</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#1e4a66] mt-1">•</span>
                    <span>Storage of containers, including reefer containers.</span>
                  </li>
                </ul>
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
                  <CountUpNumber end={290200} duration={2000} /> cbm
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
                  <CountUpNumber end={22} duration={2000} />
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
                  <CountUpNumber end={11} duration={2000} />
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
                    <p className="text-gray-700 text-sm">From 200 to 40,000 cbm</p>
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
                    <p className="text-gray-700 text-sm">Heating, Dedicated systems, Nitrogen blanketing, In house truck weighing</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Terminal type</h4>
                    <p className="text-gray-700 text-sm">Industrial</p>
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3120.5!2d120.2202!3d36.0600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDAzJzM1LjkiTiAxMjDCsDEzJzEyLjgiRQ!5e0!3m2!1sen!2scn!4v1234567890"
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
                    href="https://maps.google.com/?q=36.0600,120.2202"
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
