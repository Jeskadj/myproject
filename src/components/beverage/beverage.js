import canmalt from "../../images/beverages/canmalt.jpeg";
import BeverageCSS from '../beverage/beverage.module.css';
import Lucozade from "../../images/beverages/lucozade.jpeg";
import ceres from "../../images/beverages/ceres.jpeg";
import Betamalt from "../../images/beverages/betamalt.jpeg";
import awake from "../../images/beverages/awake.jpeg";
import caprisun from "../../images/beverages/caprisun.jpeg";
import senac from "../../images/beverages/senac.jpeg";
import petfanta from "../../images/beverages/petfanta.png";
import dietcoke from "../../images/beverages/dietcoke.jpeg";

function Beverage() {
    return (
        <div className={BeverageCSS.main}>
            <div className={BeverageCSS.container}>

                <div >
                    <img height='150px' width='150px' src={canmalt} alt='canmalt' />
                    <p>Can Malt</p>
                </div>
                <div >
                    <img height='150px' width='150px' src={Lucozade} alt='Lucozade' />
                    <p>Lucozade</p>
                </div>
                <div >
                    <img height='150px' width='150px' src={ceres} alt='ceres' />
                    <p>Ceres</p>
                </div>
                <div>
                    <img height='150px' width='150px' src={caprisun} alt='caprisun' />
                    <p>Caprisun</p>
                </div>
                <div>
                    <img height='150px' width='150px' src={Betamalt} alt='Betamalt' />
                    <p>Beta Malt</p>
                </div>
                {/* <div>
            <img height='150px' width='150px'src={awake} alt='awake'/>
                    <p>Awake</p>
            </div>
            <div>
            <img height='150px' width='150px'src={dietcoke} alt='dietcoke'/>
                    <p>Diet Coke</p>
            </div>
            <div>
            <img height='150px' width='150px'src={petfanta} alt='petfanta'/>
                    <p>Pet Fanta</p>
            </div>
            <div>
            <img height='150px' width='150px'src={senac} alt='senac'/>
                    <p>Senac</p>
            </div> */}
            </div>
        </div>

    )
}
export default Beverage;