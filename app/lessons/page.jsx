import React from 'react'
import Lessons from '../components/Lessons'

export default function LessonPage() {
    return (
        <div className="md:px-4">
            <div className="container m-auto px-4 md:px-0">
                <div className="flex flex-col gap-3 items-center md:px-10 lg:px-32 xl:px-64 2xl:px-72">
                    <div className="heading font-bold text-white text-4xl mt-8 md:mt-14 md:text-6xl md:text-center">Welcome to our computer science course</div>
                    <div className="para text-white mt-3 md:text-center md:px-20 xl:px-44 2xl:px-56">With our computer science course We gives you the knowledge and confidence you need to excel in software engineering, and more.</div>

                    <div className="button gap-6 flex flex-col items-center mt-4 text-sm sm:flex-row w-full md:justify-center">
                        <button className="bg-[#00FFFF]/60 text-white py-2 px-4 rounded-lg w-full sm:w-fit" >Get full access</button>
                        <button className="bg-gray-700 text-white py-2 px-4 rounded-lg w-full sm:w-fit" >Request a topic</button>
                    </div>
                </div>
                <div className="lessons mt-10 text-xl font-semibold lg:mx-28 xl:mx-36 2xl:mx-48">All lessons</div>
                <Lessons/>
            </div>
        </div>
    )
}
