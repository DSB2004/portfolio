import React, { ReactNode } from "react";

import { Link } from "react-router-dom";
export default function ContactCard({
  to = "#",
  className,
  children,
  title,
}: {
  to?: string;
  className?: string;
  children: ReactNode;
  title: string;
}) {
  return (
    <Link className="relative group" to={to} target="_blank">
      {/* Title section with background blur */}
      <div
        className={`bg-[#ffffff19] text-white p-1.5 shadow-lg absolute -top-6 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:-top-9 transition-all duration-300 text-xs rounded-sm `}
      >
        {title}
      </div>

      {/* Icon section */}
      <div
        className={`relative rounded-full bg-[#ffffff12] dark:bg-dark p-3 overflow-hidden  `}
      >
        <div
          className={`h-full w-0 absolute top-0 left-0 z-0 group-hover:w-full  transition-all duration-300 ${className}`}
        ></div>
        {children}
      </div>
    </Link>
  );
}
