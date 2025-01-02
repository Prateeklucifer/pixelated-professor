"use client"

import { useState, useEffect } from "react"

export default function Features() {
    const [AllFeatures, setAllFeatures] = useState(undefined)

    const getAllFeatures = async () => {
        let res = await fetch('http://localhost:3000/api/features')
        let data = await res.json()
        setAllFeatures(data.data)
    }

    useEffect(() => {
        getAllFeatures()
    }, [])

    return (
        <div className="grid gap-6 grid-rows-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {AllFeatures ? AllFeatures.map((item) => (
                <div className="box bg-white/5 backdrop-blur-md py-4 px-4 rounded-lg ">
                    <div className="heading font-semibold text-lg sm:text-xl">{item.title}</div>
                    <div className="para mt-2">{item.paragraph}</div>
                </div>
            )) : <>
                <div className="box bg-white/5 backdrop-blur-md py-4 px-4 rounded-lg animate-pulse">
                    <div className="w-[55%] h-8 bg-gray-700 mb-3"></div>
                    <div className="w-full h-4 bg-gray-700 my-3"></div>
                    <div className="w-full h-4 bg-gray-700 my-3"></div>
                    <div className="w-[70%] h-4 bg-gray-700 my-3"></div>
                </div>
                <div className="box bg-white/5 backdrop-blur-md py-4 px-4 rounded-lg animate-pulse">
                    <div className="w-[55%] h-8 bg-gray-700 mb-3"></div>
                    <div className="w-full h-4 bg-gray-700 my-3"></div>
                    <div className="w-full h-4 bg-gray-700 my-3"></div>
                    <div className="w-[70%] h-4 bg-gray-700 my-3"></div>
                </div>
                <div className="box bg-white/5 backdrop-blur-md py-4 px-4 rounded-lg animate-pulse">
                    <div className="w-[55%] h-8 bg-gray-700 mb-3"></div>
                    <div className="w-full h-4 bg-gray-700 my-3"></div>
                    <div className="w-full h-4 bg-gray-700 my-3"></div>
                    <div className="w-[70%] h-4 bg-gray-700 my-3"></div>
                </div>
                <div className="box bg-white/5 backdrop-blur-md py-4 px-4 rounded-lg animate-pulse">
                    <div className="w-[55%] h-8 bg-gray-700 mb-3"></div>
                    <div className="w-full h-4 bg-gray-700 my-3"></div>
                    <div className="w-full h-4 bg-gray-700 my-3"></div>
                    <div className="w-[70%] h-4 bg-gray-700 my-3"></div>
                </div>
            </>}
        </div>
    )
}
