import '../assets/css/main.css';
import '../assets/css/fonts.css';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <header className="header">
            <div className="Header-container">
                <div className="Flex-Boxes Flex-Title-Header">
                    <h1>Prueba</h1>
                </div>
                <div className="Flex-Boxes"></div>
                <div className="Navar-Container Flex-Boxes">
                    <ul className="ul-Container">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/Directory">Directorio</Link></li>
                        <li><Link to="/Store">Tienda</Link></li>
                        <li><Link to="/Contact">Contacto</Link></li>
                        <li className="User-icon"><Link to="/UserRegistration"><i className="uil uil-user"></i></Link></li>
                    </ul>
                </div>
            </div>
        </header>
    ); 
}

export default Header;