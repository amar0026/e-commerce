 import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import img1 from "../assets/megapack.jpg";   // Megapack
import img2 from "../assets/powerwall.jpg";   // Powerwall
import img3 from "../assets/solarroof.webp";   // Solar Roof
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
          freeMode={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="continuousSwiper"
        >

          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl transition duration-300 border border-gray-200">

                {/* Header */}
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src={logo} 
                    alt="Tesla Logo" 
                    className="h-6"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-[#0b1220]">
                      {item.name}
                    </h2>
                    <p className="text-gray-500 text-xs">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                {/* Image */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-xl mb-4 w-full h-48 object-cover"
                />

                {/* Feature Box */}
                <div className="bg-[#0b1220] text-white rounded-2xl p-6 mb-4">
                  <ul className="space-y-2">
                    {item.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-white rounded-full"></span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 rounded-xl transition">
                  SEE DETAILS
                </button>

              </div>
            </SwiperSlide>
          ))}

        </Swiper>

      </div>
    </div>
  );
}