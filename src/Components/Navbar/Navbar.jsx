// "use client"

// import Link from "next/link";
// import { CiSearch } from "react-icons/ci";
// import { FaTwitter, FaTelegram, FaDesktop } from "react-icons/fa";

// const Navbar = () => {
//   return (
//     <nav className="flex justify-between items-center p-4 bg-white shadow sticky top-0 right-0 left-0">
//       {/* Left Section */}
//       <div className="flex items-center space-x-4">
//         <div className="text-lg font-bold flex  cursor-pointer " >
//           <span className="text-4xl select-none">●</span>
//           <span className="text-4xl select-none">▲</span>
//           <span className="text-4xl select-none">■</span>
//           <span className="text-4xl select-none">△</span>
//         </div>
//       </div>

//       {/* Search Bar */}
//       <div className="relative top-0 flex items-center  bg-gray-200 px-4 py-2 border rounded-full gap-2 bottom-2 border-slate-400  ">
//         <CiSearch className=" text-xl font-thin" />
//         <input
//           type="text"
//           placeholder="Search ai agents..."
//           className=" bg-gray-200 focus:outline-none overflow-hidden w-[70%] "
//         />
//         <span className="absolute right-3  ">⌘ K</span>
//       </div>

//       {/* Right Section */}
//       <div className="flex items-center space-x-4">
//         <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//           <FaTwitter className="text-gray-700 w-5 h-5" />
//         </a>
//         <a
//           href="https://telegram.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           <FaTelegram className="text-gray-700 w-5 h-5" />
//         </a>
//         <a href="#">
//           <FaDesktop className="text-gray-700 w-5 h-5" />
//         </a>
//         <Link href="/start-buying">
//           <button className="px-4 py-2 bg-black text-white rounded font-light">
//             Start Buying
//           </button>
//         </Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
"use client";
import React, { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { TiSocialTwitter, TiSocialLinkedin } from "react-icons/ti";
import { IoIosDesktop } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" flex items-center justify-center md:justify-between flex-row-reverse md:flex-row px-4 py-3 bg-white shadow-md md:px-8  sticky top-0 right-0 left-0 ">
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-1 ">
          <span className="w-4 h-4 bg-black rounded-full"></span>
          <span className="w-4 h-4 bg-black"></span>
          <span className="w-4 h-4 bg-black rounded-full"></span>
        </div>
      </div>

      <div className="hidden md:flex items-center border px-4 py-2 rounded-full shadow-sm  ">
        <input
          type="text"
          placeholder="Search ai agents..."
          className=" focus:outline-none "
        />
        <button className="ml-2 text-gray-500 hover:text-black">⌘ K</button>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <a href="#" className="text-black text-lg ">
          <TiSocialTwitter />
        </a>
        <a href="#" className="text-black text-lg ">
          <TiSocialLinkedin />
        </a>
        <a href="#" className="text-black text-lg ">
          <IoIosDesktop />
        </a>
        <button className="px-4 py-2 bg-black text-white rounded">
          Start Buying
        </button>
      </div>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" md:hidden focus:outline-none text-black absolute left-2 "
      >
        {isOpen ? <RxCross2 /> : <FaAlignJustify />}
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg ">
          <div className="flex flex-col items-start p-4 space-y-4">


         <div className=" md:hidden items-center border px-4 py-2 rounded-full shadow-sm  ">
        <input
          type="text"
          placeholder="Search ai agents..."
          className=" focus:outline-none "
        />
        <button className="ml-2 text-gray-500 hover:text-black">⌘ K</button>
      </div>

            <div className="flex items-center space-x-4">
              <a href="#" className="text-black">
                <TiSocialTwitter />
              </a>
              <a href="#" className="text-black">
                <TiSocialLinkedin />
              </a>
              <a href="#" className="text-black">
                <IoIosDesktop />
              </a>
            </div>

            <button className="px-4 py-2 bg-black text-white rounded">
              Start Buying
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
