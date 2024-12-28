import React, { ButtonHTMLAttributes } from 'react'
export default function Button({ children, className, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
   
    return (
        <button
            className={`capitalize dark:text-dark-primary text-light-primary border-2 border-light-primary dark:border-dark-primary p-2 py-3 text-sm 
                ${className}`}
            {...props}>{children}</button>
    )
}
