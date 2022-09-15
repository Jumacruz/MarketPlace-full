import '../../assets/css/Directory.css';
import '../../assets/css/Store.css';
import '../../assets/css/main.css';
import '../../assets/css/fonts.css';
import { Link } from 'react-router-dom';

function Products({id, name, currency, PriceLabeled, PriceNormal, img}) {
    return ( 
        <Link to={`/Store/${id}`} class="products-unity">
            <figure class="products-img-box">
                <img src={img}/>
            </figure>
            <div class="products-single__content">
                <div class="product-separator"></div>
                <span class="price">
                    <del>
                        <span class="Price-labeled">
                        <span class="Price-currencySymbol">{currency}</span>
                        {PriceLabeled}</span>
                    </del> 
                    <ins>
                        <span class="Price-normal">
                        <span class="Price-currencySymbol">{currency}</span>
                        {PriceNormal}</span>
                    </ins>
                </span>
                <h3 class="product-name">
                    <a>{name}</a>
                </h3>
            </div>
        </Link>
     );
}

export default Products;