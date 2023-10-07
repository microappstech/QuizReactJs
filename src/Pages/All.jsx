import Sections from "./Sections"
import Navbar from "../Components/Navbar"

export default function All(){
    return(
        <div className="w-[100%]">
            <Navbar />
            <Sections/>
        </div>
    )
}