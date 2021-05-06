import {Switch,Route  } from "react-router-dom";
import LandingPage from "../pages/landingpage/landingpage";
import SignUp from "../pages/signup/signup";
import MoneyMove from "../pages/MoneyMove/moneymove";
import LandingSignup from "../pages/landingsignup/landingsignup";
import LandingLogin from "../pages/landinglogin/landinglogin";
import ShoppingSignup from "../../src/shopping/shoppinsignup";
import Service from "../pages/Service/service";
import Connection from "../pages/Connection/connect";
import About from "../pages/About/About";
import ShoppingPage from "../shopping/shoppingpage";



function AppRoute(){
    return(
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/SignUp" component={SignUp}/>
            <Route exact path="/MovingMoney" component={MoneyMove}/>
            <Route exact path="/LandingSignup" component={LandingSignup}/>
            <Route exact path="/LandingLogin" component={LandingLogin}/>
            <Route exact path="/Shoppingsignup"component={ShoppingSignup}/>
            <Route exact path="/Connection" component={Connection}/>
            <Route exact path="/About" component={About}/>
            <Route exact path="/Service" component={Service}/>
            <Route exact path="/ShoppingPage" component={ShoppingPage}/>
            
        </Switch>
    )
}

export default AppRoute;