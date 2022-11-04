import React from "react";
import { Link } from "react-router-dom";

function Links(){

    return (
        <div className="links mt-5">

        <div className="container-fluid">
        <a  id="twitter" title="Twitter Link" href="https://twitter.com/Timhilehin"><button className="btn">Twitter Link</button></a>
        </div> 

        <div className=" container-fluid mt-3">
        <a id="btn__zuri" href="https://training.zuri.team/"><button className="btn">Zuri Team</button></a>
        </div>

        <div className=" container-fluid mt-3">
        <a  id="books" title="Click here to find books about design and coding" href="http://books.zuri.team"><button className="btn">Zuri Books</button></a>
        </div>

        <div className=" container-fluid mt-3">
        <a  id="book__python" title="Automate the boring stuff with Python" href="https://books.zuri.team/python-for-beginners?ref_id=Timilehin">< button className="btn">Python Books</button></a>
        </div>

        <div className="container-fluid mt-3">
        <a  id="pitch" title="Background Check for Coders" href="https://background.zuri.team"><button className="btn">Backround Check for Coders</button></a>
        </div>

       
        
        <div className="container-fluid mt-3">
        <a id="contact" title="Zuri provides a free design book" href="https://books.zuri.team/design-rules"><button  className="btn">Design Books</button></a>
        </div>

        <div className="container-fluid mt-3">
       <Link to="/Contact"><a id="book__design"  href="/Contact"><button  className="btn">Contact Me</button></a></Link> 
        </div>


        <div className="container-fluid d-flex justify-content-center gap-4 mt-3">
        <img className="img-fluid"  src={require('./slack.png')} ></img>
        <img className="img-fluid"  src={require('./Icon.png')} ></img>
        </div>

        </div>
    )
}


export default Links 