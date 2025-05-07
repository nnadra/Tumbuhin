import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

// Isi FAQ
const faqData = [
  { question: 'Apa itu Tumbuhin?', answer: 'Tumbuhin adalah platform digital berbasis AI yang membantu petani mendeteksi penyakit tanaman, menjual hasil panen secara online, dan mendapatkan informasi pertanian secara cepat dan akurat..' },
  { question: "Siapa yang bisa menggunakan Tumbuhin?", answer: 'Tumbuhin dapat digunakan oleh petani, pembeli hasil pertanian, serta siapa pun yang tertarik dengan teknologi pertanian cerdas.' },
  { question: 'Apakah Tumbuhin bisa mendeteksi semua jenis penyakit tanaman?', answer: 'Tumbuhin fokus pada penyakit tanaman yang umum di Indonesia. Model AI kami terus diperbarui berdasarkan data baru untuk meningkatkan akurasi deteksi.' },
  { question: 'Apakah butuh koneksi internet untuk menggunakan Tumbuhin?', answer: 'Ya, namun beberapa fitur dasar akan dirancang agar tetap bisa diakses dalam mode offline dan disinkronkan saat koneksi tersedia.' },
  { question: ' Apakah menggunakan Tumbuhin berbayar?', answer: 'aat ini, Tumbuhin dapat digunakan secara gratis. Beberapa fitur premium akan tersedia di masa mendatang untuk pengguna yang membutuhkan layanan tambahan.' },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto py-20 px-2">
      
    <h2 className="text-5xl font-bold text-[#224734] mb-12 flex justify-start">Got Questions? <br /> We’re Here to Help.</h2>
    {faqData.map((item, index) => (
      <div key={index} className="border rounded-lg p-6 mb-4 ">
        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
          <h3 className="text-[#224734] font-medium">{item.question}</h3>
          {openIndex === index ? <FiMinus className="text-gray-500" /> : <FiPlus className="text-gray-500" />}
        </div>
        {openIndex === index && (
          <p className="mt-3 text-gray-700 text-sm">{item.answer}</p>
        )}
      </div>
    ))}
  </div>
  );
};

export default FAQ;
