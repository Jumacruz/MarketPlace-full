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
        <main class="MainSecction">
            <section class="ContactContent">
                <section class="Registration-form">
                    <div class="form-title-wrap">
                        <h2><i class="uil uil-lock-open-alt"></i>Iniciar sesión</h2>
                    </div>
                    <form class="form-fields-container">
                        <div class="Username-section form-row">
                            <label for="username">Usuario o correo electrónico <span class="required">*</span></label>
                            <input class="input-text" value={UserName} onChange={e => onChange(e,'UserName')} type="text" name="username" id="username" required></input>
                        </div>
                        <div class="Password-section form-row">
                            <label for="password">Contraseña <span class="required">*</span></label>
                            <span class="password-input">
                                <input class="input-text" value={password} onChange={e => onChange(e,'password')} type="password" name="password" id="password" required></input>
                            </span>
                        </div>
                        <div class="Button-section">
                            <button type="submit" class="Registration-Button" onClick={create}>Iniciar sesión</button>
                            <label class="Remind-me-checkbox">
                                <input class=" " name="rememberme" type="checkbox" id="rememberme" value="forever"></input>
                                <span>Recuérdame</span>
                            </label>
                        </div>
                        <div class="lost-password-section">
                            <a href="#">¿Perdiste tu contraseña?</a>
                            <a href="#">¿ya tienes una cuenta?</a>
                        </div>
                        <div class="Button-section">
                            <button  class="Registration-Button" onClick={CreateStore}>Crear tienda</button>
                            <button  class="Registration-Button" onClick={AddProduct}>Añadir producto</button>
                        </div>
                    </form>
                </section>
            </section>
        </main>
    );
}

export default UserRegistration;