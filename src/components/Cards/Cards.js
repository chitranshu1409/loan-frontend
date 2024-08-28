import React from 'react'
import homeloan from '../../pics/homeloan.png';
import personal from '../../pics/personal.png';
import scholarship from '../../pics/scholarship.png'  
import business from '../../pics/assets.png';
import car from '../../pics/car-loan.png'; 
import lap from '../../pics/mortgage.png';
import './Cards.css'
const Cards = () => {
  return (
    <>
    <div className='cards-section'>
      <div className='cards-title flex items-center'>LOAN TYPES</div>
      <div className='cards'>

        <div class="card card-5">
          <div className=' card-upper flex items-center '>
            <div class="card__icon">
              <img src={homeloan}/> 
            </div> 
            <div className='card-title'>Home Loan</div>
          </div>
          <div className='card-content'>
          Turn your dream home into a reality today with our affordable and hassle-free home loan solutions!
          </div>
          <div className='flex justify-end gap-6'>
          <div className="know-more-link"><a href='/Services/HomeLoan'>Know More</a></div>
          <div className='card-link'><a href='/ContactUs'>Apply Now</a></div>
          </div>
        </div>

      <div class="card card-5">
      <div className=' card-upper flex items-center '>
        <div class="card__icon">
          <img src={personal}/> 
        </div> 
        <div className='card-title'>Personal Loan</div>
        </div>
        <div className='card-content'>
        Get the financial boost you need to make your dreams come true with our convenient and quick personal loans!
        </div>
          <div className='flex justify-end gap-6'>
          <div className="know-more-link"><a href='/Services/PersonalLoan'>Know More</a></div>
          <div className='card-link'><a href='/ContactUs'>Apply Now</a></div>
          </div>
      </div>

      <div class="card card-5">
      <div className=' card-upper flex items-center '>
        <div class="card__icon">
          <img src={scholarship}/> 
        </div> 
        <div className='card-title'>Education Loan</div>
        </div>
        <div className='card-content'>
        Invest in your future and unlock limitless opportunities with our easy and affordable education loans!
        </div>
          <div className='flex justify-end gap-6'>
          <div className="know-more-link"><a href='/Services/EducationLoan'>Know More</a></div>
          <div className='card-link'><a href='/ContactUs'>Apply Now</a></div>
          </div>
      </div>

      <div class="card card-5">
      <div className=' card-upper flex items-center '>
        <div class="card__icon">
          <img src={business}/> 
        </div> 
        <div className='card-title'>Business Loan</div>
        </div>  
        <div className='card-content'>
        Fuel your entrepreneurial dreams and accelerate your business growth with our flexible and fast business loans!
        </div>
          <div className='flex justify-end gap-6'>
          <div className="know-more-link"><a href='/Services/BusinessLoan'>Know More</a></div>
          <div className='card-link'><a href='/ContactUs'>Apply Now</a></div>
          </div>
      </div>

      <div class="card card-5">
      <div className=' card-upper flex items-center '>
        <div class="card__icon">
          <img src={car}/> 
        </div> 
        <div className='card-title'>Car Loan</div>
        </div>
        <div className='card-content'>
        Drive your dream car today with our low interest car loan – because life’s too short to wait!
        </div>
          <div className='flex justify-end gap-6'>
          <div className="know-more-link"><a href='/Services/CarLoan'>Know More</a></div>
          <div className='card-link'><a href='/ContactUs'>Apply Now</a></div>
          </div>
      </div>

      <div class="card card-5">
      <div className='card-upper flex items-center '>
        <div class="card__icon">
          <img src={lap}/> 
        </div> 
        <div className='card-title'>Loan Against Property </div>
        </div>
        <div className='card-content'>
        Unlock the hidden value of your property with our loan against property – turn your dreams into reality today!
        </div>
          <div className='flex justify-end gap-6'>
          <div className="know-more-link"><a href='/Services/Lap'>Know More</a></div>
          <div className='card-link'><a href='/ContactUs'>Apply Now</a></div>
          </div>
      </div>

      </div>
    </div>
    
    </>
  )
}

export default Cards