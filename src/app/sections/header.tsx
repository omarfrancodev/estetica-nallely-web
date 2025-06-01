"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Scissors } from "lucide-react"
import { NavbarItem } from "@/components"
import Link from "next/link"


const navigation = [
    { path: "/", title: "Inicio" },
    { path: "#servicios", title: "Servicios" },
    { path: "#seguimiento", title: "Seguimiento" },
    { path: "#nosotros", title: "Nosotros" },
    { path: "#nosotros", title: "Testimonios" },
    { path: "#cotizador", title: "Cotizador" },
    { path: "#cotizador", title: "Contacto" },
]

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <header className="fixed top-0 w-full z-50 bg-gradient-to-r from-purple-700 to-purple-400 backdrop-blur-md border-b border-purple-100">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="#" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <Scissors className="w-5 h-5 text-purple-700" />
                        </div>
                        <span className="text-2xl font-bold bg-clip-text text-white">
                            NALLELY
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-4">
                        {navigation.map((item, index) => (
                            <NavbarItem key={index} path={item.path} title={item.title} />
                        ))}
                    </nav>

                    <div className="hidden lg:flex items-center space-x-4">
                        <Button className=" bg-white border-yellow-300 border-2 text-yellow-600 hover:bg-yellow-100 hover:text-gray-700 cursor-pointer">
                            Reservar Cita
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <nav className="lg:hidden mt-4 pb-4 border-t border-purple-100">
                        <div className="flex flex-col space-y-4 pt-4">
                            {navigation.map((item, index) => (
                                <NavbarItem key={index} path={item.path} title={item.title} />
                            ))}
                            <div className="flex flex-col space-y-2 pt-4">
                                <Button className=" bg-white border-yellow-300 border-2 text-yellow-600 hover:bg-yellow-100 hover:text-gray-700 cursor-pointer">
                                    Reservar Cita
                                </Button>
                            </div>
                        </div>
                    </nav>
                )}
            </div>
        </header>
    )
}
