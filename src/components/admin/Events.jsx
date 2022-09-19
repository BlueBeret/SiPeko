import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"

const Event = () => {
    const [events, setEvents] = useState([])
    useEffect(
        () => {
            axios.get('api/event', {
                withCredentials: true
            }).then(
                res => {
                    setEvents(res.data)
                }
            ).catch(
                (res) => console.log(res)
            )
        }
        , [])

    return <div className="flex-grow flex flex-col items-center pt-10 bg-bg-100">
        <h3 className="text-primary-700">SMP Negeri 1 Lorem Ipsum</h3>
        <ul className="content flex flex-wrap mt-10">
            {events.map((v, i) => {
                return <Link href={"/admin?menu=edetail&eid=" + v.eid }>
                    <li key={i} className={`flex flex-col p-4 mx-4 rounded-2xl gap-1
                    hover:cursor-pointer hover:scale-110 transition-all
                ${v.state == -1 ? 'bg-warning-500' : ''}
                                    ${v.state == 0 ? 'bg-success-500' : ''}
                                    ${v.state == 1 ? 'bg-info-600' : ''}
                
                `}>
                    <h5 className="text-white text-right capitalize">{v.nama}</h5>
                    <ul className="flex flex-row gap-1 justify-end">
                        {
                            Array(v.jml_pmlh).fill(0).map((thn, i) => {
                                return <li key={v.eid + ' ' + i}
                                    className={` text-white px-2 py-1 rounded-full
                                    ${v.state == -1 ? 'bg-warning-900' : ''}
                                    ${v.state == 0 ? 'bg-success-900' : ''}
                                    ${v.state == 1 ? 'bg-primary-800' : ''}
                                    `}
                                >{v.thn_pmlh + i}</li>
                            })
                        }
                    </ul>
                </li>
                </Link>
            }
            )}
        </ul>
    </div>
}

export default Event