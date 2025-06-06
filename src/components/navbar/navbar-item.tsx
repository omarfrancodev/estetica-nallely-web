import { useActiveHash } from "@/lib/hooks/active-has"
import { usePathname } from "next/navigation"
import style from "./navbar-item.module.css"
import Link from "next/link"

interface Props {
    path: string  // puede ser "#servicios" o "/about"
    children: React.ReactNode
    onClick?: () => void
}

export const NavbarItem = ({ path, children, onClick }: Props) => {
    const pathname = usePathname() || ""
    const isHashLink = path.startsWith("#")
    const isActive = isHashLink
        ? useActiveHash(path)            // si es un hash, compruebo con mi hook
        : pathname === path             // si es ruta normal

    return (
        <Link
            href={path}
            scroll={false}
            onClick={onClick}
            className={`${style["navbar-item"]} ${isActive ? style["navbar-item-active"] : ""}`}
        >
            {children}
        </Link>
    )
}
