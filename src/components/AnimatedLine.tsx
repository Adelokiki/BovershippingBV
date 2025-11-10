import { useEffect, useRef, useState } from 'react';

interface AnimatedLineProps {
  className?: string;
  animated?: boolean;
}

export function AnimatedLine({ className = '', animated = false }: AnimatedLineProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  if (animated) {
    return (
      <div ref={ref} className="relative h-1 w-32 bg-gray-200 overflow-hidden">
        <div
          className={`absolute h-full w-full ${className} ${
            isVisible ? 'animate-slide' : ''
          }`}
        ></div>
      </div>
    );
  }

  return (
    <div
      ref={ref}
      className={`h-1 transition-all duration-1000 ease-out ${className}`}
      style={{
        width: isVisible ? undefined : '0',
      }}
    ></div>
  );
}
