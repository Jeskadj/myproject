import Inputfield from "../../src/components/inputfield"
import Button from "../../src/components/button";
import ShoppingSignUpCSS from "../../src/shopping/shoppingsignup.module.css";
import Navbar from "../components/navbar";
import {useHistory} from "react-router-dom";
import { useState } from "react";
import Footer from "../components/footer";

    
function ShoppingSignup(){
  const[toggle,setToggle]=useState('signup')
    const history = useHistory();
    return(
       <div className={ShoppingSignUpCSS.whole}>

<div className={ShoppingSignUpCSS.main}>
           <div className={ShoppingSignUpCSS.nav}>
                <Navbar />
            </div>

            <div className={ShoppingSignUpCSS.form}  style={{display:'flex', flexDirection:'column'}}>
                <h3 style={{marginBottom:"25px", color:"white"}}>
                 TO GET SHOPPING
               </h3>
               <div>
                   <Button onClickButton={()=>setToggle('signup')}text='Sign Up' />
                   <Button onClickButton={()=>setToggle('login')} text='Log In'/>
               </div>
               <form className={toggle== 'signup'? ShoppingSignUpCSS.firstform_open : ShoppingSignUpCSS.firstform_closed}>
                   <Inputfield  padding='4px 0px'type="text" placeholder="Firstname"/>
                   <Inputfield  padding='4px 0px' type="text" placeholder="Lastname"/>
                   <Inputfield  padding='4px 0px'type="text" placeholder="Phone "/>
                   <Inputfield  padding='4px 0px'type="text" placeholder="Email"/>
                   <Inputfield  padding='4px 0px'type="text" placeholder="Create Password"/>
                   <Inputfield  padding='4px 0px'type="text" placeholder="Address"/>
                  <div style={{display:'flex', flexDirection:'center',alignItems:'center',alignContent:'center',paddingLeft:'70px',width:'100px',height:'100px'}}>
                   <Button onClickButton={() => history.push('/Shoppingpage')} text='Get Started' />
                 </div>
               </form>
               <form className={toggle== 'login'? ShoppingSignUpCSS.secondform_open : ShoppingSignUpCSS.secondform_closed}>
                        <Inputfield padding='4px 0px' type="text" placeholder="Email" />
                        <Inputfield padding='4px 0px' type="text" placeholder="Password" />
                        <div style={{ display: 'flex', flexDirection: 'center', alignItems: 'center', alignContent: 'center', paddingLeft: '70px', width: '100px', height: '100px' }}>
                            <Button text='Get Started' />
                        </div>
                    </form>
            </div>
         <div className={ShoppingSignUpCSS.footer}>
         
                <Footer/>
            </div>
           
        </div>
        </div>
        
        
        )
    }
export default ShoppingSignup;