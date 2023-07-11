//https://dribbble.com/shots/20082500-Add-experience-modal-Untitled-UI
import { CurrencyDollarIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import { useMutation } from "react-query"
import { category } from '../settings'
import { dateFormat, postData } from "../utis"

export default function ExpensePopup(props) {

    const mutation = useMutation({
        mutationFn: (data) => postData(data, '/expense'), onSuccess: () => {
            props.expenseRefetch()
            props.categoryRefetch()
        }
    })

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [amount, setAmount] = useState(0)
    const date = new Date()
    var datestr = dateFormat(date)
    const [dateinput, setDateinput] = useState(datestr)
    const [categoryInput, setCategoryInput] = useState('food')

    const save = () => {
        var dateObj = new Date(dateinput)
        dateObj.setHours(date.getHours(), date.getMinutes(), date.getSeconds(), 0)
        var createdOn = new Date(dateinput)
        var data = {
            name,
            description,
            amount: parseInt(amount),
            createdOn: createdOn,
            createdTime: dateObj,
            month: dateObj.getMonth() + 1,
            year: dateObj.getFullYear(),
            category: categoryInput
        }
        mutation.mutate(data)
        props.visibilityfunc()

    }


    return (
        <div className="z-10 absolute top-[70%] w-[80%] md:top-[20%] md:left-[30%] bg-blue-300 md:w-[60%] rounded-lg shadow-lg p-5 space-y-5">
            <div className="flex flex-row  space-x-4">
                <CurrencyDollarIcon className="h-6 w-6"></CurrencyDollarIcon>
                <h1 className="font-bold">Add Income</h1>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                    <h2 className="font-bold text-sm">Name</h2>
                    <input className=" rounded-lg w-[80%] h-7 border-purple-400 outline-none p-2" value={name} onChange={(el) => setName(el.target.value)}></input>
                </div>
                <div className="space-y-2">
                    <h2 className="font-bold text-sm">Description</h2>
                    <textarea className="w-[80%] rounded-lg p-2 outline-none" value={description} onChange={(el) => setDescription(el.target.value)}></textarea>
                </div>
                <div className="space-y-2">
                    <h2 className="font-bold text-sm">Description</h2>
                    <select name='category p-4' value={categoryInput} onChange={(e) => setCategoryInput(e.target.value)}>
                        {Object.keys(category).map((item) => <option value={item} className="p-2">{category[item]}</option>)}
                    </select>
                </div>
                <div className="space-y-2">
                    <h2 className="font-bold text-sm">Date</h2>
                    <input type="date" className="p-2" value={dateinput} onChange={(el) => setDateinput(el.target.value)}></input>
                </div>
                <div className="space-y-2">
                    <h2 className="font-bold text-sm">Amount</h2>
                    <input type="number" className="rounded-lg w-[80%] h-7 border-purple-400 outline-none p-2" value={amount} onChange={(el) => setAmount(el.target.value)}></input>
                </div>
            </div>
            <div className="w-full grid grid-cols-2 gap-4">
                <button className="border p-2" onClick={props.visibilityfunc}>Close</button>
                <button className="border bg-green-500 text-white" onClick={save}>Save</button>
            </div>
        </div>)
}