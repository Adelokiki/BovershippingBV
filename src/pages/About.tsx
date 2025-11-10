import { AnimatedSection } from '../components/AnimatedSection';
import { AnimatedLine } from '../components/AnimatedLine';

export function About() {
  return (
    <>
      <section className="relative h-[400px] bg-gradient-to-r from-[#1e4a66] to-[#2a5a76] overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/bovers (8) copy copy copy copy copy.jpg')] bg-cover bg-center opacity-30 transition-transform duration-700 group-hover:scale-110"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl mb-4 animate-fade-in-down">About Us</h1>
          <div className="flex items-center gap-2 text-base animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a href="/" className="hover:text-[#00bcd4] transition">Home</a>
            <span className="text-[#00bcd4]">○</span>
            <span>About BoVer Shipping B.V.</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <h3 className="text-[#00bcd4] text-sm mb-4 uppercase tracking-wide font-bold">ABOUT US</h3>
              <h2 className="text-3xl text-[#1e4a66] font-bold">A reliable company, always innovating</h2>
              <div className="mt-4 mb-8">
                <AnimatedLine className="bg-[#00bcd4]" animated={true} />
              </div>
              <div className="text-gray-600 leading-relaxed space-y-6">
                <p>
                  We believe that BoVer Shipping B.V. has a significant part to play in promoting a sustainable future through the energy transition, and we are dedicated to fulfilling that role. Our company consistently seeks to innovate and improve our assets to better support renewable energy. Additionally, our commitment to our customers, focus on their needs, and the skills and expertise of our employees allow us to adapt to the evolving requirements of transportation, processing, and storage of renewable energy products. In summary, we continuously strive to revolutionize our operations and meet the demands of the changing energy landscape.
                </p>
                <p>
                  Our mission aligns with our vision to establish a leading position in Europe by delivering safe and sustainable storage, processing, logistics, and energy transition solutions that are unparalleled in reliability. This commitment to excellence is reflected in our unwavering focus on providing our customers with the highest standards of service and safety, while also prioritizing environmental sustainability as we navigate the energy transition. Our mission and vision serve as a guiding principle for our organization, inspiring us to continuously innovate and improve our operations to meet the evolving needs of our customers and stakeholders.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right">
              <img
                src="/bovers (3).jpg"
                alt="Industrial facility"
                className="w-full shadow-xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h3 className="text-[#00bcd4] text-sm mb-2 uppercase tracking-wide font-bold">COMPANY INITIATIVE</h3>
            <div className="flex justify-center mt-4">
              <div className="flex gap-2">
                <div className="w-16 h-1 bg-[#00bcd4]"></div>
                <div className="w-16 h-1 bg-[#00bcd4]"></div>
              </div>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection direction="left" delay={100} className="bg-white p-10 text-center">
              <h3 className="text-xl text-[#1e4a66] mb-6 font-bold">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To effectively manage shareholders' assets and promote the continuous growth of the company, we aim to become one of the largest vertically integrated entities in the United States specializing in oil and gas storage, handling, processing, and petrochemical products.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={200} className="bg-[#e8f4f8] p-10 text-center">
              <h3 className="text-xl text-[#1e4a66] mb-6 font-bold">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                Our unique capabilities and practical knowledge in our industry will enable us to achieve our goal of expanding our presence in the oil and gas sector while minimizing our environmental impact and making a positive social and governance impact.
              </p>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={300} className="bg-white p-10 text-center">
              <h3 className="text-xl text-[#1e4a66] mb-6 font-bold">Our Strategy</h3>
              <p className="text-gray-600 leading-relaxed">
                In order to realize our vision of making sustainable life a reality every day, our company has implemented a long-term strategy that includes divisions and brands aimed at driving growth for the benefit of all stakeholders in the global market.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
