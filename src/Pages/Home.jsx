import React from 'react'

import FAQPage from './FAQ'
import FeaturePage from './Features'
import Footer from '../Components/Footer'



import HeaderImage from "../assets/home-img.svg";
import Logo from "../assets/tumbuhin-logo.svg";
import AboutImage from "../assets/about-pict.svg";
import TwoFacePict from "../assets/twoface-pict.svg";

import Navbar from '../Components/Navbar';




const Home = () => {
  return (
    <div>

    <section className="relative h-screen w-full bg-cover bg-center" style={{ backgroundImage: `url(${HeaderImage})` }}>
      <Navbar/>
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className='text-[#]'> TUMBUHIN: </span> Solusi Terbaik untuk <br />
          <span className="italic font-normal">Menumbuhkan</span> Masa Depan
        </h1>
        <button className="mt-12 border border-white px-6 py-2 rounded-full">Get started now</button>
      </div>
    </section>

        <section id="about" className="w-full h-screen flex items-center justify-center bg-white">
      <div className="flex flex-col w-full max-w-7xl px-6 md:px-20">
        <img src={Logo} alt="" className="w-12 h-12 mb-6" />

        <div className="flex flex-col md:flex-row w-full h-full items-center justify-between">
          <div className="space-y-8 md:w-[55%] text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-semibold">
              <span className="text-[#8AC310]">Tumbuhin</span> Menumbuhkan Hijau nya Dunia
            </h1>
            <p className="text-base md:text-2xl md:w-[90%]">
              Tumbuhin adalah platform yang menghadirkan artikel seputar sektor pertanian. Kami menyajikan informasi yang mudah diakses, membantu menemukan jawaban langsung dari artikel yang tersedia.
            </p>
            <a
              href="#"
              className="inline-block text-lg font-semibold w-40 text-center text-[#294B29] bg-[#B7EB47] py-3 rounded-full"
            >
              Learn More
            </a>
          </div>

          <div className="md:w-[40%] mt-10 md:mt-0 flex justify-center">
            <img
              src={AboutImage}
              alt="About"
              className="w-[600px] h-[450px] hidden md:block object-contain"
            />
          </div>
        </div>
      </div>
    </section>


    <FeaturePage/>

    {/* Account Section */}
    <section id="about" className="md:py-20 py-10 px-6 md:px-20 bg-white">
  <div className="flex flex-col md:flex-row items-center justify-between gap-10">

    {/* Left: Image/Form */}
    <div className="w-full md:w-1/2 flex justify-center bg-gray-50 py-12 px-6 rounded-4xl">
      <img
        src={TwoFacePict}
        alt="Form illustration"
        className="w-full max-w-[400px] h-auto object-contain"
      />
    </div>

    {/* Right: Text Content */}
    <div className="w-full md:w-1/2 space-y-8">
      <h1 className="text-3xl md:text-5xl font-semibold text-[#294B29] leading-snug">
        <span className="text-[#8AC310]">2 Sisi</span> yang memiliki fitur unggul berbeda-beda
      </h1>

      {/* Card 1 */}
      <div className="bg-[#F7F8F5] rounded-2xl p-6 flex items-start space-x-4">
        <div className="min-w-[50px] h-[50px] rounded-full bg-[#E5F099] flex items-center justify-center text-lg font-semibold text-green-900">
          1
        </div>
        <div>
          <h2 className="text-lg font-semibold text-green-900 mb-1">
            Want to be a Farmer or Just Shopping?
          </h2>
          <p className="text-green-900 leading-relaxed">
            Mau jadi petani yang jual hasil panen langsung dari kebun ke konsumen? 
            atau cuma mau belanja produk segar dari petani lokal? Pas daftar, tinggal 
            pilih peran—masing-masing punya fitur keren yang siap bantu aktivitasmu!
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-[#F7F8F5] rounded-2xl p-6 flex items-start space-x-4">
        <div className="min-w-[50px] h-[50px] rounded-full bg-[#E5F099] flex items-center justify-center text-lg font-semibold text-green-900">
          2
        </div>
        <div>
          <h2 className="text-lg font-semibold text-green-900 mb-1">
            Two Dashboards, Each with Unique Perks
          </h2>
          <p className="text-green-900 leading-relaxed">
            Setiap peran punya dashboard yang berbeda. Tampilannya disesuaikan, fiturnya juga beda biar 
            pengalamanmu makin nyaman & sesuai kebutuhan.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

    <FAQPage/>

    <Footer/>
    
    
  </div>
  )
}

export default Home
