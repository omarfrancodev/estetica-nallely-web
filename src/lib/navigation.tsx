import { FaRegComments } from "react-icons/fa";
import { LiaElementor } from "react-icons/lia";
import { LuHouse, LuInfo } from "react-icons/lu";
import { MdPriceCheck } from "react-icons/md";
import { RiContactsLine } from "react-icons/ri";
import { TbChartDots3 } from "react-icons/tb";

interface NavigationItem {
    path: string,
    title: string,
    children: React.ReactNode,
}

export const navigation: NavigationItem[] = [
    {
        path: "#",
        title: "Inicio",
        children: <div className="flex items-center justify-center gap-2"><LuHouse size={24} /></div>
    },
    {
        path: "#servicios",
        title: "Servicios",
        children: <div className="flex items-center justify-center gap-2"><LiaElementor size={24} /></div>
    },
    {
        path: "#seguimiento",
        title: "Seguimiento",
        children: <div className="flex items-center justify-center gap-2"><TbChartDots3 size={24} /></div>
    },
    {
        path: "#nosotros",
        title: "Nosotros",
        children: <div className="flex items-center justify-center gap-2"><LuInfo size={24} /></div>
    },
    {
        path: "#nosotros",
        title: "Testimonios",
        children: <div className="flex items-center justify-center gap-2"><FaRegComments size={24} /></div>
    },
    {
        path: "#cotizador",
        title: "Cotizador",
        children: <div className="flex items-center justify-center gap-2"><MdPriceCheck size={24} /></div>
    },
    {
        path: "#cotizador",
        title: "Contacto",
        children: <div className="flex items-center justify-center gap-2"><RiContactsLine size={24} /></div>
    },
]