function ProductSection() {
  return (
    <div className="flex flex-col md:flex-row gap-12">
      <div className="md:w-1/2">
        <div className="h-[500px] bg-gray-200 mb-4"></div>
        <div className="flex space-x-3">
          <div className="h-24 w-24 bg-gray-200"></div>
          <div className="h-24 w-24 bg-gray-200"></div>
          <div className="h-24 w-24 bg-gray-200"></div>
        </div>
      </div>
      <div className="md:w-1/2">
        <h1 className="text-xl font-semibold mb-2 text-black">Bewakoof® Men's Blue Legends Graphic Printed Oversized T-shirt</h1>
        <div className="flex items-center mb-4">
          <span className="text-lg font-bold mr-2 text-black">₹599</span>
          <span className="text-gray-500 line-through mr-2">₹1,999</span>
          <span className="text-red-500">64% OFF</span>
          <span className="ml-2 text-black">⭐ 4.5</span>
        </div>
        <div className="text-sm mb-4 text-black">BUY 2 FOR 999 OVERSIZED FIT 100% COTTON</div>
        <div className="mb-6">
          <div className="text-sm font-semibold mb-2 text-black">Select Size</div>
          <div className="flex space-x-2">
            <button className="h-12 w-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 text-black">S</button>
            <button className="h-12 w-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 text-black">M</button>
            <button className="h-12 w-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 text-black">L</button>
            <button className="h-12 w-12 border border-gray-300 rounded-full flex items-center justify-center hover:bg-gray-100 text-black">XL</button>
          </div>
          <div className="text-xs text-red-500 mt-1">5 left</div>
        </div>
        <div className="flex space-x-4 mb-6">
          <button className="h-12 w-48 bg-yellow-400 rounded-lg flex items-center justify-center font-semibold text-black hover:bg-yellow-500">ADD TO BAG</button>
          <button className="h-12 w-48 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 text-gray-800">WISHLIST</button>
        </div>
        <div>
          <div className="flex space-x-4 mb-4 border-b">
            <div className="h-6 w-24 text-sm border-b-2 border-black text-black">Product Details</div>
            <div className="h-6 w-24 text-sm text-gray-600">Ratings & Reviews</div>
            <div className="h-6 w-24 text-sm text-gray-600">Shipping Info</div>
          </div>
          <div className="h-64 bg-gray-200"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;