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

    const StoreMemory = state.objects[id];

    useEffect(() => {
        if (!id) return;
        if(!StoreMemory){
            return navigate('/Directory')
        }
        //setForm(StoreMemory);
    }, [id, StoreMemory, navigate]);
 
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
        <section className="ContactContent">
            <section className="Registration-form">
                <div className="form-title-wrap">
                    <h2><i className="uil uil-store"></i>Tienda</h2>
                </div>
                <form className="form-fields-container">
                    <div className="StoreName-section form-row">
                        <label for="StoreName">Nombre de la tienda <span className="required">*</span></label>
                        <input className="input-text" value={name} onChange={e => onChange(e,'name')} type="text" name="StoreName" id="StoreName" placeholder='ej. TiendasDeSanJose' required></input>
                    </div>
                    <div className="Category-section form-row">
                        <label for="StoreCategory">Categoría<span className="required">*</span></label>
                            <select className="SelectList" value={category} onChange={e => onChange(e,'category')} type="text" name="StoreCategory" id="StoreCategory" required>
                                {CategoriesOptions.map(option => <option key={option} value={option}>{option}</option>)}
                            </select>
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

export default StoreDetails;