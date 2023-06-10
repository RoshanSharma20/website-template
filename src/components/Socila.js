import { Button } from 'flowbite-react'
import React from 'react'
import { FaInstagram, FaFacebookF, FaTwitter, FaPinterest } from 'react-icons/fa'

function Socila() {
    return (
        <>
            <Button className='fixed right-2 top-48 p-2 rounded-full bg-blue-500 text-3xl'>
                <FaFacebookF></FaFacebookF>
            </Button>
            <Button className='fixed right-2 top-64 p-2 rounded-full bg-pink-600 text-3xl'>
                <FaInstagram></FaInstagram>
            </Button>
            <Button className='fixed right-2 top-80 p-2 rounded-full bg-sky-400 text-3xl'>
                <FaTwitter></FaTwitter>
            </Button>
            <Button className='fixed right-2 top-96 p-2 rounded-full bg-red-600 text-3xl'>
                <FaPinterest></FaPinterest>
            </Button>
        </>
    )
}

export default Socila
