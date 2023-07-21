import Brand from "./brand";
import Login from "./login";
import { memo } from "react";
function Landing() {

    return (
        <div className="h-full grid grid-cols-1 md:grid-cols-2 ">
            <div className="hidden md:block">
                <Brand></Brand>
            </div>
            <div>
                <Login></Login>
            </div>
        </div>
    )
}

export default memo(Landing);