import { 
  FaTachometerAlt, 
  FaGasPump, 
  FaCogs,
  FaCar 
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

// You'll need to add these images to your public folder or src/assets
// For now, let's use placeholder images
import car1 from "../assets/images (15).jpg";
import car2 from "../assets/images (14).jpg";
import car3 from "../assets/images (16).jpg";
import logo from "../assets/teslalogo.png";

export default function Card() {
  const cars = [
    { 
      name: "Lamborghini Urus",
      year: "2024",
      type: "SUV",
      condition: "New",
      logo: logo,
      image: car1, 
      speed: "150", 
      engine: "4.0L", 
      fuel: "Petrol", 
      gear: "Auto", 
      price: "AED 1,150,000" 
    },
    { 
      name: "Lamborghini Huracan",
      year: "2023",
      type: "Sports",
      condition: "New",
      logo: logo,
      image: car2, 
      speed: "180", 
      engine: "5.2L", 
      fuel: "Petrol", 
      gear: "Auto", 
      price: "AED 1,400,000" 
    },
    { 
      name: "Lamborghini Aventador",
      year: "2022",
      type: "Supercar",
      condition: "Used",
      logo: logo,
      image: car3, 
      speed: "200", 
      engine: "6.5L", 
      fuel: "Petrol", 
      gear: "Auto", 
      price: "AED 1,900,000" 
    },
    { 
      name: "Lamborghini Urus",
      year: "2024",
      type: "SUV",
      condition: "New",
      logo: logo,
      image: car1, 
      speed: "150", 
      engine: "4.0L", 
      fuel: "Petrol", 
      gear: "Auto", 
      price: "AED 1,150,000" 
    },
    { 
      name: "Lamborghini Huracan",
      year: "2023",
      type: "Sports",
      condition: "New",
      logo: logo,
      image: car2, 
      speed: "180", 
      engine: "5.2L", 
      fuel: "Petrol", 
      gear: "Auto", 
      price: "AED 1,400,000" 
    },
    { 
      name: "Lamborghini Aventador",
      year: "2022",
      type: "Supercar",
      condition: "Used",
      logo: logo,
      image: car3, 
      speed: "200", 
      engine: "6.5L", 
      fuel: "Petrol", 
      gear: "Auto", 
      price: "AED 1,900,000" 
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
            pauseOnMouseEnter: true, // This stops autoplay on hover
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {cars.map((car, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-xl hover:-translate-y-2 transition duration-300">
                {/* Header Section */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-black p-3 rounded-xl">
                    <img 
                      src={car.logo} 
                      alt="logo" 
                      className="h-10 w-10 object-contain"
                    />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-[#0b1220]">
                      {car.name}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      {car.year} • {car.type} • {car.condition}
                    </p>
                  </div>
                </div>

                {/* Car Image */}
                <img
                  src={car.image}
                  className="rounded-xl mb-4 w-full h-56 object-cover"
                  alt="car"
                />

                {/* Specs */}
                <div className="bg-[#0b1220] text-white rounded-2xl p-6 flex justify-between items-center mb-4">
                  <div className="flex flex-col items-center">
                    <FaTachometerAlt size={18}/>
                    <p className="mt-2 text-sm">{car.speed} mph</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <FaCar size={18}/>
                    <p className="mt-2 text-sm">{car.engine}</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <FaGasPump size={18}/>
                    <p className="mt-2 text-sm">{car.fuel}</p>
                  </div>

                  <div className="flex flex-col items-center">
                    <FaCogs size={18}/>
                    <p className="mt-2 text-sm">{car.gear}</p>
                  </div>
                </div>

                {/* Price */}
                <p className="text-lg text-[#0b1220] font-semibold mb-3">
                  {car.price}
                </p>

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