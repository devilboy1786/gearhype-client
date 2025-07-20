import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Menu, Home, Info, ShoppingBag } from 'lucide-react';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ProductsPage from './pages/Products';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <Router>
      <header className="bg-white shadow-md">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold">GearHype</h1>
          <button className="md:hidden" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-500">
              <Home size={18} /> Home
            </Link>
            <Link to="/about" className="flex items-center gap-1 hover:text-blue-500">
              <Info size={18} /> About
            </Link>
            <Link to="/products" className="flex items-center gap-1 hover:text-blue-500">
              <ShoppingBag size={18} /> Products
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden bg-gray-100 px-4 pb-4 space-y-2">
            <Link to="/" onClick={toggleMenu} className="block py-2 flex items-center gap-2">
              <Home size={18} /> Home
            </Link>
            <Link to="/about" onClick={toggleMenu} className="block py-2 flex items-center gap-2">
              <Info size={18} /> About
            </Link>
            <Link to="/products" onClick={toggleMenu} className="block py-2 flex items-center gap-2">
              <ShoppingBag size={18} /> Products
            </Link>
          </nav>
        )}
      </header>

      <main className="p-6 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
