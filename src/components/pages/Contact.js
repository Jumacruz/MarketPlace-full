import '../assets/css/main.css';
import '../assets/css/fonts.css';
import '../assets/css/Contact.css';

function Contact () {
    return (
        <main class="MainSecction MainSecctionContact">
            <section class="ContactContent">
                <section class="Contact-grid-column">
                        <div class="Contact-row-container">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div class="button-contact-container">
                                                <form method="get" action="#">
                                                    <button type="submit" class="button-contact-icon"><i class="uil uil-calendar-alt"></i><p>citas</p></button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="button-contact-container">
                                                <form method="get" action="#">
                                                    <button type="submit" class="button-contact-icon"><i class="uil uil-shield-check"></i><p>garantía</p></button>
                                                </form>
                                            </div>
                                            <div class="button-contact-container">
                                                <form method="get" action="#">
                                                    <button type="submit" class="button-contact-icon"><i class="uil uil-location-point"></i><p>Centros de servicio</p></button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div class="button-contact-container">
                                                <form method="get" action="#">
                                                    <button type="submit" class="button-contact-icon"><i class="uil uil-phone"></i><p>teléfono</p></button>
                                                </form>
                                            </div>
                                            <div class="button-contact-container">
                                                <form method="get" action="#">
                                                    <button type="submit" class="button-contact-icon"><i class="uil uil-envelope"></i><p>correo electrónico</p></button>
                                                </form>
                                            </div>
                                            <div class="button-contact-container">
                                                <form method="get" action="#">
                                                    <button  type="submit" class="button-contact-icon"><i class="uil uil-whatsapp"></i><p>whatsapp</p></button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                </section>
            </section>
        </main>
    );
}

export default Contact;