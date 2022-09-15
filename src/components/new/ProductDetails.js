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

    useEffect(() => {
        const StoreMemory = state.objects[id];
        if (!id) return;
        if(!StoreMemory){
            return navigate('/Directory')
        }
        //setForm(StoreMemory);
    }, [id]);
    
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
        <section class="ContactContent">
            <section class="Registration-form">
                <div class="form-title-wrap">
                    <h2><i class="uil uil-box"></i>Producto</h2>
                </div>
                <form class="form-fields-container">
                    <div class="ProductName-section form-row">
                        <label for="ProductName">Nombre del producto <span class="required">*</span></label>
                        <input class="input-text" value={name} onChange={e => onChange(e,'name')} type="text" name="ProductName" id="ProductName"  placeholder='ej. Camisa' required></input>
                    </div>
                    <div class="Category-section form-row">
                        <label for="ProductCategory">Categoría<span class="required">*</span></label>
                            <select class="SelectList" value={category} onChange={e => onChange(e,'category')} type="text" name="ProductCategory" id="ProductCategory" required>
                                {CategoriesOptions.map(option => <option value={option}>{option}</option>)}
                            </select>
                    </div>
                    <div class="PriceSection">
                        <div class="PriceOption">
                            <label for="PriceLabeled">Precio inicial<span class="required">*</span></label>
                            <input class="input-text" value={PriceLabeled} onChange={e => onChange(e,'PriceLabeled')} type="text" name="PriceLabeled" id="PriceLabeled" placeholder='ej. 100' required></input>
                        </div>
                        <div class="PriceOption">
                            <label for="PriceNormal">Precio actual<span class="required">*</span></label>
                            <input class="input-text" value={PriceNormal} onChange={e => onChange(e,'PriceNormal')} type="text" name="PriceNormal" id="PriceNormal" placeholder='ej. 90' required></input>
                        </div>
                    </div>
                    <form class="ImgSection form-row" name="UploadImages" type="POST" enctype="multipart/formdata">
                        <label for="StoreImg">Imagen / logo</label>
                        <input  class="input-text" value={img} onChange={e => onChange(e,'img')} type="file" accept="image/*" name="imagen" id="StoreImg"/>
                    </form>
                    <div class="Button-section">
                        {!id &&<button  class="Registration-Button" onClick={create}>Crear</button>}
                        {id && <button  class="Registration-Button" onClick={update}>Actualizar</button>}
                        {id && <button  class="Registration-Button EraseButton" onClick={erase}>Borrar</button>}
                        <button  class="Registration-Button" onClick={cancel}>Cancelar</button>
                    </div>
                </form>
            </section>
        </section>
     );
}

export default ProductDetails;