import React from "react";
import TransitionEffect from "../utils/TransitionEffect";
import Button from "../elements/Button";

const Home = ({ home }) => {
   const { title, subHeading, buttonTitle, homeVector } = home;

   return (
      <>
         <TransitionEffect />
         <div className="w-full py-10 px-5 md:px-10">
            <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 w-full">
               <div className="flex flex-col items-start max-w-[712px] gap-6">
                  <h1 className="text-[30px] md:text-[72px] font-heading  md:leading-[5rem] font-semibold text-center md:text-start">
                     {title}
                  </h1>
                  <p className="text-center md:text-start text-[21px]">{subHeading}</p>
                  <Button title={buttonTitle} />
               </div>

               <img
                  src={homeVector}
                  alt="Home Vector"
                  className="w-full h-auto md:w-[719px] max-h-[810px]"
               />
            </div>
         </div>
      </>
   );
};

export default Home;
