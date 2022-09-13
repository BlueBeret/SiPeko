import { BtnActions } from '@/components/buttons'

import { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    return <div className="flex grow flex-col items-center justify-center bg-bg-100">
        <h3 className="text-primary-700">Login Admin</h3>
        <div className="flex flex-col items-start w-[300px] mt-20 gap-5">
            <div className="flex flex-col items-start gap-2 w-full">
                <div className="font-sans font-semibold text-lg">
                    Username</div>
                <input className="px-4 py-2 rounded-lg w-full" type="text" placeholder="username" value={username} onChange={e => setUsername(e.target.value)}></input>
            </div>
            <div className="flex flex-col items-start gap-2 w-full">
                <div className="font-sans font-semibold text-lg">
                    Password</div>
                <input className="px-4 py-2 rounded-lg w-full" type="text" placeholder="password" value={password} onChange={e => setPassword(e.target.value)}></input>
            </div>
            <div className="flex flex-col items-end w-full">
                <div>
                <BtnActions handleClick={() => alert('not yet implemented')} >
                    Login
                </BtnActions>
                </div>
                <div>

                </div>
                
            </div>
        </div>


    </div>
}

export default Login