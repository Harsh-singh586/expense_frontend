import { ChartPieIcon, ChartBarSquareIcon, WalletIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid'
import { useNavigate } from 'react-router-dom'

export default function Navs(props) {
    const navigate = useNavigate()
    return (
        <div className='space-y-4 mt-5'>
            <div className='flex justify-start space-x-4 cursor-pointer' onClick={() => navigate('/dashboard')}>
                <ChartPieIcon className='h-7 w-7 text-slate-400'></ChartPieIcon>
                <h1 className={`text-[20px] ${props.currLoc === 'dashboard' ? 'font-bold' : ''}`}>Dashboard</h1>
            </div>
            <div className='flex  space-x-4 cursor-pointer' onClick={() => navigate('/income')}>
                <ChartBarSquareIcon className='h-7 w-7 text-slate-400'></ChartBarSquareIcon>
                <h1 className={`text-[20px] ${props.currLoc === 'income' ? 'font-bold' : ''}`}>Investment</h1>
            </div>
            <div className='flex space-x-4 cursor-pointer' onClick={() => navigate('/expense')}>
                <WalletIcon className='h-7 w-7 text-slate-400'></WalletIcon>
                <h1 className={`text-[20px] ${props.currLoc === 'expense' ? 'font-bold' : ''}`}>Expense</h1>
            </div>
            <a href='/budget' className='flex space-x-4 cursor-pointer'>
                <CurrencyDollarIcon className='h-7 w-7 text-slate-400'></CurrencyDollarIcon>
                <h1 className={`text-[20px] ${props.currLoc === 'budget' ? 'font-bold' : ''}`}>Budget</h1>
            </a>
            <a className='flex space-x-4 cursor-pointer' onClick={() => {
                localStorage.removeItem('token')
                navigate('/')
            }}>
                <CurrencyDollarIcon className='h-7 w-7 text-slate-400'></CurrencyDollarIcon>
                <h1 className='text-[20px]'>Sign Out</h1>
            </a>
        </div>
    )
}