import '../assets/css/main.css';
import '../assets/css/fonts.css';
import '../assets/css/Directory.css';
import '../assets/css/Store.css';

function Store ({children}) {
    return (
        <main class="MainSecction">
            <h1 class="Store-H1">Tienda</h1>
            <section class="products-container">
                <div class="products-row">
                    <aside class="categories-aside">
                        <a href="#" class="toggle-sidebar">
                            <span>Open Sidebar</span>
                            <span>Close Sidebar</span>
                        </a>
                        <div class="left-sidebar-small-hide">
                            <div class="widget_product_categories">
                                <div class="widget-title-wrap">
                                    <h5 class="widget-title">Categorías</h5>
                                </div>
                                <ul class="product-categories">
                                    <li class="cat-item"><a href="#">Comida</a></li>
                                    <li class="cat-item"><a href="#">Ropa</a></li>
                                    <li class="cat-item"><a href="#">Salud</a></li>
                                    <li class="cat-item"><a href="#">Tecnología</a></li>
                                    <li class="cat-item"><a href="#">Hogar</a></li>
                                    <li class="cat-item"><a href="#">Servicios</a></li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                    <section class="products-box">              
                        <div class="products-row-box">
                            {children}
                        </div>
                    </section>
                </div>
            </section>
        </main> 
    );
}

export default Store;