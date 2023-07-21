import React from 'react'

const data = [
    {
        heading: "about CRED",
        content: "CRED is a members only credit card bill payment platform that rewards its members for clearing their credit card bills on time. CRED members get access to exclusive rewards and experiences from premier brands upon clearing their credit card bills on CRED."
    },
    {
        heading: "how does CRED reward their users?",
        content: "CRED partners with the best premier and luxury brands to bring you an unmatched experience at the end of every credit card bill payment cycle."
    },
    {
        heading: "how to earn rewards on CRED?",
        content: `members can earn rewards in two different ways. CRED coins & gems. \n

       \n CRED Coin Rewards:
        
       \n - when you pay your credit card bill on CRED, for every rupee cleared on your bill you earn a CRED coin.
        
       \n - you can then use earned CRED coins to claim exclusive rewards from different brands.
        
        CRED Gem Rewards:
        
        - for every person that you refer to CRED who makes a bill payment, you earn 10 gems.`
    },
    {
        heading: "what do you get as a CRED Member?",
        content: `as a CRED member, you instantly make your credit card payment experience hassle-free by unlocking several perks only available to CRED members.

        - seamless bill payment experience through modes like upi, net banking and debit cards
        
        - timely credit card bill payment reminders
        
        - automate your credit card bill payments
        
        - expose hidden charges on your credit card with cred protect
        
        - get real-time alerts on duplicate transactions on your credit card
        
        - manage multiple credit cards on a single portal
        
        - keep a realtime check on your credit score`
    },
    {
        heading: "how does one become a member of CRED?",
        content: "you can apply to be a member by signing up on CRED with your name and valid mobile number(issued within India). CRED is India’s most trustworthy and creditworthy community. This means we are selective about the members we take. For membership an Experian credit score of 750 or above is mandatory."
    },
    {
        heading: "how to know your credit score??",
        content: "upon becoming a member, you can check and refresh your credit score with a single click. CRED then proceeds to acquire your updated credit score through a CIBIL score soft inquiry. on CRED, you can access your credit score data anytime without any extra charges. as a member, this helps you keep regular checks on your credit score and re-evaluate your spending patterns to maintain a healthy credit status. CRED offers Equifax credit score checker, find your CRIF credit score for free, Experian credit score checker for free."
    },
    {
        heading: "banks supported on CRED",
        content: "CRED supports credit card bill payment for American Express, Standard Chartered, Citibank, HSBC, HDFC, ICICI, SBI, AXIS, RBL, PNB, and other top Indian banks. We support VISA, MasterCard, American Express & RuPay cards."
    },
]

const AboutContent = () => {
    return (
        <div style={{ backgroundColor: "#242424", color: "white" }}>
            <div className='container py-5'>
                {
                    data.map((el) => {
                        return (
                            <div className='row py-5'>
                                <div className='col-lg-12 col-sm-12 col-md-12'>
                                    <h3 style={{fontWeight: "400"}}>{el.heading}</h3>
                                    <span style={{fontSize: "17px"}}>{el.content}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AboutContent