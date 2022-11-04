import React, { useState } from "react";


function Contact(){

    const [Formdata, SetFormData] = useState(
           {
               first_name:"",
               last_name:"",
               email:"",
               message:""

            }
    )

    function handleChange(e){
      SetFormData((prevData)=>{
          return {
              ...prevData,
              [e.target.name] : e.target.value
          }
      })
    }

    


    function handleSubmit(e){
        console.log(Formdata)
    }
    return (
        <form onSubmit={handleSubmit} className="outer-div p-2">
        <div className="contact">
         <h2 className="mt-3" style={{fontSize:"32px", fontWeight:"600"}}>Contact Me</h2>
         <p className="mt-3" style={{color: "#475467"}}>Hi there, contact me to ask me about anything you have in mind.</p>

         <div className="d-block  mt-4 d-lg-flex gap-3">
             <div className="firstName">
        <div><label htmlFor="first_name" style={{fontSize:"14px"}}>First name</label></div>
         <input onChange={handleChange} className="Firstandlast"  id="first_name" placeholder="Enter your first name"  name="first_name" value={Formdata.first_name}></input>
         <div className={Formdata.first_name ? "d-none" : "error"}>First Name is required</div>
        
         </div>
        

         <div className="mt-4 mt-lg-0">
         <div><label htmlFor="last_name" style={{fontSize:"14px"}}>Last name</label></div>
        <input  onChange={handleChange} className="Firstandlast"  id="last_name"  placeholder="Enter your last name" name="last_name"  value={Formdata.last_name} ></input>
        <div className={Formdata.last_name ? "d-none" : "error"}>Last name is required</div>
         </div>

         </div>

         <div className="email mt-4">
         <div><label htmlFor="email" style={{fontSize:"14px"}}> Email</label></div>
        <input  onChange={handleChange}    id="email"  placeholder="yourname@email.com" name="email" value={Formdata.email}  style={{width:"100%"}}></input>
        <div className={Formdata.email ? "d-none" : "error"}>Enter your valid email address</div>
         { !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Formdata.email) ? <div className={Formdata.email ? "error" : "d-none"}>Invalid email format</div> : null }
         </div>

         <div className="message mt-4">
         <div><label htmlFor="message" style={{fontSize:"14px"}}>Message</label></div>
        <textarea  onChange={handleChange}    id="message" name="message"  placeholder="Send me a message and I'll reply you as soon as possible..." value={Formdata.message}  style={{width:"100%", height:"8.25rem"}}/>
        <div className={Formdata.message ? "d-none" : "error"}>Please  enter a message</div>
    
         </div>
         

         <div className="d-flex gap-3 mt-4">
         <input
         type="checkbox"
         id="agree"
         className=" "/>
         <label className="" htmlFor="agree">You agree to providing your data to name who may contact you.</label>
         </div>

        <div>
            <button  className="mt-5 w-100 " id="btn__submit">Send Message</button>
        </div> 

         
        </div>
        </form>
    )
}

export default Contact