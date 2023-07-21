import React from 'react'

const RatingComp = () => {
    return (
        <div style={{ backgroundColor: 'black', height: "70vh", color: 'white' }}>
            <div className='container py-5' >
                <div className="row d-flex justify-content-center align-item-center">
                    <div className="col-md-6 col-sm-12 col-lg-6">
                        <h1 style={{fontSize: "100px"}}>4.8</h1>
                            <h1>app store</h1>
                            <button style={{padding: "20px", borderRadius: "50px", fontSize: "20px", fontWeight: "500", border: 'none', width: "50%" }}>Download the app</button>
                    </div>
                    <div className="col-md-6 col-sm-12 col-lg-6 ">
                        <h1 style={{fontSize: "100px"}}>4.7</h1>
                            <h1>play store</h1>
                            <button style={{padding: "20px", borderRadius: "50px", fontSize: "20px", fontWeight: "500", border: 'none', width: "50%" }}>Download the app</button>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default RatingComp