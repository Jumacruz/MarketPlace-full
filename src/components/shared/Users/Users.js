
function Users({ UserName, password }) {
    return ( 
        <div class="products-unity">
            <figure class="products-img-box">
                <a href={url}>
                    <img src={img}/>
                </a>
            </figure>
            <div class="products-single__content">
                <div class="product-separator"></div>
                <h3 class="product-name">
                    {UserName}
                </h3>
            </div>
        </div>
     );
}

export default Users;