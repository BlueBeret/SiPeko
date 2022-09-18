import Head from "next/head"
import Image from "next/image"

import Swal from 'sweetalert2'

import { BtnInfo, BtnSuccess, BtnDanger } from '@/components/buttons'
import ReactDOMServer from 'react-dom/server';
import { useState } from "react";

export default function Vote({ namasekolah, listCalon }) {

    const lihatMisi = (v) => {
        const content = <li className="flex flex-col items-center w-full pb-5 px-5 gap-2">
            <Image src={v.img} width={197} height={197}>
            </Image>
            <h5 className="uppercase font-extrabold">
                {v.name}
            </h5>
            <ul className="gap-2 mt-2 mb-4">
                {(v.misi.split(';')).map((v, i) => {
                    return <li key={i} className="mt-[16px]">
                        <p>{v}</p>
                    </li>
                })}
            </ul>
            <BtnDanger id="tutup" handleClick={() => {
                Swal.close()
            }
            }>Tutup</BtnDanger>
        </li>
        Swal.fire({
            width: '400px',
            html: ReactDOMServer.renderToStaticMarkup(content),
            showConfirmButton: false,
            background: '#F6F2F8',
            willOpen: () => {
                const tutup = document.querySelector('#tutup')
                tutup.addEventListener('click', () => {
                    console.log('closed')
                    Swal.close()
                })
            }
        })
    }

    const vote = (calon) => {

        const ControlButton =  <div className="flex flex-row gap-10 justify-center">
            <BtnDanger id="tidak">Tidak</BtnDanger>
            <BtnSuccess id="ya">Ya</BtnSuccess>
        </div>

        Swal.fire({
            title: "Anda yakin ingin memilih <span style=color:#878CF0>"+calon.name+"</span>?",
            html: ReactDOMServer.renderToStaticMarkup(ControlButton),
            background: '#F6F2F8',
            showConfirmButton: false,
            willOpen: () => {
                const tidak = document.querySelector('#tidak')
                tidak.addEventListener('click', () => {
                    console.log('closed')
                    Swal.close()
                })
                const ya = document.querySelector('#ya')
                ya.addEventListener('click', () => {
                    ya.style.display = 'none'
                    tidak.style.display = 'none'
                    Swal.showLoading()
                    alert('nice')
                    Swal.close()
                })
            }

        })
    }

    return <div className="bg-bg-100 w-full flex flex-col items-center flex-grow">
        <Head>
            <title>Vote - {namasekolah}</title>
        </Head>
        <h2 className="text-primary-700 mt-20 w-1/2 text-center">Pilih Calonmu</h2>

        <ul className="list-calon flex flex-row wrap justify-center mt-10">
            {listCalon.map((v, i) => {
                return <li key={i} className="flex flex-col items-center max-w-[300px] pb-5 px-5 mx-10 gap-2">
                    <Image src={v.img} width={197} height={197}>
                    </Image>
                    <h5 className="uppercase font-extrabold">
                        {v.name}
                    </h5>
                    <p className="font-[16px] font-medium text-center mt-2">
                        {v.visi}
                    </p>
                    <div className="flex justify-between w-full mt-2">
                        <BtnInfo handleClick={() => lihatMisi(v)}>Lihat Misi</BtnInfo>
                        <BtnSuccess handleClick={() => vote(v)}>Pilih Calon</BtnSuccess>
                    </div>
                </li>
            })}
        </ul>
    </div>
}

export async function getServerSideProps({ query }) {
    return {
        props: {
            namasekolah: "SMA Lorem Ipsum 20",
            listCalon: [
                {
                    "id": 123456,
                    "name": "Green Wright",
                    "visi": "Minim quis quis ad est adipisicing. Minim id tempor non occaecat consectetur laboris sit nostrud commodo. Aliquip id est labore ad pariatur nisi proident exercitation tempor ex.",
                    "misi": "Laboris deserunt magna sit irure incididunt.;Enim est ullamco commodo do consequat duis et tempor consequat sit.;Ea consectetur ex laborum irure irure mollit anim occaecat.",
                    "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAADFCAYAAAAPD43zAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH7SURBVHgB7dOhEYAwAACx0nlxSASweA+B5EdIdsi2H+c95rwG8FnrmQP4EQOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgPACpzwGZH68lbUAAAAASUVORK5CYII="
                },
                {
                    "id": 123457,
                    "name": "Francis Walter",
                    "visi": "Adipisicing dolore ea eiusmod id ad adipisicing et quis tempor do. Non cillum aliqua consectetur officia minim enim excepteur minim voluptate amet enim minim reprehenderit. Non ex nostrud ad aliquip.",
                    "misi": "Esse voluptate fugiat sunt est aliqua deserunt.;Cupidatat deserunt culpa consectetur sunt laboris eu exercitation sint.;Minim duis nulla consequat dolore veniam nulla excepteur.",
                    "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAADFCAYAAAAPD43zAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH7SURBVHgB7dOhEYAwAACx0nlxSASweA+B5EdIdsi2H+c95rwG8FnrmQP4EQOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgPACpzwGZH68lbUAAAAASUVORK5CYII="
                },
                {
                    "id": 123156,
                    "name": "Lilly Calhoun",
                    "visi": "Aliqua et id aute deserunt do laborum consectetur adipisicing ut. Sit duis magna consequat nisi minim sint. Et duis enim adipisicing veniam deserunt quis quis eiusmod mollit amet pariatur dolore cillum.",
                    "misi": "Est aliqua ea consequat cupidatat dolor occaecat deserunt elit esse.;Veniam laboris aliquip consequat consequat dolor sint Lorem occaecat dolor magna tempor velit veniam irure.;Aliqua laborum dolore enim irure ut incididunt.",
                    "img": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMYAAADFCAYAAAAPD43zAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAH7SURBVHgB7dOhEYAwAACx0nlxSASweA+B5EdIdsi2H+c95rwG8FnrmQP4EQOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgCAGBDEgiAFBDAhiQBADghgQxIAgBgQxIIgBQQwIYkAQA4IYEMSAIAYEMSCIAUEMCGJAEAOCGBDEgPACpzwGZH68lbUAAAAASUVORK5CYII="
                }
            ]
        }
    }
}