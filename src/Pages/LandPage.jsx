import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const LandPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const services = [
    {
      id: 1,
      name: "Instalasi Dental Unit",
      description:
        "Pemasangan dan pengaturan dental unit secara profesional untuk memastikan kenyamanan penggunaan.",
      image: "service1.jpg", // Ganti dengan path gambar yang sesuai
    },
    {
      id: 2,
      name: "Servis Berkala",
      description:
        "Layanan servis berkala untuk memastikan unit berjalan optimal dan memperpanjang usia pemakaian.",
      image: "service2.jpg", // Ganti dengan path gambar yang sesuai
    },
    {
      id: 3,
      name: "Pemasangan Aksesoris Dental",
      description:
        "Pemasangan aksesoris tambahan seperti kursi gigi, lampu, dan alat lainnya untuk melengkapi dental unit.",
      image: "service3.jpg", // Ganti dengan path gambar yang sesuai
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Dr. Andi",
      text: "Pelayanan sangat cepat dan profesional. Saya sangat puas dengan servis yang diberikan.",
      image: "testimonial1.jpg", // Ganti dengan path gambar yang sesuai
    },
    {
      id: 2,
      name: "Budi, Klinik Gigi Sehat",
      text: "Pemasangan dental unit berjalan lancar dan hasilnya sangat memuaskan. Tim sangat berpengalaman.",
      image: "testimonial2.jpg", // Ganti dengan path gambar yang sesuai
    },
    {
      id: 3,
      name: "Susi, Klinik Gigi Mandiri",
      text: "Servis berkala yang dilakukan sangat membantu untuk menjaga peralatan kami tetap optimal. Terima kasih!",
      image: "testimonial3.jpg", // Ganti dengan path gambar yang sesuai
    },
  ];
  const products = [
    {
      id: 1,
      name: "Dental Unit Model A",
      description:
        "Unit gigi model terbaru dengan fitur canggih dan harga terjangkau.",
      image: "../src/assets/unit1.jpg", // Ganti dengan path gambar yang sesuai
      price: "Rp 15.000.000",
      whatsappLink:
        "https://wa.me/+6285283142289?text=Hallo, saya tertarik dengan Dental Unit Model A",
    },
    {
      id: 2,
      name: "Dental Unit Model B",
      description:
        "Desain ergonomis dengan kualitas tinggi untuk kenyamanan maksimal.",
      image: "../src/assets/unit1.jpg", // Ganti dengan path gambar yang sesuai
      price: "Rp 20.000.000",
      whatsappLink:
        "https://wa.me/+6285283142289?text=Hallo, saya tertarik dengan Dental Unit Model B",
    },
    {
      id: 3,
      name: "Dental Unit Model C",
      description:
        "Unit multifungsi yang cocok untuk berbagai keperluan klinik gigi.",
      image: "../src/assets/unit1.jpg", // Ganti dengan path gambar yang sesuai
      price: "Rp 25.000.000",
      whatsappLink:
        "https://wa.me/+6285283142289?text=Hallo, saya tertarik dengan Dental Unit Model C",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <button
          className="text-gray-800 text-2xl md:hidden"
          onClick={() => setIsSidebarOpen(true)}
        >
          <FiMenu />
        </button>
        <Link
          to="/"
          className="text-2xl font-bold text-gray-800 hover:text-blue-500"
        >
          Karya Mandiri Dental
        </Link>
        <div className="space-x-6 hidden md:flex">
          <Link
            to="/barang"
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            Barang
          </Link>
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            Jasa
          </Link>
          <Link
            to="/about"
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            Tentang Kami
          </Link>
        </div>
      </nav>
      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 left-0 h-full bg-white shadow-lg w-64 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 z-50 p-6`}
      >
        <button
          className="text-gray-800 text-2xl mb-4"
          onClick={() => setIsSidebarOpen(false)}
        >
          <FiX />
        </button>
        <nav className="flex flex-col space-y-4">
          <Link
            to="/barang"
            className="text-gray-700 hover:text-blue-500 font-medium"
            onClick={() => setIsSidebarOpen(false)}
          >
            Barang
          </Link>
          <Link
            to="/jasa"
            className="text-gray-700 hover:text-blue-500 font-medium"
            onClick={() => setIsSidebarOpen(false)}
          >
            Jasa
          </Link>
          <Link
            to="/tentang"
            className="text-gray-700 hover:text-blue-500 font-medium"
            onClick={() => setIsSidebarOpen(false)}
          >
            Tentang Kami
          </Link>
        </nav>
      </div>
      <div className="bg-white">
        {/* Hero Section */}
        <section className="bg-blue-50 bg-cover bg-center py-16 px-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
            Jual Dental Unit Berkualitas & Jasa Servis Profesional
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8">
            Menyediakan berbagai pilihan dental unit serta layanan servis
            terbaik untuk kebutuhan bisnis Anda.
          </p>
          <a
            href="#product"
            className="inline-block bg-blue-600 text-white text-lg font-semibold py-3 px-6 rounded-md shadow hover:bg-blue-700 transform hover:scale-105 transition duration-300"
          >
            Lihat Produk Kami
          </a>
        </section>
        {/* Gambar Besar sebagai Background */}
        <Swiper spaceBetween={50} slidesPerView={1} autoplay={{ delay: 3000 }}>
          <SwiperSlide>
            <img src="../src/assets/banner1.webp" alt="Promo 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="../src/assets/banner1.webp" alt="Promo 2" />
          </SwiperSlide>
        </Swiper>

        {/* Produk Unggulan */}
        <section className="py-16 px-4">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Produk Terbaru Kami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-48 h-auto mx-auto mb-4" // Menetapkan ukuran gambar secara eksplisit
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <p className="font-bold text-gray-800">{product.price}</p>
                <a
                  href={product.whatsappLink}
                  className="mt-4 inline-block bg-green-600 text-white text-lg font-semibold py-3 px-6 rounded-md shadow hover:bg-green-700 transform hover:scale-105 transition duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Beli Sekarang
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="bg-white">
        {/* Layanan Kami */}
        <section className="py-16 px-4 bg-gray-100">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Layanan Kami
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105 hover:shadow-xl"
              >
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-32 h-32 mx-auto mb-4 object-cover rounded-full"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {service.name}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimoni */}
        <section className="py-16 px-4 bg-blue-50">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Testimoni Pelanggan Kami
          </h2>
          <div className="space-y-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-4"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 object-cover rounded-full"
                />
                <div>
                  <p className="text-xl italic text-gray-700">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-lg text-gray-800">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      {/* Layanan Kami 
     <div className="p-6 max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">
          Layanan Kami
        </h2>
        <p className="text-gray-600 mt-2">
          Kami menawarkan berbagai layanan profesional untuk kebutuhan dental
          Anda:
        </p>
        <ul className="mt-4 space-y-3">
          <li className="bg-gray-100 p-3 rounded-lg shadow-md">
            ✅ Penjualan alat dental berkualitas
          </li>
          <li className="bg-gray-100 p-3 rounded-lg shadow-md">
            ✅ Perbaikan dan perawatan alat dental
          </li>
          <li className="bg-gray-100 p-3 rounded-lg shadow-md">
            ✅ Konsultasi dan dukungan teknis
          </li>
        </ul>

        {/* Testimoni Pelanggan 
        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 border-b-2 border-blue-500 pb-2">
            Testimoni Pelanggan
          </h2>
          <div className="mt-4 space-y-4">
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Pelayanan sangat memuaskan, alat-alatnya berkualitas tinggi!"
              </p>
              <p className="text-gray-800 font-semibold mt-2">
                - Dr. Andi, Jakarta
              </p>
            </div>
            <div className="bg-blue-100 p-4 rounded-lg shadow-md">
              <p className="text-gray-700 italic">
                "Karya Mandiri Dental selalu menjadi pilihan utama saya untuk
                kebutuhan dental."
              </p>
              <p className="text-gray-800 font-semibold mt-2">
                - Dr. Rina, Surabaya
              </p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default LandPage;
