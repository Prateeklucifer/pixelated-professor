import React from 'react'
import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <>
    <div className="md:px-4">
        <div className="container px-4 md:px-0 m-auto">
            <div className="heading text-center text-2xl font-bold py-4 sm:text-3xl md:text-4xl">Contact Us</div>
        </div>
    </div>
    <Contact/>
    </>
  )
}
