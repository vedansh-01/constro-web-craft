
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="max-w-xl mx-auto p-6 text-center animate-fade-in">
      <h1 className="text-4xl font-extrabold text-orange-600 mb-4">Welcome to Shreenath Enterprises</h1>
      <p className="text-lg text-gray-700 mb-6">
        We are leading suppliers of quality construction materials.<br />
        Place your order quickly by calling us.
      </p>
      <a href="tel:+919828544454" className="inline-block bg-orange-600 text-white py-3 px-8 rounded font-medium uppercase shadow hover:bg-orange-700 transition mb-6">
        Call: +91 9828544454
      </a>
      <div className="mt-6 space-x-4">
        <Link to="/products" className="text-orange-700 hover:underline">
          See Products
        </Link>
        <Link to="/order" className="text-orange-700 hover:underline">
          Place Order
        </Link>
      </div>
    </div>
  );
}
