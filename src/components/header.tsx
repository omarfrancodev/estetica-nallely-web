"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { NavbarItem } from "@/components"
import Link from "next/link"
import { navigation } from "@/lib/navigation"
import { LuScissors, LuMenu, LuX, LuHouse, LuInfo } from "react-icons/lu"
import { FaRegComments } from "react-icons/fa"
import { LiaElementor } from "react-icons/lia"
import { MdPriceCheck } from "react-icons/md"
import { RiContactsLine } from "react-icons/ri"
import { TbChartDots3 } from "react-icons/tb"


export const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navbarAction = (path: string) => {
        setIsMenuOpen(false)
        window.location.href = path
    }

    return (
        <>
            <header className="h-16 fixed bottom-0 lg:top-0 w-full flex justify-center z-50 bg-gradient-to-r from-purple-700 to-purple-400 backdrop-blur-md border-purple-100 ">
                <div className="flex container h-full">
                    <div className="flex flex-1 items-center justify-between mx-auto px-4">
                        <Link href="#" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                                <LuScissors className="w-5 h-5 text-purple-700" />
                            </div>
                            <span className="text-2xl font-bold bg-clip-text text-white">
                                NALLELY
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-4">
                            {navigation.map((item, index) => (
                                <NavbarItem key={index} onClick={() => { window.location.href = item.path }} path={item.path} children={item.title} />
                            ))}
                        </nav>

                        <div className="hidden lg:flex items-center space-x-4">
                            <Button className=" bg-white border-yellow-300 border-2 text-yellow-600 hover:bg-yellow-100 hover:text-gray-700 cursor-pointer">
                                Reservar Cita
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button className=" text-white lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <LuX className="w-6 h-6" /> : <LuMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </header>

            <nav
                className={`
                    lg:hidden
                    fixed
                    bottom-16
                    left-0
                    w-full flex justify-center
                    p-4
                    z-40
                    bg-gradient-to-r from-purple-700 to-purple-400
                    transform
                    transition-transform
                    duration-500
                    ease-in-out
                    ${isMenuOpen ? "translate-y-0" : "translate-y-full"}
                    `}>
                <div className="flex flex-col container">

                    <div className="flex flex-row flex-wrap gap-4 justify-center">
                        {navigation.map((item, index) => (
                            <NavbarItem key={index} onClick={() => navbarAction(item.path)} path={item.path} children={item.children} />
                        ))}
                    </div>
                    <div className="flex flex-col space-y-2 pt-4">
                        <Button className=" bg-white border-yellow-300 border-2 text-yellow-600 hover:bg-yellow-100 hover:text-gray-700 cursor-pointer">
                            <span className="text-lg">
                                Reservar Cita
                            </span>
                        </Button>
                    </div>
                </div>
            </nav>
        </>
    )
}
