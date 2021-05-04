import  Navbar from '../components/navbar';
import Beverage from "../components/beverage/beverage";
import ShoppingPageCSS from "../shopping/shoppingpage.module.css"



function ShoppingPage(){
    return(
        <div className={ShoppingPageCSS.main}>
            <div className={ShoppingPageCSS.nav}>
                <Navbar />
            </div>
            <div className={ShoppingPageCSS.title}>

            </div>
            <div className={ShoppingPageCSS.beverage}>
                <Beverage/>

            </div>
            <div className={ShoppingPageCSS.Oil}> 
                
            </div>
            <div className={ShoppingPageCSS.Breakfast}>

            </div>
            <div className={ShoppingPageCSS.cooking}>

            </div>
            <div className={ShoppingPageCSS.cleaningsupply}>

            </div>
            <div className={ShoppingPageCSS.rice}>

            </div>
            <div className={ShoppingPageCSS.petcare}>

            </div>
            <div className={ShoppingPageCSS.miscellaneous}>

            </div>
        </div>

    )
}
export default ShoppingPage;