import React from "react";
import TransitionEffect from "../utils/TransitionEffect";
import Button from "../elements/Button";
import Marquee from "react-fast-marquee";

const Home = ({ home }) => {
   const {
      title,
      subHeading,
      buttonTitle,
      homeVector,
      brand,
      impressions,
      engagement,
      brandPartners,
   } = home;

   return (
      <>
         <TransitionEffect />
         <div className="w-full py-10 px-5 lg:px-10" id="home">
            <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-10 w-full">
               <div className="flex flex-col items-start max-w-[712px] gap-6">
                  <h1 className="text-[30px] md:text-[72px] font-heading  md:leading-[5rem] font-semibold text-center md:text-start">
                     {title}
                  </h1>
                  <p className="text-center md:text-start text-[21px]">
                     {subHeading}
                  </p>
                  <div className="flex items-center justify-center md:justify-start w-full">
                     <Button title={buttonTitle} />
                  </div>
               </div>

               <img
                  src={homeVector}
                  alt="Home Vector"
                  className="w-full h-auto md:w-[719px] max-h-[810px]"
               />
            </div>
         </div>

         <div className="mt-5 w-full">
            <div className="flex flex-wrap items-center justify-center gap-10 lg:gap-[250px] w-full">
               <div className="flex items-center">
                  <img
                     src={brand.icon}
                     className="h-auto md:w-[74px] max-h-[73px]"
                  />
                  <div className="flex flex-col items-center gap-2">
                     <h3 className="text-[20px] md:text-[40px] font-bold">
                        {brand.count}
                     </h3>
                     <p className="text-primaryShade">{brand.title}</p>
                  </div>
               </div>

               <div className="flex items-center gap-2">
                  <img
                     src={impressions.icon}
                     className="h-auto md:w-[74px] max-h-[73px]"
                  />
                  <div className="flex flex-col items-start">
                     <h3 className="text-[20px] md:text-[40px] font-bold">
                        {impressions.count}
                     </h3>
                     <p className="text-primaryShade">{impressions.title}</p>
                  </div>
               </div>

               <div className="flex items-center gap-2">
                  <img
                     src={engagement.icon}
                     className="h-auto md:w-[74px] max-h-[73px]"
                  />
                  <div className="flex flex-col items-start">
                     <h3 className="text-[20px] md:text-[40px] font-bold">
                        {engagement.count}
                     </h3>
                     <p className="text-primaryShade">{engagement.title}</p>
                  </div>
               </div>
            </div>
         </div>

         <div className="mt-10 w-full px-5 lg:px-10">
            <div className="flex justify-center w-full">
               <h3 className="text-[30px] lg:text-[50px] font-bold font-helper text-center">OUR BUSINESS PARTNERS</h3>
            </div>
            <div className="w-full bg-white px-5 py-3 rounded-xl mt-5">
               <Marquee pauseOnHover={true} autoFill={false} speed={100}>
                  <div className="flex items-center gap-10">
                     {brandPartners.map((partner, idx) => {
                        return (
                           <div key={idx}>
                              <img
                                 src={partner.icon}
                                 className="w-[150px] lg:w-[200px] h-auto"
                              />
                           </div>
                        );
                     })}
                  </div>
               </Marquee>
            </div>
         </div>
      </>
   );
};

export default Home;
