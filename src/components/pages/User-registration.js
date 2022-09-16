import { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router';
import { ContextUsers } from '../../services/MemoryUsers';
import '../assets/css/main.css';
import '../assets/css/fonts.css';
import '../assets/css/User-registration.css';


function UserRegistration () {
    const [form, setForm]= useState({
        "UserName":"",
        "password":"",
    });

    const [state, dispatch] = useContext(ContextUsers);

    const {UserName, password } = form;

    const onChange = (event, prop) => {
        setForm(estate => ({...estate, [prop]: event.target.value}));
    }

    useEffect(() => {
        // console.log(form);
    }, [form]);

    const navigate = useNavigate();
    
    const CreateStore = async () => {
        navigate('/tiendas');
    }
    const AddProduct = async () => {
        navigate('/productos');
    }
    
    const create = async () => {
        dispatch({type: 'create', item: form });
        // navigate('/Store');
    }
    return (
        <main className="MainSecction">
            <section className="ContactContent">
                <section className="Registration-form">
                    <div className="form-title-wrap">
                        <h2><i className="uil uil-lock-open-alt"></i>Iniciar sesión</h2>
                    </div>
                    <form className="form-fields-container">
                        <div className="Username-section form-row">
                            <label for="username">Usuario o correo electrónico <span className="required">*</span></label>
                            <input className="input-text" value={UserName} onChange={e => onChange(e,'UserName')} type="text" name="username" id="username" required></input>
                        </div>
                        <div className="Password-section form-row">
                            <label for="password">Contraseña <span className="required">*</span></label>
                            <span className="password-input">
                                <input className="input-text" value={password} onChange={e => onChange(e,'password')} type="password" name="password" id="password" required></input>
                            </span>
                        </div>
                        <div className="Button-section">
                            <button type="submit" className="Registration-Button" onClick={create}>Iniciar sesión</button>
                            <label className="Remind-me-checkbox">
                                <input className=" " name="rememberme" type="checkbox" id="rememberme" value="forever"></input>
                                <span>Recuérdame</span>
                            </label>
                        </div>
                        <div className="lost-password-section">
                            <a href="#">¿Perdiste tu contraseña?</a>
                            <a href="#">¿ya tienes una cuenta?</a>
                        </div>
                        <div className="Button-section">
                            <button  className="Registration-Button" onClick={CreateStore}>Crear tienda</button>
                            <button  className="Registration-Button" onClick={AddProduct}>Añadir producto</button>
                        </div>
                    </form>
                </section>
            </section>
        </main>
    );
}

export default UserRegistration;