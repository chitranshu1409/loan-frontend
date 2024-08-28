import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Overview from '../components/Overview/Overview'
const data ={
    title: 'Home Loan',
    content :"Everyone wants to build the palace of their dreams. But not everyone has enough money to fulfill these dreams. In such a situation, affordable home loan helps them. Currently, the Home loan interest rates Delhi is at a decade low. Buying a house is a profitable deal at this time from Mortgage loan in Delhi, Developers are also offering various concessions to increase their sales. In such a situation, you have a good chance to build your dream home by taking low interest Home Loan Delhi.",
    about : "Home loan is a secured loan which is obtained by giving a property as collateral to buy it. Instant home loan in Delhi offer high value of funding at affordable home loan interest rates and for a longer tenure. If you are taking a instant home loan in Delhi, the Home loan interest rates is a major factor that affects the total cost of your home. Since the home loan amount is high and the tenure of the home loan is also long, home loan interest can have long-term financial implications. Getting a low interest Home Loan in Delhi will not only result in lower EMIs but also lower your home loan interest payments. If we talk about the interest rate for Home loan, then the lowest Home loan interest rates in Delhi till date is 7.50%* p. a. Hence, home loan borrowers should try to get a Home loan interest rates in Delhi at lowest possible housing loan interest rate. The loan is repaid through EMI. After the repayment, the title to the property is transferred back to the borrower.",
    homeloanPoint: [
        {a:"1. Fixed interest rate home loan:",b:"The home loan with fixed interest rate that stays the same for the duration of the loan. For people who prefer a consistent and predictable monthly payment, this kind of loan is ideal.",},
        {a:"2. Adjustable-Rate Home Loan:",b:"These loans include interest rates that might change based on the state of the market. This kind of loan is appropriate for people who don’t mind taking on a little bit more risk in exchange for the potential for reduced interest rates.",},
        {a:"3. Land-purchase loan:",b:"This loan is provided by the banks or financial companies (NBFCs) to buy a plot or land on which the applicant of loan wants to build a house. Banks usually lend up to 80-85% of the cost of the plot or land.",},
        {a:"4. Home construction loan:",b:"Banks & the NBFCs provide this loan to that applicant who really wish to build a house on their own or on a co-owned plot. This loan & the approval process of this loan is totally different in few aspects as compared to the usual available housing loans. ",},
        {a:"5. Home improvement loan:",b:"Home-improvement loans are only given to the applicants who have a home already but the lack of insufficient funds to renovate it. Which includes – repair of their current house, painting of walls, digging of borewell, water-proofing, electrical wiring, modular kitchen etc.",},
        {a:"5. Home improvement loan:",b:"The home-buying loan amount is usually used to purchase a residential property. Banks & the Financial institutions usually provide 80-85% of the market value of the house as amount of the loan. The interest rate on these loans is either fixed or floating.",},
        {a:"7. Home conversion loan:",b:"Loan borrowers of existing home who really want to move into another property, they can avail home conversion loan only to buy a new home for them.",},
    ],
    typeTitle: "Types of Home Loan",
    criteriaBullet:[
        {a:"1. Minimum & maximum Age:",b: "Your age is the first consideration that banks take into account. Because younger people have longer working lives and can repay loans over longer periods of time, banks prefer to lend to them. Banks typically provide mortgage loans to borrowers between the ages of 18 – 70 years .",},
        {a:"2. Minimum Income:",b: "The most important aspect in determining your eligibility for a house loan is your income. Banks often use your income, monthly spending, and other outstanding debts to determine your loan eligibility. A greater income increases one’s loan. It should be ₹ 25,000/month.",},
        {a:"3. Credit Score:",b: "Your creditworthiness is determined by your credit score. You are more likely to repay the loan on time if you have a high credit score because you have historically been responsible with credit. Individuals having a credit score of 750 or higher are often preferred by banks.",},
        {a:"4. Employment Status:",b: "Salaried or Non-Salaried. Since they are more likely to have a consistent source of income, banks favor people with a history of stable employment. It’s typically better if you’ve had a steady job for the last two years.",},
        {a:"5. Work Experience:",b: "2 Years",},
        {a:"6. Loan Amount:",b: "Decided by lender",},
        {a:"7. Residence Type:",b: "Permanent resident or Non-resident Indian (NRI).",},
        {a:"8. LTV Ratio:",b: "75 to 85%",},
        {a:"9. Property Type:",b: "Completed /Under Construction Project, Land/Plot, Build on own Land, Buy Land and Build Home.",},

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
export const HomeLoan = () => {
  return (
    <>
        <Navbar/>
        <Overview data={data} />
        <Footer/>
    
    
    </>
  )
}
