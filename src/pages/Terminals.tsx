import { Link } from 'react-router-dom';

export function Terminals() {
  const terminals = [
    // Canada
    { region: 'Canada', location: 'Ridley Island Propane Export Terminal (RIPET)', share: '30.0%', capacity: '96,000', p: '–', c: '–', g: 'G', v: '–', link: true },
    { region: 'Canada', location: 'BoVer Shipping B.V. of Canada - Hamilton', share: '100.0%', capacity: '162,930', p: 'P', c: 'C', g: '–', v: 'V', link: false },
    { region: 'Canada', location: 'BoVer Shipping B.V. of Canada - Montreal East', share: '100.0%', capacity: '419,064', p: 'P', c: 'C', g: '–', v: 'V', link: false },
    { region: 'Canada', location: 'BoVer Shipping B.V. of Canada - Montreal West', share: '100.0%', capacity: '37,297', p: 'P', c: '–', g: '–', v: '–', link: false },
    { region: 'Canada', location: 'BoVer Shipping B.V. of Canada - Quebec City', share: '100.0%', capacity: '163,342', p: 'P', c: 'C', g: '–', v: 'V', link: false },

    // USA
    { region: 'USA', location: 'BoVer Shipping B.V. Freeport - Texas', share: '50.0%', capacity: '101,009', p: '–', c: 'C', g: '–', v: '–', link: false },
    { region: 'USA', location: 'BoVer Shipping B.V. Moda Houston', share: '50.0%', capacity: '2,275', p: '–', c: '–', g: 'G', v: '–', link: false },
    { region: 'USA', location: 'BoVer Shipping B.V. Plaquemine - Louisiana', share: '50.0%', capacity: '300,120', p: 'P', c: 'C', g: '–', v: '–', link: false },
    { region: 'USA', location: 'BoVer Shipping B.V. St. Charles - Louisiana', share: '50.0%', capacity: '336,063', p: '–', c: 'C', g: '–', v: '–', link: false },
    { region: 'USA', location: 'BoVer Shipping B.V. Terminal Deer Park (Houston)', share: '100.0%', capacity: '1,251,033', p: 'P', c: 'C', g: '–', v: '–', link: true },
    { region: 'USA', location: 'BoVer Shipping B.V. Terminal Long Beach', share: '100.0%', capacity: '54,988', p: 'P', c: 'C', g: '–', v: 'V', link: false },
    { region: 'USA', location: 'BoVer Shipping B.V. Terminal Los Angeles', share: '100.0%', capacity: '379,789', p: 'P', c: 'C', g: '–', v: 'V', link: false },
    { region: 'USA', location: 'BoVer Shipping B.V. Terminal Savannah', share: '100.0%', capacity: '250,566', p: 'P', c: 'C', g: '–', v: 'V', link: false },

    // Brazil
    { region: 'Brazil', location: 'União/BoVer Shipping B.V. Armazéns Gerais', share: '50.0%', capacity: '56,198', p: '–', c: 'C', g: '–', v: 'V', link: true },
    { region: 'Brazil', location: 'BoVer Shipping B.V. Brazil - Alemoa Terminal', share: '100.0%', capacity: '276,820', p: 'P', c: 'C', g: '–', v: 'V', link: false },
    { region: 'Brazil', location: 'BoVer Shipping B.V. Brazil - Aratu Terminal', share: '100.0%', capacity: '108,130', p: 'P', c: 'C', g: '–', v: 'V', link: false },

    // Colombia
    { region: 'Colombia', location: 'SPEC LNG', share: '49.0%', capacity: '170,000', p: '–', c: '–', g: 'G', v: '–', link: true },
    { region: 'Colombia', location: 'BoVer Shipping B.V. Colombia - Barranquilla Terminal', share: '100.0%', capacity: '48,298', p: 'P', c: 'C', g: '–', v: 'V', link: false },
    { region: 'Colombia', location: 'BoVer Shipping B.V. Colombia - Cartagena Terminal', share: '100.0%', capacity: '27,044', p: 'P', c: 'C', g: '–', v: 'V', link: false },

    // Mexico
    { region: 'Mexico', location: 'LNG Terminal Altamira', share: '60.0%', capacity: '300,000', p: '–', c: '–', g: 'G', v: '–', link: true },
    { region: 'Mexico', location: 'Dos Bocas Terminal', share: '100.0%', capacity: '450,000', p: 'P', c: 'C', g: '–', v: 'V', link: true },
    { region: 'Mexico', location: 'BoVer Shipping B.V. Mexico - Altamira Terminal', share: '100.0%', capacity: '110,150', p: '–', c: 'C', g: 'G', v: 'V', link: false },
    { region: 'Mexico', location: 'BoVer Shipping B.V. Mexico - Coatzacoalcos Terminal', share: '100.0%', capacity: '25,900', p: '–', c: 'C', g: 'G', v: 'V', link: false },
    { region: 'Mexico', location: 'BoVer Shipping B.V. Mexico - Veracruz Terminal', share: '100.0%', capacity: '213,100', p: 'P', c: 'C', g: '–', v: 'V', link: false },

    // Venezuela
    { region: 'Venezuela', location: 'BoVer Shipping B.V. Venezuela - Puerto Cabello Terminal', share: '100.0%', capacity: '130,222', p: '–', c: 'C', g: '–', v: 'V', link: false },

    // Panama
    { region: 'Panama', location: 'Terminal Bahia Las Minas', share: '0.0%', capacity: '519,543', p: 'P', c: '–', g: '–', v: '–', link: true },
    { region: 'Panama', location: 'BoVer Shipping B.V. Panama', share: '100.0%', capacity: '375,341', p: 'P', c: '–', g: '–', v: '–', link: false },

    // India
    { region: 'India', location: 'BoVer Shipping B.V. Terminal Kandla', share: '100.0%', capacity: '222,422', p: '–', c: 'C', g: '–', v: 'V', link: false },

    // Indonesia
    { region: 'Indonesia', location: 'BoVer Shipping B.V. Terminal Jakarta', share: '49.0%', capacity: '351,425', p: 'P', c: '–', g: '–', v: '–', link: false },
    { region: 'Indonesia', location: 'BoVer Shipping B.V. Terminal Merak', share: '95.0%', capacity: '130,400', p: '–', c: 'C', g: 'G', v: '–', link: false },

    // Australia
    { region: 'Australia', location: 'BoVer Shipping B.V. Terminal Darwin', share: '100.0%', capacity: '173,583', p: 'P', c: 'C', g: '–', v: 'V', link: false },
    { region: 'Australia', location: 'BoVer Shipping B.V. Terminal Sydney - Site B', share: '100.0%', capacity: '371,650', p: 'P', c: '–', g: '–', v: '–', link: false },

    // Malaysia
    { region: 'Malaysia', location: 'Kertih Terminals', share: '20.9%', capacity: '395,896', p: '–', c: 'C', g: 'G', v: '–', link: true },
    { region: 'Malaysia', location: 'Pengerang Independent Terminals', share: '44.1%', capacity: '1,763,064', p: 'P', c: 'C', g: '–', v: '–', link: true },
    { region: 'Malaysia', location: 'PT2SB', share: '26.5%', capacity: '1,496,472', p: 'P', c: 'C', g: 'G', v: '–', link: true },

    // Singapore
    { region: 'Singapore', location: 'Jurong Port', share: '100.0%', capacity: '145,216', p: 'P', c: 'C', g: 'G', v: '–', link: true },
    { region: 'Singapore', location: 'BoVer Shipping B.V. Singapore - Banyan Terminal', share: '69.5%', capacity: '1,449,019', p: 'P', c: 'C', g: 'G', v: '–', link: false },
    { region: 'Singapore', location: 'BoVer Shipping B.V. Singapore - Penjuru Terminal', share: '69.5%', capacity: '283,850', p: '–', c: 'C', g: '–', v: '–', link: false },
    { region: 'Singapore', location: 'BoVer Shipping B.V. Singapore - Sakra Terminal', share: '69.5%', capacity: '288,070', p: '–', c: 'C', g: '–', v: '–', link: false },
    { region: 'Singapore', location: 'BoVer Shipping B.V. Singapore - Sebarok Terminal', share: '69.5%', capacity: '1,331,332', p: 'P', c: '–', g: '–', v: '–', link: false },
    { region: 'Singapore', location: 'BoVer Shipping B.V. Singapore JTC - Jurong Rock Caverns', share: '0.0%', capacity: '1,470,000', p: 'P', c: '–', g: '–', v: '–', link: false },

    // Thailand
    { region: 'Thailand', location: 'Thai Tank Terminal', share: '49.0%', capacity: '722,800', p: 'P', c: 'C', g: 'G', v: 'V', link: true },

    // Kingdom of Saudi Arabia
    { region: 'Kingdom of Saudi Arabia', location: 'Chemtank', share: '25.0%', capacity: '568,000', p: 'P', c: 'C', g: 'G', v: '–', link: true },
    { region: 'Kingdom of Saudi Arabia', location: 'ASP (Al Jubail)', share: '10.0%', capacity: '1,457,987', p: '–', c: 'C', g: 'G', v: '–', link: true },
    { region: 'Kingdom of Saudi Arabia', location: 'ASP (Yanbu)', share: '10.0%', capacity: '331,838', p: '–', c: 'C', g: '–', v: '–', link: true },

    // Pakistan
    { region: 'Pakistan', location: 'Engro Elengy Terminal Pakistan (LNG)', share: '44.0%', capacity: '151,000', p: '–', c: '–', g: 'G', v: '–', link: true },
    { region: 'Pakistan', location: 'Engro BoVer Shipping B.V. Terminal', share: '50.0%', capacity: '82,400', p: '–', c: 'C', g: 'G', v: '–', link: false },

    // United Arab Emirates
    { region: 'United Arab Emirates', location: 'BoVer Shipping B.V. Horizon Fujairah', share: '33.3%', capacity: '2,615,732', p: 'P', c: '–', g: '–', v: '–', link: true },

    // Korea
    { region: 'Korea', location: 'BoVer Shipping B.V. Terminal Korea', share: '51.0%', capacity: '278,600', p: 'P', c: 'C', g: 'G', v: '–', link: false },

    // China
    { region: 'China', location: 'BoVer Shipping B.V. Shanghai - Caojing Terminal', share: '50.0%', capacity: '466,686', p: 'P', c: 'C', g: 'G', v: '–', link: false },
    { region: 'China', location: 'BoVer Shipping B.V. Terminal Haiteng', share: '30.0%', capacity: '896,000', p: '–', c: 'C', g: 'G', v: 'V', link: false },
    { region: 'China', location: 'BoVer Shipping B.V. Terminal Ningbo', share: '85.0%', capacity: '70,550', p: '–', c: 'C', g: '–', v: '–', link: true },
    { region: 'China', location: 'BoVer Shipping B.V. Terminal Qingdao', share: '100.0%', capacity: '290,200', p: 'P', c: 'C', g: 'G', v: '–', link: true },
    { region: 'China', location: 'BoVer Shipping B.V. Terminal Qinzhou', share: '51.0%', capacity: '290,200', p: '–', c: 'C', g: '–', v: '–', link: false },
    { region: 'China', location: 'BoVer Shipping B.V. Terminal Shandong Lanshan', share: '41.7%', capacity: '183,800', p: 'P', c: 'C', g: 'G', v: '–', link: false },
    { region: 'China', location: 'BoVer Shipping B.V. Terminal Tianjin Lingang', share: '50.0%', capacity: '375,300', p: '–', c: 'C', g: 'G', v: '–', link: false },
    { region: 'China', location: 'BoVer Shipping B.V. Terminal Zhangjiagang', share: '100.0%', capacity: '492,920', p: '–', c: 'C', g: '–', v: 'V', link: false },

    // Vietnam
    { region: 'Vietnam', location: 'BoVer Shipping B.V. Vietnam', share: '100.0%', capacity: '68,200', p: '–', c: 'C', g: '–', v: '–', link: false },

    // Belgium
    { region: 'Belgium', location: 'BoVer Shipping B.V. Terminal ACS (Antwerp)', share: '100.0%', capacity: '202,690', p: '–', c: 'C', g: '–', v: '–', link: false },
    { region: 'Belgium', location: 'BoVer Shipping B.V. Terminal Eurotank (Antwerp)', share: '100.0%', capacity: '362,050', p: 'P', c: 'C', g: '–', v: '–', link: false },
    { region: 'Belgium', location: 'BoVer Shipping B.V. Terminal Linkeroever (Antwerp)', share: '100.0%', capacity: '147,500', p: '–', c: 'C', g: '–', v: '–', link: false },

    // Spain
    { region: 'Spain', location: 'BoVer Shipping B.V. Terminal Terquimsa Barcelona', share: '50.0%', capacity: '212,998', p: 'P', c: 'C', g: '–', v: 'V', link: false },
    { region: 'Spain', location: 'BoVer Shipping B.V. Terminal Terquimsa Tarragona', share: '50.0%', capacity: '447,373', p: 'P', c: 'C', g: 'G', v: 'V', link: false },

    // The Netherlands
    { region: 'The Netherlands', location: 'Port of Rotterdam', share: '100.0%', capacity: '385,381', p: 'P', c: 'C', g: 'G', v: '–', link: true },
    { region: 'The Netherlands', location: 'Gate terminal (LNG Rotterdam)', share: '50.0%', capacity: '540,000', p: '–', c: '–', g: 'G', v: '–', link: true },
    { region: 'The Netherlands', location: 'Maasvlakte Olie Terminal (Rotterdam)', share: '16.7%', capacity: '1,090,878', p: 'P', c: '–', g: '–', v: '–', link: true },
    { region: 'The Netherlands', location: 'BoVer Shipping B.V. Terminal Botlek (Rotterdam)', share: '100.0%', capacity: '884,844', p: 'P', c: 'C', g: '–', v: '–', link: false },
    { region: 'The Netherlands', location: 'BoVer Shipping B.V. Terminal Chemiehaven (Rotterdam)', share: '100.0%', capacity: '222,311', p: 'P', c: 'C', g: '–', v: '–', link: false },
    { region: 'The Netherlands', location: 'BoVer Shipping B.V. Terminal Eemshaven', share: '10.0%', capacity: '681,115', p: 'P', c: '–', g: '–', v: '–', link: false },
    { region: 'The Netherlands', location: 'BoVer Shipping B.V. Terminal Europoort (Rotterdam)', share: '100.0%', capacity: '3,988,144', p: 'P', c: '–', g: '–', v: '–', link: false },
    { region: 'The Netherlands', location: 'BoVer Shipping B.V. Terminal Laurenshaven (Rotterdam)', share: '100.0%', capacity: '923,818', p: 'P', c: '–', g: '–', v: '–', link: false },
    { region: 'The Netherlands', location: 'BoVer Shipping B.V. Terminal TTR (Rotterdam)', share: '100.0%', capacity: '326,066', p: 'P', c: 'C', g: '–', v: '–', link: false },
    { region: 'The Netherlands', location: 'BoVer Shipping B.V. Terminal Vlaardingen', share: '100.0%', capacity: '564,322', p: '–', c: '–', g: '–', v: 'V', link: false },
    { region: 'The Netherlands', location: 'BoVer Shipping B.V. Terminal Vlissingen', share: '100.0%', capacity: '178,100', p: '–', c: '–', g: 'G', v: '–', link: false },
  ];

  const regionSummaries = [
    { name: 'Americas', terminals: 26, capacity: '5,915,222', p: 16, c: 19, g: 6, v: 15 },
    { name: 'Asia and Middle East', terminals: 20, capacity: '15,656,940', p: 11, c: 14, g: 9, v: 3 },
    { name: 'China and North Asia', terminals: 9, capacity: '3,122,256', p: 3, c: 9, g: 5, v: 2 },
    { name: 'Europe', terminals: 17, capacity: '11,248,444', p: 12, c: 9, g: 3, v: 3 },
  ];

  let currentRegion = '';

  return (
    <>
      <section className="relative h-[400px] bg-gradient-to-r from-[#1e4a66] to-[#2a5a76] overflow-hidden group">
        <div className="absolute inset-0 bg-[url('/fleet-header.jpg')] bg-cover bg-center opacity-30 transition-transform duration-700 group-hover:scale-110"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl mb-4 animate-fade-in-down">Terminals</h1>
          <div className="flex items-center gap-2 text-lg animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <a href="/" className="hover:text-[#1e4a66] transition">Home</a>
            <span className="text-[#1e4a66]">○</span>
            <span>Terminals</span>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-300">
                  <th className="text-left py-4 px-4 text-gray-700">Location</th>
                  <th className="text-left py-4 px-4 text-gray-700">Share</th>
                  <th className="text-left py-4 px-4 text-gray-700">Capacity (cbm)</th>
                  <th className="text-center py-4 px-4 text-gray-700">P</th>
                  <th className="text-center py-4 px-4 text-gray-700">C</th>
                  <th className="text-center py-4 px-4 text-gray-700">G</th>
                  <th className="text-center py-4 px-4 text-gray-700">V</th>
                </tr>
              </thead>
              <tbody>
                {terminals.map((terminal, index) => {
                  const isNewRegion = terminal.region !== currentRegion;
                  currentRegion = terminal.region;

                  return (
                    <>
                      {isNewRegion && (
                        <tr key={`region-${index}`} className="bg-gray-200">
                          <td colSpan={7} className="py-2 px-4 text-gray-700">{terminal.region}</td>
                        </tr>
                      )}
                      <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} hover:bg-gray-100 transition-colors`}>
                        <td className="py-2 px-4">
                          {terminal.link && terminal.location === 'BoVer Shipping B.V. Horizon Fujairah' ? (
                            <Link to="/terminals/fujairah" className="text-[#1e4a66] cursor-pointer hover:underline transition-all">
                              {terminal.location}
                            </Link>
                          ) : terminal.link && terminal.location === 'BoVer Shipping B.V. Terminal Deer Park (Houston)' ? (
                            <Link to="/terminals/houston" className="text-[#1e4a66] cursor-pointer hover:underline transition-all">
                              {terminal.location}
                            </Link>
                          ) : terminal.link && terminal.location === 'Pengerang Independent Terminals' ? (
                            <Link to="/terminals/pengerang" className="text-[#1e4a66] cursor-pointer hover:underline transition-all">
                              {terminal.location}
                            </Link>
                          ) : terminal.link && terminal.location === 'BoVer Shipping B.V. Terminal Ningbo' ? (
                            <Link to="/terminals/ningbo" className="text-[#1e4a66] cursor-pointer hover:underline transition-all">
                              {terminal.location}
                            </Link>
                          ) : terminal.link && terminal.location === 'BoVer Shipping B.V. Terminal Qingdao' ? (
                            <Link to="/terminals/qingdao" className="text-[#1e4a66] cursor-pointer hover:underline transition-all">
                              {terminal.location}
                            </Link>
                          ) : terminal.link && terminal.location === 'Port of Rotterdam' ? (
                            <Link to="/terminals/rotterdam" className="text-[#1e4a66] cursor-pointer hover:underline transition-all">
                              {terminal.location}
                            </Link>
                          ) : terminal.link && terminal.location === 'Jurong Port' ? (
                            <Link to="/terminals/jurong" className="text-[#1e4a66] cursor-pointer hover:underline transition-all">
                              {terminal.location}
                            </Link>
                          ) : terminal.link && terminal.location === 'Dos Bocas Terminal' ? (
                            <Link to="/terminals/dos-bocas" className="text-[#1e4a66] cursor-pointer hover:underline transition-all">
                              {terminal.location}
                            </Link>
                          ) : (
                            <span className="text-[#1e4a66] cursor-pointer hover:underline transition-all">{terminal.location}</span>
                          )}
                        </td>
                        <td className="py-2 px-4 text-gray-700">{terminal.share}</td>
                        <td className="py-2 px-4 text-gray-700">{terminal.capacity}</td>
                        <td className="py-2 px-4 text-center text-gray-700">{terminal.p}</td>
                        <td className="py-2 px-4 text-center text-gray-700">{terminal.c}</td>
                        <td className="py-2 px-4 text-center text-gray-700">{terminal.g}</td>
                        <td className="py-2 px-4 text-center text-gray-700">{terminal.v}</td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-8 space-y-4">
            {regionSummaries.map((summary, index) => (
              <div key={index} className="border-t border-gray-300 pt-2 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody>
                      <tr className="bg-gray-50 hover:bg-gray-100 transition-colors">
                        <td className="py-2 px-4 text-gray-700">Number of terminals: {summary.terminals}</td>
                        <td className="py-2 px-4 text-gray-700"></td>
                        <td className="py-2 px-4 text-gray-700">{summary.capacity}</td>
                        <td className="py-2 px-4 text-center text-gray-700">{summary.p}</td>
                        <td className="py-2 px-4 text-center text-gray-700">{summary.c}</td>
                        <td className="py-2 px-4 text-center text-gray-700">{summary.g}</td>
                        <td className="py-2 px-4 text-center text-gray-700">{summary.v}</td>
                      </tr>
                      <tr>
                        <td colSpan={7} className="py-1 px-4 text-gray-600 italic text-sm">{summary.name}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 border-t-2 border-gray-300 pt-4">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="text-left py-3 px-4 text-gray-700">Location</th>
                    <th className="text-left py-3 px-4 text-gray-700">Share</th>
                    <th className="text-left py-3 px-4 text-gray-700">Capacity (cbm)</th>
                    <th className="text-center py-3 px-4 text-gray-700">P</th>
                    <th className="text-center py-3 px-4 text-gray-700">C</th>
                    <th className="text-center py-3 px-4 text-gray-700">G</th>
                    <th className="text-center py-3 px-4 text-gray-700">V</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-gray-50 hover:bg-gray-100 transition-colors animate-slide-up">
                    <td className="py-3 px-4 text-gray-700">Number of terminals: 72</td>
                    <td className="py-3 px-4 text-gray-700">35,942,862</td>
                    <td className="py-3 px-4 text-gray-700"></td>
                    <td className="py-3 px-4 text-center text-gray-700">42</td>
                    <td className="py-3 px-4 text-center text-gray-700">51</td>
                    <td className="py-3 px-4 text-center text-gray-700">23</td>
                    <td className="py-3 px-4 text-center text-gray-700">23</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
