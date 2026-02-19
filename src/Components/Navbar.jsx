import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css"
import { useState } from "react";
export default function Navbar() {

    const [isopen, setIsOpen] = useState(false)
    const handleMenuBar = () => {

        setIsOpen(!isopen);
    }

    return (

        <div id="Navbar" >

            <Link id="logo" to="/" >LOGO</Link>
            <nav id="Links">
                <Link className="Link" to="/">Home</Link>
                <Link className="Link" to="/marketplace">Marketplace</Link>
                <Link className="Link" to="/how-it-work">How it work</Link>
                <Link className="Link" to="/farmers">For Farmers</Link>
                <Link className="Link" to="/signup">Sign Up</Link>
                <Link className="Link" to="/login">Login <FontAwesomeIcon icon={faArrowRightToBracket} /></Link>
            </nav>

            <FontAwesomeIcon id="Menubar" icon={faBars} onClick={handleMenuBar} />


            <nav id="Sidebarlinks" style={{ width: isopen ? "250px" : "0px", transition: "ease-in-out .4s" }}>
                <Link className="Link" to="/">Home</Link>
                <Link className="Link" to="/marketplace">Marketplace</Link>
                <Link className="Link" to="/how-it-work">How it work</Link>
                <Link className="Link" to="/farmers">For Farmers</Link>
                <hr />
                <Link className="Link" to="/signup">Sign Up </Link>
                <Link className="Link" to="/login">Login <FontAwesomeIcon icon={faArrowRightToBracket} /></Link>
                <hr />
                <span style={{ textWrap: "nowrap" }}>© Prayogam  2026</span>
            </nav>
        </div>
    )
}