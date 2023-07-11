import Navbar from "./navbar/navbar";
import Header from "./dashboard/header";
import Content from "./dashboard/content";
import Expense from "./expense/expense";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Income from "./income/income";
import Budget from "./budget/budget";



export default function Dashboard(props) {

    var [navOpen, setnavOpen] = useState(true)
    var [token, setToken] = useState(localStorage.getItem('token'))
    const navigate = useNavigate();

    const changeVisibility = () => {
        setnavOpen(!navOpen)
    }

    const changeToken = (val) => {
        setToken(val)
    }

    const elementMapper = {
        'dashboard': <Content tokenhandle={changeToken}></Content>,
        'expense': <Expense></Expense>,
        'income': <Income></Income>,
        'budget': <Budget></Budget>
    }

    useEffect(() => {
        if (!token) {
            navigate('/')
        }
    })


    return (
        <div className="grid grid-cols-1 md:grid-cols-4">
            <div className={`${navOpen ? 'block' : 'hidden'} md:block h-full`}>
                <Navbar changeVisibility={changeVisibility} currLoc={props.currLoc} ></Navbar>
            </div>
            <div className="col-span-3 h-full flex flex-col">
                <div>
                    <Header heading='Dashboard' changeVisibility={changeVisibility}></Header>
                </div>
                <div className="flex flex-grow-1">
                    {elementMapper[props.currLoc]}
                </div>
            </div>


        </div>
    )
}
