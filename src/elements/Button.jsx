import React from "react";

const Button = ({ title, className, onClick }) => {
   return (
      <button
         className={`px-2 py-3 rounded-full bg-primary text-background text-xl font-bold ${className}`}
         onClick={onClick}
      >
         {title}
      </button>
   );
};

export default Button;
