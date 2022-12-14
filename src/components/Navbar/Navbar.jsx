import Image from "next/image"
import Link from "next/link"
import { BtnHref } from "../buttons"

import { useState } from "react"

export default function Navbar() {
    const [loggedIn, setLoggedIn] = useState(false)
    return (
        <div className="w-full min-h-[60px] flex justify-center">
            <div className="lg:w-[1080px] py-3 flex">
                <div className="hover:cursor-pointer" onClick={() => document.location ='/'}>
                    <Image className="items-center" src={'/assets/SiPeko.png'} width={129} height={33} />
                </div>
                <div className="menu flex items-center gap-6  text-center ml-auto">
                    <Link href="/">
                        <div className="font-overpass font-thin text-[24px] hover:cursor-pointer hover:underline">home</div>
                    </Link >

                    <Link href="/admin?menu =event">
                        <div className="font-overpass font-thin text-[24px] hover:cursor-pointer hover:underline">event</div>
                    </Link>

                    <Link href="/vote" >
                        <div className="font-overpass font-thin text-[24px] hover:cursor-pointer hover:underline">vote</div>
                    </Link>
                    <Link href="/about" >
                        <div className="font-overpass font-thin text-[24px] hover:cursor-pointer hover:underline">about</div>
                    </Link>
                    <BtnHref>
                        <Link href="/login">
                            {loggedIn ? 'Logout': 'Login' }
                        </Link>
                    </BtnHref>
                    



                </div>


            </div>
        </div>
    )
}