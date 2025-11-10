import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Users, CheckCircle, Award } from 'lucide-react';
import { CountUpNumber } from '../components/CountUpNumber';
import { AnimatedSection } from '../components/AnimatedSection';
import { AnimatedLine } from '../components/AnimatedLine';

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/fleet.jpg',
      title: 'WELCOME TO BOVER SHIPPING B.V.',
      description: 'OUR TERMINAL, BOVER SHIPPING B.V., OFFERS TANK STORAGE SERVICES FOR A RANGE OF PETROLEUM PRODUCTS.'
    },
    {
      image: '/8.jpg',
      title: 'TRUSTED AND RELIABLE',
      description: 'BoVer Shipping B.V. is your most trustworthy and dependable choice for the secure storage of your product.'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <section id="home" className="relative h-[500px] md:h-[calc(100vh-112px)]">
        <div className="relative h-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-full object-cover animate-rotate-slow" />
              <div className="absolute inset-0 bg-[#1e4a66] bg-opacity-70"></div>
            </div>
          ))}

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-5xl">
              <div className={`transition-opacity duration-1000 ${currentSlide === 0 ? 'opacity-100' : 'opacity-0 absolute'}`}>
                <AnimatedSection direction="down" delay={200}>
                  <h1 className="text-3xl md:text-4xl mb-6 uppercase tracking-wide font-bold">{slides[0].title}</h1>
                </AnimatedSection>
                <AnimatedSection direction="up" delay={400}>
                  <p className="text-base md:text-lg mb-8 uppercase font-semibold">{slides[0].description}</p>
                </AnimatedSection>
                <AnimatedSection direction="up" delay={600}>
                  <Link to="/contact" className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#1e4a66] py-3 px-10 transition uppercase tracking-wide font-semibold">
                    Contact Us
                  </Link>
                </AnimatedSection>
              </div>
              <div className={`transition-opacity duration-1000 ${currentSlide === 1 ? 'opacity-100' : 'opacity-0 absolute'}`}>
                <AnimatedSection direction="down" delay={200}>
                  <h1 className="text-3xl md:text-4xl mb-6 uppercase tracking-wide font-bold">{slides[1].title}</h1>
                </AnimatedSection>
                <AnimatedSection direction="up" delay={400}>
                  <p className="text-base md:text-lg mb-8 uppercase font-semibold">{slides[1].description}</p>
                </AnimatedSection>
                <AnimatedSection direction="up" delay={600}>
                  <Link to="/contact" className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#1e4a66] py-3 px-10 transition uppercase tracking-wide font-semibold">
                    Contact Us
                  </Link>
                </AnimatedSection>
              </div>
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 text-white hover:text-[#00bcd4] transition"
          >
            <ChevronLeft className="h-16 w-16" strokeWidth={1} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 text-white hover:text-[#00bcd4] transition"
          >
            <ChevronRight className="h-16 w-16" strokeWidth={1} />
          </button>
        </div>
      </section>

      <section className="relative -mt-16 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-0">
            <AnimatedSection direction="left" delay={100} className="bg-[#00bcd4] p-4 md:p-8 flex flex-col md:flex-row items-center justify-center">
              <div className="bg-white p-2 md:p-4 mb-2 md:mb-0 md:mr-6">
                <Users className="h-6 w-6 md:h-10 md:w-10 text-[#00bcd4]" />
              </div>
              <div className="text-white text-center md:text-left">
                <div className="text-xs md:text-sm mb-1">Satisfied Clients</div>
                <CountUpNumber end={923} className="text-xl md:text-4xl" duration={2000} />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={200} className="bg-white p-4 md:p-8 flex flex-col md:flex-row items-center justify-center border-l border-r border-gray-200">
              <div className="bg-[#00bcd4] p-2 md:p-4 mb-2 md:mb-0 md:mr-6">
                <CheckCircle className="h-6 w-6 md:h-10 md:w-10 text-white" />
              </div>
              <div className="text-gray-800 text-center md:text-left">
                <div className="text-xs md:text-sm mb-1 text-[#00bcd4]">Storage Facilities Globally</div>
                <CountUpNumber end={76} className="text-xl md:text-4xl text-[#1e4a66]" duration={2000} />
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={300} className="bg-[#00bcd4] p-4 md:p-8 flex flex-col md:flex-row items-center justify-center">
              <div className="bg-white p-2 md:p-4 mb-2 md:mb-0 md:mr-6">
                <Award className="h-6 w-6 md:h-10 md:w-10 text-[#00bcd4]" />
              </div>
              <div className="text-white text-center md:text-left">
                <div className="text-xs md:text-sm mb-1">CERTIFIED</div>
                <CountUpNumber end={83} className="text-xl md:text-4xl" duration={2000} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-start">
            <AnimatedSection direction="left" className="md:col-span-1">
              <h3 className="text-[#00bcd4] text-xs md:text-sm mb-2 uppercase tracking-wide font-bold">WHO WE ARE</h3>
              <AnimatedLine className="bg-[#00bcd4]" animated={true} />
              <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
                <p>
                  BoVer Shipping B.V., a prominent player in the tank storage and shipping logistics industry, operates numerous tank terminals globally for the storage of oils, chemicals, and gases. With a presence in major ports such as Houston and Rotterdam, BoVer Shipping B.V offers a wide range of facilities at its quays and jetties. By choosing BoVer Shipping B.V.'s tank farm, customers can avoid additional expenses associated with storing goods onboard vessels due to the availability of land-based storage facilities. This eliminates the need for vessels to move from one quay to another, saving time and reducing costs. BoVer Shipping B.V. is a registered petroleum storage company based in the United States with international operations, including the ownership and operation of tank farms and oil terminals in various ports. Our extensive network of connections for barges, ships, trains, and trucks allows us to provide flexible operating hours and fast loading and unloading times. Our facilities are equipped with on-site customs agents, document processing services, and laboratories to ensure a quick and hassle-free loading, unloading, and storage process for our customers.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" className="md:col-span-1 order-first md:order-last">
              <img
                src="/NT11.jpg"
                alt="Storage facility at night"
                className="w-full shadow-xl hidden md:block"
              />
            </AnimatedSection>
          </div>
          <AnimatedSection direction="up" className="mt-8 md:hidden">
            <img
              src="/NT11.jpg"
              alt="Storage facility at night"
              className="w-full shadow-xl"
            />
          </AnimatedSection>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection direction="up" className="text-center mb-16">
            <h3 className="text-[#00bcd4] text-sm mb-2 uppercase tracking-wide font-bold">OUR SERVICES</h3>
            <h2 className="text-3xl md:text-4xl text-[#1e4a66] mb-4 font-bold">Why BoVer Shipping B.V.</h2>
            <h2 className="text-3xl md:text-4xl text-[#1e4a66] font-bold">Services</h2>
            <div className="flex justify-center mt-4">
              <AnimatedLine className="bg-[#00bcd4]" animated={true} />
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection direction="left" delay={100} className="bg-[#e8f4f8] p-8 text-center">
              <h3 className="text-lg text-[#1e4a66] mb-4 font-bold">We are leading in Petroleum Storage</h3>
              <p className="text-gray-600 leading-relaxed">
                BoVer Shipping B.V., a global leader in tank storage logistics, is actively involved in operating tank terminals for oils, chemicals, and gases, making it one of the largest independent operators in the industry.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="up" delay={200} className="bg-white p-8 text-center shadow-md">
              <h3 className="text-lg text-[#1e4a66] mb-4 font-bold">We are Dedicated To Servecs</h3>
              <p className="text-gray-600 leading-relaxed">
                We encourage an entrepreneurial mindset through a decentralized management approach and a can-do attitude, enabling individuals to take the necessary decisions. Our focus is on valuing our employees by supporting their skill development and providing continuous training to achieve optimal outcomes.
              </p>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={300} className="bg-[#e8f4f8] p-8 text-center">
              <h3 className="text-lg text-[#1e4a66] mb-4 font-bold">operational excellence</h3>
              <p className="text-gray-600 leading-relaxed">
                By engaging in collaboration and exchanging ideas with both internal and external stakeholders, we constantly strive to enhance our assets and workflows, thereby adding value to all parties involved.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
