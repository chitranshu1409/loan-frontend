import React,{useState,useEffect} from 'react';
import './App.css';
import {Routes ,Router ,Route,BrowserRouter} from 'react-router-dom'
// import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import Loader from "./components/Loader/Loader";
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import { HomeLoan } from './pages/HomeLoan';
import PersonalLoan from './pages/PersonalLoan';
import BusinessLoan from './pages/BusinessLoan';
import EducationLoan from './pages/EducationLoan';
import CarLoan from './pages/CarLoan';
import Lap from './pages/Lap';



function App() {
  const[Loading,SetLoading]=useState(true);

  useEffect(()=>{
    SetLoading(true)

    setTimeout(()=>{
    SetLoading(false)}
    ,1900)
  },[])  
  return (
    <>
    
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Homepage/>}></Route>
            <Route path='/AboutUs' element={<AboutUs/>}></Route>
            <Route path='/ContactUs' element={<ContactUs/>}></Route>
            <Route path='/Services'>
              <Route path='/Services/HomeLoan' element={<HomeLoan/>}/>
              <Route path='/Services/PersonalLoan' element={<PersonalLoan/>}/>
              <Route path='/Services/BusinessLoan' element={<BusinessLoan/>}/>
              <Route path='/Services/EducationLoan' element={<EducationLoan/>}/>
              <Route path='/Services/CarLoan' element={<CarLoan/>}/>
              <Route path='/Services/Lap' element={<Lap/>}/>
            </Route>
            
        </Routes>
        </BrowserRouter>
       
    </>
  )
}

export default App;
