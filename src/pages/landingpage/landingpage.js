import Navbar from '../../components/navbar';
import '../landingpage/landingpage.module.css';
import jesMoveLogo from "../../images/jesMoveLogo.png";
import landingpageCSS from "../landingpage/landingpage.module.css";
import advertisement from "../../images/advertisement.png";
import makemoney from "../../images/makemoney.png";
import wholesaleshopping from "../../images/wholesaleshopping.png";
// import Cards from "../../pageComponents/cards";
import rice from  "../../images/rice.jpeg";
import beverage from "../../images/beverage.jpeg";
import breakfast from "../../images/breakfast.png";
import pet from "../../images/pet.png";
import gifts from "../../images/gifts.jpeg";
import oil from "../../images/oil.jpeg";
import toileteries from "../../images/toileteries.jpeg";
import cooking from "../../images/cooking.jpeg";

function LandingPage() {
    return (
        <div className={landingpageCSS.wholepage}>
            <div className={landingpageCSS.upperwholepage}>
                <Navbar />
            </div>
            <div className={landingpageCSS.lowerwholepage}>

                <div className={landingpageCSS.leftlandingpage}>

                    <p style={{fontSize:40,paddingLeft:40}}>Send items speedingly from your present Location</p>
                    <p style={{fontSize:30,paddingLeft:200,paddingTop:40,fontStyle:'oblique'
                        }} >Move it Here</p>

                </div>

                <div className={landingpageCSS.rightlandingpage}>
                </div>
            </div>
            <div className={landingpageCSS.Values}>
            <div>
                    <img height='150px' width='200px' src={makemoney} alt="make money" />
                    <p>Ride at your Convenience <br />to make moneymove</p>
                </div>
                <div>
                    <img height='150px' width='200px' src={wholesaleshopping} alt='wholesaleshopping' />
                    <p>For bulk purchase  <br />of all items</p>
                </div>
                <div>
                    <img height='150px' width='200px' src={advertisement} alt='advertise with us' />
                    <p>Bulk items advertisement available</p>
                </div>
            </div>
            <div className={landingpageCSS.Shopping}>
                <div className={landingpageCSS.shoppingheading}>Shop with Us</div>
                <div className={landingpageCSS.toprow}>
                <div className={landingpageCSS.card1}>
                    <img height='150px' width='150px'src={beverage} alt='arizonagreentea'/>
                    <p>Beverages</p>
                </div>
                <div className={landingpageCSS.card2}>
                    <img height='150px' width='150px'src={breakfast} alt='honeybunches' />
                    <p>Breakfast</p>
                </div>
                <div className={landingpageCSS.card3}>
                    <img height='150px' width='150px'src={rice} alt='ginorice'/>
                    <p>Rice</p>
                </div>
                <div className={landingpageCSS.card4}>
                    <img height='150px' width='150px'src={toileteries} alt='kokot-roll'/>
                    <p>Cleaning Supply</p>
                </div>
                </div>
                <div className={landingpageCSS.bottomrow}>
                <div className={landingpageCSS.card5}>
                    <img height='150px' width='150px'src={cooking} alt='cornedbeef'/>
                    <p>Cooking</p>
                </div>
                <div className={landingpageCSS.card6} >
                   <img height='150px' width='150px'src={oil} alt='wessonoil'/>
                   <p>Oil</p>
                </div>
                <div className={landingpageCSS.card7} >
                   <img height='150px' width='150px'src={pet} alt='dogchow'/>
                   <p>Pet Care</p>
                </div>
                <div className={landingpageCSS.card8}>
                    <img height='150px' width='150px'src={gifts} alt='hamper'/>
                    <p>Miscellaneous</p>
                </div>
                
                </div>


            </div>
            <div className={landingpageCSS.Advertisement}>

            </div>
            <div className={landingpageCSS.footerhead}>
              <img height='150px' width='200px' src={jesMoveLogo} alt='jesMoveLogo'/>
            </div>
              <div className={landingpageCSS.footerdiv} style={{color:"#fc6f30"}}>
                © jesMove 2021
       <p>We help you Move right where you are</p>
            </div>
        </div>





    )

}

export default LandingPage