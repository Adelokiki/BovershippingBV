import { useEffect, useRef, useState } from 'react';

interface ParallaxImageProps {
  src: string;
  alt: string;
}

export function ParallaxImage({ src, alt }: ParallaxImageProps) {
  const imageRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const scrollPercent = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
        const moveAmount = scrollPercent * 30 - 15;
        setOffset(moveAmount);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isModalOpen]);

  return (
    <>
      <div ref={imageRef} className="relative">
        <div
          className="rounded-lg overflow-hidden w-full max-w-lg mx-auto shadow-2xl border-4 border-white cursor-pointer transform hover:scale-105 hover:shadow-[0_0_40px_rgba(0,188,212,0.6)] transition-all duration-500"
          onClick={() => setIsModalOpen(true)}
        >
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-all duration-300 ease-out hover:brightness-110"
            style={{ transform: `scale(1.2) translateY(${offset}px)` }}
          />
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4 animate-scale-in">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-[#00bcd4] transition-colors text-4xl font-bold"
            >
              ×
            </button>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src={src}
                alt={alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
