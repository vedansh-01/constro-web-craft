
import React, { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then(setProducts)
      .catch(() => setProducts([
        { id: 1, name: 'M-Sand', price_per_ton: 900, unit: 'ton' },
        { id: 2, name: 'Silica', price_per_ton: 1250, unit: 'ton' },
        { id: 3, name: 'Greet 20mm', price_per_ton: 750, unit: 'ton' }
      ]));
  }, []);

  return (
    <div className="max-w-xl w-full mx-auto p-6 bg-white rounded shadow-md animate-fade-in">
      <h2 className="text-2xl font-bold text-orange-600 mb-4 text-center">Our Products</h2>
      <table className="w-full text-left border">
        <thead>
          <tr className="bg-orange-100">
            <th className="py-2 px-3 border">Product</th>
            <th className="py-2 px-3 border">Rate (per ton)</th>
          </tr>
        </thead>
        <tbody>
          {products.map(prod => (
            <tr key={prod.id} className="hover:bg-orange-50">
              <td className="py-2 px-3 border">{prod.name}</td>
              <td className="py-2 px-3 border font-semibold text-gray-700">₹ {prod.price_per_ton}/ton</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 text-center">
        <a href="tel:+919828544454" className="inline-block bg-orange-600 text-white py-2 px-6 rounded font-medium shadow hover:bg-orange-700 transition">
          Call to Order: +91 9828544454
        </a>
      </div>
    </div>
  );
}
