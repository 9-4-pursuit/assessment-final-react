import logo from "../logo/Golden-Snitch.jpeg"
import '../styles/styles.css'
import { Link } from "react-router-dom"

export default function Nav() {
    return (
        <div>
            <Link to='/' >
                <img src={logo} alt="logo" className="logo"/>
            </Link>
            <p>NavBar</p>
        </div>
    )
    
}