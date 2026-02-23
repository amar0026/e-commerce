import carImage from "../assets/Image.png";

export default function About() {
  return (
    <section className="bg-[#f4f4f4] mt-3 py-16 md:py-20 px-6 sm:px-10 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* LEFT IMAGE SECTION */}
        <div className="relative w-full">

          {/* Main Image */}
          <img
            src={carImage}
            alt="Tesla Car"
            className="w-full rounded-lg shadow-xl"
          />

          {/* Top Right Badge */}
          <div className="absolute top-6 right-0 md:top-16 md:-right-6 bg-white shadow-lg rounded-xl px-4 py-3 md:px-6 md:py-4 text-center">
            <p className="text-gray-500 text-xs md:text-sm">
              Happy Clients
            </p>
            <h3 className="text-lg md:text-2xl font-bold text-gray-800">
              1000+
            </h3>
          </div>

          {/* Bottom Left Reviews */}
          <div className="absolute -bottom-4 left-0 md:-bottom-6 md:-left-6 bg-white shadow-lg rounded-xl px-4 py-3 md:px-6 md:py-4">
            <p className="text-gray-800 text-sm md:text-base font-semibold">
              1000+ reviews
            </p>
          </div>

        </div>

        {/* RIGHT CONTENT SECTION */}
        <div className="text-center md:text-left">

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-gray-900 mb-6">
            About Us
          </h2>

          <p className="text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed mb-6">
            Inspired by the vision of Tesla, Inc., our platform is dedicated to
            delivering cutting-edge electric vehicles and sustainable energy
            solutions. We bring innovation, performance, and clean technology
            together to create a smarter and greener future.
          </p>

          <p className="text-gray-500 text-base sm:text-lg md:text-xl leading-relaxed mb-8">
            Founded with the mission introduced by Elon Musk, Tesla
            revolutionized transportation and energy through electric cars and
            solar technology. Our website proudly offers Tesla electric vehicles
            and advanced solar panels designed for efficiency, durability, and
            sustainability.
          </p>

          <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-3 rounded-lg transition">
            About us →
          </button>

        </div>

      </div>
    </section>
  );
}