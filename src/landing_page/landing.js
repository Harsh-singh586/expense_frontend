import Brand from "./brand";
import Login from "./login";
export default function Landing() {

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