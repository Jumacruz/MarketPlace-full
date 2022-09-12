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

function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path='/' element={<Homepage></Homepage>}/>
      <Route path='/Directory' element={<Directory><StoreList></StoreList></Directory>}/>
      <Route path='/Store' element={<Store><ProductList></ProductList></Store>}/>
      <Route path='/Contact' element={<Contact></Contact>}/>
      <Route path='/UserRegistration' element={<UserRegistration></UserRegistration>}/>
      <Route path='/tiendas' element={<StoreDetails></StoreDetails>}/>
      <Route path='/productos' element={<ProductDetails></ProductDetails>}/>
      <Route path='*' element={<h1>Not found</h1>}/>
    </Routes>
    <Footer></Footer>
    </>
  );
}

export default App;
 