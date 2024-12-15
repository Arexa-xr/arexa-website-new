import React from "react";

const Services = ({ services }) => {
   const { heading, servicesList } = services;
   return (
      <section id="services" className="w-full py-20 px-5 lg:px-10">
         <div className="flex flex-col items-center justify-center w-full">
            <h2 className="text-[30px] md:text-[47px] max-w-[1000px] font-heading text-center font-bold lg:leading-[4rem]">
               {heading}
            </h2>
         </div>

         <div className="flex flex-wrap items-center justify-center w-full gap-5 py-10">
            {servicesList.map((service, idx) => {
               return (
                  <div
                     key={idx}
                     className="bg-white max-w-[400.42px] min-h-[200px] rounded-xl px-2 py-3"
                  >
                     <div className="flex items-center gap-2">
                        <img src={service.icon} />
                        <div className="flex flex-col items-start gap-2">
                           <h3 className="font-helper font-bold text-xl">
                              {service.title}
                           </h3>
                           <p>{service.desc}</p>
                        </div>
                     </div>
                  </div>
               );
            })}
         </div>
      </section>
   );
};

export default Services;
