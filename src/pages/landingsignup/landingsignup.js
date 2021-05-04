import landingsignupCSS from "../landingsignup/landingsignup.module.css";
import Navbar from "../../components/navbar";
import jesMoveLogo from "../../images/jesMoveLogo.png";
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";

function LandingSignup(){

    const history = useHistory();
    return(
        <div>

                <div className={landingsignupCSS.main}>
            <div className={landingsignupCSS.nav}>
                <Navbar />
            </div>
            <div className={landingsignupCSS.firstpair}>

            <div className={landingsignupCSS.first}>
                <Link style={{textDecoration:'none'}} to='/MovingMoney'>
                <h1 className={landingsignupCSS.f}onClickButton={() => history.push('/MovingMoney')}>Sign Up to make MoneyMove</h1>
                
                </Link>
            </div>
            <div className={landingsignupCSS.second}>
                <Link style={{textDecoration:'none'}}to='/signup'>
                <h1 className={landingsignupCSS.s}onClickButton={() => history.push('/signup')}>Sign Up for Pick-Ups& A Ride </h1>
                 </Link>
             </div>
            </div>
            <div className={landingsignupCSS.lowerpair}>

            <div className={landingsignupCSS.third}>
                <Link style={{textDecoration:'none'}}>
                <h1 className={landingsignupCSS.t}>Sign Up for Bulk Purchase</h1>
                </Link>
            </div>
            <div className={landingsignupCSS.fourth}>
                <Link style={{textDecoration:'none'}}>
                <h1 className={landingsignupCSS.f}>Sign Up for Advertisement</h1>
                </Link>
           </div>
            </div>
           <div className={landingsignupCSS.footer}>
           {/* <div className={landingsignupCSS.footerhead}>
              <img height='150px' width='200px' src={jesMoveLogo} alt='jesMoveLogo'/>
            </div> */}
              <div className={landingsignupCSS.footerdiv}>
                © jesMove 2021
       <p>We help you Move right where you are</p>
            </div>
           </div>
        </div>
        </div>

    )
}
export default LandingSignup;