import '../assets/css/main.css';
import '../assets/css/fonts.css';
import '../assets/css/Contact.css';

function Contact () {
    return (
        <main className="MainSecction MainSecctionContact">
            <section className="ContactContentBox">
                <section className="Contact-grid-column">
                        <div className="Contact-row-container">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="button-contact-container">
                                                <form method="get" action="#">
                                                    <button type="submit" className="button-contact-icon"><i className="uil uil-calendar-alt"></i><p>citas</p></button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="button-contact-container">
                                                <form method="get" action="#">
                                                    <button type="submit" className="button-contact-icon"><i className="uil uil-shield-check"></i><p>garantía</p></button>
                                                </form>
                                            </div>
                                            <div className="button-contact-container">
                                                <form method="get" action="#">
                                                    <button type="submit" className="button-contact-icon"><i className="uil uil-location-point"></i><p>Centros de servicio</p></button>
                                                </form>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <div className="button-contact-container">
                                                <form method="get" action="#">
                                                    <button type="submit" className="button-contact-icon"><i className="uil uil-phone"></i><p>teléfono</p></button>
                                                </form>
                                            </div>
                                            <div className="button-contact-container">
                                                <form method="get" action="#">
                                                    <button type="submit" className="button-contact-icon"><i className="uil uil-envelope"></i><p>correo electrónico</p></button>
                                                </form>
                                            </div>
                                            <div className="button-contact-container">
                                                <form method="get" action="#">
                                                    <button  type="submit" className="button-contact-icon"><i className="uil uil-whatsapp"></i><p>whatsapp</p></button>
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