import React, { ButtonHTMLAttributes } from "react";
export default function Button({
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`bg-[#6795C3] text-white  rounded-full px-4 py-2 md:px-6 md:py-3 text-[10px] md:text-sm 
        flex items-center 
                ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
