import "../styles/Header.css"
import Navbar from "./Navbar";

export default function Header(props) {
    return (
        <div className="Header">
            <p className="logo">MENU</p>
            <Navbar setPage={props.setPage} page={props.page}/>
        </div>
    );
}