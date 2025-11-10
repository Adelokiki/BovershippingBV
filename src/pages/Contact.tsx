import { Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Contact() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <section className="relative h-[400px] bg-gradient-to-r from-[#1e4a66] to-[#2a5a76] overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/fleet-header.jpg')] bg-cover bg-center opacity-30 transition-transform duration-700 group-hover:scale-110"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl mb-4 animate-fade-in-down">Contact Us</h1>
          <div className="flex items-center gap-2 text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a href="/" className="hover:text-[#00bcd4] transition">Home</a>
            <span className="text-[#00bcd4]">○</span>
            <span>Contact</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-12 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <h3 className="text-[#00bcd4] font-bold text-sm mb-3">CONTACT US</h3>
            <h2 className="text-xl md:text-2xl text-gray-900 mb-4 font-bold">
              Please feel free to contact us if<br />
              you have any questions or<br />
              storage needs.
            </h2>
            <div className="w-20 h-1 bg-[#00bcd4] mx-auto animate-expand"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className={`flex gap-4 transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`} style={{ transitionDelay: '0.2s' }}>
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#00bcd4] rounded flex items-center justify-center animate-bounce-subtle hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">Address</h4>
                  <a
                    href="https://maps.google.com/?q=V.+Heemstraweg+81a+6641+AB+Beuningen,+Netherlands"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00bcd4] hover:underline text-base transition-all duration-300 hover:translate-x-1 inline-block"
                  >
                    V. Heemstraweg 81a 6641 AB Beuningen,<br />
                    Netherlands
                  </a>
                </div>
              </div>

              <div className={`flex gap-4 transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`} style={{ transitionDelay: '0.4s' }}>
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#00bcd4] rounded flex items-center justify-center animate-bounce-subtle hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.2s' }}>
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">Email</h4>
                  <div className="space-y-1">
                    <a href="mailto:info@bovershipbv.nl" className="text-[#00bcd4] hover:underline text-base block transition-all duration-300 hover:translate-x-1">
                      info@bovershipbv.nl
                    </a>
                    <a href="mailto:logistics@bovershipbv.nl" className="text-[#00bcd4] hover:underline text-base block transition-all duration-300 hover:translate-x-1">
                      logistics@bovershipbv.nl
                    </a>
                    <a href="mailto:terminal@bovershipbv.nl" className="text-[#00bcd4] hover:underline text-base block transition-all duration-300 hover:translate-x-1">
                      terminal@bovershipbv.nl
                    </a>
                  </div>
                </div>
              </div>

              <div className={`flex gap-4 transition-all duration-700 transform ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`} style={{ transitionDelay: '0.6s' }}>
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#00bcd4] rounded flex items-center justify-center animate-bounce-subtle hover:scale-110 transition-transform duration-300" style={{ animationDelay: '0.4s' }}>
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2 text-sm">Telephone</h4>
                  <div className="space-y-1">
                    <a href="tel:+12294172619" className="text-[#00bcd4] hover:underline text-base block transition-all duration-300 hover:translate-x-1">
                      +1 229 417 2619
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className={`relative h-[400px] rounded-lg overflow-hidden shadow-lg transition-all duration-700 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            } hover:shadow-2xl hover:scale-105`} style={{ transitionDelay: '0.8s' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2469.123!2d5.7567!3d51.8567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDUxJzI0LjEiTiA1wrA0NScyNC4xIkU!5e0!3m2!1sen!2snl!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              ></iframe>
              <a
                href="https://maps.google.com/?q=V.+Heemstraweg+81a+6641+AB+Beuningen,+Netherlands"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 left-4 bg-white px-4 py-2 rounded shadow-md text-sm text-gray-700 hover:bg-[#00bcd4] hover:text-white transition-all duration-300 hover:scale-105"
              >
                View larger map
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
