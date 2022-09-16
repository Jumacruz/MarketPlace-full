import '../assets/css/main.css';
import '../assets/css/fonts.css';
import '../assets/css/Homepage.css';

import portada1 from '../assets/img/imagen portada1.png';

import comida1 from '../assets/img/comida1.jpg';
import ropa1 from '../assets/img/ropa1.jpg';
import salud1 from '../assets/img/salud1.jpg';
import tecnologia1 from '../assets/img/tecnologia1.jpg';
import Sala1 from '../assets/img/Sala1.jpg';
import servicios1 from '../assets/img/servicios1.jpg';

import landscape from '../assets/img/landscape.jpg';

function Homepage () {
    return (
        <main className="MainSecction">
            <section className="HomepageContent">
                <section className="MenuAndBanner"> 
                    <div className="products">
                        <div className="MenuCategoriesContainer">
                            <ul id="MenuCategories" className="menu">
                                <li className="itemsMenuCategories"><a href="#"><i className="uil uil-restaurant"></i>Comida</a></li>
                                <li className="itemsMenuCategories"><a href="#"><i className="uil uil-store"></i>Ropa</a></li>
                                <li className="itemsMenuCategories"><a href="#"><i className="uil uil-medical-square-full"></i>Salud</a></li>
                                <li className="itemsMenuCategories"><a href="#"><i className="uil uil-mobile-android"></i>Tecnología</a></li>
                                <li className="itemsMenuCategories"><a href="#"><i className="uil uil-estate"></i>Hogar</a></li>
                                <li className="itemsMenuCategories"><a href="#"><i className="uil uil-user-square"></i>Servicios</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="promotions">
                        {/* <!-- <h1>principal</h1> --> */}
                        <a href="#">
                            <div className="promotions-content">
                                <h1>El mejor lugar para <b>comprar</b></h1>
                                <img src={portada1}/>
                            </div>
                        </a>
                    </div>
                </section>
                {/* home promotions button */}
                <section className="PromotionsButtons">
                    <div className="Promotions-Search">
                        <div className="Search-content">
                            <h2>Buscador <d>de tiendas</d></h2>
                            <label for="search-engine"></label>
                            <input className="input-search-engine" type="text" id="search-engine" name="search-engine" placeholder="Busca una tienda..." ></input>
                            <div className="Search-button">
                                <form method="get" action="#">
                                    <button type="submit" className="button-Search"><i className="uil uil-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="Promotions-Buttons">
                        <div className="Promotions-Buttons-container">
                            <form method="get" action="#">
                                <button type="submit" className="button-Promotions">Promociona tu servidor</button>
                            </form>
                        </div>
                        <div className="Promotions-Buttons-container">
                            <form method="get" action="#">
                                <button type="submit" className="button-Promotions">Promociona tu producto</button>
                            </form>
                        </div>
                        <div className="Promotions-Buttons-container">
                            <form method="get" action="#">
                                <button type="submit" className="button-Promotions">Inscribe tu negocio</button>
                            </form>
                        </div>
                    </div>
                </section>
                {/* <!-----our-services-------> */}
                <section className="services-row-container">
                    <h1>Nuestros comercios</h1>
                    <div className="services-columns">
                        <a className="img-services-box" href="#">
                            <div className="services-widget-wrap">
                                <img className="services-background-overlay" src={comida1}></img>
                                <div className="services-background-text">
                                    <figure className="services-image-box-img">
                                        <i className="uil uil-restaurant"></i>
                                    </figure>
                                    <div className="services-image-box-content">
                                        <h2 className="services-image-box-title">comida</h2>
                                    </div>
                                </div>  
                            </div>
                        </a>
                        <a className="img-services-box" href="#">
                            <div className="services-widget-wrap">
                                <img className="services-background-overlay" src={ropa1}></img>
                                <div className="services-background-text">
                                    <figure className="services-image-box-img">
                                        <i className="uil uil-store"></i>
                                    </figure>
                                    <div className="services-image-box-content">
                                        <h2 className="services-image-box-title">Ropa</h2>
                                    </div>
                                </div>  
                            </div>
                        </a>
                        <a className="img-services-box" href="#">
                            <div className="services-widget-wrap">
                                <img className="services-background-overlay" src={salud1}></img>
                                <div className="services-background-text">
                                    <figure className="services-image-box-img">
                                        <i className="uil uil-medical-square-full"></i>
                                    </figure>
                                    <div className="services-image-box-content">
                                        <h2 className="services-image-box-title">Salud</h2>
                                    </div>
                                </div>  
                            </div>
                        </a>
                        <a className="img-services-box" href="#">
                            <div className="services-widget-wrap">
                                <img className="services-background-overlay" src={tecnologia1}></img>
                                <div className="services-background-text">
                                    <figure className="services-image-box-img">
                                        <i className="uil uil-mobile-android"></i>
                                    </figure>
                                    <div className="services-image-box-content">
                                        <h2 className="services-image-box-title">Tecnología</h2>
                                    </div>
                                </div>  
                            </div>
                        </a>
                        <a className="img-services-box" href="#">
                            <div className="services-widget-wrap">
                                <img className="services-background-overlay" src={Sala1}></img>
                                <div className="services-background-text">
                                    <figure className="services-image-box-img">
                                        <i className="uil uil-estate"></i>
                                    </figure>
                                    <div className="services-image-box-content">
                                        <h2 className="services-image-box-title">Hogar</h2>
                                    </div>
                                </div>  
                            </div>
                        </a>
                        <a className="img-services-box" href="#">
                            <div className="services-widget-wrap">
                                <img className="services-background-overlay" src={servicios1}></img>
                                <div className="services-background-text">
                                    <figure className="services-image-box-img">
                                        <i className="uil uil-user-square"></i>
                                    </figure>
                                    <div className="services-image-box-content">
                                        <h2 className="services-image-box-title">Servicios</h2>
                                    </div>
                                </div>  
                            </div>
                        </a>
                    </div>
                </section>
                {/* <!-----Boost your business-------> */}
                <section className="BoostBusiness">
                    <div className="Boost-business-container">
                        <h1>Impulsa tu negocio</h1>
                        <div className="business-Boost-button">
                            <form method="get" action="./Contacto.html">
                                <button type="submit" className="button-Boost">Entérate aquí</button>
                            </form>
                        </div>
                    </div>
                </section>
                {/* <!-----home-columns-------> */}
                <section className="home-row-container">
                    <h1>Productos destacados</h1>
                    <div className="home-columns">
                        <div className="img-row-box">
                            <a href="#"><img src={landscape}/></a>
                        </div>
                        <div className="img-row-box">
                            <a href="#"><img src={landscape}/></a>
                        </div>
                        <div className="img-row-box">
                            <a href="#"><img src={landscape}/></a>
                        </div>
                    </div>
                </section>
                {/* <!-----home-columns-------> */}
                <section className="home-row-container">
                    <h1>Servicios destacados</h1>
                    <div className="home-columns">
                        <div className="img-row-box">
                            <a href="#"><img src={landscape}/></a>
                        </div>
                        <div className="img-row-box">
                            <a href="#"><img src={landscape}/></a>
                        </div>
                        <div className="img-row-box">
                            <a href="#"><img src={landscape}/></a>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Homepage;