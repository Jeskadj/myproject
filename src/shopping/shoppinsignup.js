import Inputfield from "../../src/components/inputfield"
import Button from "../../src/components/button";
import ShoppingSignUpCSS from "../../src/shopping/shoppingsignup.module.css";
import {Link} from "react-router-dom";
import Navbar from "../components/navbar";
import jesMoveLogo from "../images/jesMoveLogo.png";
import {useHistory} from "react-router-dom";

function ShoppingSignup(){
    const history = useHistory();
    return(
       <div className={ShoppingSignUpCSS.whole}>
           <div className={ShoppingSignUpCSS.jess}>

<div className={ShoppingSignUpCSS.main}>
           <div className={ShoppingSignUpCSS.nav}>
                <Navbar />
            </div>

            <div className={ShoppingSignUpCSS.form}  style={{display:'flex', flexDirection:'column'}}>
                <h3 style={{marginBottom:"25px", color:"white"}}>
                 TO GET SHOPPING
               </h3>
               <div>
                   <Button text='Sign Up' />
                   <Button text='Log In'/>
               </div>
               <form>
                   <Inputfield  padding='4px 0px'type="text" placeholder="Firstname"/>
                   <Inputfield  padding='4px 0px' type="text" placeholder="Lastname"/>
                   <Inputfield  padding='4px 0px'type="text" placeholder="Phone "/>
                   <Inputfield  padding='4px 0px'type="text" placeholder="Email"/>
                   <Inputfield  padding='4px 0px'type="text" placeholder="Create Password"/>
                   <Inputfield  padding='4px 0px'type="text" placeholder="Address"/>
               <input type='file'/>
                  <div style={{display:'flex', flexDirection:'center',alignItems:'center',alignContent:'center',paddingLeft:'70px',width:'100px',height:'100px'}}>
                   <Button onClickButton={() => history.push('/Shoppingpage')} text='Get Started' />
                 </div>
               </form>
            </div>
         {/* <div className={ShoppingSignUpCSS.link}>
         <Link style={{textDecoration:'none'}} to='/Shoppingpage'>
       <h1 style={{display:'flex',marginLeft:'900px',fontSize:'50px'}}>Enjoy Shopping</h1>
         </Link>
         </div> */}
         <div className={ShoppingSignUpCSS.footer}>
           <div className={ShoppingSignUpCSS.footerhead}>
              <img height='150px' width='200px' src={jesMoveLogo} alt='jesMoveLogo'/>
            </div>
            </div>
       </div>
              <div className={ShoppingSignUpCSS.footerdiv}>
                © jesMove 2021
       <p>We help you Move right where you are</p>
           </div>
           </div>

        
        </div>
        )
    }
export default ShoppingSignup;