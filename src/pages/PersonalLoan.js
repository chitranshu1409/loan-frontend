import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import Overview from '../components/Overview/Overview'
const data ={
    title: 'Personal Loan',
    content :"In life, we weave many dreams and work hard to making them come true, be it kids wedding expenses, dream vacations, or home renovation, make all your dreams come true with a personal loan in just a pinch.",
    about : "Personal loan is an unsecured loan which you can get from banks to fulfil your personal needs. Basically it’s a loan for any need and it’s quite easy to have it without asked many questions from the bank. You can take a personal loan for buying your favorite gadget for yourself or family, for traveling around the country and abroad, buying expensive items for home use, children’s education or any other work. Personal loan borrowers do not have to provide any guarantor or take collateral/pledge. It is because of this feature that it is so popular. Moreover, you also get the freedom to use the loan amount for any legal purpose.",
    typeTitle: "Use of Personal Loan",
    
    homeloanPoint:[
        {a:"1. Personal Loan for wedding:", b:"You may need to come up with cash to pay for your special day. If you take a personal loan it can be an affordable solution to cover all of your wedding expenses."},
        {a:"2. Renovation of your house:",b:"You can use a personal loan for a home improvement project & modify your  kitchen or bathroom."},
        {a:"3. Purchase a vehicle & gadgets:",b:"Keeping pace with the pace at which technology is advancing is not easy. From entertainment units to home appliances & electronics are now integrated with ‘smart’ technology to make your daily work easier. Apply for a personal loan to meet such needs."},
        {a:"4. Emergency expenses:",b:"Many people do not have an emergency fund, so they are unwilling to respond when they suddenly need cash. In this case you can opt for personal loan. It will cost you less then credit card dept. "},
        {a:"5. Paying for College tuition:",b:"Under the Higher Education Opportunity Act of 2008, lenders providing private education loans must make special disclosures, provide borrowers with a 30-day rumination period within three days of disbursement of funds and give themselves the option to cancel . Schools cannot be affiliated."},
        {a:"6. Down payment of the home:",b:"If you want to take out a personal loan to use as a down payment, you will be on the hook for two loans – the mortgage payment and the repayment of the personal loan. From a lender’s perspective, this can increase a borrower’s risk of defaulting on their payments, which is why traditional lenders and FHA lenders don’t allow you to use a personal loan for a down payment."},
        {a:"7. Some expenses of business:",b:"If a lender has no restrictions on using their loan amount for your small business, then you will be able to use the loan for any of your business needs. However, some lenders do not allow you to use your personal loan amount for any type of business expense."},
],
    criteriaBullet:[
        {a:"1. Minimum & maximum Age:", b:"21 to 60 Yrs (Salaried)  and 22 to 55 Yrs (Self Employed)"},
        {a:"2. Monthly Income:", b:"15,000 (Salaried)  and 25,000 (Self Employed)"} ,
        {a:"3. CIBIL Score:", b:"750+ (Salaried)  and 750+ (Self Employed)"},
        {a:"4. MIN Loan Amount:", b:"50,000 (Salaried)  and 50,000 (Self Employed)"},
        {a:"5. MAX Loan Amount:", b:"Rs 25Lakh (Salaried)  and Rs 50Lakh (Self Employed)"},
        

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
const PersonalLoan = () => {
  return (
    <>
        <Navbar/>
        <Overview data={data} />
        <Footer/>
    
    
    </>
  )
}
export default PersonalLoan
