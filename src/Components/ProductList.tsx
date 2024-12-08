
"use client";

import React, { useState } from "react";
import { FaUserFriends, FaGasPump, FaCogs } from "react-icons/fa";

const ProductList: React.FC = () => {
  // Full list of cars
  const allCars = [
    { id: 1, name: "Koenigsegg", image: "/car.png", price: 99 },
    { id: 2, name: "Nissan GT-R", image: "/car (2).png", price: 80 },
    { id: 3, name: "Rolls-Royce", image: "/car (3).png", price: 90 },
    { id: 4, name: "Audi A8", image: "/car (4).png", price: 75 },
    { id: 5, name: "Tesla Model X", image: "/car (5).png", price: 95 },
    { id: 6, name: "BMW X7", image: "/car (6).png", price: 85 },
    { id: 7, name: "Porsche 911", image: "/car (7).png", price: 110 },
    { id: 8, name: "Lamborghini Huracan", image: "/car (8).png", price: 120 },
    { id: 9, name: "Ferrari F8", image: "/car (9).png", price: 130 },
  ];

  // State to handle visible cars
  const [visibleCars, setVisibleCars] = useState(9);

  const handleShowMore = () => {
    setVisibleCars(allCars.length); // Show all cars
  };

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">Explore Our Cars</h1>

        {/* Cover Page with Background */}
        <div className="bg-blue-100 py-10 px-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Featured Cars</h2>

          {/* Car Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6">
            {allCars.slice(0, visibleCars).map((car) => (
              <div
                key={car.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
              >
                {/* Car Image */}
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-[250px] object-cover rounded-[10px] mb-4" // Adjusted height and width
                />

                {/* Car Name */}
                <h3 className="text-lg font-medium text-gray-800 mb-2">{car.name}</h3>

                {/* Car Price */}
                <p className="text-blue-500 font-bold text-xl mb-4">${car.price}/Day</p>

                {/* Features */}
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center space-x-2">
                    <FaUserFriends />
                    <span>4 Seats</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaGasPump />
                    <span>Petrol</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaCogs />
                    <span>Auto</span>
                  </div>
                </div>

                {/* Rent Button */}
                <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition">
                  Rent Now
                </button>
              </div>
            ))}
          </div>

          {/* Show More Button */}
          {visibleCars < allCars.length && (
            <div className="flex justify-center mt-8">
              <button
                onClick={handleShowMore}
                className="px-6 py-2 bg-blue-500 text-white text-lg rounded-lg hover:bg-blue-600 transition"
              >
                Show More Cars
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
