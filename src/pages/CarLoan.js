import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Overview from '../components/Overview/Overview'
const data ={
    title: 'Car Loan',
    content :"A car loan, also known as an auto loan, is a type of secured loan provided by banks and financial institutions to individuals looking to purchase a car. The loan is secured against the vehicle being purchased, meaning the lender has the right to repossess the car if the borrower defaults on the loan. Car loans are popular in India due to the convenience and flexibility they offer in acquiring a vehicle.",
    about : "Car loans are a convenient and accessible way for individuals in India to finance the purchase of a new or used car. By understanding the types, features, eligibility criteria, and the application process, borrowers can make informed decisions and choose the best car loan that suits their needs.",
    homeloanPoint: [
        {a:"1. New Car Loan:",b:"For purchasing a new car. Generally, banks offer up to 90% to 100% of the on-road price of the car.",},
        {a:"2. Used Car Loan:",b:"For purchasing a pre-owned or second-hand car. Loan amounts usually range from 70% to 80% of the car's value, depending on the car's age and condition.",},
        {a:"3. Loan Against Car:",b:"Allows borrowers to pledge their existing car to get a loan. Useful for individuals who need funds but do not want to sell their vehicle.",},
        
    ],
    typeTitle: "Types of Car Loan",
    criteriaBullet:[
        {a:"1. Minimum & maximum Age:",b: "21 - 60Yrs(Salaried)   and   18 - 65Yrs(Self Employed)",},
        {a:"2. Annual income:",b: "₹ 2.5 Lakh(Salaried)   and   Min. turnover of ₹ 40 lakhs(Self Employed)",},
        {a:"3. Credit Score:",b: "700(Salaried)   and   700(Self Employed)",},
        {a:"4. Loan Tenure:",b: "Up to 7 Year(Salaried)   and   Up to 7 Year(Self Employed)",},
        {a:"5. Loan to Value Ratio:",b: "	Up to 100%(Salaried)   and   	Up to 100%(Self Employed)",},
        

    ],
    criteria: {
        b: "Your age is the first consideration that banks take into account. Because younger people have longer working lives and can repay loans over longer periods of time, banks prefer to lend to them. Banks typically provide mortgage loans to borrowers between the ages of 18 – 70 years .",
        b: "The most important aspect in determining your eligibility for a house loan is your income. Banks often use your income, monthly spending, and other outstanding debts to determine your loan eligibility. A greater income increases one’s loan. It should be ₹ 25,000/month.",
        b: "Your creditworthiness is determined by your credit score. You are more likely to repay the loan on time if you have a high credit score because you have historically been responsible with credit. Individuals having a credit score of 750 or higher are often preferred by banks.",
        b: "Salaried or Non-Salaried. Since they are more likely to have a consistent source of income, banks favor people with a history of stable employment. It’s typically better if you’ve had a steady job for the last two years.",
        b: "2 Years",
        b: "Decided by lender",
        b: "Permanent resident or Non-resident Indian (NRI).",
        b: "75 to 85%",
        b: "Completed /Under Construction Project, Land/Plot, Build on own Land, Buy Land and Build Home.",
    },
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
const CarLoan = () => {
  return (
    <>
        <Navbar/>
        <Overview data={data} />
        <Footer/>
    
    
    </>
  )
}
export default CarLoan