import React from "react";
import logo from "/logo.svg";
import Loader from "../elements/Loader";

const SplashScreen = () => {
   return (
      <div className="w-full h-[80vh] md:h-screen">
         <div className="flex flex-col items-center justify-center w-full h-full">
            <Loader />
            <img src={logo} />
         </div>
      </div>
   );
};

export default SplashScreen;
