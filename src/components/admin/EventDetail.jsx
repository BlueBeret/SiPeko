import FormData from 'form-data'

import axios from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

import VotingChart from './VotingChart'
import { BtnActions, BtnSuccess, BtnDanger } from '../buttons'
import ReactModal from 'react-modal'

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

    const [calonModal, setCalonModal] = useState(false)

    const [sid, setSid] = useState()
    const [visi, setVisi] = useState()
    const [misi, setMisi] = useState()
    const [img, setImg] = useState()

    const colors = [generateRandomColor(), generateRandomColor(), generateRandomColor(), generateRandomColor(), generateRandomColor(), generateRandomColor(), generateRandomColor(), generateRandomColor(), generateRandomColor()]


    useEffect(() => {
        axios("/api/event/" + eid, { withCredentials: true }).then((res) => {
            console.log(res.data)
            setDetails(res.data)
        })

        axios("/api/calon/" + eid, { withCredentials: true }).then((res) => {
            setCalon(res.data)
            let tmp = res.data.map((v, i) => {
                return {
                    title: v.nama,
                    value: v.score,
                    color: colors[i]
                }
            })
            sethasil(tmp)
        })

        const interval = setInterval(() => {
            axios("/api/calon/" + eid, { withCredentials: true }).then((res) => {
                setCalon(res.data)
                let tmp = res.data.map((v, i) => {
                    return {
                        title: v.nama,
                        value: v.score,
                        color: colors[i]
                    }
                })
                sethasil(tmp)
            })
        }, 5000);
        return () => {
            clearInterval(interval);
        };
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

    const handleImage = (f) => {
        setImg(f)
    }

    const addCalon = () => {
        Swal.fire({
            title: "uploading . . .",
            showConfirmButton: false,
            allowEscapeKey: false,
            allowOutsideClick: false,
            didOpen: () => { Swal.showLoading() }

        })

        var formdata = new FormData()
        formdata.append('img', img)
        formdata.append('eid', eid)
        formdata.append('visi', visi)
        formdata.append('misi', misi)
        formdata.append('sid', sid)
        axios.post('/api/calon', formdata, { withCredentials: true })
            .then(
                (res) => {
                    Swal.hideLoading()
                    Swal.update({
                        title: "berhasil",
                        icon: "success",
                    })
                    setTimeout(() => { Swal.close(); setModal(false) }, 2000)
                }
            )
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
                <div className='flex flex-col gap-4'>
                    <BtnSuccess handleClick={() => toClip()}> copy vote link </BtnSuccess>
                    <BtnActions handleClick={() => setCalonModal(true)}>Tambah Calon</BtnActions>
                </div>
            </div>
            <ReactModal
                isOpen={calonModal}
                onRequestClose={() => setCalonModal(false)}
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
                            Nomor Induk</div>
                        <input className="px-4 py-2 rounded-lg w-full" type="text" placeholder="123456" value={sid} onChange={e => setSid(e.target.value)}></input>
                    </div>
                    <div className="flex flex-col items-start gap-2 w-full">
                        <div className="font-sans font-semibold text-lg">
                            Visi</div>
                        <textarea className="px-4 py-2 rounded-lg w-full" type="text" placeholder="Mensejahterakan umat manusia" value={visi} onChange={e => setVisi(e.target.value)} />
                    </div>

                    <div className="flex flex-col items-start gap-2 w-full">
                        <div>
                            <div className="font-sans font-semibold text-lg">
                                Misi </div>
                            <span className='font-medium text-sm'>(Pisah setiap misi dengan karakter semikolon ";" )</span>
                        </div>

                        <textarea className="px-4 py-2 rounded-lg w-full" type="text" placeholder="Menabung;Menanam;Mengapain" value={misi} onChange={e => setMisi(e.target.value)} />
                    </div>

                    <div className="flex flex-col items-start gap-2 w-full">
                        <div className="font-sans font-semibold text-lg">
                            Foto</div>
                        <input type="file" name="img" onChange={(e) => handleImage(e.target.files[0])}></input>
                    </div>
                    <div className="w-full flex flex-row justify-end mt-8 gap-4">
                        <BtnDanger handleClick={() => setCalonModal(false)}>
                            batal
                        </BtnDanger>
                        <BtnActions handleClick={() => addCalon()} >
                            submit
                        </BtnActions>
                    </div>
                </div>

            </ReactModal>
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