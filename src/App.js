import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import { createContext, useEffect, useState } from "react";
import axios from 'axios'
import Footer from "./Components/Footer/Footer";
import ProductModal from "./Components/ProductModal/ProductModal";

const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [isOpenProductModal, setIsOpenProductModal] = useState(false);


  useEffect( () => {
    getCountry("https://countriesnow.space/api/v0.1/countries/");
  }, []);

  const getCountry =async(url) => {
    const responsive = await axios.get(url).then( (res) =>{
        setCountryList(res.data.data)
        console.log(res.data.data)
    })
  }


  const values = {
    countryList,
    setSelectedCountry,
    selectedCountry,
    isOpenProductModal,
    setIsOpenProductModal
  }
  return (
    <BrowserRouter >
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
        </Routes>
        <Footer/>
        {
            isOpenProductModal === true && <ProductModal /> 
        }
      </MyContext.Provider> 
    </BrowserRouter>
  );
}

export default App;
export {MyContext}