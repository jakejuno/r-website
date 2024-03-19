import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar(){
    return(
        <div className='container'>
            <div className="logo">N.G GAMES</div>
            <div className="menu">
                <ul>
                    <li>
                        <Link className='homelink' to="/">HOME</Link>
                    </li>
                    <li>
                        <Link className='homelink' to="/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link className='homelink' to="/projects">PROJECTS</Link>
                    </li>
                    <li>
                        <Link className='homelink' to="/contact">CONTACT</Link>
                    </li>
                </ul>
            </div>
            
        </div>
    )
}