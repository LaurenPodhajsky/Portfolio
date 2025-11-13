import React from 'react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className='py-28 container max-w-7xl mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center'>
            <div>
                <Image src="/profile.jpg" alt='profile image' width={100} height={100} className='rounded-full' mb-4 w-32 h-32 object-cover ring-2 ring-primary />
            </div>
        </div>    
    </section>
  )
}
