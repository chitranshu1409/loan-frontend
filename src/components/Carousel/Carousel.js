import react,{ useState } from 'react';
import './Carousel.css'
import pic from '../../pics/pic6.png';
import Button from '../Button/Button';
import Button2 from '../Button2/Button2';
function Carousels() {
  

  return (
    <>
      <div className='hero shadow bg-gradient-to-t from-slate-100'>
        
          <div className='hero-img-div  '>
            <img src={pic} />
          </div>
          <div className='hero-content-div'>
            <div className='hero-title flex flex-col justify-center items-start'>
              <p className=' hero-para1 text-indigo-700 text-5xl font-bold'> Get Your Desired Loan  </p>
              <p className='hero-para1 text-indigo-700 text-5xl font-bold'> With Just  <span className='text-rose-600'>one Call!</span></p>
            </div>
            <div className='hero-paras'>
              <p>Unlock your dreams and achieve your goals today with our</p>
              <p>flexible loan options—your future is worth investing in!</p>
            </div>
            <div className='contact-btn-div gap-10'>
            <Button/>
            <Button2/>
            </div>
          </div>
          
        
      </div> 
      
    </>
  )
}

export default Carousels;