function RecommendedProducts() {
  return (
    <div className="mt-12">
      <h2 className="text-xl font-semibold mb-6 text-black">Recommended Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="h-80 bg-gray-200 flex flex-col p-2">
          <div className="h-64 bg-gray-300 mb-2"></div>
          <div className="text-sm truncate text-black">Men's Fog Green Legends Graphic Printed...</div>
          <div className="flex items-center mt-1">
            <span className="text-sm font-semibold mr-2 text-black">₹599</span>
            <span className="text-xs text-gray-500 line-through mr-2">₹1,999</span>
            <span className="text-xs text-red-500">64% OFF</span>
          </div>
        </div>
        <div className="h-80 bg-gray-200 flex flex-col p-2">
          <div className="h-64 bg-gray-300 mb-2"></div>
          <div className="text-sm truncate text-black">Men's The Blue Squad Graphic Printed...</div>
          <div className="flex items-center mt-1">
            <span className="text-sm font-semibold mr-2 text-black">₹799</span>
            <span className="text-xs text-gray-500 line-through mr-2">₹1,999</span>
            <span className="text-xs text-red-500">33% OFF</span>
          </div>
        </div>
        <div className="h-80 bg-gray-200 flex flex-col p-2">
          <div className="h-64 bg-gray-300 mb-2"></div>
          <div className="text-sm truncate text-black">Men's Blue Dunk Graphic Printed Oversized...</div>
          <div className="flex items-center mt-1">
            <span className="text-sm font-semibold mr-2 text-black">₹699</span>
            <span className="text-xs text-gray-500 line-through mr-2">₹1,599</span>
            <span className="text-xs text-red-500">56% OFF</span>
          </div>
        </div>
        <div className="h-80 bg-gray-200 flex flex-col p-2">
          <div className="h-64 bg-gray-300 mb-2"></div>
          <div className="text-sm truncate text-black">Men's Blue Batman Logo Graphic Printed...</div>
          <div className="flex items-center mt-1">
            <span className="text-sm font-semibold mr-2 text-black">₹699</span>
            <span className="text-xs text-gray-500 line-through mr-2">₹1,299</span>
            <span className="text-xs text-red-500">46% OFF</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecommendedProducts;