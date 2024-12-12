import React from "react";

const OurWork = ({ work }) => {
   const { heading, videos } = work;
   return (
      <section id="work" className="w-full px-5 lg:px-10">
         <div className="flex flex-col items-center justify-center w-full">
            <h2 className="text-[30px] md:text-[47px] font-heading font-bold">
               {heading}
            </h2>

            <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center gap-5">
               {videos.map((video, idx) => {
                  return (
                     <div
                        key={idx}
                        className="bg-white max-w-[271px] lg:min-h-[532px] p-5 rounded-xl"
                     >
                        <div className="flex flex-col items-center gap-3">
                           <video
                              src={video.videoUrl}
                              loop
                              autoPlay
                              muted
                              playsInline
                              className="rounded-xl"
                              preload="metadata"
                              onError={(e) =>
                                 console.error("Video failed to load:", e)
                              }
                           />
                           <h3>{video.tag}</h3>
                           <h3 className="font-bold text-xl text-center">
                              {video.brandName}
                           </h3>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </section>
   );
};

export default OurWork;
