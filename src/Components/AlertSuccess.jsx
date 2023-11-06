import "../Assets/css/AlertSuccess.css"
export default function AlertSuccess() {
    return ( 
        <div class="alert">
            <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
            <strong>Danger!</strong> Indicates a dangerous or potentially negative action.
        </div>
     );
}
