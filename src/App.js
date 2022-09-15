import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/shared/header';
import Homepage from './components/pages/Homepage';
import Directory from './components/pages/Directory';
import Store from './components/pages/Store';
import Contact from './components/pages/Contact';
import UserRegistration from './components/pages/User-registration';
import Footer from './components/shared/footer';

import StoreList from './components/shared/directory/StoreList';
import ProductList from './components/shared/store/ProductList';
import StoreDetails from './components/new/StoreDetails';
import ProductDetails from './components/new/ProductDetails';
import ModalDirectory from './components/shared/directory/ModalDirectory';
import ModalStore from './components/shared/store/ModalStore';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/Directory' element={<Directory><StoreList/></Directory>}>
        <Route path='/Directory/:id' element={<ModalDirectory/>}/>
      </Route>
      <Route path='/Store' element={<Store><ProductList/></Store>}>
        <Route path='/Store/:id' element={<ModalStore/>}/>
      </Route>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/UserRegistration' element={<UserRegistration/>}/>
      <Route path='/tiendas' element={<StoreDetails/>}/>
      <Route path='/productos' element={<ProductDetails/>}/>
      <Route path='*' element={<h1>Not found</h1>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
 