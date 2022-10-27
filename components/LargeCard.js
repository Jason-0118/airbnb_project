import React from 'react'
import Image from "next/image"

function LargeCard({ img, title, description, buttonText }) {
    return (
        <section className='relative py-16 cursor-pointer'>
            <div className='relative h-96 min-w-[300px]'>
                <Image
                    className="object-cover rounded-2xl"
                    src={img}
                    fill
                    alt=""
                />
            </div>

            <div className="absolute top-1/4 left-12">
                <h3 className='text-4xl mb-3 w-64'>{title}</h3>
                <p>{description}</p>
                <button className='text-sm text-white bg-gray-900 rounded-lg mt-5 px-4 py-2'>{buttonText}</button>
            </div>


        </section>
    )
}

export default LargeCard