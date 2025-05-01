function Breadcrumb() {
  return (
    <div className="text-sm text-gray-600 mb-4">
      <div className="flex space-x-2">
        <a href="#" className="text-blue-600 hover:underline">Home</a>
        <span className="text-gray-800">›</span>
        <a href="#" className="text-blue-600 hover:underline">Men's Clothing</a>
        <span className="text-gray-800">›</span>
        <a href="#" className="text-blue-600 hover:underline">Men's Printed T-Shirts</a>
      </div>
    </div>
  );
}

export default Breadcrumb;