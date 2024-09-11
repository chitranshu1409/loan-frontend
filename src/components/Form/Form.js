import React, { useState } from 'react'
import './Form.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Description, Dialog, DialogPanel, DialogTitle,DialogBackdrop } from '@headlessui/react'
import ApplySuccess from '../ApplySuccess/ApplySuccess';
const Form = () => {
    const [FirstName, setFirstName] = useState()
    const [LastName, setLastName] = useState()
    const [Email, setEmail] = useState()
    const [PhoneNo, setPhoneNo] = useState()
    const [Occupation, setOccupation] = useState()
    const [AnnualIncome, setAnnualIncome] = useState()
    const [LoanType, setLoanType] = useState()
    const [LoanAmount, setLoanAmount] = useState()
    const [isOpen, setIsOpen] = useState(false)
    const navigate = useNavigate();
    const backToHomePage =()=>{
        setIsOpen(false);
        navigate('/');
    }
    const handelSubmit = (e) => {
        e.preventDefault()
        
        axios.post('https://loan-backend-5.onrender.com/ContactUs', { FirstName, LastName, Email, PhoneNo, Occupation, LoanAmount,LoanType,AnnualIncome })
       .then(response => {
            console.log(response)
            
        })
       .catch(error => {
            console.error(error)
        })
        e.target.reset();
        setIsOpen(true)
        
    }
    const changeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const changeLastName = (e) => {
        setLastName(e.target.value)
    }
    const changePhoneNo = (e) => {
        setPhoneNo(e.target.value)
    }
    const changeOccupation = (e) => {
        setOccupation(e.target.value)
    }
    const changeAnnualIncome = (e) => {
        setAnnualIncome(e.target.value)
    }
    const changeLoanType = (e) => {
        setLoanType(e.target.value)
    }
    const changeLoanAmount = (e) => {
        setLoanAmount(e.target.value)
    }
    const changeEmail = (e) => {
        setEmail(e.target.value)
    }
    
  return (
    <>
    <form class="form bg-slate-200 m-4" method='post' onSubmit={(e)=>handelSubmit(e)}>
    {/* <p class="title">Contact Us </p> */}
    
        <div class="form-content">
        <label>
            <input required="true" onChange={changeFirstName} name='Firstname' placeholder="" type="text" class="input"/>
            <span>Firstname</span>
        </label>
        
        <label>
            <input required="true" onChange={changeLastName} name='Lastname' placeholder="" type="text" class="input"/>
            <span>Lastname</span>
        </label>
    </div>  
            
    <label>
        <input required="true" onChange={changeEmail} name='Email' placeholder="" type="email" class="input"/>
        <span>Email</span>
    </label> 

    <label>
        <input required="true" min="1000000000" onChange={changePhoneNo} name='PhoneNo' placeholder="" type="number" class="input"/>
        <span>Phone No</span>
    </label>

    
    <label htmlFor='occupation' >
        <select required="true" class="input" onChange={changeOccupation} name='Occupation' >
            <option value="" hidden disabled selected></option>
            <option value="self Occupied">Self Occupied</option>
            <option value="salaried">Salaried</option>
        </select>
        <span>Occupation</span>
    </label>
        
    <label>
        <select required="true" class="input" onChange={changeAnnualIncome} name='AnnualIncome'>
            <option value="" hidden disabled selected></option>
            <option value="1lakh-5lakh">1lakh-5lakh</option>
            <option value="5lakh-10lakh">5lakh-10lakh</option>
            <option value="10lakh-25lakh">10lakh-25lakh</option>
            <option value="25lakh-50lakh">25lakh-50lakh</option>
            <option value="50lakh-1Cr">50lakh-1Cr</option>
            <option value="1Cr +">1Cr +</option>
        </select>
        {/* <input required="true" placeholder="" type="phone number" class="input"/> */}
        <span>Annual Income</span>
    </label>
    

    <label>
        <select required="true" class="input" onChange={changeLoanType} name='LoanType'>
            <option value="" hidden disabled selected></option>
            <option value="Home Loan">Home Loan</option>
            <option value="Business Loan">Business Loan</option>
            <option value="Education Loan">Education Loan</option>
            <option value="Personal Loan">Personal Loan</option>
            <option value="Car Loan">Car Loan</option>
            <option value="Loan Against Property">Loan Against Property</option>
        </select>
        {/* <input required="true" placeholder="" type="password" class="input"/> */}
        <span>Type of Loan</span>
    </label>
    <label>
        <input required="true" name='LoanAmount' onChange={changeLoanAmount} placeholder="" type="text" class="input"/>
        <span>Loan amount</span>
    </label>
    <button type='submit'  class="submit">Done</button>

    
</form>

<Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-black/30" />
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border bg-white p-12">
            
            <ApplySuccess/>
            <div className="flex justify-center">
              <button className='success-btn' onClick={backToHomePage}>Done</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

</>      
  )
}

export default Form
