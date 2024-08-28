import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Overview from '../components/Overview/Overview'
const data ={
    title: 'Business Loan',
    content :"This is actually a loan which is taken to fulfill your business needs. To promote small enterprises in the country, the government has started various loan schemes. Apart from the Pradhan Mantri Mudra Yojana, there are many other schemes in which you can take a small loan to a large loan.",
    about : "If you are also thinking of doing your own business or setting up an enterprise, then you can apply for a business loan. If you are already running a business and are facing financial constraints to expand it or meet its capital requirements, then you can also take a business loan.",
    homeloan: {
        
        b:"An unsecured business loan simply means a loan taken for business without any collateral or personal guarantee, most of the time a businessmen opt for an unsecured business loan for following reasons",
        
    },
    typeTitle: "Types of Business Loan",
    homeloanPoint:[
        {a:"1. Secured Business Loan:",b:"A secured business loan simply means that the borrower has given the lender some kind of personal guarantee or any asset against the loan as a collateral. ",},
        {a:"2. Unsecured Business Loan:",b:"An unsecured business loan simply means a loan taken for business without any collateral or personal guarantee, most of the time a businessmen opt for an unsecured business loan for following reasons",},
        
    ],
    criteriaBullet:[
        {a:"Minimum and Maximum Age:",b: "The applicant should be at least 21 years at the time of applying for the loan, and should be not older than 65 years at the time of loan maturity.",},
        {a:"Occupation:",b: "Self employed individuals, proprietors, private ltd. co. and partnership firms involved in the business of manufacturing, trading or services.",},
        {a:"Business Turnover:",b: "The business should have a minimum turnover of ₹40 lakhs"},
        {a:"Experience:",b: "Individuals who have been in the current business for a minimum of 3 years, with 5 years total business experience."},
        {a:"Profit Making:",b: "Those whose business has been profit-making for the previous 2 years"},
        {a:"Minimal Annual Income:",b: "The business should have a Minimal Annual Income (ITR) of ₹1.5 lakhs per annum"},

    ],
    tipsBullet:{
        bullet1: "1. Credit Score:",
        bullet2: "2. Job Changes:",
        bullet3: "3. Payment:",
        bullet4: "4. Management of records:",
        
    },
    tips:{
        tip1:" Keep your credit score high.",
        tip2:" Avoid making frequent job changes.",
        tip3:"Pay your loans and bills promptly.",
        tip4:"Organize your financial records.",
    }
}
const BusinessLoan = () => {
  return (
    <>
        <Navbar/>
        <Overview data={data} />
        <Footer/>
    
    
    </>
  )
}
export default BusinessLoan