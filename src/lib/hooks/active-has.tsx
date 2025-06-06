import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

export function useActiveHash(targetHash: string) {
    const pathname = usePathname() || ""
    const searchParams = useSearchParams()
    const [active, setActive] = useState(false)

    useEffect(() => {
        // Si el path es “/” y el hash actual coincide con targetHash:
        const currentHash = window.location.hash // ejemplo: "#servicios"
        if (pathname === "/" && currentHash === targetHash) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [pathname, searchParams]) // searchParams cambia si cambia #algo

    return active
}
