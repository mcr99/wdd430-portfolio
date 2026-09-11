"use client";


import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLinks() {
    const pathname = usePathname()

    return (
        <nav className="max-w-4xl mx-auto px-4 flex items-center w-full justify-end gap-5">
            <Link href="/" className={pathname === "/" ? "text-yellow-300 font-bold" : ""} aria-current={pathname === "/" ? "page" : undefined}>Home</Link>
            <Link href="/about" className={pathname === "/about" ? "text-yellow-300 font-bold" : ""} aria-current={pathname === "/about" ? "page" : undefined}>About</Link>
            <Link href="/contact" className={pathname === "/contact" ? "text-yellow-300 font-bold" : ""} aria-current={pathname === "/contact" ? "page" : undefined}>Contact</Link>
        </nav>
    )
}