import React from 'react';

export default function ProductSection() {
  return (
    <div className="flex flex-col md:flex-row gap-12">
      <div className="md:w-1/2 flex flex-col md:flex-row gap-4 h-auto md:h-[650px]">
        {/* Thumbnails on the left (desktop), below (mobile) */}
        <div className="flex md:flex-col flex-row md:w-24 w-full space-x-3 md:space-x-0 md:space-y-3 overflow-x-auto md:overflow-y-auto md:max-h-[600px] scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200 order-2 md:order-1">
          <div className="h-24 w-24 bg-gray-200 flex-shrink-0"></div>
          <div className="h-24 w-24 bg-gray-200 flex-shrink-0"></div>
          <div className="h-24 w-24 bg-gray-200 flex-shrink-0"></div>
          <div className="h-24 w-24 bg-gray-200 flex-shrink-0"></div>
          <div className="h-24 w-24 bg-gray-200 flex-shrink-0"></div>
          <div className="h-24 w-24 bg-gray-200 flex-shrink-0"></div>
          <div className="h-24 w-24 bg-gray-200 flex-shrink-0"></div>
          <div className="h-24 w-24 bg-gray-200 flex-shrink-0"></div>
          <div className="h-24 w-24 bg-gray-200 flex-shrink-0"></div>
          <div className="h-24 w-24 bg-gray-200 flex-shrink-0"></div>
        </div>
        {/* Primary Image */}
        <div className="h-[600px] bg-gray-200 flex-grow order-1"></div>
      </div>
      <div className="md:w-1/2 md:h-[650px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
        <h1 className="text-xl font-semibold mb-2 text-black">Bewakoof® Men's Blue Legends Graphic Printed Oversized T-shirt</h1>
        <div className="flex items-center mb-4">
          <span className="text-lg font-bold mr-2 text-black">₹599</span>
          <span className="text-gray-500 line-through mr-2">₹1,999</span>
          <span className="text-red-500">64% OFF</span>
          <span className="ml-2 text-black">⭐ 4.5</span>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-sm text-green-600 mr-2">BUY 2 FOR 999</span>
          <span className="text-sm text-gray-600">OVERSIZED FIT</span>
          <span className="text-sm text-gray-600 ml-2">100% COTTON</span>
        </div>
        <div className="mb-4">
          <div className="text-sm font-semibold mb-2 text-black">Colour Options: Blue</div>
          <div className="flex space-x-2">
            <button className="h-8 w-8 bg-blue-600 rounded-full border-2 border-blue-600"></button>
            <button className="h-8 w-8 bg-gray-200 rounded-full border-2 border-gray-300"></button>
          </div>
        </div>
        {/* Key Highlights */}
        <div className="mb-6">
          <div className="text-lg font-semibold mb-2 text-black">Key Highlights</div>
          <div className="grid grid-cols-2 gap-2 text-sm text-black">
            <div className="flex justify-between">
              <span>DESIGN</span>
              <span className="font-semibold">Graphic Print</span>
            </div>
            <div className="flex justify-between">
              <span>FIT</span>
              <span className="font-semibold">Oversized Fit</span>
            </div>
            <div className="flex justify-between">
              <span>NECK</span>
              <span className="font-semibold">Round Neck</span>
            </div>
            <div className="flex justify-between">
              <span>OCCASION</span>
              <span className="font-semibold">Casual Wear</span>
            </div>
            <div className="flex justify-between">
              <span>SLEEVE STYLE</span>
              <span className="font-semibold">Half Sleeve</span>
            </div>
            <div className="flex justify-between">
              <span>HEMLINE</span>
              <span className="font-semibold">Straight</span>
            </div>
          </div>
        </div>
        <div className="mb-6">
          <div className="text-sm font-semibold mb-2 text-black">Select Size</div>
          <div className="flex space-x-2">
            <button className="h-12 w-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 text-black">S</button>
            <button className="h-12 w-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 text-black">M</button>
            <button className="h-12 w-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 text-black">L</button>
            <button className="h-12 w-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 text-black">XL</button>
            <button className="h-12 w-12 border border-gray-300 rounded flex items-center justify-center hover:bg-gray-100 text-black">2XL</button>
          </div>
          <div className="text-xs text-red-500 mt-1">5 left</div>
          <a href="#" className="text-sm text-blue-600 mt-1 inline-block">SIZE GUIDE</a>
        </div>
        <div className="flex space-x-4 mb-6">
          <button className="h-12 w-48 bg-yellow-400 rounded-lg flex items-center justify-center font-semibold text-black hover:bg-yellow-500">ADD TO BAG</button>
          <button className="h-12 w-48 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 text-gray-800">WISHLIST</button>
        </div>
        <div className="mb-6">
          <div className="text-sm font-semibold mb-2 text-black">Check for Delivery Details</div>
          <div className="flex space-x-2">
            <input type="text" placeholder="Enter Pincode" className="h-10 w-48 border border-gray-300 rounded-lg px-4 text-sm" />
            <button className="h-10 w-20 border border-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-100 text-gray-800">CHECK</button>
          </div>
        </div>
        <div>
          <div className="flex space-x-4 mb-4 border-b">
            <div className="h-6 w-24 text-sm border-b-2 border-black text-black">Product Details</div>
            <div className="h-6 w-24 text-sm text-gray-600">Ratings & Reviews</div>
            <div className="h-6 w-24 text-sm text-gray-600">Shipping Info</div>
          </div>
          {/* Product Description */}
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2 text-black">Manufacture, Care and Fit</h3>
            <p className="text-sm text-gray-700 mb-4">
              This Legends Graphic Printed Men's Blue Oversized T-shirt isn't just a style choice—it’s a mindset. Wear it with gray cargo pants and white sneakers for a relaxed yet confident look.
            </p>
            <p className="text-sm text-gray-700 mb-4">
              <strong>Country of Origin</strong> - India
            </p>
            <p className="text-sm text-gray-700 mb-4">
              <strong>Manufactured By</strong> - Bewakoof Brands Pvt Ltd, Sairaj logistic hub #A5, BMC pipeline road, Opposite all saints high school, Amane, Bhiwandi, Thane, Maharashtra 421302
            </p>
            <p className="text-sm text-gray-700 mb-4">
              <strong>Packed By</strong> - Bewakoof Brands Pvt Ltd, Sairaj logistic hub #A5, BMC pipeline road, Opposite all saints high school, Amane, Bhiwandi, Thane, Maharashtra 421302
            </p>
            <p className="text-sm text-gray-700 mb-4">
              <strong>Commodity</strong> - Men's T-Shirt
            </p>
            <h3 className="text-lg font-semibold mb-2 text-black">Product Specifications</h3>
            <ul className="text-sm text-gray-700 list-disc list-inside mb-4">
              <li>Oversized fit - Super Loose On Body Thoda Hawaa Aane De</li>
              <li>Single Jersey - Classic, lightweight jersey fabric comprising 100% cotton.</li>
            </ul>
          </div>
        </div>
        {/* 15 Days Returns & Exchange */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2 text-black flex items-center">
            <span className="mr-2">🔄</span> 15 Days Returns & Exchange
          </h3>
          <p className="text-sm text-gray-500 mb-4">Know about return & exchange policy</p>
          <p className="text-sm text-gray-700 mb-4">
            Easy returns up to 15 days of delivery. Exchange available on select pincodes
          </p>
          <div className="flex justify-between text-sm text-gray-700">
            <div className="flex flex-col items-center">
              <span className="text-xl mb-1">🛒</span>
              <span>100% Secure Payment</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl mb-1">📦</span>
              <span>Easy Returns & Instant Refunds</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl mb-1">🏅</span>
              <span>100% Genuine Product</span>
            </div>
          </div>
        </div>
        {/* Product Reviews */}
        <div className="mt-6 border-t border-yellow-400 pt-4">
          <h3 className="text-lg font-semibold mb-2 text-black">Product Reviews</h3>
          <p className="text-sm text-gray-700 mb-2 flex items-center">
            <span className="mr-2">👍</span> 90% of verified buyers recommend this product
          </p>
          <div className="flex items-center mb-4">
            <span className="text-2xl font-bold mr-2 text-black">4.5</span>
            <span className="text-yellow-400">★★★★★</span>
            <span className="ml-2 text-sm text-gray-700">419 ratings</span>
          </div>
          <div className="text-sm text-gray-700">
            <div className="flex items-center mb-1">
              <span className="w-4 mr-2">5 ★</span>
              <div className="w-48 h-2 bg-gray-200 rounded">
                <div className="w-3/4 h-2 bg-green-500 rounded"></div>
              </div>
              <span className="ml-2 text-gray-500">(247)</span>
            </div>
            <div className="flex items-center mb-1">
              <span className="w-4 mr-2">4 ★</span>
              <div className="w-48 h-2 bg-gray-200 rounded">
                <div className="w-1/3 h-2 bg-green-300 rounded"></div>
              </div>
              <span className="ml-2 text-gray-500">(130)</span>
            </div>
            <div className="flex items-center mb-1">
              <span className="w-4 mr-2">3 ★</span>
              <div className="w-48 h-2 bg-gray-200 rounded">
                <div className="w-1/5 h-2 bg-orange-300 rounded"></div>
              </div>
              <span className="ml-2 text-gray-500">(42)</span>
            </div>
            <div className="flex items-center mb-1">
              <span className="w-4 mr-2">2 ★</span>
              <div className="w-48 h-2 bg-gray-200 rounded">
                <div className="w-0 h-2 bg-gray-200 rounded"></div>
              </div>
              <span className="ml-2 text-gray-500">(0)</span>
            </div>
            <div className="flex items-center">
              <span className="w-4 mr-2">1 ★</span>
              <div className="w-48 h-2 bg-gray-200 rounded">
                <div className="w-0 h-2 bg-gray-200 rounded"></div>
              </div>
              <span className="ml-2 text-gray-500">(0)</span>
            </div>
          </div>
          <button className="mt-4 text-blue-600 hover:underline">RATE</button>
        </div>
      </div>
    </div>
  );
}