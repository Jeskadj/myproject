import Inputfield from "../../components/inputfield"
import Button from "../../components/button";
import MoneymoveCSS from "./MoneyMove.module.css";
import moneyride from "../../images/moneyride.png";
import findlocation from "../../images/findlocation.png";
import deliverlocation from "../../images/deliverlocation.png";
import { useHistory } from "react-router-dom";
import Navbar from "../../components/navbar";

function DriveSignup() {
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
                    <form className={MoneymoveCSS.form1} style={{ display: 'flex', flexDirection: 'column' }}>
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

                        <a style={{ cursor: 'pointer' ,marginBottom:'10px'}} href="/login">Log in</a>
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
            <div className={MoneymoveCSS.footerdiv}>
                © jesMove 2021
       <p>We help you Move right where you are</p>
            </div>
        </div>
    )
}
export default DriveSignup;