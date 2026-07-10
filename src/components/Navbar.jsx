function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900/80 backdrop-blur-md border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-white">
          Reel<span className="text-indigo-500">Vault</span>
        </h1>

        <div className="hidden md:flex gap-8 text-slate-300">
          <a href="#">Home</a>
<a href="#features">Features</a>
<a href="#faq">FAQ</a>
<a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;