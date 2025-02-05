import React from 'react'
import Link from 'next/link';



function Navbar() {
    return (<>

        <div className='bg-green-800 p-4'>

            <nav className="container mx-auto flex items-center justify-between">
                <ul className='flex space-x-6 text-white text-lg' >
                    <li className='hover:text-green-300'>
                        <Link href="./Home"><b>HOME</b></Link>
                    </li>


                    <li className='hover:text-green-300'>
                        <Link href="./Basic"> <b>BASIC</b></Link>
                    </li>

                    <li className='hover:text-green-300'>
                        <Link href="./pros-cons"><b>PROS/CONS</b></Link>
                    </li>

                    <li className='hover:text-green-300'>
                        <Link href="./about"><b>ABOUT</b></Link>
                    </li>

                </ul>
            </nav>
        </div>
    </>
    )
}
export default Navbar;