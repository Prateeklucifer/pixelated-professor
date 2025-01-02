"use client"

import { useState, useEffect } from 'react'
import { MdDelete } from "react-icons/md";
import { IoIosAdd } from "react-icons/io";
import { HiOutlineChevronDown } from 'react-icons/hi2';
import { Bounce, ToastContainer, toast } from "react-toastify";



export default function AdminLessons() {

    const [lessons, setLessons] = useState([])
    const [render, setRender] = useState(false)

    const getAllLessons = async () => {
        let res = await fetch('http://localhost:3000/api/lessons')
        let data = await res.json()
        setLessons(data.data)
    }

    const addFeild = async () => {
        let data = await fetch('http://localhost:3000/api/admin/lessons', {
            method: "POST",
        })

        if (data.status == 200) {
            sucessMsg("added sucessfully")
            setRender(!render)
        } else {
            errorMsg("something went wrong")
        }

    }

    const removeFeild = async (id) => {
        let data = await fetch('http://localhost:3000/api/admin/lessons', {
            method: "DELETE",
            body: JSON.stringify({ id })
        })

        if (data.status == 200) {
            sucessMsg("removed sucessfully")
            setRender(!render)
        } else {
            errorMsg("something went wrong")
        }

    }

    const updateLessonTag = (event, id) => {
        let data = [...lessons]

        let donorIndex = data.findIndex((item) => item._id == id)
        if (donorIndex != -1) {
            data[donorIndex].lessonTag = event.target.value
            setLessons(data)
        }

    }
    const updateTitle = (event, id) => {
        let data = [...lessons]

        let donorIndex = data.findIndex((item) => item._id == id)
        if (donorIndex != -1) {
            data[donorIndex].title = event.target.value
            setLessons(data)
        }

    }
    const updateVideoURL = (event, id) => {
        let data = [...lessons]

        let donorIndex = data.findIndex((item) => item._id == id)
        if (donorIndex != -1) {
            data[donorIndex].videoURL = event.target.value
            setLessons(data)
        }

    }
    const updateImageURL = (event, id) => {
        let data = [...lessons]

        let donorIndex = data.findIndex((item) => item._id == id)
        if (donorIndex != -1) {
            data[donorIndex].imageURL = event.target.value
            setLessons(data)
        }

    }
    const updateDescription = (event, id) => {
        let data = [...lessons]

        let donorIndex = data.findIndex((item) => item._id == id)
        if (donorIndex != -1) {
            data[donorIndex].description = event.target.value
            setLessons(data)
        }

    }

    const updateRecords = async () => {
        let data = await fetch("http://localhost:3000/api/admin/lessons", {
            method: "PUT",
            body: JSON.stringify({ AllRecords: lessons })
        })

        if (data.status == 200) {
            sucessMsg("updated sucessfully")
        } else {
            errorMsg("something went wrong")
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
        getAllLessons()
    }, [render])

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
            <div className="md:mx-4">
                <div className="container m-auto px-4 md:px-0">
                    <div className="heading text-2xl font-semibold text-center my-4">Lessons</div>
                    <div className="faqs flex flex-col gap-6">
                        {lessons?.map((item, index) => (
                            <details className="group border-b-[1px] py-4 border-gray-700 w-full cursor-pointer" key={index} open>
                                <summary className="text-white flex items-center justify-between gap-2">
                                    <div className="left font-semibold text-xl">{item.title}</div>
                                    <div className="right flex items-center gap-4">
                                        <button className="text-red-400"><MdDelete size={20} onClick={() => { removeFeild(item._id) }} /></button>
                                        <div className="group-open:rotate-180 flex gap-2"><HiOutlineChevronDown size={26} /> </div>
                                    </div>
                                </summary>
                                <div className="faq flex flex-col my-2">
                                    <label htmlFor="name">
                                        <div className="py-2 flex items-center justify-between">Title </div>
                                        <input type="text" name="name" id="name" className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-[#00FFFF]" value={item.title} onChange={(e) => {
                                            updateTitle(e, item._id)
                                        }} />
                                    </label>
                                    <label htmlFor="lessonTag">
                                        <div className="block py-2">lessonTag</div>
                                        <input type="text" name="lessonTag" id="lessonTag" className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-[#00FFFF]" value={item.lessonTag} onChange={(e) => {
                                            updateLessonTag(e, item._id)
                                        }} />
                                    </label>
                                    <label htmlFor="videoURL">
                                        <div className="block py-2">videoURL</div>
                                        <input type="text" name="videoURL" id="videoURL" className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-[#00FFFF]" value={item.videoURL} onChange={(e) => {
                                            updateVideoURL(e, item._id)
                                        }} />
                                    </label>
                                    <label htmlFor="imageURL">
                                        <div className="block py-2">imageURL</div>
                                        <input type="text" name="imageURL" id="imageURL" className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-[#00FFFF]" value={item.imageURL} onChange={(e) => {
                                            updateImageURL(e, item._id)
                                        }} />
                                    </label>
                                    <label htmlFor="description">
                                        <div className="block py-2">Blood Type</div>
                                        <input type="text" name="description" id="description" className="w-full px-2 py-2 ring-2 outline-none rounded-lg bg-gray-800 ring-gray-700 focus:ring-[#00FFFF]" value={item.description} onChange={(e) => {
                                            updateDescription(e, item._id)
                                        }} />
                                    </label>
                                </div>
                            </details>

                        ))}

                    </div>
                    <div className="buttons my-4 flex flex-col gap-4">
                        <button className="outline-dashed outline-1 py-1 rounded-sm outline-gray-600 bg-gray-800 hover:bg-gray-800/80 flex items-center justify-center text-sm" onClick={() => {
                            addFeild()
                        }}> <span><IoIosAdd size={26} /></span>Add Column</button>
                        <button className="text-white px-4 py-2 rounded-md bg-[#00FFFF]/60 w-full" onClick={() => { updateRecords() }}>Save</button>
                    </div>
                </div>
            </div>
        </>
    )
}