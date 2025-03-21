// import React, { useState } from "react";
// import { Dialog } from "@headlessui/react";
// import {
//   Bars3Icon,
//   XMarkIcon,
//   ArrowPathIcon,
//   HandThumbUpIcon,
//   FingerPrintIcon,
//   LockClosedIcon,
// } from "@heroicons/react/24/outline";

// const navigation = [
//   { name: "Barang", href: "/barang" },
//   { name: "Jasa", href: "#" },
//   { name: "Review", href: "#" },
//   { name: "Tentang Kami", href: "/about" },
// ];

// const products = [
//   {
//     id: 1,
//     judul: "Nama_Dental",
//     name: "Earthen Bottle",
//     fitur: [
//       { name: "Feature 1", description: "Description for feature 1" },
//       { name: "Feature 2", description: "Description for feature 2" },
//     ],
//     href: "#",
//     price: "$48",
//     image: "../src/assets/bener.jpg",
//     imageSrc: [
//       "../src/assets/bener.jpg",
//       "../src/assets/bener.jpg",
//       "../src/assets/bener.jpg",
//       "../src/assets/bener.jpg",
//     ],
//     imageAlt:
//       "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
//   },
//   // More products...
// ];

// function Barang() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = (productId) => {
//     // Use a different variable name for the found product
//     const selectedProduct = products.find(
//       (product) => product.id === productId
//     );
//     if (selectedProduct) {
//       setSelectedProduct(selectedProduct);
//       setIsModalOpen(true);
//     }
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//     setIsModalOpen(false);
//   };

//   return (
//     <div className="bg-white">
//       <header className="absolute inset-x-0 top-0 z-50">
//         <nav
//           className="flex items-center justify-between p-6 lg:px-8"
//           aria-label="Global"
//         >
//           <div className="flex lg:flex-1">
//             <a href="/" className="-m-1.5 p-1.5">
//               <span
//                 className="sr-only
//               "
//               >
//                 Your Company
//               </span>
//               <img
//                 className="h-8 w-auto"
//                 src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                 alt=""
//               />
//             </a>
//           </div>
//           <div className="flex lg:hidden">
//             <button
//               type="button"
//               className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
//               onClick={() => setMobileMenuOpen(true)}
//             >
//               <span className="sr-only">Open main menu</span>
//               <Bars3Icon className="h-6 w-6" aria-hidden="true" />
//             </button>
//           </div>
//           <div className="hidden lg:flex lg:gap-x-12">
//             {navigation.map((item) => (
//               <a
//                 key={item.name}
//                 href={item.href}
//                 className="text-sm font-semibold leading-6 text-gray-900"
//               >
//                 {item.name}
//               </a>
//             ))}
//           </div>
//           <div className="hidden lg:flex lg:flex-1 lg:justify-end">
//             <a
//               href="#"
//               className="text-sm font-semibold leading-6 text-gray-900"
//             ></a>
//           </div>
//         </nav>
//         <Dialog
//           as="div"
//           className="lg:hidden"
//           open={mobileMenuOpen}
//           onClose={setMobileMenuOpen}
//           backdrop="static"
//         >
//           <div className="fixed inset-0 z-50" />
//           <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
//             <div className="flex items-center justify-between">
//               <a href="#" className="-m-1.5 p-1.5">
//                 <span className="sr-only">Your Company</span>
//                 <img
//                   className="h-8 w-auto"
//                   src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
//                   alt=""
//                 />
//               </a>
//               <button
//                 type="button"
//                 className="-m-2.5 rounded-md p-2.5 text-gray-700"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 <span className="sr-only">Close menu</span>
//                 <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//               </button>
//             </div>
//             <div className="mt-6 flow-root">
//               <div className="-my-6 divide-y divide-gray-500/10">
//                 <div className="space-y-2 py-6">
//                   {navigation.map((item) => (
//                     <a
//                       key={item.name}
//                       href={item.href}
//                       className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                     >
//                       {item.name}
//                     </a>
//                   ))}
//                 </div>
//                 <div className="py-6">
//                   <a
//                     href="#"
//                     className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
//                   ></a>
//                 </div>
//               </div>
//             </div>
//           </Dialog.Panel>
//         </Dialog>
//       </header>
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="sr-only">Products</h2>
//         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//           {products.map((product) => (
//             <div key={product.id} className="group relative">
//               <button
//                 onClick={() => openModal(product.id)} // Pass the product ID to openModal
//                 className="w-full h-full absolute inset-0 transition-opacity duration-300 opacity-0 hover:opacity-75"
//               >
//                 <img
//                   src={product.image}
//                   alt={product.imageAlt}
//                   className="h-full w-full object-cover object-center"
//                   style={{ objectFit: "cover" }} // Tambahkan properti object-fit di sini
//                 />
//               </button>
//               <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
//               <p className="mt-1 text-lg font-medium text-gray-900">
//                 {product.price}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <Dialog
//         as="div"
//         className={`fixed inset-0 z-50 ${isModalOpen ? "block" : "hidden"}`}
//         open={isModalOpen}
//         onClose={closeModal}
//         backdrop="static"
//       >
//         <div className="flex items-center justify-center min-h-screen">
//           <div className="bg-white p-4 rounded-lg shadow-2xl sm:p-6 lg:p-8 max-h-screen overflow-y-auto md:max-w-3xl mx-auto">
//             <button
//               type="button"
//               className="absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8"
//               onClick={() => closeModal()} // Menutup modal saat tombol diklik
//             >
//               <span className="sr-only">Close</span>
//               <XMarkIcon className="h-6 w-6" aria-hidden="true" />
//             </button>

