import { AnimatedSection } from '../components/AnimatedSection';
import { AnimatedLine } from '../components/AnimatedLine';

export function TankStorage() {
  return (
    <>
      <section className="relative h-[400px] bg-gradient-to-r from-[#1e4a66] to-[#2a5a76] overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/fleet-header.jpg')] bg-cover bg-center opacity-30 transition-transform duration-700 group-hover:scale-110"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl mb-4 animate-fade-in-down">Tank Storage</h1>
          <div className="flex items-center gap-2 text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a href="/" className="hover:text-[#00bcd4] transition">Home</a>
            <span className="text-[#00bcd4]">○</span>
            <span>Tank Storage</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <AnimatedSection direction="left">
              <h3 className="text-[#00bcd4] text-sm mb-4 uppercase tracking-wide font-bold">ABOUT US</h3>
              <h2 className="text-3xl text-[#1e4a66] font-bold">A reliable company, always innovating</h2>
              <div className="mt-4 mb-8">
                <AnimatedLine className="bg-[#00bcd4]" animated={true} />
              </div>
              <div className="text-gray-600 leading-relaxed space-y-6">
                <p>
                  We recognize the essential part we play in promoting a sustainable future through the energy transition, and we actively embrace this responsibility at BoVer Shipping B.V.. Our dedication to innovation and the expertise of our team allows us to effectively meet the evolving needs in transportation, processing, and storage of renewable energy products. We prioritize our customers and commit ourselves to their success, ensuring a customer-centric approach in all that we do.
                </p>
                <p>
                  To ensure our European leadership in terms of dependable and environmentally-friendly offerings in storage, processing, logistics, and energy transition, our mission should align with our vision.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection direction="right" delay={200}>
              <img
                src="/about111 copy.jpg"
                alt="Tank storage facility at sunset"
                className="w-full shadow-xl"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="px-4 sm:px-6 lg:px-20">
          <div className="max-w-6xl">
            <AnimatedSection direction="up" className="mb-16">
              <h2 className="text-2xl text-[#1e4a66] mb-8 font-bold">Materials used in tank storage</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  The construction materials used for tanks also include steel, concrete with plastic, fiberglass-reinforced plastic, nylon, and polyethylene. Steel tanks are commonly used for storing oil in vertical cylindrical shapes. DIN standards define the suitable construction type and materials for storing these products, while state building regulations and fire protection regulations must also be considered when building a tank terminal. To "rephrase" this information: Different materials can be used to make tanks, including steel, concrete with plastic, fiberglass-reinforced plastic, nylon, and polyethylene. Vertical cylindrical steel tanks are typically used to store oil. When constructing a tank terminal, the appropriate construction type and materials are determined by DIN standards, and compliance with state building regulations and fire protection regulations is also necessary.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={100} className="mb-16">
              <h2 className="text-2xl text-[#1e4a66] mb-8 font-bold">Tank storage design and equipment</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  In addition to their material and shape, tanks also differ in their design and equipment. Fixed-roof tanks, with or without an internal floating roof, external floating-roof tanks, cup tanks, and cryogenic tanks are the most common tank types. The choice of construction is influenced by the properties of the substances that will be stored in them. Cryogenic tanks, for instance, are utilized for materials that need to be stored as a liquid at extremely low temperatures, as they would be in a gaseous state at normal temperatures.
                </p>
                <p>
                  The emission values of a particular type of tank are influenced by the type of paint applied to it. The objective in tank storage is to minimize emissions whenever feasible. Additionally, crude oil tanks commonly have mechanisms such as stirrers or mixer jets at the lower portion of the tank shell, which facilitate the blending and uniformity of the oil.
                </p>
                <p>
                  For further details about API 650, which is the design code used for aboveground atmospheric storage tanks, please refer to the glossary article.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="right" delay={200} className="mb-16">
              <h2 className="text-2xl text-[#1e4a66] mb-8 font-bold">Access types in tank storage</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Tank terminals, being hubs for the transfer of raw materials and products, offer numerous possibilities for loading, unloading, and further transportation. The primary facilities found at these terminals include jetties, pipeline connections, rail cars, and tank truck platforms. Given that shipping via vessels or barges are typically the favored means of transportation for various goods, tank terminals are frequently situated near water routes.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left" delay={300} className="mb-16">
              <h2 className="text-2xl text-[#1e4a66] mb-8 font-bold">Security of supply</h2>
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  On top of functioning as transshipment hubs, tank terminals play a vital role in ensuring the supply of crude oil and petroleum products to countries without their own reserves. Since 1978, all companies involved in the production or importation of these products in Houston are obligated to be members of BoVer Shipping B.V. and contribute to its funding. Similarly, the European Union has implemented the "Council Directive 2009/119/EC of 14 September 2009," which requires Member States to maintain minimum stocks of crude oil and/or petroleum products.
                </p>
              </div>
            </AnimatedSection>
          </div>

          <AnimatedSection direction="up" delay={400}>
            <h2 className="text-2xl text-[#1e4a66] mb-8 font-bold">Health, safety, security & environment in the field of tank storage</h2>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="text-gray-600 leading-relaxed space-y-4">
                <p>
                  Health, safety, security, and environment play a crucial role in tank terminals, with fire prevention being of utmost importance. The flammability and explosiveness of stored products make it necessary for tanks to be equipped with water or foam connections. To ensure safety in tank storage, steps are taken to prevent soil or drinking water contamination in the event of tank damage. This is achieved through the use of cup tanks or liquid-tight containment chambers. The volume of these chambers is designed to hold the entire tank contents plus an additional 10% capacity. Moreover, stored products are accurately classified and grouped into dangerous goods classes to enable quick and efficient action in emergencies. When planning the spatial arrangement of tanks, efforts are made to minimize pipeline distances to associated loading facilities.
                </p>
              </div>
              <div className="text-gray-600 leading-relaxed">
                <p>
                  BoVer Shipping B.V. offers a range of logistical solutions for the storage and management of various products including petroleum, chemicals, gases, and more.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
