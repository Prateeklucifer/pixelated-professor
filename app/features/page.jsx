import React from 'react'
import Features from '../components/Features'

export default function FeaturesPage() {
    return (
        <div className="md:px-4">
            <div className="container m-auto px-4 md:px-0 mt-6">
                <div className="md:w-[70%] lg:w-[60%] xl:w-1/2">
                    <div className="heading text-2xl font-bold sm:text-3xl">Join Pixelated Professor and get access to all features</div>
                    <div className="para mt-3 mb-3 sm:mb-6 md:mb-8 md:pr-16 xl:pr-28">We provide lectures, lab sessions, and instructor support to prepare students for industry-recognized Computer Science degrees.</div>
                </div>
                <Features />
            </div>
        </div>
    )
}
