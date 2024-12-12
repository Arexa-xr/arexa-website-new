import React from "react";

const Clients = ({ clients }) => {
   const { heading, imageUrl } = clients;
   return (
      <div className="w-full px-5 lg:px-10">
         <div className="flex flex-col items-center justify-center w-full">
            <h2 className="text-[30px] md:text-[47px] font-heading font-bold">
               {heading}
            </h2>

            <div className="py-5">
               <img src={imageUrl} />
            </div>
         </div>
      </div>
   );
};

export default Clients;
