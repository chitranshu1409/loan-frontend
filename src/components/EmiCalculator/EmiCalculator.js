import React ,{useEffect, useState} from 'react'
import './EmiCalculator.css'
const EmiCalculator = () => {
    const [LoanAmount, setLoanAmount] = useState(0)
    const [interest, setInterest] = useState(20)
    const [tenure, setTenure] = useState(30)
    const [emi, setEmi] = useState(0)
    const [R, setR] = useState(0)
    const [total, setTotal] = useState(0)
    const [pInterest, setPInterest] = useState(0)
    const handelSubmit=(e)=>{
      e.preventDefault();
    }
    const changeLoanAmount = (e) => {
        setLoanAmount(e.target.value);
    }

    const changeInterest = (e) => {
       setInterest(e.target.value);
      var r= e.target.value/1200
        setR(r);
    }

    const changeTenure = (e) => {
        setTenure(e.target.value);
    }
    useEffect(()=>{
    const P = LoanAmount;
    const D = tenure*12;
    const R= interest/1200;
    const var1= Math.pow(1+R,D);
    const emi =Math.round((P*R*var1)/(var1-1));
    const totalAmount = (emi*D); 
    const AnnualInterest = totalAmount-LoanAmount;
    setEmi(emi)
    setPInterest(AnnualInterest)
    setTotal(totalAmount)
    },[LoanAmount,interest,tenure])
  return (
    <form class="form">
        <p class="title">EMI Calculator </p>
        
        <div  >
            <span className='m-5'>Loan Amount: </span>
            <input className="font-bold loan-amount-input" type='text' value={`₹${LoanAmount}`}></input>
            <input className='m-5 range' type="range" min="100000" max="20000000" step="100000" onChange={(e)=>changeLoanAmount(e)} list='values1'></input>
            <datalist id="values1">
              <option value="0" label="0"></option>
              <option value="5000000" label="25"></option>
              <option value="10000000" label="50"></option>
              <option value="15000000" label="75"></option>
              <option value="20000000" label="100"></option>
            </datalist>
        </div>
        
        <div  >
            <span className='m-5'>Interest Rate: </span>
            <input className="font-bold interest-rate-input" type='text' value={`${interest}%`}></input>
            <input className='m-5 range' type="range" min="0" max="30" step="0.1" onChange={(e)=>changeInterest(e)} list='values2'></input>
            <datalist id="values2">
              <option value="0" label="0"></option>
              <option value="7.5" label="25"></option>
              <option value="15" label="50"></option>
              <option value="22.5" label="75"></option>
              <option value="30" label="100"></option>
            </datalist>
        </div>
        <div  >
            <span className='m-5'>Loan Tenure: </span>
            <input className="font-bold loan-tenure-input" type='text' value={`${tenure}Yrs`}></input>
            <input className='m-5 range' type="range" min="0" max="30" step="0.5" onChange={(e)=>changeTenure(e)} list='values3'></input>
            <datalist id="values3">
              <option value="0" label="0"></option>
              <option value="7.5" label="25"></option>
              <option value="15" label="50"></option>
              <option value="22.5" label="75"></option>
              <option value="30" label="100"></option>
            </datalist>
        </div>
        <div className='emi-details m-3'>
          Loan EMI:<span className='font-bold'> ₹{emi}</span>
        </div>
        <div className='emi-details m-3'>
          Total Interest Payable:<span className='font-bold'> ₹{pInterest}</span>
        </div>
        <div className='emi-details m-3'>
          Total Amount:<span className='font-bold'> ₹{total}</span>
        </div>
    </form>
  )
}

export default EmiCalculator