//             <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
//               <div>
//                 <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
//                   {selectedProduct?.judul}
//                 </h2>
//                 <p className="mt-4 text-gray-500">{selectedProduct?.price}</p>
//                 <p className="mt-4 text-gray-500">
//                   {selectedProduct?.imageAlt}
//                 </p>
//                 <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
//                   {selectedProduct?.fitur.map((feature) => (
//                     <div
//                       key={feature.name}
//                       className="border-t border-gray-200 pt-4"
//                     >
//                       <dt className="font-medium text-gray-900">
//                         {feature.name}
//                       </dt>
//                       <dd className="mt-2 text-sm text-gray-500">
//                         {feature.description}
//                       </dd>
//                     </div>
//                   ))}
//                 </dl>
//               </div>
//               <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
//                 {selectedProduct?.imageSrc.map((imageUrl, index) => (
//                   <img
//                     key={index}
//                     src={imageUrl}
//                     alt={`Image ${index + 1}`}
//                     className="rounded-lg bg-gray-100"
//                   />
//                 ))}
//                 {/* Add more images here if needed */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </Dialog>
//     </div>
//   );
// }

// export default Barang;

import React, { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FiMenu, FiX } from "react-icons/fi";

const products = [
  {
    id: 1,
    judul: "Nama_Dental",
    name: "Earthen Bottle",
    price: "$48",
    images: [
      "../src/assets/bener.jpg",
      "../src/assets/bener.jpg",
      "../src/assets/bener.jpg",
    ],
    descriptions: [
      "Deskripsi gambar pertama.",
      "Deskripsi gambar kedua.",
      "Deskripsi gambar ketiga.",
    ],
  },
];

const Barang = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
    setActiveIndex(0);
  };

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
          className="text-xl font-bold text-gray-800 hover:text-blue-500"
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
            to="/jasa"
            className="text-gray-700 hover:text-blue-500 font-medium"
          >
            Jasa
          </Link>
          <Link
            to="/tentang"
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

      <div className="p-6 max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Daftar Barang
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md"
              />
              <h2 className="text-lg font-semibold text-gray-800 mt-2">
                {product.name}
              </h2>
              <p className="text-gray-600">{product.price}</p>
              <button
                onClick={() => openModal(product)}
                className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full font-medium transition"
              >
                Lihat Detail
              </button>
            </div>
          ))}
        </div>
      </div>

      <Dialog
        open={isModalOpen}
        onClose={closeModal}
        className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
      >
        <Dialog.Panel className="bg-white p-8 rounded-lg shadow-xl max-w-4xl w-full">
          {selectedProduct && (
            <>
              <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                {selectedProduct.name}
              </h2>
              <Swiper
                onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                className="w-full h-96 my-4"
              >
                {selectedProduct.images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-96 object-cover rounded-md"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
              <p className="text-gray-700 font-semibold text-lg text-center">
                {selectedProduct.judul}
              </p>
              <p className="text-gray-500 font-semibold text-xl text-center mb-4">
                {selectedProduct.price}
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-4 text-center">
                {selectedProduct.descriptions[activeIndex]}
              </p>
              <button
                onClick={closeModal}
                className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded w-full font-medium transition"
              >
                Tutup
              </button>
            </>
          )}
        </Dialog.Panel>
      </Dialog>
    </div>
  );
};

export default Barang;
