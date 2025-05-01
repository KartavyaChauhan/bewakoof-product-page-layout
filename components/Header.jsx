function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-black">BEWAKOOF®</div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-800 hover:text-black">MEN</a>
          <a href="#" className="text-gray-800 hover:text-black">WOMEN</a>
          <a href="#" className="text-gray-800 hover:text-black">MOBILE COVERS</a>
        </nav>
        <div className="flex space-x-4 items-center">
          <button className="text-gray-800 hover:text-black border border-gray-300 px-2 py-1 rounded">LOGIN</button>
          <span className="text-xl text-gray-800">❤️</span>
          <span className="text-xl text-gray-800">🛍️</span>
        </div>
      </div>
    </header>
  );
}

export default Header;