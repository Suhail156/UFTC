import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './pages/Footer';

// Page Imports
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Projects from './pages/Projects';

function App() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      {/* Shared Navigation Component */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          {/* Catch-all for 404 pages */}
          <Route path="*" element={<div className="text-center py-20 text-2xl">404 - Page Not Found</div>} />
        </Routes>
      </main>

      {/* Shared Footer with Contact Info */}
      <Footer />
    </div>
  );
}

export default App;