import Link from "next/link"

import { TbWorld } from "react-icons/tb"
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"

export default function Footer() {
    return (
        <div className="bg-black flex flex-col items-center justify-center py-4 gap-1">
            <div className="text-white flex gap-1 text-lg ">
                <Link href="https://lurifos.dev" target="_blank" >
                    <div className="hover:cursor-pointer">
                        <TbWorld />
                    </div>
                </Link>
                <Link href="https://github.com/BlueBeret" target="_blank">
                    <div className="hover:cursor-pointer">
                        <AiFillGithub/>
                    </div>
                </Link>
                <Link href="https://www.linkedin.com/in/sofiruldanatriya/" target="_blank">
                    <div className="hover:cursor-pointer">
                    <AiFillLinkedin/>
                    </div>
                </Link>
            </div>
            <div className="flex gap-2">
                <Link href="/info">
                    <div className="text-white hover:cursor-pointer hover:underline">
                        info
                    </div>
                </Link>
                <Link href="/support">
                    <div className="text-white hover:cursor-pointer hover:underline">
                        support
                    </div>
                </Link>
                <Link href="/login">
                    <div className="text-white hover:cursor-pointer hover:underline">
                        login
                    </div>
                </Link>
            </div>
            <div className="text-white">
                &#169;2022 Sofirul Danatriya
            </div>
        </div>
    )
}