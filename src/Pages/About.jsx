// import { useState } from "react";
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

// function LandPage() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   return (
//     <div className="bg-white">
//       <header className="absolute inset-x-0 top-0 z-50">
//         <nav
//           className="flex items-center justify-between p-6 lg:px-8"
//           aria-label="Global"
//         >
//           {/* ... Kode navigasi yang ada ... */}
//         </nav>
//         <Dialog
//           as="div"
//           className="lg:hidden"
//           open={mobileMenuOpen}
//           onClose={setMobileMenuOpen}
//         >
//           {/* ... Kode menu mobile yang ada ... */}
//         </Dialog>
//       </header>
//       <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
//           Tentang Kami
//         </h2>
//         <p className="mt-4 text-gray-600">
//           Di sini Anda dapat menambahkan keterangan tentang web Anda. Ceritakan
//           tentang tujuan, visi, dan misi perusahaan Anda.
//         </p>
//         <iframe
//           src="https://www.google.com/maps/place/6%C2%B018'05.1%22S+106%C2%B058'00.9%22E/@-6.3004586,106.9672609,17.78z/data=!4m4!3m3!8m2!3d-6.301406!4d106.966917?entry=ttu
//           ."
//           width="100%"
//           height="450"
//           style={{ border: 0 }}
//           allowFullScreen=""
//           loading="lazy"
//         ></iframe>
//       </div>
//     </div>
//   );
// }

// export default LandPage;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const AboutPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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

      {/* Identitas Bisnis */}
      <div className="p-6 max-w-4xl mx-auto mt-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Tentang Kami
        </h1>
        <p className="text-gray-600 text-lg text-center mb-4">
          Karya Mandiri Dental adalah penyedia alat dan jasa dental terbaik,
          berdedikasi untuk memenuhi kebutuhan profesional di bidang kesehatan
          gigi.
        </p>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">
            Identitas Bisnis
          </h2>
          <ul className="mt-2 text-gray-700">
            <li>
              <strong>Nama Perusahaan:</strong> Karya Mandiri Dental
            </li>
            <li>
              <strong>Didirikan:</strong> 2002
            </li>
            <li>
              <strong>Alamat:</strong> Jl. raya pondok benda no 26 RT 05 RW 02,
              Jatiasih Kota Bekasi
            </li>
            <li>
              <strong>Email:</strong> sleevegodv@gmail.com
            </li>
            <li>
              <strong>Telepon:</strong> +62 852-8314-2289
            </li>
          </ul>
        </div>

        {/* Lokasi Google Maps */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800">Lokasi Kami</h2>
          <div className="mt-2">
            <iframe
              title="Lokasi Karya Mandiri Dental"
              className="w-full h-64 rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3965.7127650746793!2d106.96442707603836!3d-6.301421661673422!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwMTgnMDUuMSJTIDEwNsKwNTgnMDEuMiJF!5e0!3m2!1sid!2sid!4v1742488880642!5m2!1sid!2sid"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

// import { useState } from "react";
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

// function About() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
//     </div>
//   );
// }

// export default About;
