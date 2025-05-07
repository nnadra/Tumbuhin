import React, { useState } from 'react';

const Features = () => {
  const [flipped, setFlipped] = useState([false, false, false]);

  const cards = [
    {
      front: 'Scan Hama',
      back: 'Mau jadi petani yang jual hasil panen langsung dari kebun ke konsumen? atau cuma mau belanja produk segar dari petani lokal? Pas daftar, tinggal pilih peran masing-masing punya fitur keren yang siap bantu aktivitasmu!',
    },
    {
      front: 'Baca Article',
      back: 'Mau jadi petani yang jual hasil panen langsung dari kebun ke konsumen? atau cuma mau belanja produk segar dari petani lokal? Pas daftar, tinggal pilih peran masing-masing punya fitur keren yang siap bantu aktivitasmu!',
    },
    {
      front: 'Shop',
      back: 'Mau jadi petani yang jual hasil panen langsung dari kebun ke konsumen? atau cuma mau belanja produk segar dari petani lokal? Pas daftar, tinggal pilih peran masing-masing punya fitur keren yang siap bantu aktivitasmu!',
    },
  ];

  const handleFlip = (index) => {
    setFlipped((prev) =>
      prev.map((val, i) => (i === index ? !val : val))
    );
  };

  return (
    <div className='bg-[#294B29] p-8 py-16 justify-center'>
      <h1 className='text-white font-medium text-4xl flex justify-center'>Smart Features for a Greener Future</h1>
      <div className=" flex justify-center gap-8 py-20  flex-wrap">
      
      {cards.map((card, i) => (
        <div
          key={i}
          className="w-85 h-85 [perspective:1000px] cursor-pointer"
          onClick={() => handleFlip(i)}
        >
          <div
            className={`relative w-full h-full transition-transform duration-500 ${
              flipped[i] ? 'rotate-y-180' : ''
            }`}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            {/* Front */}
            <div
              className="absolute w-full h-full bg-white/10 backdrop-blur-md border border-white/30 rounded-xl shadow-lg flex items-center justify-center text-white text-xl font-semibold backface-hidden"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              {card.front}
            </div>

            {/* Back */}
            <div
              className="absolute w-full h-full bg-white text-green-900 rounded-xl text-lg font-medium flex items-center justify-center p-6 rotate-y-180 shadow-lg"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              {card.back}
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Features;
