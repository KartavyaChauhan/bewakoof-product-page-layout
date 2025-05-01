function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12">
      <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col">
          <div className="text-sm font-semibold mb-2 text-white">CUSTOMER SERVICE</div>
          <div className="text-sm text-white">Contact Us</div>
          <div className="text-sm text-white">Track Order</div>
          <div className="text-sm text-white">Return Order</div>
          <div className="text-sm text-white">Cancel Order</div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-semibold mb-2 text-white">COMPANY</div>
          <div className="text-sm text-white">About Us</div>
          <div className="text-sm text-white">Terms & Conditions</div>
          <div className="text-sm text-white">Privacy Policy</div>
          <div className="text-sm text-white">We are Hiring</div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-semibold mb-2 text-white">CONNECT WITH US</div>
          <div className="text-sm text-white">4.7M People Like this</div>
          <div className="text-sm text-white">1M People Like this</div>
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-semibold mb-2 text-white">KEEP UP TO DATE</div>
          <div className="flex space-x-2">
            <input type="text" placeholder="Enter Email Id:" className="h-8 w-48 bg-gray-200 text-black px-2 rounded-l" />
            <button className="h-8 w-24 bg-yellow-400 rounded-r-lg flex items-center justify-center font-semibold text-black hover:bg-yellow-500">SUBSCRIBE</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;