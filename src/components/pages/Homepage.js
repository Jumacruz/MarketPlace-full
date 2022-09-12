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
        <main class="MainSecction">
            <section class="HomepageContent">
                <section class="MenuAndBanner"> 
                    <div class="products">
                        <div class="MenuCategoriesContainer">
                            <ul id="MenuCategories" class="menu">
                                <li class="itemsMenuCategories"><a href="#"><i class="uil uil-restaurant"></i>Comida</a></li>
                                <li class="itemsMenuCategories"><a href="#"><i class="uil uil-store"></i>Ropa</a></li>
                                <li class="itemsMenuCategories"><a href="#"><i class="uil uil-medical-square-full"></i>Salud</a></li>
                                <li class="itemsMenuCategories"><a href="#"><i class="uil uil-mobile-android"></i>Tecnología</a></li>
                                <li class="itemsMenuCategories"><a href="#"><i class="uil uil-estate"></i>Hogar</a></li>
                                <li class="itemsMenuCategories"><a href="#"><i class="uil uil-user-square"></i>Servicios</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="promotions">
                        {/* <!-- <h1>principal</h1> --> */}
                        <a href="#">
                            <div class="promotions-content">
                                <h1>El mejor lugar para <b>comprar</b></h1>
                                <img src={portada1}/>
                            </div>
                        </a>
                    </div>
                </section>
                {/* home promotions button */}
                <section class="PromotionsButtons">
                    <div class="Promotions-Search">
                        <div class="Search-content">
                            <h2>Buscador <d>de tiendas</d></h2>
                            <label for="search-engine"></label>
                            <input class="input-search-engine" type="text" id="search-engine" name="search-engine" placeholder="Busca una tienda..." ></input>
                            <div class="Search-button">
                                <form method="get" action="#">
                                    <button type="submit" class="button-Search"><i class="uil uil-search"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="Promotions-Buttons">
                        <div class="Promotions-Buttons-container">
                            <form method="get" action="#">
                                <button type="submit" class="button-Promotions">Promociona tu servidor</button>
                            </form>
                        </div>
                        <div class="Promotions-Buttons-container">
                            <form method="get" action="#">
                                <button type="submit" class="button-Promotions">Promociona tu producto</button>
                            </form>
                        </div>
                        <div class="Promotions-Buttons-container">
                            <form method="get" action="#">
                                <button type="submit" class="button-Promotions">Inscribe tu negocio</button>
                            </form>
                        </div>
                    </div>
                </section>
                {/* <!-----our-services-------> */}
                <section class="services-row-container">
                    <h1>Nuestros comercios</h1>
                    <div class="services-columns">
                        <a class="img-services-box" href="#">
                            <div class="services-widget-wrap">
                                <img class="services-background-overlay" src={comida1}></img>
                                <div class="services-background-text">
                                    <figure class="services-image-box-img">
                                        <i class="uil uil-restaurant"></i>
                                    </figure>
                                    <div class="services-image-box-content">
                                        <h2 class="services-image-box-title">comida</h2>
                                    </div>
                                </div>  
                            </div>
                        </a>
                        <a class="img-services-box" href="#">
                            <div class="services-widget-wrap">
                                <img class="services-background-overlay" src={ropa1}></img>
                                <div class="services-background-text">
                                    <figure class="services-image-box-img">
                                        <i class="uil uil-store"></i>
                                    </figure>
                                    <div class="services-image-box-content">
                                        <h2 class="services-image-box-title">Ropa</h2>
                                    </div>
                                </div>  
                            </div>
                        </a>
                        <a class="img-services-box" href="#">
                            <div class="services-widget-wrap">
                                <img class="services-background-overlay" src={salud1}></img>
                                <div class="services-background-text">
                                    <figure class="services-image-box-img">
                                        <i class="uil uil-medical-square-full"></i>
                                    </figure>
                                    <div class="services-image-box-content">
                                        <h2 class="services-image-box-title">Salud</h2>
                                    </div>
                                </div>  
                            </div>
                        </a>
                        <a class="img-services-box" href="#">
                            <div class="services-widget-wrap">
                                <img class="services-background-overlay" src={tecnologia1}></img>
                                <div class="services-background-text">
                                    <figure class="services-image-box-img">
                                        <i class="uil uil-mobile-android"></i>
                                    </figure>
                                    <div class="services-image-box-content">
                                        <h2 class="services-image-box-title">Tecnología</h2>
                                    </div>
                                </div>  
                            </div>
                        </a>
                        <a class="img-services-box" href="#">
                            <div class="services-widget-wrap">
                                <img class="services-background-overlay" src={Sala1}></img>
                                <div class="services-background-text">
                                    <figure class="services-image-box-img">
                                        <i class="uil uil-estate"></i>
                                    </figure>
                                    <div class="services-image-box-content">
                                        <h2 class="services-image-box-title">Hogar</h2>
                                    </div>
                                </div>  
                            </div>
                        </a>
                        <a class="img-services-box" href="#">
                            <div class="services-widget-wrap">
                                <img class="services-background-overlay" src={servicios1}></img>
                                <div class="services-background-text">
                                    <figure class="services-image-box-img">
                                        <i class="uil uil-user-square"></i>
                                    </figure>
                                    <div class="services-image-box-content">
                                        <h2 class="services-image-box-title">Servicios</h2>
                                    </div>
                                </div>  
                            </div>
                        </a>
                    </div>
                </section>
                {/* <!-----Boost your business-------> */}
                <section class="BoostBusiness">
                    <div class="Boost-business-container">
                        <h1>Impulsa tu negocio</h1>
                        <div class="business-Boost-button">
                            <form method="get" action="./Contacto.html">
                                <button type="submit" class="button-Boost">Entérate aquí</button>
                            </form>
                        </div>
                    </div>
                </section>
                {/* <!-----home-columns-------> */}
                <section class="home-row-container">
                    <h1>Productos destacados</h1>
                    <div class="home-columns">
                        <div class="img-row-box">
                            <a href="#"><img src={landscape}/></a>
                        </div>
                        <div class="img-row-box">
                            <a href="#"><img src={landscape}/></a>
                        </div>
                        <div class="img-row-box">
                            <a href="#"><img src={landscape}/></a>
                        </div>
                    </div>
                </section>
                {/* <!-----home-columns-------> */}
                <section class="home-row-container">
                    <h1>Servicios destacados</h1>
                    <div class="home-columns">
                        <div class="img-row-box">
                            <a href="#"><img src={landscape}/></a>
                        </div>
                        <div class="img-row-box">
                            <a href="#"><img src={landscape}/></a>
                        </div>
                        <div class="img-row-box">
                            <a href="#"><img src={landscape}/></a>
                        </div>
                    </div>
                </section>
            </section>
        </main>
    );
}

export default Homepage;