import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ContextProducts } from '../../services/MemoryProducts';
import '../assets/css/Forms.css';
import '../assets/css/User-registration.css';

function ProductDetails() {

    const {id} = useParams();
    console.log(id)

    const [form, setForm]= useState({
        "name": "",
        "category":"",
        "PriceLabeled":"",
        "PriceNormal":"",
        "img":"",
        "currency":"Q",
    });

    const [state, dispatch] = useContext(ContextProducts);

    const {name, category, PriceLabeled, PriceNormal, img } = form;

    const onChange = (event, prop) => {
        setForm(estate => ({...estate, [prop]: event.target.value}));
    }

    const navigate = useNavigate();

    const ProductsMemory = state.objects[id];

    useEffect(() => {
        if (!id) return;
        if(!ProductsMemory){
            return navigate('/Directory')
        }
        //setForm(ProductsMemory);
    }, [id, ProductsMemory, navigate]);
    
    const create = () => {
        dispatch({type: 'create', item: form });
        navigate('/Store');
    }
    const update = () => {
        dispatch({type: 'update', item: form });
        navigate('/Store');
    }
    const erase = () => {
        dispatch({type: 'erase', id });
        navigate('/Store');
    }
    const cancel = () => {
        navigate('/Store');
    }

    const CategoriesOptions = ["Comida", "Ropa", "Salud", "Tecnología", "Hogar", "Servicios"];

    return ( 
        <section className="ContactContent">
            <section className="Registration-form">
                <div className="form-title-wrap">
                    <h2><i className="uil uil-box"></i>Producto</h2>
                </div>
                <form className="form-fields-container">
                    <div className="ProductName-section form-row">
                        <label for="ProductName">Nombre del producto <span className="required">*</span></label>
                        <input className="input-text" value={name} onChange={e => onChange(e,'name')} type="text" name="ProductName" id="ProductName"  placeholder='ej. Camisa' required></input>
                    </div>
                    <div className="Category-section form-row">
                        <label for="ProductCategory">Categoría<span className="required">*</span></label>
                            <select className="SelectList" value={category} onChange={e => onChange(e,'category')} type="text" name="ProductCategory" id="ProductCategory" required>
                                {CategoriesOptions.map(option => <option key={option} value={option}>{option}</option>)}
                            </select>
                    </div>
                    <div className="PriceSection">
                        <div className="PriceOption">
                            <label for="PriceLabeled">Precio inicial<span className="required">*</span></label>
                            <input className="input-text" value={PriceLabeled} onChange={e => onChange(e,'PriceLabeled')} type="text" name="PriceLabeled" id="PriceLabeled" placeholder='ej. 100' required></input>
                        </div>
                        <div className="PriceOption">
                            <label for="PriceNormal">Precio actual<span className="required">*</span></label>
                            <input className="input-text" value={PriceNormal} onChange={e => onChange(e,'PriceNormal')} type="text" name="PriceNormal" id="PriceNormal" placeholder='ej. 90' required></input>
                        </div>
                    </div>
                    <form className="ImgSection form-row" name="UploadImages" type="POST" enctype="multipart/formdata">
                        <label for="StoreImg">Imagen / logo</label>
                        <input  className="input-text" value={img} onChange={e => onChange(e,'img')} type="file" accept="image/*" name="imagen" id="StoreImg"/>
                    </form>
                    <div className="Button-section">
                        {!id &&<button  className="Registration-Button" onClick={create}>Crear</button>}
                        {id && <button  className="Registration-Button" onClick={update}>Actualizar</button>}
                        {id && <button  className="Registration-Button EraseButton" onClick={erase}>Borrar</button>}
                        <button  className="Registration-Button" onClick={cancel}>Cancelar</button>
                    </div>
                </form>
            </section>
        </section>
     );
}

export default ProductDetails;