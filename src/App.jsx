import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./utils/Layout";
import Home from "./pages/Home";
import SplashScreen from "./pages/SplashScreen";
import data from "./data/landing-page.json";

const App = () => {
   const [splashScreen, setSplashScreen] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setSplashScreen(false);
      }, 3500);

      return () => clearTimeout(timer);
   }, []);

   return (
      <BrowserRouter>
         {splashScreen ? (
            <SplashScreen />
         ) : (
            <Layout>
               <Routes>
                  <Route path="/" element={<Home home={data.home} />} />
               </Routes>
            </Layout>
         )}
      </BrowserRouter>
   );
};

export default App;
