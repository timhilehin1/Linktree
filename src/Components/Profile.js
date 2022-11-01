import React from "react";
import { IoArrowRedoOutline } from "react-icons/io5";

import { BiCamera} from "react-icons/bi"
function Profile(){

    return (

    <div className="general mt">
    <div className="profile" id="profile__img">
        <div className="image-cont ">
          <img className="img-fluid profile-img"  src={require('./angela.png')} ></img>
          <div className="overlay"><BiCamera className="camera" style={{color:"white", fontSize:"1.5rem"}}/></div>
    
          
          </div>
    </div>
    <p className="mt-3"><b>@Timilehin</b> </p>
    
         <p className="d-none" id="slack">Timilehin</p>
   
    </div>

    )
}

export default Profile