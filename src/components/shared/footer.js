import '../assets/css/main.css';
import '../assets/css/fonts.css';

function Footer () {
    return (
        <footer class="footer">
            <div class="Footer-container">
                <div class="Flex-Boxes Flex-Boxes-Footer">
                    <h1>Tienda online</h1>
                    <ul class="Store-footer-ul footer-ul">
                        <li><a href="#">¿Cómo comprar?</a></li>
                        <li><a href="#">Envíos y Entregas</a></li>
                        <li><a href="#">Garantías y Devoluciones</a></li>
                        <li><a href="#">Rastrea tu pedido</a></li>
                        <li><a href="#">Términos y condiciones</a></li>
                    </ul>
                </div>
                <div class="Flex-Boxes Flex-Boxes-Footer">
                    <h1>Atención al Cliente</h1>
                    <ul class="Client-footer-ul footer-ul">
                        <li><a href="#">Asistencia Personalizada</a></li>
                        <li><a href="#">Pymes y Corporativo</a></li>
                        <li><a href="#">Centro de ayuda</a></li>
                    </ul>
                </div>
                <div class="Flex-Boxes Flex-Boxes-Footer">
                    <h1>Smart Office Enterprise</h1>
                    <ul class="Enterprise-footer-ul footer-ul">
                        <li><a href="#">¿Quiénes somos?</a></li>
                        <li><a href="./Contacto.html">Contáctanos</a></li>
                    </ul>
                </div>
                <div class="button-fixed-container">
                    <form method="get" action="Contact">
                        <button type="submit" class="button-fixed-footer"><i class="uil uil-whatsapp"></i></button>
                    </form>
                </div>
            </div>
        </footer>
    );
}



export default Footer;