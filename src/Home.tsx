import About from "./components/about";
import Card from "./components/Card";
import solarImg from "./assets/solar.jpg";
import Cardspage from "./components/Cardspage";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f1720] text-white relative overflow-hidden">

      {/* ───────────── HERO SECTION ───────────── */}
      <div className="min-h-screen bg-[#0f1720] text-white relative overflow-hidden">

        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=1974"
            alt="Tesla Car"
            className="w-full h-full object-cover opacity-40"
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10 px-4 sm:px-6 md:px-8 pt-6 sm:pt-8">

          {/* Navbar */}
          <nav className="flex items-center justify-between bg-[#0b1220]/80 backdrop-blur-md px-4 sm:px-8 py-3 sm:py-4 rounded-2xl border border-white/10">
            <h1 className="text-lg sm:text-xl font-semibold tracking-wider">TESLA</h1>

            <ul className="hidden md:flex gap-6 lg:gap-8 text-gray-300 text-sm lg:text-base">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Vehicles</li>
              <li className="hover:text-white cursor-pointer">Energy</li>
            </ul>

            <button className="bg-emerald-500 hover:bg-emerald-600 px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-medium transition">
              Explore Fleet
            </button>
          </nav>

          {/* Hero Text */}
          <div className="mt-16 sm:mt-20 md:mt-24 max-w-2xl">
            <p className="text-gray-400 text-xs sm:text-sm tracking-widest mb-3 sm:mb-4">
              THE FUTURE IS NOW
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
              Discover how we are
              <span className="block font-semibold text-white">
                changing
              </span>
              the world of automobiles
            </h2>
          </div>

          {/* Bottom Search Card */}
          <div className="absolute -bottom-27 left-1/2 -translate-x-1/2 translate-y-6 w-[92%] sm:w-[88%] md:w-[85%] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 sm:p-4 flex flex-wrap gap-3 sm:gap-4 items-center justify-between">

            <select className="bg-white/20 text-white px-3 sm:px-4 py-2 rounded-lg outline-none text-sm flex-1 min-w-30">
              <option>Car Make</option>
            </select>

            <select className="bg-white/20 text-white px-3 sm:px-4 py-2 rounded-lg outline-none text-sm flex-1 min-w-30">
              <option>Car Type</option>
            </select>

            <select className="bg-white/20 text-white px-3 sm:px-4 py-2 rounded-lg outline-none text-sm flex-1 min-w-32.5">
              <option>Car Condition</option>
            </select>

            <input
              type="text"
              placeholder="Search any car"
              className="flex-1 min-w-35 bg-white/20 text-white px-3 sm:px-4 py-2 rounded-lg outline-none placeholder:text-gray-300 text-sm"
            />

            <button className="bg-emerald-500 hover:bg-emerald-600 px-5 sm:px-6 py-2 rounded-lg font-medium text-sm w-full sm:w-auto">
              Search
            </button>
          </div>

        </div>
      </div>

      {/* ───────────── ABOUT ───────────── */}
      <About />

      {/* ───────────── CARD ───────────── */}
      <Card />

      {/* ───────────── SOLAR PANEL SECTION ───────────── */}
<div className="bg-gray-100 px-4 sm:px-6 md:px-10 lg:px-16 py-8 sm:py-10">
  <div className="relative rounded-xl overflow-hidden h-65 sm:h-80 md:h-100 lg:h-120">

    {/* Image */}
    <img
      src={solarImg}
      alt="Solar Panel"
      className="absolute inset-0 w-full h-full object-cover"
    />

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/40"></div>

    {/* Content */}
    <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8 md:left-10 text-white max-w-md">

      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-3">
        Solar Panel
      </h2>

      <p className="text-gray-200 mb-4 text-sm sm:text-base md:text-lg leading-relaxed">
        Power Your Home And Reduce Your Electricity Bill
      </p>

      <div className="flex gap-3 sm:gap-4 flex-wrap">
        <button className="bg-emerald-500 hover:bg-emerald-600 px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm transition">
          Order Now
        </button>

        <button className="bg-white text-black px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm transition">
          Learn More
        </button>
      </div>

    </div>

  </div>
</div>

      {/* ───────────── CARDS PAGE ───────────── */}
      <Cardspage />

      {/* ───────────── FOOTER ───────────── */}
      <Footer />

    </div>
  );
}