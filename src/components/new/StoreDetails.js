import { useEffect, useState, useContext } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ContextStore } from '../../services/MemoryStores';
import '../assets/css/Forms.css';
import '../assets/css/User-registration.css';

function StoreDetails() {
    
    const {id} = useParams();
    console.log(id)

    const [form, setForm]= useState({
        "name": "",
        "category":"",
        "img":"", 
    });

    const [state, dispatch] = useContext(ContextStore);

    const {name, category, img } = form;

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
        navigate('/Directory');
    }
    const update = () => {
        dispatch({type: 'update', item: form });
        navigate('/Directory');
    }
    const erase = () => {
        dispatch({type: 'erase', id });
        navigate('/Directory');
    }
    const cancel = () => {
        navigate('/Directory');
    }

    const CategoriesOptions = ["Comida", "Ropa", "Salud", "Tecnología", "Hogar", "Servicios"];

    return (
        <section class="ContactContent">
            <section class="Registration-form">
                <div class="form-title-wrap">
                    <h2><i class="uil uil-store"></i>Tienda</h2>
                </div>
                <form class="form-fields-container">
                    <div class="StoreName-section form-row">
                        <label for="StoreName">Nombre de la tienda <span class="required">*</span></label>
                        <input class="input-text" value={name} onChange={e => onChange(e,'name')} type="text" name="StoreName" id="StoreName" placeholder='ej. TiendasDeSanJose' required></input>
                    </div>
                    <div class="Category-section form-row">
                        <label for="StoreCategory">Categoría<span class="required">*</span></label>
                            <select class="SelectList" value={category} onChange={e => onChange(e,'category')} type="text" name="StoreCategory" id="StoreCategory" required>
                                {CategoriesOptions.map(option => <option value={option}>{option}</option>)}
                            </select>
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

export default StoreDetails;