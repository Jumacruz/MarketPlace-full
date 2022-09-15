import '../../assets/css/Directory.css';
import '../../assets/css/Store.css';
import '../../assets/css/main.css';
import '../../assets/css/fonts.css';
import { Link } from 'react-router-dom';

function Stores({id, name, category, views, img, CategoryUrl}) {
    return ( 
        <Link to={`/Directory/${id}`} class="directory-unity">
            <figure class="directory-img-box">
                <img src={img}/>
            </figure>
            <div class="directory-single__content" >
                <div class="directory-single__info">
                    <div class="directory-info--top">
                        <h4 class="directory-title"><a>{name}</a></h4>
                    </div>
                </div>
                <div class="directory-single__meta">
                    <div class="directory-single__meta--left">
                        <div class="directory-category">
                            <a href={CategoryUrl}>{category}</a>
                        </div>       
                    </div>
                    <div class="directory-single__meta--right">
                        <div class="directory-view-count">
                            <i class="uil uil-eye"></i><span class="eye-count">{views}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
     );
}

export default Stores;