import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const links = [{
        name: "Home",
        href: "/"
    }, {
        name: "Mentors",
        href: "/mentors"
    }, {
        name: "Features",
        href: "/features"
    }, {
        name: "Lessons",
        href: "/lessons"
    }, {
        name: "Pricing",
        href: "/pricing"
    }, {
        name: "Contact Us",
        href: "/contact"
    }]
    return (
        <div className="bg-gray-900 border-t-[1px] border-gray-800 mt-16">
            <div className="container m-auto">
                <div className="px-4 flex flex-col items-center gap-8 lg:flex-row py-6 justify-between">
                    <div className="left flex flex-col items-center justify-center lg:flex-row gap-8">
                        <div className="heading">
                            <Link href={"/"} className="logo font-semibold text-xl">Pixelated<span className="text-[#00FFFF]">Professor</span></Link>

                        </div>
                        <div className="copy"> &copy; 2024 PixelatedProfessor </div>
                    </div>
                    <ul className="text-sm lg:text-base flex flex-wrap  items-center justify-center gap-4">
                        {links.map((link, key) => (
                            <li key={key}>
                                <Link href={link.href} className="" >{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
