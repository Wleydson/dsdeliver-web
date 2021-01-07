import './style.css';
import {ReactComponent as Logo} from './logo.svg'
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <nav className="main-navbar">
            <div className="logo">
                <Logo/>
                <Link className="logo-text" to="/">DS Deliver</Link>
            </div>
            
        </nav>
    );
}

export default Navbar