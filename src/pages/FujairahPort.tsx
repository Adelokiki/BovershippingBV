import { Link } from 'react-router-dom';
import { Database, AlarmClock } from 'lucide-react';
import { CountUpNumber } from '../components/CountUpNumber';
import { AnimatedSection } from '../components/AnimatedSection';

export function FujairahPort() {
  return (
    <>
      <section className="relative h-[400px] overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/fujairah-header.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
        <div className="absolute inset-0 bg-[#1e4a66] bg-opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-down">Fujairah Port</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="rounded-full overflow-hidden w-full max-w-md mx-auto aspect-square shadow-2xl">
                  <img
                    src="/fujairah-header.png"
                    alt="Fujairah Port Terminal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-4xl font-bold text-[#1e4a66] mb-6">Fujairah Port</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  The Fujairah Terminal Complex is home to Bover Shipping B.V, a tank storage facility that properly handles the blending, break-bulk, and consolidation of petroleum products and crude oil. Bover Shipping B.V is the top supplier of petroleum product handling and storage services in Fujairah, strategically situated outside the Gulf at the mouth of the Strait of Hormuz on the eastern side of the United Arab Emirates (UAE).
                </p>
                <p>
                  Bover Shipping B.V and the Government of Fujairah have partnered to establish Bover Shipping B.V, Fujairah Terminal. Receiving from and delivering to ships, homogenizing, adding, inter-tank transfers, pipeline transfers to nearby terminals, and ship-to-ship transfers are among the services provided.
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
                  <CountUpNumber end={949143} duration={2000} /> cbm
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
                  <CountUpNumber end={43} duration={2000} />
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
                  <CountUpNumber end={18} duration={2000} />
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
                    <p className="text-gray-700 text-sm">Clean Petroleum Products (Carbon Steel, Internally Coated), Petrochemicals (Carbon Steel)</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Tank Sizes</h4>
                    <p className="text-gray-700 text-sm">2,000 – 80,000 cbm | 12,580 to 503,200 bbl</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Jetty Capacities</h4>
                    <p className="text-gray-700 text-sm">80,000 dwt</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Access Types</h4>
                    <p className="text-gray-700 text-sm">Flexi Bag, ISO Tanker, Pipeline, Tank-to-Tank, Tanker Truck, Vessel</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Products</h4>
                    <p className="text-gray-700 text-sm">Clean Petroleum Products, Petrochemicals</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Services</h4>
                    <p className="text-gray-700 text-sm">Additive Injection (Drum to Vessel, Drum to Tank, Drum to Truck), Connection to longdistance pipelines, ISO container loading & unloading, Independent surveyor's lab on site, Inter Terminal Transfer, Ship to Ship Transfer, Specialized Injection, Tank-to-tank transfer, Truck loading & unloading, Vessel loading & unloading</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className="bg-white p-6 shadow-md">
                <h3 className="text-xl font-bold text-white bg-[#1e4a66] px-4 py-2 mb-4">Terminal Location</h3>

                <div className="space-y-4 px-4">
                  <div className="bg-[#e3f2fd] p-3 border-l-4 border-[#1e4a66]">
                    <p className="text-sm text-gray-700 mb-1">
                      <span className="font-bold text-gray-900">Al Sodah</span>
                    </p>
                    <p className="text-xs text-gray-600">25.3° - Fujairah Oil Industry Zone - Fujairah - United Arab Emirates</p>
                    <a href="#" className="text-[#1565c0] text-sm hover:underline inline-block mt-2">Directions</a>
                  </div>

                  <div className="relative h-[300px] rounded-lg overflow-hidden shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3584.8!2d56.3436!3d25.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE4JzAwLjAiTiA1NsKwMjAnMzcuMCJF!5e0!3m2!1sen!2sae!4v1234567890"
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
                    href="https://maps.google.com/?q=Fujairah+Oil+Industry+Zone,+Fujairah,+United+Arab+Emirates"
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
