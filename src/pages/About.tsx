import { AnimatedSection } from '../components/AnimatedSection';
import { AnimatedLine } from '../components/AnimatedLine';

export function About() {
  return (
    <>
      <section className="relative h-[400px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/bovers (9) copy.jpg')" }}
        >
          <div className="absolute inset-0 bg-[#1e4a66]/60"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-white z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <div className="flex items-center gap-3 text-sm">
            <a href="/" className="hover:text-[#00bcd4] transition-colors">Home</a>
            <span className="text-[#00bcd4]">○</span>
            <span className="text-gray-200">About BoVer Shipping B.V.</span>
          </div>
        </div>
      </section>

      <section className="py-0 bg-white">
        <div className="w-full">
          <img
            src="/image.png"
            alt="Tank storage facility"
            className="w-full h-auto"
          />
        </div>
      </section>
    </>
  );
}
