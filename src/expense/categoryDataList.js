import { WalletIcon } from '@heroicons/react/24/solid'
import { category } from '../settings'

export default function CategoryDataList(props) {
    return (props.categoryData?.data.length === 0 ? <div className='flex justify-center font-medium'>No Data</div> : <div className='space-y-4'>{props.categoryData?.data.map((element) => <div className='grid grid-cols-4'>
        <div className='h-10 w-10 flex justify-center rounded-lg shadow-lg p-2'>
            <WalletIcon className='h-6 w-6'></WalletIcon>
        </div>
        <div className='col-span-2 flex justify-top flex-col'>
            <h3>{category[element._id] ?? element._id}</h3>
        </div>
        <div className='flex items-top'>
            {element.amount}
        </div>
    </div>)}
    </div>)
}