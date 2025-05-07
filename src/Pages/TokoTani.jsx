import React from "react";
import { useState } from 'react';
import Navbar from "../Components/Navbar";
import ImgToko from "../assets/tokotani-img.svg";
import ImgToko1 from "../assets/img-tokotani1.svg";
import ImgToko2 from "../assets/img-tokotani2.svg";
import ImgToko3 from "../assets/img-tokotani3.svg";

const TokoTani = () => {
  const [selectedImage, setSelectedImage] = useState(null); //menyimpan gambar 
  
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      <div className="pt-28 max-w-6xl mx-auto mt-12 px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Kiri: Gambar + teks badge */}
        <div className="relative w-full md:w-1/2">
          <img
            src={ImgToko}
            alt="Tanaman"
            className="rounded-xl object-contain"
          />
         
        </div>

        {/* Kanan: Judul + paragraf + list gambar produk */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-6xl font-bold text-green-700">
            Toko Tani, Solusi Siap Panen!
          </h1>
          <p className="text-gray-700 text-lg">
            Tempat belanja terlengkap untuk menumbuhkan masa depan hijau
          </p>

          {/* Gambar produk */}
          <div className="flex gap-4 mt-12">
            {[ImgToko1, ImgToko2, ImgToko3].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`thumb-${index}`}
                onClick={() => setSelectedImage(index)} //saat diklik, selectedImage di-set jadi photo1
                className={`w-42 h-42 rounded-lg object-cover cursor-pointer transition-transform duration-300 ${
                  selectedImage === index ? 'scale-120' : 'scale-90' //kalau gambar ini adalah yang dipilih, ukurannya diperbesar.
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokoTani;
