import { BtnActions } from '@/components/buttons'

import { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import { RiErrorWarningLine } from 'react-icons/ri'

const Register = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [namaSekolah, setNamaSekolah] = useState()
    const [NPSN, setNPSN] = useState()
    const [email, setEmail] = useState()
    const [passwordConfim, setPasswordConfim] = useState()

    return <div className="flex grow flex-col items-center justify-start bg-bg-100">
        <Head>
            <title>Register</title>
        </Head>
        <h3 className="text-primary-700 mt-20">Register Admin</h3>
        <div className="flex flex-col flex-wrap items-start w-[500px] max-h-[400px] mt-14 gap-5">
            <div className="flex flex-col items-start gap-2 ">
                <div className="font-sans font-semibold text-lg">
                    Nama Sekolah</div>
                <input className="px-4 py-2 rounded-lg" type="text" placeholder="SMP Negeri 1 Lorem Ipsum" value={namaSekolah} onChange={e => setNamaSekolah(e.target.value)}></input>
            </div>

            <div className="flex flex-col items-start gap-2 ">
                <div className="font-sans font-semibold text-lg">
                    Username</div>
                <input className="px-4 py-2 rounded-lg " type="text" placeholder="sussybaka" value={username} onChange={e => setUsername(e.target.value)}></input>
            </div>
            <div className="flex flex-col items-start gap-2 ">
                <div className="font-sans font-semibold text-lg">
                    Password</div>
                <input className="px-4 py-2 rounded-lg " type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}></input>
            </div>
            <div className="flex flex-col items-start gap-2 ">
                <div className="font-sans font-semibold text-lg">
                    Password</div>
                <input className="px-4 py-2 rounded-lg " type="password" placeholder="password" value={passwordConfim} onChange={e => setPasswordConfim(e.target.value)}></input>
            </div>
            <div className="flex flex-col items-start gap-2 ">
                <div className="font-sans font-semibold text-lg">
                    Email Pemulihan</div>
                <input className="px-4 py-2 rounded-lg " type="text" placeholder="smpn1lr@gmail.com" value={email} onChange={e => setEmail(e.target.value)}></input>
            </div>
            <div className="flex flex-col items-start gap-2 ">
                <div className="font-sans font-semibold text-lg">
                    NPSN</div>
                <input className="px-4 py-2 rounded-lg " type="text" placeholder="789345" value={NPSN} onChange={e => setNPSN(e.target.value)}></input>
            </div>

            <div className="text-white flex bg-info-600 gap-1 max-w-[223px] items-center p-4 rounded-lg">
                <div>
                    <RiErrorWarningLine />
                </div>
                <p className="break-words">
                    <strong>Perhatian!</strong> Hanya ada <strong>satu</strong> admin tiap sekolah, hubungi <strong className=" underline font-bold"><Link href="/support">support
                </Link></strong> jika sekolah anda sudah di klaim pihak lain.
                </p>

            </div>
        </div>
        <div className="flex flex-col items-center w-full gap-2 mb-20">
            <div>
                <BtnActions handleClick={() => alert(`${username}:${password}`)} >
                    Register
                </BtnActions>
            </div>

        </div>


    </div>
}

export default Register