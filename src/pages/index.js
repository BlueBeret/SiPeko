import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (<div className="w-full  grow bg-[#E7E2F2] flex justify-between items-center">
    <Head>
      <title>SiPeko - Sistem Pemilihan Ketua Osis</title>
    </Head>
    <div className="flex flex-col pl-14">
      <div>
      <Image src={"/assets/SiPeko-lg.png"} width={398} height={103}  objectFit="contain">
      </Image>
      </div>
      
      <h3 className="text-secondary-500 mt-6">Sistem Pemilihan Ketua OSIS</h3>
      <div className="bg-primary-600 text-white w-max font-bold px-4 py-2 rounded-full hover:cursor-pointer">Buat event baru</div>
    </div>
    <div>
      <Image src="/assets/images/votingq.png" width={950} height={576}></Image>
    </div>

  </div>
  )
}
