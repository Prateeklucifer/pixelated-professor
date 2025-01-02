"use client"

import { useState, useEffect } from 'react'
import { Bounce, ToastContainer, toast } from "react-toastify";


export default function AdminFeatures() {

    const [Features, setFeatures] = useState([])

    const getFeatures = async () => {
        let res = await fetch('http://localhost:3000/api/features')
        let data = await res.json()
        setFeatures(data.data)
    }

    const updateTitle = (event, index) => {
        let newData = [...Features]
        newData[index].title = event.target.value
        setFeatures(newData)
    }

    const updateParagraph = (event, index) => {
        let newData = [...Features]
        newData[index].paragraph = event.target.value
        setFeatures(newData)
    }

    const updateData = async () => {
        let res = await fetch('http://localhost:3000/api/admin/features', {
            method: "POST",
            body: JSON.stringify({ AllFeatures: Features })
        })
        
        if (res.status == 200) {
            sucessMsg("data updated sucessfully")
        } else {
            errorMsg("can not update data")
        }
    }

    const sucessMsg = (message) => {
        toast.success(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }

    const errorMsg = (message) => {
        toast.error(message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "light",
            transition: Bounce,
        });
    }


    useEffect(() => {
        getFeatures()
    }, [])

    return (
        <>
            <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable={false}
                pauseOnHover={false}
                theme="light"
            />
            <div className="w-full">
                <div className="container m-auto px-4 md:px-0 ">
                    <div className="heading text-3xl font-semibold text-center my-4">Features</div>
                    <div className="faqs flex flex-col gap-6">
                        {Features?.map((item, index) => (
                            <div className="faq flex flex-col" key={index}>
                                <label htmlFor="name">
                                    <div className="block py-2">Title</div>
                                    <input type="text" name="name" id="name" className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-[#00FFFF]" value={item.title} onChange={(e) => {
                                        updateTitle(e, index)
                                    }} />
                                </label>
                                <label htmlFor="para">
                                    <div className="block py-2">Paragraph</div>
                                    <textarea name="para" id="para" className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-[#00FFFF]" value={item.paragraph} onChange={(e) => {
                                        updateParagraph(e, index)
                                    }}></textarea>
                                </label>
                            </div>
                        ))}
                    </div>
                    <div className="buttons my-4 flex items-center justify-end">
                        <button className="bg-[#00FFFF]/60 text-white py-[2px] px-4 rounded-md self-end w-fit" onClick={() => {
                            updateData()
                        }}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}
