import { useState } from "react"

export default function Snackbar(props) {


    return (
        <div className="absolute top-[80%] left-[30%] bg-slate-300 p-4 w-[600px] shadow-2xl rounded-xl flex justify-between flex-row">
            <p className=" text-gray-800">something Went Wrong</p>
            <button className=" bg-slate-600 text-white p-2" onClick={props.snackbarVisibility}>Close</button>
        </div>
    )
}