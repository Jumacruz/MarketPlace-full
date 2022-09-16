import '../assets/css/main.css';
import '../assets/css/fonts.css';

function Footer () {
    return (
        <footer className="footer">
            <div className="Footer-container">
                <div className="Flex-Boxes Flex-Boxes-Footer">
                    <h1>Tienda online</h1>
                    <ul className="Store-footer-ul footer-ul">
                        <li><a href="#">¿Cómo comprar?</a></li>
                        <li><a href="#">Envíos y Entregas</a></li>
                        <li><a href="#">Garantías y Devoluciones</a></li>
                        <li><a href="#">Rastrea tu pedido</a></li>
                        <li><a href="#">Términos y condiciones</a></li>
                    </ul>
                </div>
                <div className="Flex-Boxes Flex-Boxes-Footer">
                    <h1>Atención al Cliente</h1>
                    <ul className="Client-footer-ul footer-ul">
                        <li><a href="#">Asistencia Personalizada</a></li>
                        <li><a href="#">Pymes y Corporativo</a></li>
                        <li><a href="#">Centro de ayuda</a></li>
                    </ul>
                </div>
                <div className="Flex-Boxes Flex-Boxes-Footer">
                    <h1>Smart Office Enterprise</h1>
                    <ul className="Enterprise-footer-ul footer-ul">
                        <li><a href="#">¿Quiénes somos?</a></li>
                        <li><a href="./Contacto.html">Contáctanos</a></li>
                    </ul>
                </div>
                <div className="button-fixed-container">
                    <form method="get" action="Contact">
                        <button type="submit" className="button-fixed-footer"><i className="uil uil-whatsapp"></i></button>
                    </form>
                </div>
            </div>
        </footer>
    );
}



export default Footer;