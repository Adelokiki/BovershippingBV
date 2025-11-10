import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { TankStorage } from './pages/TankStorage';
import { Terminals } from './pages/Terminals';
import { FujairahPort } from './pages/FujairahPort';
import { PortOfHouston } from './pages/PortOfHouston';
import { PengerangTerminal } from './pages/PengerangTerminal';
import { NingboZhoushanPort } from './pages/NingboZhoushanPort';
import { QingdaoTerminal } from './pages/QingdaoTerminal';
import { PortOfRotterdam } from './pages/PortOfRotterdam';
import { JurongPort } from './pages/JurongPort';
import { DosBocas } from './pages/DosBocas';
import { Shipping } from './pages/Shipping';
import { Contact } from './pages/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tank-storage" element={<TankStorage />} />
          <Route path="/terminals" element={<Terminals />} />
          <Route path="/terminals/fujairah" element={<FujairahPort />} />
          <Route path="/terminals/houston" element={<PortOfHouston />} />
          <Route path="/terminals/pengerang" element={<PengerangTerminal />} />
          <Route path="/terminals/ningbo" element={<NingboZhoushanPort />} />
          <Route path="/terminals/qingdao" element={<QingdaoTerminal />} />
          <Route path="/terminals/rotterdam" element={<PortOfRotterdam />} />
          <Route path="/terminals/jurong" element={<JurongPort />} />
          <Route path="/terminals/dos-bocas" element={<DosBocas />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
