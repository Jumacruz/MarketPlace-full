import '../assets/css/main.css';
import '../assets/css/fonts.css';
import '../assets/css/Directory.css';
import '../assets/css/Store.css';


function Directory ({children}) {
    return (
        <main className="MainSecction">
            <h1 className="Secction-H1">Directorio</h1>
            <div className="directory-container-fluid">
                <div className="Stores-row">
                    <aside className="categories-aside">
                        <a href="#" className="toggle-sidebar">
                            <span>Open Sidebar</span>
                            <span>Close Sidebar</span>
                        </a>
                        <div className="left-sidebar-small-hide">
                            <div className="widget_product_categories">
                                <div className="widget-title-wrap">
                                    <h5 className="widget-title">Categorías</h5>
                                </div>
                                <ul className="product-categories">
                                    <li className="cat-item"><a href="#">Comida</a></li>
                                    <li className="cat-item"><a href="#">Ropa</a></li>
                                    <li className="cat-item"><a href="#">Salud</a></li>
                                    <li className="cat-item"><a href="#">Tecnología</a></li>
                                    <li className="cat-item"><a href="#">Hogar</a></li>
                                    <li className="cat-item"><a href="#">Servicios</a></li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                    <div className="directory-row">
                        {children}
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Directory;