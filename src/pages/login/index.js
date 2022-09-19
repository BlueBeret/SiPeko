import { BtnActions } from '@/components/buttons'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Swal from 'sweetalert2'


import axios from 'axios'
import hash from '@/utils/hash'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const login = () => {
        Swal.fire({
            title: "Logging in",
            didOpen: () => {
                Swal.showLoading()
            },
            allowEscapeKey: false,
            allowOutsideClick: false,
        })
        axios({
            method: 'post',
            url: '/api/auth/login',
            data: {
                username: username,
                hashpass: hash(password) 
            },
            withCredentials: true
        }).then(res => document.location = '/admin')
            .catch(res => {
                Swal.hideLoading()
                Swal.update({
                    title: res.response.data.err,
                    icon: 'error'
                })
            })
    }
    return <div className="flex grow flex-col items-center justify-start bg-bg-100">
        <Head>
            <title>Login</title>
        </Head>
        <h3 className="text-primary-700 mt-20">Login Admin</h3>
        <div className="flex flex-col items-start w-[300px] mt-20 gap-5">
            <div className="flex flex-col items-start gap-2 w-full">
                <div className="font-sans font-semibold text-lg">
                    Username</div>
                <input className="px-4 py-2 rounded-lg w-full" type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}></input>
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
                <div className="font-sans font-semibold text-lg">
                    Password</div>
                <input className="px-4 py-2 rounded-lg w-full" type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}></input>
            </div>
            <div className="flex flex-col items-end w-full gap-2">
                <div>
                    <BtnActions handleClick={() => login()} >
                        Login
                    </BtnActions>
                </div>
                <p className="font-sans text-[16px]">Belum punya akun? Daftar <span className="text-primary-700 underline font-bold"><Link href="/register">disini
                </Link></span></p>
                <div>

                </div>

            </div>
        </div>


    </div>
}

export default Login