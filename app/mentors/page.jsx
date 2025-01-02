import React from 'react'
import MentorsCmp from '../components/Mentors'

export default function Mentors() {
  return (
    <div className="md:px-4">
      <div className="container m-auto px-4 md:px-0">
        <div className="info text-[#00FFFF] font-semibold text-center mb-2 md:mt-8">Our mentors</div>
        <div className="small-heading text-white text-3xl px-4 font-bold text-center mb-6">Expert Mentors to Guide Your Journey</div>
        <div className="para text-lg px-4 text-center text-gray-200  md:px-24 lg:px-36 xl:px-56 2xl:px-72">Our talented mentors are passionate about computer science and dedicated to your success. They're industry veterans with a wealth of knowledge and real-world experience, ready to provide personalized guidance, answer your questions, and help you navigate the exciting world of coding.</div>
        <MentorsCmp/>
      </div>

    </div>
  )
}
