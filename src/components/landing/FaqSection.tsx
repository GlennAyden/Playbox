import React from 'react';

const faqs = [
  {
    question: 'Bagaimana cara menggunakan Playbox?',
    answer: 'Cukup install ekstensi di browser Anda, masuk ke akun Playbox, dan nikmati akses langsung ke semua akun premium dengan sekali klik. Mudah dan cepat!',
  },
  {
    question: 'Dapatkah saya melaporkan masalah jika ada kendala?',
    answer: 'Tentu. Anda hanya perlu mengisi laporan dan pilih layanan yang sedang bermasalah. Tim kami siap membantu segera.',
  },
  {
    question: 'Apakah Playbox bisa digunakan di smartphone?',
    answer: 'Playbox bekerja dengan sistem ekstensi browser, jadi kami sarankan untuk menggunakannya di Desktop/Laptop untuk pengalaman yang optimal.',
  },
  {
    question: 'Bolehkah saya membagikan akun Playbox saya?',
    answer: 'Maaf, kami tidak mengizinkan pembagian akun. Satu akun hanya untuk satu pengguna, dan jika kami menemukan aktivitas pembagian, akun Anda akan kami suspend.',
  },
  {
    question: 'Bagaimana cara menghubungi Playbox?',
    answer: 'Anda bisa menghubungi kami melalui WhatsApp atau komunitas Discord kami.',
  },
];

const FaqCard = ({ faq }: { faq: (typeof faqs)[0] }) => (
  <div className="bg-gray-900 text-white p-6 rounded-2xl flex-shrink-0 w-80 md:w-96 h-full">
    <h3 className="font-bold mb-3 text-lg">{faq.question}</h3>
    <p className="text-gray-300 text-sm">{faq.answer}</p>
  </div>
);

const FaqSection = () => {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="text-4xl font-bold">Have Questions?</h2>
          <p className="text-gray-600">We have a answers</p>
        </div>
        <div className="flex gap-8 overflow-x-auto pb-4 -mx-4 px-4">
          {faqs.map((faq, index) => (
            <FaqCard key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection; 