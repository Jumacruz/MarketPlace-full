import '../../assets/css/Directory.css';
import '../../assets/css/Store.css';
import '../../assets/css/main.css';
import '../../assets/css/fonts.css';
import { Link } from 'react-router-dom';

function Products({id, name, currency, PriceLabeled, PriceNormal, img}) {
    return ( 
        <Link to={`/Store/${id}`} className="products-unity">
            <figure className="products-img-box">
                <img src={img}/>
            </figure>
            <div className="products-single__content">
                <div className="product-separator"></div>
                <span className="price">
                    <del>
                        <span className="Price-labeled">
                        <span className="Price-currencySymbol">{currency}</span>
                        {PriceLabeled}</span>
                    </del> 
                    <ins>
                        <span className="Price-normal">
                        <span className="Price-currencySymbol">{currency}</span>
                        {PriceNormal}</span>
                    </ins>
                </span>
                <h3 className="product-name">
                    <a>{name}</a>
                </h3>
            </div>
        </Link>
     );
}

export default Products;