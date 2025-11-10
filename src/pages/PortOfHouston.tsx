import { Link } from 'react-router-dom';
import { Database, AlarmClock } from 'lucide-react';
import { CountUpNumber } from '../components/CountUpNumber';
import { AnimatedSection } from '../components/AnimatedSection';

export function PortOfHouston() {
  return (
    <>
      <section className="relative h-[400px] overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/houston-header.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
        <div className="absolute inset-0 bg-[#1e4a66] bg-opacity-70"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in-down">Port of Houston</h1>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <AnimatedSection direction="left">
              <div className="relative">
                <div className="rounded-full overflow-hidden w-full max-w-md mx-auto aspect-square shadow-2xl">
                  <img
                    src="/houston-circular.png"
                    alt="Port of Houston Terminal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right">
              <h2 className="text-4xl font-bold text-[#1e4a66] mb-6">Port Of Houston</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
                <p>
                  Twenty nine (29) large above-ground on-site storage tanks make up our fuel tank farm. The safe and secure handling of such commodities is guaranteed when specific areas are surrounded by walls made of reinforced concrete that are stronger than is necessary. By utilizing aviation kerosene, liquid asphalt, and No. 6, No. 4, and No. 2 diesel oil, we are able to provide our consumers a vast selection of products.
                </p>
                <p>
                  Our tank farm also has a gasoline depot station with fifteen (15) commercial truck "loading rack" stations, a truck weigh station, an operations center, and a scale house. This results in incredibly rapid, cost-effective, and efficient tank truck filling and dispatching.
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
                  <CountUpNumber end={558684} duration={2000} /> cbm
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
                  <CountUpNumber end={113} duration={2000} />
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
                <div className="text-3xl font-bold mb-2">12.2</div>
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
                    <p className="text-gray-700 text-sm">400 – 42,933 cbm | 2,516 – 270,049 bbl</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Jetty Capacities</h4>
                    <p className="text-gray-700 text-sm">52,000 dwt</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Access Types</h4>
                    <p className="text-gray-700 text-sm">Barge, Pipeline, Rail Car, Tank Truck, Vessel</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Products</h4>
                    <p className="text-gray-700 text-sm">Biofuels & Edible Oil, Clean Petroleum Product, Gases, Organic Chemicals</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Services</h4>
                    <p className="text-gray-700 text-sm">Blending, Barge loading and unloading, Connection to long-distance pipelines, Independent surveyor on site, Pipeline connections to local chemical production plants/refineries, Railcar loading and unloading, Truck loading and unloading, TTB DSP permit for undenatured ethanol, Unit trains and manifest rails, Vessel loading and unloading, Vessel type Handy / MR (25,000 – 50,000 dwt), FDA and Kosher certification</p>
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55431.8!2d-95.2697!3d29.7316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640b7c8e8e5fb89%3A0x68b0e93b9e2e0b08!2sPort%20of%20Houston!5e0!3m2!1sen!2sus!4v1234567890"
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
                    href="https://maps.google.com/?q=Port+of+Houston,+Texas,+USA"
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
