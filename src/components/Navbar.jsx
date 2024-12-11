import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosClose, IoIosMenu } from "react-icons/io";

const Navbar = ({ navbar }) => {
   const { logo, navlinks } = navbar;
   const location = useLocation();

   const [nav, setNav] = useState(false);
   const handleChange = () => {
      setNav(!nav);
   };

   return (
      <div className="w-full h-28 px-5 sm:px-10">
         <div className="flex items-center justify-between w-full h-full">
            <Link to="/">
               <img
                  src={logo}
                  width={160}
                  alt="Logo"
                  className="cursor-pointer"
               />
            </Link>

            <div className="hidden md:block max-w-[828px] bg-secondary rounded-full py-[10px] px-[20px]">
               <div className="flex items-center gap-[46px]">
                  {navlinks.map((link, idx) => (
                     <ul key={idx} className="font-bold">
                        <Link to={link.path}>
                           <li
                              className={`${
                                 location.pathname === link.path
                                    ? "bg-nav p-[10px] rounded-full"
                                    : ""
                              } hover:text-primary transition-colors duration-300`}
                           >
                              {link.label}
                           </li>
                        </Link>
                     </ul>
                  ))}
               </div>
            </div>

            <div
               className="block md:hidden bg-[#fff] p-2 rounded-xl cursor-pointer"
               onClick={handleChange}
            >
               {nav ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
            </div>
         </div>

         {nav && (
            <div className="md:hidden absolute top-28 left-0 w-full bg-secondary p-5 shadow-lg z-10">
               <ul className="flex flex-col gap-4">
                  {navlinks.map((link, idx) => (
                     <Link to={link.path} key={idx} onClick={handleChange}>
                        <li
                           className={`${
                              location.pathname === link.path
                                 ? "bg-nav p-3 rounded-lg"
                                 : ""
                           } font-bold text-lg hover:text-primary transition-colors duration-300`}
                        >
                           {link.label}
                        </li>
                     </Link>
                  ))}
               </ul>
            </div>
         )}
      </div>
   );
};

export default Navbar;
