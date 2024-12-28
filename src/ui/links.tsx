import { LinkHTMLAttributes, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Links(props: LinkHTMLAttributes<HTMLLinkElement>) {
    const { className, href, onClick, children } = props

    return (
        <Link
            // @ts-ignore
            onClick={e => { if (onClick) { onClick(e) } }}
            className={`${className}  text-light-primary dark:text-dark-primary opacity-80 transition-all duration-50 hover:opacity-100`}
            to={href || "#"}>
            {children}
        </Link>
    )
}
