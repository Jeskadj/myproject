import Navbar from '../../components/navbar';
import '../landingpage/landingpage.module.css';
import landingpageCSS from "../landingpage/landingpage.module.css";
import advertisement from "../../images/advertisement.png";
import makemoney from "../../images/makemoney.png";
import wholesaleshopping from "../../images/wholesaleshopping.png";
import rice from  "../../images/rice.jpeg";
import beverage from "../../images/beverage.jpeg";
import breakfast from "../../images/breakfast.png";
import pet from "../../images/pet.png";
import gifts from "../../images/gifts.jpeg";
import oil from "../../images/oil.jpeg";
import toileteries from "../../images/toileteries.jpeg";
import cooking from "../../images/cooking.jpeg";
import Footer from "../../components/footer";

function LandingPage() {
    return (
        <div className={landingpageCSS.wholepage}>
            <div className={landingpageCSS.upperwholepage}>
                <Navbar />
            </div>
            <div className={landingpageCSS.lowerwholepage}>

                <div className={landingpageCSS.leftlandingpage}>

                    <p style={{fontSize:40,paddingLeft:40,fontStyle:'oblique'}}>Send items speedingly from your present Location</p>
                    <p style={{fontSize:30,paddingTop:40,fontStyle:'oblique'
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
                    <p style={{alignSelf:'center'}}>Rice</p>
                </div>
                <div className={landingpageCSS.card4}>
                    <img height='150px' width='150px'src={toileteries} alt='kokot-roll'/>
                    <p>Cleaning Supply</p>
                </div>
                </div>
                <div className={landingpageCSS.bottomrow} style={{fontStyle:'oblique'}}>
                <div className={landingpageCSS.card5}>
                    <img height='150px' width='150px'src={cooking} alt='cornedbeef'/>
                    <p>Cooking</p>
                </div>
                <div className={landingpageCSS.card6} >
                   <img height='150px' width='150px'src={oil} alt='wessonoil'/>
                   <p style={{alignSelf:'center'}}>Oil</p>
                </div>
                <div className={landingpageCSS.card7} >
                   <img height='150px' width='150px'src={pet} alt='dogchow'/>
                   <p style={{alignSelf:'center'}}>Pet Care</p>
                </div>
                <div className={landingpageCSS.card8}>
                    <img height='150px' width='150px'src={gifts} alt='hamper'/>
                    <p>Miscellaneous</p>
                </div>
                
                </div>
           </div>
            {/* <div className={landingpageCSS.Advertisement}>

            </div> */}
            
            <div className={landingpageCSS.footer}>
                <Footer/>
            </div>
        </div>





    )

}

export default LandingPage