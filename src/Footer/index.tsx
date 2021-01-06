import './style.css';
import { ReactComponent as Youtube} from './Youtube.svg'
import { ReactComponent as Linkedin} from './Linkedin.svg'

function Footer(){
    return(
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <Youtube />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior/" target="_new">
                    <Linkedin />
                </a>
                <a href="https://www.linkedin.com/in/wleydson/" target="_new">
                    <Linkedin />
                </a>
            </div>
        </footer>
    );
}

export default Footer