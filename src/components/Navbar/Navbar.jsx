import Image from "next/image"
import Link from "next/link"
import { BtnHref } from "../buttons"

export default function Navbar() {
    return (
        <div className="w-full min-h-[60px] flex justify-center">
            <div className="lg:w-[1080px] py-3 flex">
                <div className="hover:cursor-pointer" onClick={() => document.location ='/'}>
                    <Image className="items-center" src={'/assets/SiPeko.png'} width={129} height={33} />
                </div>


                <div className="menu flex items-center gap-6  text-center ml-auto">
                    <Link href="/">
                        <div className="font-overpass font-light text-[24px] hover:cursor-pointer hover:underline">home</div>
                    </Link >

                    <Link href="/event">
                        <div className="font-overpass font-light text-[24px] hover:cursor-pointer hover:underline">event</div>
                    </Link>

                    <Link href="/vote" >
                        <div className="font-overpass font-light text-[24px] hover:cursor-pointer hover:underline">vote</div>
                    </Link>
                    <BtnHref>
                        <Link href="/login">
                            Login
                        </Link>
                    </BtnHref>



                </div>


            </div>
        </div>
    )
}