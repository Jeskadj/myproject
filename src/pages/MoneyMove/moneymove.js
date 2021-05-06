import Inputfield from "../../components/inputfield"
import Button from "../../components/button";
import MoneymoveCSS from "./MoneyMove.module.css";
import moneyride from "../../images/moneyride.png";
import findlocation from "../../images/findlocation.png";
import deliverlocation from "../../images/deliverlocation.png";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/navbar";
import { useState } from "react";
import Footer from "../../components/footer";

   

function DriveSignup() {
    const[toggle,setToggle]=useState('signup')
    const history=useHistory();
    return (
        <div className={MoneymoveCSS.main}>
             <div className={MoneymoveCSS.nav}>
                <Navbar />
            </div>
            <div className={MoneymoveCSS.imagediv}>
                <div className={MoneymoveCSS.uppertext}>
                <h3 style={{color:'white',fontSize:'30px'}}> Move every second <br />while Money drops in your pocket</h3>
                </div>

                <div className={MoneymoveCSS.SignUp}>
                    <form className={toggle== 'signup'? MoneymoveCSS.firstform_open : MoneymoveCSS.firstform_closed }>
                        <h3 style={{ marginBottom: "5px",color:'white'}}>
                            Sign Up Now
                       </h3>

                        <Inputfield padding='4px 0px' type="text" placeholder="Firstname" />
                        <Inputfield padding='4px 0px'type="text" placeholder="Lastname" />
                        <Inputfield padding='4px 0px'type="text" placeholder="Phone " />
                        <Inputfield padding='4px 0px'type="text" placeholder="Email" />

                        {/* <div style={{paddingLeft:0, backgroundColor: "red", display: "flex", alignItems: 'center', justifyContent: 'flex-start' }}>
                            <input style={{padding:0,margin:0}} type="radio" id="male" name="gender" value="male"/>
                            <p>male</p>
                        </div>
                        <div>
                            <input type="radio" id="female" name="gender" value="female" />
                            <label for="male">Female</label>
                        </div> */}

                        <select className="ids" >
                            <option defaultValue hidden>ID CARD TYPE</option>
                            <option >Passport</option>
                            <option >Voters' Card</option>
                            <option >Ghana Card</option>
                        </select>
                        <Inputfield padding='4px 0px'  type="text" placeholder="ID number" />
                        <Inputfield padding='4px 0px'type="password" placeholder="Create Password" />
                        <Inputfield padding='4px 0px'  type="text" placeholder="Address" />
                        <input type='file' placeholder="image" />
                        <div className={MoneymoveCSS.buttondiv}>
                            <Button onClickButton={() => history.push('/MoneyMovelogin')}text='Get Started' />


                        </div>

                        <p onClick={()=>setToggle('login')}style={{ cursor: 'pointer' ,marginBottom:'10px',textDecoration:'underline',color:'blue'}}>Log in</p>
                    </form>

                    <form className={toggle== 'login'? MoneymoveCSS.secondform_open : MoneymoveCSS.secondform_closed}>
                    <h3 style={{ color:'white',textAlign:'center',marginTop:20,paddingBottom:15}}>
                            Sign Up Now
                       </h3>
                        <Inputfield padding='4px 0px' type="text" placeholder="Email" />
                        <Inputfield padding='4px 0px' type="text" placeholder="Password" />
                        <div style={{ display: 'flex', flexDirection: 'center', alignItems: 'center', alignContent: 'center', paddingLeft: '70px', width: '100px', height: '100px' }}>
                            <Button onClickButton={() => history.push('/MoneyMovelogin')} text='Get Started' />
                        </div>
                    </form>

                </div>
            </div>
            <div className={MoneymoveCSS.lowertext}>
                <h3>Flexible Money Making Move </h3>
            </div>
            <div className={MoneymoveCSS.purposediv}>
                <div>
                    <img height='150px' width='200px' src={moneyride} alt="on the way" />
                    <p>Ride at your Convenience <br />to make moneymove</p>
                </div>
                <div>
                    <img height='150px' width='200px' src={findlocation} alt='locationfinder' />
                    <p>Find money in your present <br />location</p>
                </div>
                <div>
                    <img height='150px' width='200px' src={deliverlocation} alt='deliveryolocator' />
                    <p>Make a delivery right there</p>
                </div>
            </div>
            <div className={MoneymoveCSS.footer}>
                <Footer/>
            </div>
        </div>
    )
}
export default DriveSignup;