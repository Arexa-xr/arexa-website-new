import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./utils/Layout";
import Home from "./pages/Home";
import SplashScreen from "./pages/SplashScreen";
import data from "./data/landing-page.json";
import Services from "./pages/Services";
import Clients from "./pages/Clients";
import OurWork from "./pages/OurWork";
import Testimonials from "./pages/Testimonials";

const App = () => {
   const [splashScreen, setSplashScreen] = useState(true);

   useEffect(() => {
      const timer = setTimeout(() => {
         setSplashScreen(false);
      }, 5000);

      return () => clearTimeout(timer);
   }, []);

   return (
      <BrowserRouter>
         {splashScreen ? (
            <SplashScreen />
         ) : (
            <Layout>
               <Routes>
                  <Route
                     path="/"
                     element={
                        <>
                           <div id="home">
                              <Home home={data.home} />
                           </div>
                           <div id="services">
                              <Services services={data.services} />
                           </div>
                           <div id="work">
                              <OurWork work={data.work} />
                           </div>
                           <div id="clients">
                              <Clients clients={data.clients} />
                           </div>
                           <div>
                              <Testimonials testimonials={data.testimonials} />
                           </div>
                        </>
                     }
                  />
               </Routes>
            </Layout>
         )}
      </BrowserRouter>
   );
};

export default App;
