import { useEffect, useState } from "react"
import axios from "axios"
import Link from "next/link"
import { BtnActions, BtnDanger } from "../buttons"

import ReactModal from "react-modal"
import Swal from 'sweetalert2'

const Event = () => {
    const [events, setEvents] = useState([])

    const [modal, setModal] = useState(false)


    // state for modal
    const [namaEvent, setNamaEvent] = useState("")
    const [tahun, setTahun] = useState(2020)
    const [tahun2, setTahun2] = useState(2022)

    const refreshData = () => {
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
    useEffect(
        refreshData
        , [])

    const openModal = () => {
        setModal(true)
    }



    const addEvent = () => {
        Swal.fire({
            title: "uploading . . .",
            showConfirmButton: false,
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => { Swal.showLoading() }

        })
        axios.post('/api/event/add', {
            nama: namaEvent,
            thn_pmlh: tahun,
            jml_pmlh: tahun2 - tahun + 1
        }, { withCredentials: true })
            .then(
                (res) => {
                    Swal.hideLoading()
                    Swal.update({
                        title: "berhasil",
                        icon: "success",
                    })
                    refreshData()
                    setTimeout(() => { Swal.close(); setModal(false) }, 2000)


                }
            )
    }

    return <div className="flex-grow flex flex-col items-center pt-10 bg-bg-100">
        <h3 className="text-primary-700">SMP Negeri 1 Lorem Ipsum</h3>
        <div className=" mt-10 flex flex-row gap-8 items-center">
            <div className="flex flex-row gap-4">
                <div className="flex flex-row gap-2 h-min">
                    <span className={`px-3 py-1 bg-success-500 rounded-full`}></span>
                    <p className="capitalize font-semibold"> Sedang berlangsung</p>
                </div>
                <div className="flex flex-row gap-2 h-min">
                    <span className={`px-3 py-1 bg-info-600 rounded-full`}></span>
                    <p className="capitalize font-semibold"> selesai</p>
                </div>
                <div className="flex flex-row gap-2 h-min">
                    <span className={`px-3 py-1 bg-warning-500 rounded-full`}></span>
                    <p className="capitalize font-semibold"> tidak aktif</p>
                </div>
            </div>
            <BtnActions handleClick={openModal}> + Tambah Event</BtnActions>
        </div>
        <ul className="content flex flex-wrap mt-4">
            {events.map((v, i) => {
                return <Link href={"/admin?menu=edetail&eid=" + v.eid}>
                    <li key={i} className={`flex flex-col p-4 mx-4 rounded-2xl gap-1
                    hover:cursor-pointer hover:scale-110 transition-all
                    mt-10
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

        <ReactModal
            isOpen={modal}
            onRequestClose={() => setModal(false)}
            style={{
                content: {
                    top: '50%',
                    left: '50%',
                    right: 'auto',
                    bottom: 'auto',
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)',
                    border: 'none',
                    background: '#E7E2F2',
                    borderRadius: "20px",
                    padding: 30
                },
            }
            }
        >
            <div className="flex flex-col items-start w-[300px] gap-5">
                <div className="flex flex-col items-start gap-2 w-full">
                    <div className="font-sans font-semibold text-lg">
                        Nama Event</div>
                    <input className="px-4 py-2 rounded-lg w-full" type="text" placeholder="Pemilihan Ketua OSIS Periode 1" value={namaEvent} onChange={e => setNamaEvent(e.target.value)}></input>
                </div>
                <div className="flex flex-col items-start gap-2 w-full">
                    <div className="font-sans font-semibold text-lg">
                        Angkatan yang berhak memilih</div>
                    <div className="flex flex-row gap-3 items-center">
                        <input className="px-4 py-2 rounded-lg w-16" type="int" placeholder="2020" value={tahun} onChange={e => setTahun(e.target.value)}></input>
                        <span>hingga</span>
                        <input className="px-4 py-2 rounded-lg w-16" type="int" placeholder="2020" value={tahun2} onChange={e => setTahun2(e.target.value)}></input>
                    </div>
                </div>

                <div className="w-full flex flex-row justify-end mt-8 gap-4">
                    <BtnDanger handleClick={() => setModal(false)}>
                        batal
                    </BtnDanger>
                    <BtnActions handleClick={() => addEvent()} >
                        submit
                    </BtnActions>
                </div>
            </div>
        </ReactModal>
    </div>
}

export default Event