
import Profile from './Components/Profile';
import Links from './Components/Links';
import Footer from './Components/Footer';
import { IoArrowRedoOutline } from "react-icons/io5";
import { BsThreeDots} from "react-icons/bs";

function App() {
  return (
    <div className="App ">
      <div class="cssdottedborder d-none d-lg-block float-end ">
      <IoArrowRedoOutline className="float-end    mt-2 d-none d-lg-block" style={{fontSize:"2rem", color:"#D0D5DD"}}/>
      </div>

       <BsThreeDots className="float-end mt-2 d-lg-none" style={{fontSize:"1rem", color:"#D0D5DD"}}/>
       
          
  <Profile/>
  <Links/>
  <Footer/>
  
    </div>
  );
}

export default App;
