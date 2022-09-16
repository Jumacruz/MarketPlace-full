
function Users({ UserName, password }) {
    return ( 
        <div className="products-unity">
            <figure className="products-img-box">
                <a href={url}>
                    <img src={img}/>
                </a>
            </figure>
            <div className="products-single__content">
                <div className="product-separator"></div>
                <h3 className="product-name">
                    {UserName}
                </h3>
            </div>
        </div>
     );
}

export default Users;