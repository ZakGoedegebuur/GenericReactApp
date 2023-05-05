import "../styles/Header.css"
import Navbar from "./Navbar";

export default function Header(props) {
    return (
        <div className="Header">
            <Navbar setPage={props.setPage} page={props.page}/>
        </div>
    );
}