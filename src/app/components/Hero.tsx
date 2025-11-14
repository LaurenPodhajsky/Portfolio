import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'

export default function Hero() {
  return (
    <section className='py-28 container max-w-7xl mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center'>
            <div className='flex flex-col items-center mb-4'>
                <Image src="/profile.jpg" alt='profile image' width={100} height={100} className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary' />
            </div>

            <h1 className='text-4xl md:text-6xl font-bold mb-6'> blah blah <span className='text-primary'>blah blah </span> </h1>

            <p className='text-lg md:text-2xl text-gray-600 dark:text-gray-300 mb-8 '> blah blah | blah blah | blah blah</p>

            <div className='flex justify-center space-x-4 mb-8'>
                <Link href="/" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>
                  <FaGithub />
                </Link>
                <Link href="/" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>
                  <FaLinkedin />
                </Link>
                <Link href="/" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-colors duration-300'>
                  <FaGithub />
                </Link>
            </div>
        </div>    
    </section>
  )
}
