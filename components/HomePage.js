import React from 'react'

const HomePage = () => {
  return (
    <>
      <div style={{ marginTop: '119px', backgroundColor: 'black', color: "white" }}>
        <div className='container d-flex justify-content-center pt-5 pb-5 text-center' style={{ fontSize: "106px", lineHeight: "125px", letterSpacing: "-3px", fontWeight: 700 }}>
          rewards for paying
          credit card bills.
        </div>
        <div className='container d-flex justify-content-center text-center' style={{ fontSize: "30px", lineHeight: "38px", fontWeight: 700 }}>
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <div className='container d-flex justify-content-center text-center py-5' style={{ fontSize: "25px", lineHeight: "38px" }}>
          <button className='p-3' style={{ backgroundColor: "white", color: "black", borderRadius: "50px", fontWeight: 700, cursor: "pointer", width: "30%"}}>Download CRED</button>
        </div>
      </div>
    </>
  )
}

export default HomePage