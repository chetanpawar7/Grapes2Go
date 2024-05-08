export default function Services() {
  return (
    <div className="flex flex-col items-center bg-base-300">
      <h1 className="mt-3 text-5xl font-bold text-center">Services</h1>
      <p className="py-6 text-center">
        We provide the best quality of services to connecting grapes
        manufacturers to dealers with verified lab reports.
      </p>
      <div className="container mx-auto px-4 py-8 ">
        <div className="flex flex-wrap justify-center gap-5 ">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg p-6 shadow-lg text-white">
            <h2 className="text-xl font-semibold mb-2">Farmer</h2>
            <p className="text-gray-200">Seller & Manufacturer grapes</p>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg p-6 shadow-lg text-white">
            <h2 className="text-xl font-semibold mb-2">Merchant</h2>
            <p className="text-gray-200">Buy Products from Farmer</p>
          </div>

          <div className="bg-gradient-to-r from-green-500 to-lime-500 rounded-lg p-6 shadow-lg text-white">
            <h2 className="text-xl font-semibold mb-2">Lab</h2>
            <p className="text-gray-200">Checking quality of grapes</p>
          </div>

          <div className="bg-gradient-to-r from-yellow-500 to-amber-500 rounded-lg p-6 shadow-lg text-white">
            <h2 className="text-xl font-semibold mb-2">Shop</h2>
            <p className="text-gray-200">Buy Pesticides and Seeds</p>
          </div>
        </div>
      </div>
    </div>
  );
}
