import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { AnimatedLine } from '../components/AnimatedLine';

export function Services() {
  return (
    <>
      <section className="relative h-[400px] bg-gradient-to-r from-[#1e4a66] to-[#2a5a76] overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/services-header.jpg')] bg-cover bg-center opacity-30 transition-transform duration-700 group-hover:scale-110"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl mb-4 animate-fade-in-down">Services</h1>
          <div className="flex items-center gap-2 text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a href="/" className="hover:text-[#00bcd4] transition">Home</a>
            <span className="text-[#00bcd4]">○</span>
            <span>Services</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h3 className="text-[#00bcd4] text-sm mb-4 uppercase tracking-wide font-bold">OUR SERVICES</h3>
            <div className="flex justify-center">
              <div className="flex gap-2">
                <div className="w-16 h-1 bg-[#00bcd4]"></div>
                <div className="w-16 h-1 bg-[#00bcd4]"></div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <AnimatedSection direction="left" delay={100} className="bg-[#e8f4f8] p-10 text-center">
              <Link to="/tank-storage" className="block group">
                <h3 className="text-xl text-[#1e4a66] mb-6 font-bold group-hover:text-[#00bcd4] transition">Storage</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our tank storage facilities boast a total capacity of 5.4 million cubic meters (CBM) for the storage of various products. Our advanced automated systems enable precise volume and temperature monitoring, ensuring the highest level of accuracy and control.
                </p>
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200} className="bg-white p-10 text-center shadow-md">
              <h3 className="text-xl text-[#1e4a66] mb-6 font-bold">Blending & Heating</h3>
              <p className="text-gray-600 leading-relaxed">
                In addition to our extensive tank storage capabilities, we also offer product blending, mixing, and homogenization services to our customers. Our state-of-the-art facilities enable us to precisely blend and mix various products to meet specific customer requirements. We also provide product heating solutions to ensure optimal processing conditions.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={300} className="bg-[#e8f4f8] p-10 text-center">
              <h3 className="text-xl text-[#1e4a66] mb-6 font-bold">Tank Cleaning</h3>
              <p className="text-gray-600 leading-relaxed">
                We also offer tank cleaning services as part of our comprehensive storage and processing solutions. Our tank cleaning services utilize advanced techniques and equipment to thoroughly clean tanks, removing residues and contaminants, and preparing them for the next product or service.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection direction="left" delay={100} className="bg-[#e8f4f8] p-10 text-center">
              <h3 className="text-xl text-[#1e4a66] mb-6 font-bold">Speciality Services</h3>
              <p className="text-gray-600 leading-relaxed">
                We offer services such as vapor recovery, nitrogen blanketing, custom food storage documentation, customs assistance, and an automated drum-filling line.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200} className="bg-white p-10 text-center shadow-md">
              <h3 className="text-xl text-[#1e4a66] mb-6 font-bold">Multimodal Logistics</h3>
              <p className="text-gray-600 leading-relaxed">
                Versatile import and export capabilities Convenient storage solution for localized rail, truck, and barge facilities Seamless connectivity to terminals via dedicated pipelines.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={300} className="bg-[#e8f4f8] p-10 text-center">
              <Link to="/shipping" className="block group">
                <h3 className="text-xl text-[#1e4a66] mb-6 font-bold group-hover:text-[#00bcd4] transition">Transportation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Affordable transportation by a dedicated fleet of trucks Efficient loading and unloading of oils and fats at railway terminals
                </p>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <h3 className="text-[#00bcd4] text-sm mb-4 uppercase tracking-wide font-bold">BOVER SHIPPING B.V. INTEGRATED AND INNOVATIVE SERVICE SOLUTIONS</h3>
              <div className="flex gap-2 mb-8">
                <div className="w-24 h-1 bg-[#00bcd4]"></div>
                <div className="w-6 h-1 bg-[#00bcd4]"></div>
              </div>
              <div className="text-gray-600 leading-relaxed space-y-6">
                <p>
                  We have the capability to empower your organization, enhance your operational effectiveness, and secure a competitive advantage. We tailor our services to accommodate your requirements and ongoing evolution, delivering solutions that facilitate your business expansion.
                </p>
                <p>
                  Our company provides expansive storage facilities in key locations throughout the United States, Netherlands, France, the United Kingdom, Spain, Portugal, Poland, and Italy. With a combined capacity of more than 5,387,000 cubic meters (CBM), our facilities cater to a wide range of liquid bulk products and deliver comprehensive and inventive service solutions.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <img
                src="/bovers (4) copy copy.jpg"
                alt="Industrial facility at night"
                className="w-full shadow-xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
