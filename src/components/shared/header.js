import '../assets/css/main.css';
import '../assets/css/fonts.css';
import { Link } from 'react-router-dom';

function Header () {
    return (
        <header class="header">
            <div class="Header-container">
                <div class="Flex-Boxes Flex-Title-Header">
                    <h1>Prueba</h1>
                </div>
                <div class="Flex-Boxes"></div>
                <div class="Navar-Container Flex-Boxes">
                    <ul class="ul-Container">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/Directory">Directorio</Link></li>
                        <li><Link to="/Store">Tienda</Link></li>
                        <li><Link to="/Contact">Contacto</Link></li>
                        <li class="User-icon"><Link to="/UserRegistration"><i class="uil uil-user"></i></Link></li>
                    </ul>
                </div>
            </div>
        </header>
    ); 
}

export default Header;