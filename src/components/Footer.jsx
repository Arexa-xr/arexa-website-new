import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ footer }) => {
   const {
      footerContent,
      ourServicesFirst,
      ourServicesSecond,
      quickLinks,
      logo,
      socials,
   } = footer;
   return (
      <div className="w-full px-5 sm:px-10 mb-5 mt-10">
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center md:gap-20 w-full border-b-2">
            <h3 className="text-xl font-medium font-heading">
               {footerContent}
            </h3>

            <div className="flex flex-col items-start gap-4 mt-5">
               <h3 className="font-bold font-heading">Our Services</h3>
               <div className="flex flex-col items-start gap-2">
                  {ourServicesFirst.map((service, idx) => {
                     return (
                        <div key={idx}>
                           <Link>{service.label}</Link>
                        </div>
                     );
                  })}
               </div>
            </div>

            <div className="flex flex-col items-start gap-4 mt-5">
               <h3 className="font-bold font-heading">Our Services</h3>
               <div className="flex flex-col items-start gap-2">
                  {ourServicesSecond.map((service, idx) => {
                     return (
                        <div key={idx}>
                           <Link>{service.label}</Link>
                        </div>
                     );
                  })}
               </div>
            </div>

            <div className="flex flex-col items-start gap-4 mt-5">
               <h3 className="font-bold font-heading">Quick Links</h3>
               <div className="flex flex-col items-start gap-2">
                  {quickLinks.map((link, idx) => {
                     return (
                        <div key={idx}>
                           <Link>{link.label}</Link>
                        </div>
                     );
                  })}
               </div>
            </div>
         </div>

         <div className="flex flex-col sm:flex-row gap-5 items-start justify-between w-full mt-5">
            <img src={logo} width={100} />
            <div className="flex items-center gap-[48px]">
               {socials.map((social, idx) => {
                  return (
                     <div key={idx}>
                        <img src={social.icon} />
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Footer;
