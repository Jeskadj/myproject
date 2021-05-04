
import Inputfield from "../../components/inputfield"
import Button from "../../components/button";
import SignUpCSS from "../../pages/signup/signup.module.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import jesMoveLogo from "../../images/jesMoveLogo.png";
import { useState } from "react";

function Signup() {
    const[toggle,setToggle]=useState('signup')
    
    
    
    return (
        <div className={SignUpCSS.whole}>
            <div className={SignUpCSS.nav}>
                <Navbar />
            </div>

            <div className={SignUpCSS.main}>

                <div className={SignUpCSS.form} style={{ display: 'flex', flexDirection: 'column' }}>
                    <h3 style={{ marginBottom: "10px", color: 'white' }}>
                        For Pick-Ups & a Ride
               </h3>
                    <div >
                        <Button onClickButton={()=>setToggle('signup')} text='Sign Up' />
                        <Button onClickButton={()=>{setToggle('login')}} text='Log In' />
                    </div>

                    {/**signup */}
                    <form className={toggle== 'signup'? SignUpCSS.firstform_open : SignUpCSS.firstform_closed}>
                        <Inputfield padding='4px 0px' type="text" placeholder="Firstname" />
                        <Inputfield padding='4px 0px' type="text" placeholder="Lastname" />
                        <Inputfield padding='4px 0px' type="text" placeholder="Phone " />
                        <Inputfield padding='4px 0px' type="text" placeholder="Email" />
                        <Inputfield padding='4px 0px' type="text" placeholder="Create Password" />
                        <Inputfield padding='4px 0px' type="text" placeholder="Address" />
                        <input type='file' />
                        <div style={{ display: 'flex', flexDirection: 'center', alignItems: 'center', alignContent: 'center', paddingLeft: '70px', width: '100px', height: '100px' }}>
                            <Button text='Get Started' />
                        </div>
                    </form>

                    {/**sign in */}
                    <form className={toggle== 'login'? SignUpCSS.secondform_open : SignUpCSS.secondform_closed}>
                        <Inputfield padding='4px 0px' type="text" placeholder="Email" />
                        <Inputfield padding='4px 0px' type="text" placeholder="Password" />
                        <div style={{ display: 'flex', flexDirection: 'center', alignItems: 'center', alignContent: 'center', paddingLeft: '70px', width: '100px', height: '100px' }}>
                            <Button text='Get Started' />
                        </div>
                    </form>
            <div className={SignUpCSS.link}>
                <Link style={{ textDecoration: 'none' }} to='/MovingMoney'>
                    <h3 className={SignUpCSS.text} style={{ display: 'flex' }}>Want to make a MoneyMove?</h3>
                </Link>
            </div>
                </div>
            </div>
            <div className={SignUpCSS.footer}>
                <div className={SignUpCSS.footerhead}>
                    <img height='150px' width='200px' src={jesMoveLogo} alt='jesMoveLogo' />
                </div>
                <div className={SignUpCSS.footerdiv}>
                    © jesMove 2021
       <p>We help you Move right where you are</p>
                </div>
            </div>

        </div>
    )
}
export default Signup;







