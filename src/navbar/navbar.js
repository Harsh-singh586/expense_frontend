//https://dribbble.com/shots/18901668-Admin-dashboard-analytics-UX

import { XMarkIcon } from '@heroicons/react/24/solid'
import Navs from './navs'

export default function Navbar(props) {
    return (
        <div className="min-h-screen max-h-fit bg-slate-100 space-y-8 z-10 max-md:absolute md:z-0 md:w-full p-4">
            <div className='flex justify-end'>
                <XMarkIcon className='h-7 w-7 md:hidden' onClick={props.changeVisibility}></XMarkIcon>
            </div>
            <div className="flex justify-center items-center flex-col space-y-10">
                <h1 className="text-2xl font-bold mb-10 text-center">Expense Tracker</h1>
                <div className="space-y-3 flex justify-center items-center flex-col">
                    <div className="">
                        <img className='rounded-full' src={localStorage.getItem('profile_picture')} />
                    </div>
                    <p>Welcome Back</p>
                    <p className="font-bold">{localStorage.getItem('name')}</p>
                </div>
                <Navs currLoc={props.currLoc}></Navs>
            </div>
        </div>
    )
}