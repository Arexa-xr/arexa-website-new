import React from "react";
import Marquee from "react-fast-marquee";

const Testimonials = ({ testimonials }) => {
   const { heading, testimonialLists } = testimonials;
   const colors = [
      "from-purple-500 to-pink-500",
      "from-blue-500 to-green-500",
      "from-green-500 to-yellow-500",
      "from-yellow-500 to-red-500",
      "from-pink-500 to-purple-500",
   ];

   const cardWidth = "w-[400px]";
   const cardHeight = "h-80";

   return (
      <div className="w-full px-5 lg:px-10">
         <div className="flex flex-col items-center justify-center gap-5 w-full">
            <h3 className="text-[30px] md:text-[47px] font-heading font-bold">
               {heading}
            </h3>

            <Marquee
               pauseOnHover={true}
               speed={100}
               gradient={true}
               gradientWidth={50}
            >
               {testimonialLists.map((testimonial, idx) => (
                  <div
                     className={`flex flex-col items-start justify-between ${cardWidth} ${cardHeight} p-[2px] rounded-lg bg-gradient-to-r ${
                        colors[idx % colors.length]
                     } shadow-md mx-4`}
                     key={idx}
                  >
                     <div className="flex flex-col items-start justify-between bg-white w-full h-full p-6 rounded-lg">
                        <p className="text-lg text-black mb-4">
                           "{testimonial.desc}"
                        </p>
                        <div className="flex items-center">
                           <div>
                              <p className="font-bold text-black">
                                 {testimonial.name} <span>&#8594;</span>
                              </p>
                              <p className="text-gray-500">
                                 @{testimonial.designation}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
            </Marquee>
         </div>
      </div>
   );
};

export default Testimonials;
