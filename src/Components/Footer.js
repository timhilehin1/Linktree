import React from "react";


function Footer(){
    return (
        <div className="footer d-block d-lg-flex align-items-center justify-content-between mt-5 pt-2 pt-lg-5">
          <img className="img-fluid"  src={require('./Zuri.Internship_Logo.png')} ></img>
          <p className="mt-2 mt-lg-0" style={{color:"#667085"}}>HNG Internship 9 Frontend Task</p>
          <img className=" mt-2 mt-lg-0 img-fluid"  src={require('./I4G.png')} ></img>


        </div>
    )
}


export default Footer