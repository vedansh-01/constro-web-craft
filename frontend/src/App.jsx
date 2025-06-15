
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Order from "./pages/Order";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
        <header className="bg-orange-600 text-white px-4 py-5 shadow">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="text-2xl font-bold tracking-tight">Shreenath Enterprises</div>
            <nav className="space-x-6 mt-2 md:mt-0">
              <Link to="/" className="hover:underline">Home</Link>
              <Link to="/products" className="hover:underline">Products</Link>
              <Link to="/order" className="hover:underline">Order</Link>
            </nav>
          </div>
        </header>
        <main className="flex-grow flex items-center justify-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/order" element={<Order />} />
            <Route path="*" element={
              <div className="text-center p-8">
                <h1 className="text-2xl mb-4">404 - Page not found</h1>
                <Link to="/" className="text-orange-600 underline">Back to Home</Link>
              </div>
            }/>
          </Routes>
        </main>
        <footer className="bg-gray-200 text-gray-800 text-center py-4 mt-8">
          &copy; {new Date().getFullYear()} Shreenath Enterprises
        </footer>
      </div>
    </Router>
  );
}

export default App;
