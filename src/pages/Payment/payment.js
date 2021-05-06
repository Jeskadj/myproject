import jesMoveLogo from '../images/jesMoveLogo.png';
import {useHistory} from 'react-router-dom'
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";





function  Footer() {
   const history = useHistory();
   return (
     <div>
        <div className={PaymentPageCSS.nav}>
                <Navbar />
        </div> 
         
         <div style={{color:'#3fc1c9'}}>
         <img src={jesMoveLogo} alt='jesMoveLogo' onClick={() => history.push('/')} style={{width:200,cursor:'pointer'}}/>
              <div style={{color:"#fc6f30",display:'flex',justifyContent:'space-between',textAlign:'center'}}>
                © jesMove 2021
              <p>We help you Move right where you are</p>
             </div>
        </div> 
        <div className={landingpageCSS.footer}>
                <Footer/>
            </div>
        
             


         
         
         </div>
   )
}

export default Footer;