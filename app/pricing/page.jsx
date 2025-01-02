"use client"

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function PricingPage() {

    const router = useRouter()
    const [pricing, setPricing] = useState(undefined)

    const getAllPricing = async () => {
        let res = await fetch('http://localhost:3000/api/pricing')
        let data = await res.json()
        setPricing(data.data)
    }

    useEffect(() => {
        getAllPricing()
    }, [])
    return (
        <div className="mt-6 container m-auto">
            <div className="info text-[#00FFFF] font-semibold text-center mb-2">Pricing</div>
            <div className="small-heading text-white text-3xl px-4 font-bold text-center mb-6">Pricing plans for teams of all sizes</div>
            <div className="para text-lg px-4 text-center text-gray-200">Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et quasi iusto modi velit ut non voluptas in. Explicabo id ut laborum.</div>
            <div className="pricing-sec px-4 mt-14 flex flex-col gap-8 md:px-28 lg:flex-row ">
                {pricing ? pricing.map((item) => (
                    <div className="box p-4 ring-1 ring-[#00FFFF] rounded-md w-full">
                        <div className="heading font-semibold text-lg">{item.title}</div>
                        <div className="para text-gray-200 py-2">{item.description}</div>
                        <div className="pricing flex items-end text-gray-200 py-2"><span className="text-3xl font-bold">₹{item.price}</span>/month</div>
                        <button className="py-2 my-4 bg-[#00FFFF]/60 w-full text-gray-200 rounded-md" onClick={()=>{
                            router.push('/checkout')
                        }}>Buy plan</button>
                        <div className="benifits flex gap-4 flex-col">
                            <div className="benifit flex items-center gap-4 text-gray-200"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#00FFFF]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg></span>{item.benifit1}</div>
                            <div className="benifit flex items-center gap-4 text-gray-200"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#00FFFF]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg></span>{item.benifit2}</div>
                            <div className="benifit flex items-center gap-4 text-gray-200"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#00FFFF]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg></span> {item.benifit3}</div>
                            <div className="benifit flex items-center gap-4 text-gray-200"><span className="icon"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 text-[#00FFFF]">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                            </svg></span>{item.benifit4}</div>
                        </div>
                    </div>
                )) :
                    <>
                        <div className="box p-4 bg-gray-800 rounded-md min-w-96 animate-pulse">
                            <div className="heading font-semibold text-lg w-[50%] h-6 bg-gray-700"></div>
                            <div className="para py-2 h-4 bg-gray-700 mt-4"></div>
                            <div className="pricing flex items-end text-gray-200 py-2"><span className="text-3xl font-bold  h-8 bg-gray-700 w-[25%]"></span> <span className="h-6 bg-gray-700 w-[20%] ml-4"></span> </div>
                            <button className="py-2 my-4 bg-gray-700 w-full rounded-md h-10"></button>
                            <div className="benifits flex gap-4 flex-col">
                                <div className="benifit flex items-center gap-4 w-[60%] bg-gray-700 h-5"></div>
                                <div className="benifit flex items-center gap-4 w-[60%] bg-gray-700 h-5"></div>
                                <div className="benifit flex items-center gap-4 w-[60%] bg-gray-700 h-5"></div>
                                <div className="benifit flex items-center gap-4 w-[60%] bg-gray-700 h-5"></div>
                            </div>
                        </div>
                        <div className="box p-4 bg-gray-800 rounded-md min-w-96 animate-pulse">
                            <div className="heading font-semibold text-lg w-[50%] h-6 bg-gray-700"></div>
                            <div className="para py-2 h-4 bg-gray-700 mt-4"></div>
                            <div className="pricing flex items-end text-gray-200 py-2"><span className="text-3xl font-bold  h-8 bg-gray-700 w-[25%]"></span> <span className="h-6 bg-gray-700 w-[20%] ml-4"></span> </div>
                            <button className="py-2 my-4 bg-gray-700 w-full rounded-md h-10"></button>
                            <div className="benifits flex gap-4 flex-col">
                                <div className="benifit flex items-center gap-4 w-[60%] bg-gray-700 h-5"></div>
                                <div className="benifit flex items-center gap-4 w-[60%] bg-gray-700 h-5"></div>
                                <div className="benifit flex items-center gap-4 w-[60%] bg-gray-700 h-5"></div>
                                <div className="benifit flex items-center gap-4 w-[60%] bg-gray-700 h-5"></div>
                            </div>
                        </div>
                        <div className="box p-4 bg-gray-800 rounded-md min-w-96 animate-pulse">
                            <div className="heading font-semibold text-lg w-[50%] h-6 bg-gray-700"></div>
                            <div className="para py-2 h-4 bg-gray-700 mt-4"></div>
                            <div className="pricing flex items-end text-gray-200 py-2"><span className="text-3xl font-bold  h-8 bg-gray-700 w-[25%]"></span> <span className="h-6 bg-gray-700 w-[20%] ml-4"></span> </div>
                            <button className="py-2 my-4 bg-gray-700 w-full rounded-md h-10"></button>
                            <div className="benifits flex gap-4 flex-col">
                                <div className="benifit flex items-center gap-4 w-[60%] bg-gray-700 h-5"></div>
                                <div className="benifit flex items-center gap-4 w-[60%] bg-gray-700 h-5"></div>
                                <div className="benifit flex items-center gap-4 w-[60%] bg-gray-700 h-5"></div>
                                <div className="benifit flex items-center gap-4 w-[60%] bg-gray-700 h-5"></div>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    )
}