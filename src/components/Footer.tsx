import Link from 'next/link'
import React from 'react'
import { FaTwitter, FaFacebook,FaGithub , FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-green-800 text-white text-center py-4 mt-8'>
      <p >&copy; 2025 GMO Food Hub. All rights reserved.</p>
   
     
      <div className="flex justify-end space-x-4 mt-4 md:mt-0 ">
                        <FaFacebook className="text-blue-600 text-3xl cursor-pointer" />
                        <Link href="https://www.linkedin.com/in/muskan-batool-15584b277" target="_blank">
                            <FaLinkedin className="text-blue-500 text-3xl cursor-pointer" />
                        </Link>
                        <FaTwitter className="text-blue-400 text-3xl cursor-pointer" />
                        <Link href="https://github.com/imuskanbatool7" target="_blank">
                            <FaGithub className="text-gray-300 text-3xl cursor-pointer" />
                        </Link>
                    </div>

     </div>
  )
}

export default Footer
