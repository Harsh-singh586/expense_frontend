import { Bars3Icon } from '@heroicons/react/24/solid'


export default function Header(props) {
    return (
        <div className="h-20 bg-slate-200 flex flex-row items-center p-5">

            <Bars3Icon className='h-6 w-6 md:hidden' onClick={props.changeVisibility}></Bars3Icon>
            <div className='flex justify-center w-full'>
                <h1 className='font-bold text-2xl'>Dashboard</h1>
            </div>


        </div>
    )
}