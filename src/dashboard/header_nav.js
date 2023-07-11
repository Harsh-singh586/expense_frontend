import Navbar from "../navbar/navbar"
import Header from "./header"
import { useState } from "react"

export default function HeaderNav() {

    const [showNav, setshowNav] = useState(true)

    const changeVisibility = () => {
        setshowNav(!showNav)
    }


    return (
        <>
            <div className={`${showNav ? 'block' : 'hidden'} md:block h-full`}>
                <Navbar changeVisibility={changeVisibility}></Navbar>
            </div>
            <div className="col-span-3 h-full">
                <Header heading='Dashboard' changeVisibility={changeVisibility}></Header>
            </div>
        </>
    )
}