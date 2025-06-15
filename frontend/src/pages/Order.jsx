
export default function Order() {
  return (
    <div className="max-w-md mx-auto p-8 flex flex-col items-center bg-white rounded shadow animate-fade-in">
      <h2 className="text-2xl font-bold text-orange-600 mb-4">Place Your Order</h2>
      <p className="text-gray-700 mb-6 text-center">
        To order our products, simply give us a call.<br />
        <span className="font-semibold text-lg text-orange-800">+91 9828544454</span>
      </p>
      <a href="tel:+919828544454" className="bg-orange-600 text-white px-8 py-3 rounded shadow hover:bg-orange-700 font-medium transition mb-3">
        Call Now
      </a>
    </div>
  );
}
