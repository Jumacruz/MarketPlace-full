import '../../assets/css/Directory.css';
import '../../assets/css/Store.css';
import '../../assets/css/main.css';
import '../../assets/css/fonts.css';

function Stores({name, category, views, img, url, CategoryUrl}) {
    return ( 
        <div class="directory-unity">
            <figure class="directory-img-box">
                <a href={url}>
                    <img src={img}/>
                </a>
            </figure>
            <div class="directory-single__content" >
                <div class="directory-single__info">
                    <div class="directory-info--top">
                        <h4 class="directory-title"><a href={url}>{name}</a></h4>
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
        </div>
     );
}

export default Stores;