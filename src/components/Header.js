import "../styles/Header.css"
import Navbar from "./Navbar";

export default function Header() {
    return (
        <div className="Header">
            <p className="logo">MENU</p>
            <Navbar/>
        </div>
    );
}