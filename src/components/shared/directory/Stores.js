import '../../assets/css/Directory.css';
import '../../assets/css/Store.css';
import '../../assets/css/main.css';
import '../../assets/css/fonts.css';
import { Link } from 'react-router-dom';

function Stores({id, name, category, views, img, CategoryUrl}) {
    return ( 
        <Link to={`/Directory/${id}`} className="directory-unity">
            <figure className="directory-img-box">
                <img src={img}/>
            </figure>
            <div className="directory-single__content" >
                <div className="directory-single__info">
                    <div className="directory-info--top">
                        <h4 className="directory-title"><a>{name}</a></h4>
                    </div>
                </div>
                <div className="directory-single__meta">
                    <div className="directory-single__meta--left">
                        <div className="directory-category">
                            <a href={CategoryUrl}>{category}</a>
                        </div>       
                    </div>
                    <div className="directory-single__meta--right">
                        <div className="directory-view-count">
                            <i className="uil uil-eye"></i><span className="eye-count">{views}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
     );
}

export default Stores;