import { WalletIcon } from '@heroicons/react/24/solid'
import { dateFormat } from '../utis'

export default function ExpenseDataList(props) {
    return (props.expenseData?.data.length === 0 ? <div className='flex justify-center font-medium'>No Data</div> : <div className='space-y-4'>{props.expenseData?.data.slice(0, props.dataLimit).map((element) => <div className='grid grid-cols-4'>
        <div className='h-10 w-10 flex justify-center rounded-lg shadow-lg p-2'>
            <WalletIcon className='h-6 w-6'></WalletIcon>
        </div>
        <div className='col-span-2 flex justify-top flex-col'>
            <h3>{element.name}</h3>
            <p className='text-gray-400 text-xs'>{dateFormat(new Date(element.createdOn))}</p>
        </div>
        <div className='flex items-top'>
            {element.amount}
        </div>
    </div>)}
    </div>)
}