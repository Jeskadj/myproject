import landingloginCSS from "../landinglogin/landinglogin.module.css";
import Navbar from "../../components/navbar";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Footer from "../../components/footer";


function LandingLogin(){

    const history = useHistory();
    return(
        <div className={landingloginCSS.main}>
            <div className={landingloginCSS.nav} >
                <Navbar />
            </div>
            <div className={landingloginCSS.firstpair}>
            <div className={landingloginCSS.first}>
                <Link style={{textDecoration:'none'}} to='/MovingMoney'>
                <h1 className={landingloginCSS.f}onClickButton={() => history.push('/MovingMoney')}>Sign In to make MoneyMove</h1>
                </Link>
            </div>
            <div className={landingloginCSS.second}>
                <Link style={{textDecoration:'none'}}to='/signup'>
                <h1 className={landingloginCSS.s} onClickButton={() => history.push('/signup')}>Sign In for Pick-Ups& A Ride </h1>
                 </Link>
             </div>

            </div>
            <div className={landingloginCSS.lowerpair}>
            <div className={landingloginCSS.third}>
                <Link style={{textDecoration:'none'}} to="/Shoppingsignup">
                <h1 className={landingloginCSS.t} >Sign In for Bulk Purchase</h1>
                </Link>
            </div>
            <div className={landingloginCSS.fourth}>
                <Link style={{textDecoration:'none'}}>
                <h1 className={landingloginCSS.f}>Sign In for Advertisement</h1>
                </Link>
           </div>

            </div>
           <div className={landingloginCSS.footer}>
                <Footer/>
            </div>
           </div>
        

    )
}
export default LandingLogin;