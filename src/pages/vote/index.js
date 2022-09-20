import { BtnActions } from '@/components/buttons'

import Swal from 'sweetalert2'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import axios from 'axios'

const Login = ({ namasekolah, eid }) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        if (eid === 0) {
            Swal.fire(
                {
                    icon: 'error',
                    title: "Kamu perlu menggunakan link yang diberikan oleh sekolahmu",
                    background: '#F6F2F8',
                    didClose: () => {
                        document.location ='/'
                    }
                }
            )
        }
    }, [])

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
            url: '/api/vote/login',
            data: {
                nomor_induk: username,
                kode_akses: password,
                eid: eid,
            },
            withCredentials: true
        }).then(res => document.location = '/vote/vote')
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
            <title>Vote</title>
        </Head>
        <h3 className="text-primary-700 mt-20 w-1/2 text-center">Pemilihan Ketua Osis <br />{namasekolah}</h3>
        <div className="flex flex-col items-start w-[300px] mt-20 gap-5">
            <div className="flex flex-col items-start gap-2 w-full">
                <div className="font-sans font-semibold text-lg">
                    Nomor Induk</div>
                <input className="px-4 py-2 rounded-lg w-full" type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}></input>
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
                <div className="font-sans font-semibold text-lg">
                    Kode Akses</div>
                <input className="px-4 py-2 rounded-lg w-full" type="password" placeholder="kode akses" value={password} onChange={e => setPassword(e.target.value)}></input>
            </div>
            <div className="flex flex-col items-end w-full gap-2">
                <div>
                    <BtnActions handleClick={() => login()} >
                        Vote
                    </BtnActions>
                </div>
            </div>
        </div>


    </div>
}

export async function getServerSideProps({ query }) {
    const eid = query.eid || 0
    if (eid === 0) {
        return {
            props: {
                eid: 0
            }
        }
    }
    return {
        props: {
            eid: eid,
            namasekolah: "SMP Negeri " + eid + " Lorem Ipsum"
        }
    }
}

export default Login