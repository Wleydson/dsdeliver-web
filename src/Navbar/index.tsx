import './style.css';
import {ReactComponent as Logo} from './logo.svg'

function Navbar(){
    return(
        <nav className="main-navbar">
            <div className="logo">
                <Logo/>
                <a className="logo-text" href="home">DS Deliver</a>
            </div>
            
        </nav>
    );
}

export default Navbar