import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Overview from '../components/Overview/Overview'
const data ={
    title: 'Loan Against Property',
    content :"A Loan Against Property (LAP) is a secured loan where individuals or businesses pledge their residential, commercial, or industrial property as collateral to obtain funds. This type of loan is useful for meeting large financial needs, such as business expansion, medical emergencies, education, or personal expenses. Given the collateral involved, LAPs typically offer lower interest rates compared to unsecured loans.",
    about : "A Loan Against Property in India is a viable financing option for individuals and businesses needing substantial funds. Understanding the eligibility criteria, application process, and benefits can help borrowers make informed decisions and manage their financial needs effectively. It’s crucial to compare different lenders and choose the best terms suited to one’s financial situation.",
    homeloanPoint: [
        {a:"1. Higher Loan Amount:",b:"Provides access to larger funds compared to unsecured loans.",},
        {a:"2. Lower Interest Rates:",b:"Generally lower interest rates due to the secured nature of the loan.",},
        {a:"3. Flexible Repayment Options:",b:"Longer repayment tenures and flexible EMI options.",},
        {a:"4. Multi-purpose Use:",b:"Funds can be used for various purposes, including business, education, medical emergencies, or personal needs.",},
        
    ],
    typeTitle: "Benefits of Loan Against Property",
    criteriaBullet:[
        {a:"1. Minimum & maximum Age:",b: "21 Yrs to 70Yrs",},
        {a:"2. Income:",b: "For salaried individuals Regular income with a stable job and  For self-employed individuals Steady business income and proof of business existence.",},
        {a:"3. Credit Score:",b: "700 +",},
        {a:"4. Property Requirements:",b: "The property should be fully constructed, owned by the applicant, and free from any legal disputes. Both residential and commercial properties can be pledged.",},
        {a:"5. Employment:",b: "Salaried individuals Typically at least one year of employment with the current employer and for Self-employed individuals Generally a minimum of 2 to 3 years in the current business.",},
        
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
const Lap = () => {
  return (
    <>
        <Navbar/>
        <Overview data={data} />
        <Footer/>
    
    
    </>
  )
}
export default Lap;
