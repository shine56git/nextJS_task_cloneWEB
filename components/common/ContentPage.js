import React from 'react'

const content = [
    {
        title: "feel special more often",
        subTitle: "exclusive rewards for paying your bills",
        details: "every time you pay your credit card bills on CRED, you receive CRED coins. you can use these to win exclusive rewards or get special access to curated products and experiences. on CRED, good begets good.",
        buttonText: "Explore rewards",
        bgImage: `https://web-images.credcdn.in/_next/assets/images/home-page/deserve-more-bg.jpg`
    },
    {
        title: "we take your money matters seriously.",
        subTitle: "so that you don’t have to.",
        details: "never miss a due date with reminders to help you pay your bills on time, instant settlements mean you never wait for your payments to go through and statement analysis lets you know where your money goes, always.",
        buttonText: "Explore the upgrade",
        bgImage: `https://web-images.credcdn.in/_next/assets/images/home-page/money-matters-bg.jpg`
    },
    {
        title: "security first. and second.",
        subTitle: "what’s yours remains only yours.",
        details: "CRED ensures that all your personal data and transactions are encrypted, and secured so what’s yours remains only yours. there’s no room for mistakes because we didn’t leave any.",
        buttonText: "Become a member",
        bgImage: `https://web-images.credcdn.in/_next/assets/images/home-page/security-bg.jpg`
    }
]

const ContentScreen = () => {
    return (
        <>
            {content.map(el => {
                return (
                    <div className='pt-5 pb-5' style={{ backgroundColor: 'purple', color: "white", background: "top",backgroundImage: `url(${el.bgImage})`, height: "100vh" }}>
                        <div className='container d-flex justify-content-left pt-5 pb-5 text-left' style={{ fontSize: "100px", lineHeight: "120px", letterSpacing: "-3px", fontWeight: 600,textOverflow: "ellipsis"}}>
                            {el.title}
                        </div>
                        <div className='container d-flex justify-item-start text-left' style={{ fontSize: "30px", lineHeight: "40px", fontWeight: 700 }}>
                            {el.subTitle}
                        </div>
                        <div className='container d-flex justify-content-left text-left' style={{ fontSize: "20px", fontWeight: 500, lineHeight: "30px", wordWrap:"break-word" }}>
                            {el.details}
                        </div>
                        <div className='container d-flex justify-content-left text-left py-5' style={{ fontSize: "25px", lineHeight: "38px" }}>
                            <button className='p-3' style={{ backgroundColor: "white", color: "black", borderRadius: "50px", fontWeight: 700, cursor: "pointer", width: "30%", border: 'none' }}>{el.buttonText}</button>
                        </div>
                    </div>
                )
            })
            }
        </>
    )
}

export default ContentScreen