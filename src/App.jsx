import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomeCategory from './Pages/HomeCategory';
import Landing from './Components/Landing';
import Hero from './Hero/Hero';
import LoginRegister from './LoginRegister/LoginRegister';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import { useState } from 'react';


function App (){
  const [cartProducts, setCartProducts] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [])

	const addToCart = (product) => {
		const localCart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

		let isProduct = localCart.find((item) => item.id === product.id);
		console.log(isProduct, 'isProduct');
		if (!isProduct) {
			localStorage.setItem('cart', JSON.stringify([...localCart, product]));
			setCartProducts([...cartProducts, product]);
		}

	};
  return (
       <BrowserRouter>
       <Navbar />
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<HomeCategory category="shop"/>}/>
        <Route path='/about' element={<HomeCategory category="about"/>}/>
        <Route path='/blog' element={<HomeCategory category="blog"/>}/>
        <Route path='/contact' element={<HomeCategory category="contact"/>}/>
        <Route path='/pages' element={<HomeCategory category="pages"/>}/>
        <Route path="/product" element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/login' element={<LoginRegister/>}/>
          {/* <Route path='/search' element={<Search/>}/> */}
          <Route path='/cart' element={<Cart/>}/>
          {/* <Route path='/heart' element={<Heart/>}/> */}
       </Routes>
       <Landing />
       <Hero />
       <Footer />
       </BrowserRouter>
      )
}

export default App;