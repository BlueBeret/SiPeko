import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Image from 'next/image'

import Event from '@/components/admin/Events'
import EventDetail from '@/components/admin/EventDetail'

import Link from 'next/link'

import axios from 'axios'

export default function Admin({ }) {
    const router = useRouter()
    const [events, setEvents] = useState([])
    const menu= router.query.menu || 'event'

    const renderMenu = (menu) => {
        switch (menu) {
            case 'event':
                return <Event></Event>
                break;
            case 'edetail':
                return <EventDetail></EventDetail>

            default:
                break;
        }
    }

    

    return <div className="w-full flex-grow flex flex-row">
        <div className="sidebar w-[115px] bg-primary-100 flex flex-col items-center px-2 py-8">
            <Image src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGUAAABkCAYAAACfIP5qAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAD4SURBVHgB7dFBEYAwEACxcsYBlXXTqY19JBby7L2/mXkXCeecfxY5UoKkBEkJkhIkJUhKkJQgKUFSgqQESQmSEiQlSEqQlCApQVKCpARJCZISJCVISpCUIClBUoKkBEkJkhIkJUhKkJQgKUFSgqQESQmSEiQlSEqQlCApQVKCpARJCZISJCVISpCUIClBUoKkBEkJkhIkJUhKkJQgKUFSgqQESQmSEiQlSEqQlCApQVKCpARJCZISJCVISpCUIClBUoKkBEkJkhIkJUhKkJQgKUFSgqQESQmSEiQlSEqQlCApQVKCpARJCZISJCVISpCUIClBUoKkBF2umwfNtn6rnwAAAABJRU5ErkJggg==" width={100} height={100}>
            </Image>
            <ul className='mt-[30px] flex flex-col items-center gap-8'>
                <li key='event'>
                    <Link href={'admin?menu=event'}>
                        <button className={`font-extrabold ${menu == 'event' || menu == 'edetail'?'text-white bg-[#878CF0] rounded-full px-4 py-2':'px-4 py-2 font-extrabold'}`}>Event</button>
                    </Link>
                </li>
                <li key='data'>
                    <Link href={'admin?menu=data'}>
                        <button className={`font-extrabold ${menu == 'data'?'text-white bg-[#878CF0] rounded-full px-4 py-2':'px-4 py-2 font-extrabold'}`}>Data</button>
                    </Link>
                </li>
                <li key='akun'>
                    <Link href={'admin?menu=akun'}>
                        <button className={`font-extrabold ${menu == 'akun'?'text-white bg-[#878CF0] rounded-full px-4 py-2':'px-4 py-2 font-extrabold'}`}>Akun</button>
                    </Link>
                </li>
            </ul>
        </div>
            {renderMenu(router.query.menu || 'event')}

    </div>
}
