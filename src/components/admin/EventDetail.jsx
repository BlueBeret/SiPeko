import { data } from 'autoprefixer'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

import VotingChart from './VotingChart'
import { BtnSuccess } from '../buttons'

const EventDetail = () => {
    const router = useRouter()
    const [eid, setEid] = useState(router.query.eid)
    const [details, setDetails] = useState()
    const [calon, setCalon] = useState()
    const [hasil, sethasil] = useState([
        { title: 'One', value: 10, color: '#E38627' },
        { title: 'Two', value: 15, color: '#C13C37' },
        { title: 'Three', value: 20, color: '#6A2135' },
    ])


    useEffect(() => {
        axios("/api/event/" + eid, { withCredentials: true }).then((res) => {
            console.log(res.data)
            setDetails(res.data)
        })

        axios("/api/calon/" + eid, { withCredentials: true }).then((res) => {
            setCalon(res.data)
            let tmp = res.data.map((v) => {
                return {
                    title: v.nama,
                    value: v.score,
                    color: generateRandomColor()
                }
            })
            console.log(tmp)
            sethasil(tmp)
        })

    }, [])

    function renderLoading() {
        Swal.fire({
            title: "loading",
            didOpen: () => Swal.showLoading(),
            allowEscapeKey: false,
            allowOutsideClick: false
        })
    }

    function toClip() {
        navigator.clipboard.writeText("http://localhost:3000" + "/vote?eid=" + eid)
        Swal.fire({
            title: 'Link berhasil disalin',
            timer: 2000,
            showConfirmButton: false,
            icon: 'success'
        })
    }

    if (details === undefined) {
        return <div className="flex-grow flex flex-col items-center pt-10 bg-bg-100">
            {renderLoading()}
        </div>
    } else {
        Swal.close()
        return <div className="flex-grow flex flex-col items-center pt-10 bg-bg-100">
            <div className='flex flex-col items-center'>
                <h4 className='text-primary-700'>Hasil</h4>
                <h4 className='text-primary-700 capitalize'>{details.nama || ""}</h4>
            </div>
            <div className='flex flex-row items-center flex-grow gap-4'>
                <div className='flex flex-row gap-10'>
                    <div className='max-w-[300px] p-4'>
                        <VotingChart data={hasil} />
                    </div>

                    <table className='flex flex-col items-start justify-center gap-4'>
                        {hasil.map((v, i) => {
                            return <tr key={v.title}>
                                    <td>
                                        <span className={`px-3 py-1`} style={{
                                            background: v.color
                                        }}></span>
                                    </td>
                                    <td>
                                        <span className='ml-2'>{v.title}</span>
                                    </td>
                                    <td>
                                        <span className='ml-4'>({v.value})</span>
                                    </td>
                                </tr>
                        })}
                    </table>
                </div>
                <div className='flex flex-col'>
                    <BtnSuccess handleClick={() => toClip()}> copy vote link </BtnSuccess>
                </div>
            </div>
        </div>
    }

}

function generateRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 10)];
    }
    return color;
}



export default EventDetail