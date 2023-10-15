import Sections from "./Sections"
import Navbar from "../Components/Navbar"
import Sidebar from "../Components/Sidebar"

export default function All(){
    return(
        <div className="w-[100%]">
            <Navbar user="Hamza"/>            
            <Sections/>
        </div>
    )
}