import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <div className="md:px-4">

            <div className="container m-auto xl:flex xl:mt-6">
                <div className="left flex flex-col gap-3 px-4 md:pl-0 md:pr-5 lg:pr-8 xl:w-1/2 xl:justify-center md:items-center  ">
                    <div className="heading font-bold text-white text-4xl mt-14 md:text-6xl md:text-center">Mastering computer science fundamentals</div>
                    <div className="para text-white mt-3  md:text-center">The Pixelated Professor is an online learning platform that provides interactive courses and projects in Computer Science to high schoolers and adults of all backgrounds.</div>

                    <div className="button gap-6 flex items-center md:mt-4 text-sm ">
                        <Link href={"/pricing"} className="bg-[#00FFFF]/60 text-white py-2 px-4 rounded-lg" >Get started</Link>
                        <Link href={"/contact"} className="bg-gray-700 text-white py-2 px-4 rounded-lg" >Learn more</Link>
                    </div>
                </div>
                <div className="right mt-8 xl:w-1/2 xl:mt-0 2xl:px-20">
                    <Image src="/hero.png" height={500} width={500} alt="" className="w-full md:rounded-2xl" />
                </div>
            </div>
        </div>
    )
}
