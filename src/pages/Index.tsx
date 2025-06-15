
import React from "react";

const products = [
  {
    name: "M-Sand",
    availability: "available",
  },
  {
    name: "Silica",
    availability: "available",
  },
  {
    name: "Greet 20mm",
    availability: "available",
  },
  {
    name: "Banas Sand",
    availability: "available",
  }
];

const Index = () => (
  <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4 py-12">
    <header className="w-full max-w-2xl text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-2 text-orange-600">Shreenath Enterprises</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Leading Suppliers of Quality Construction Materials
      </p>
      <a
        href="tel:+919828544454"
        className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-orange-700 transition mb-5"
      >
        Call to Order: +91 9828544454
      </a>
    </header>
    <main className="w-full max-w-2xl">
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
        <ul className="space-y-6">
          {products.map((product) => (
            <li
              key={product.name}
              className="flex flex-col md:flex-row md:items-center md:justify-between bg-card shadow rounded-lg p-6"
            >
              <div>
                <span className="text-xl font-semibold text-primary">{product.name}</span>
              </div>
              <div className="mt-2 md:mt-0">
                <span className="text-lg font-medium text-gray-700 mr-2">
                  ₹{product.price} / {product.unit}
                </span>
                <a
                  href="tel:+919828544454"
                  className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded font-medium hover:bg-orange-200 transition"
                >
                  Order Now
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <footer className="text-center text-muted-foreground mt-8">
        &copy; {new Date().getFullYear()} Shreenath Enterprises &mdash; All Rights Reserved
      </footer>
    </main>
  </div>
);

export default Index;
