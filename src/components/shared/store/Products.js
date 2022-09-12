import '../../assets/css/Directory.css';
import '../../assets/css/Store.css';
import '../../assets/css/main.css';
import '../../assets/css/fonts.css';

function Products({name, currency, PriceLabeled, PriceNormal, img, url }) {
    return ( 
        <div class="products-unity">
            <figure class="products-img-box">
                <a href={url}>
                    <img src={img}/>
                </a>
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
                    <a href={url}>{name}</a>
                </h3>
            </div>
        </div>
     );
}

export default Products;