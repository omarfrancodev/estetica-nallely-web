"use client"

import { usePathname } from "next/navigation"
import style from "./navbar-item.module.css"

interface Props {
    path: string,
    title: string
}

export const NavbarItem = ({ path, title }: Props) => {
    console.log(usePathname())
    const isActive = path === usePathname()
    return (
        <a href={path} className={`${style['navbar-item']} ${isActive ? style['navbar-item-active'] : ''}`}>
            {title}
        </a>
    )
}
