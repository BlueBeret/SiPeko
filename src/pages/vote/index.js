import { BtnActions } from '@/components/buttons'

import Swal from 'sweetalert2'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'

const Login = ({ namasekolah, id }) => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    useEffect(() => {
        console.log(id)
        if (id === 0) {
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

    return <div className="flex grow flex-col items-center justify-start bg-bg-100">
        <Head>
            <title>Vote</title>
        </Head>
        <h3 className="text-primary-700 mt-20 w-1/2 text-center">Pemilihan Ketua Osis <br />{namasekolah}</h3>
        <div className="flex flex-col items-start w-[300px] mt-20 gap-5">
            <div className="flex flex-col items-start gap-2 w-full">
                <div className="font-sans font-semibold text-lg">
                    Username</div>
                <input className="px-4 py-2 rounded-lg w-full" type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}></input>
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
                <div className="font-sans font-semibold text-lg">
                    Kode Akses</div>
                <input className="px-4 py-2 rounded-lg w-full" type="password" placeholder="kode akses" value={password} onChange={e => setPassword(e.target.value)}></input>
            </div>
            <div className="flex flex-col items-end w-full gap-2">
                <div>
                    <BtnActions handleClick={() => alert(`${username}:${password}`)} >
                        Vote
                    </BtnActions>
                </div>
            </div>
        </div>


    </div>
}

export async function getServerSideProps({ query }) {
    const id = query.id || 0
    if (id === 0) {
        return {
            props: {
                id: 0
            }
        }
    }
    return {
        props: {
            id: id,
            namasekolah: "SMP Negeri " + id + " Lorem Ipsum"
        }
    }
}

export default Login