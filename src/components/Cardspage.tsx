import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import img1 from "../assets/megapack.jpg";
import img2 from "../assets/powerwall.jpg";
import img3 from "../assets/solarroof.webp";
import logo from "../assets/teslalogo.png";

export default function Card() {

  const products = [
    {
      name: "Megapack",
      subtitle: "Massive Batteries For Massive Energy Support",
      image: img1,
      points: ["Grid-Scale", "Scalable", "High-Capacity"],
    },
    {
      name: "Powerwall",
      subtitle: "Keep Your Lights On During Outages",
      image: img2,
      points: ["13.5 kWh", "Power", "App"],
    },
    {
      name: "Solar Roof",
      subtitle: "Generate Clean Energy With Your Roof",
      image: img3,
      points: ["Grid-Scale", "Scalable", "High-Capacity"],
    },
    {
      name: "Megapack",
      subtitle: "Massive Batteries For Massive Energy Support",
      image: img1,
      points: ["Grid-Scale", "Scalable", "High-Capacity"],
    },
    {
      name: "Powerwall",
      subtitle: "Keep Your Lights On During Outages",
      image: img2,
      points: ["13.5 kWh", "Power", "App"],
    },
    {
      name: "Solar Roof",
      subtitle: "Generate Clean Energy With Your Roof",
      image: img3,
      points: ["Grid-Scale", "Scalable", "High-Capacity"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-10">
      <div className="max-w-6xl w-full">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl hover:-translate-y-2 transition duration-300">

                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-black p-3 rounded-xl">
                    <img
                      src={logo}
                      alt="logo"
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#0b1220]">
                      {product.name}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {product.subtitle}
                    </p>
                  </div>
                </div>

                {/* Product Image */}
                <img
                  src={product.image}
                  className="rounded-xl mb-4 w-full h-56 object-cover"
                  alt={product.name}
                />

                {/* Points / Specs */}
                <div className="bg-[#0b1220] text-white rounded-2xl p-6 flex justify-around items-center mb-4">
                  {product.points.map((point, i) => (
                    <div key={i} className="flex flex-col items-center">
                      <p className="text-sm font-semibold">{point}</p>
                    </div>
                  ))}
                </div>
                
                <button className="relative w-full overflow-hidden rounded-xl group">
                  <span className="relative z-10 block text-white py-2 text-center">
                    SEE DETAILS
                  </span>

                  {/* Default Background */}
                  <span className="absolute inset-0 bg-emerald-500"></span>

                  {/* Hover Gradient Slide */}
                  <span className="absolute inset-0 bg-linear-to-b from-emerald-500 to-gray-800 
                     -translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  </span>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}