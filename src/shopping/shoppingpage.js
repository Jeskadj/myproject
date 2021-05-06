import Navbar from '../components/navbar';
import Beverage from "../components/beverage/beverage";
import ShoppingPageCSS from "../shopping/shoppingpage.module.css"
import Footer from "../components/footer";



function ShoppingPage() {
    return (
        <div className={ShoppingPageCSS.main}>

            {/* <div style={{
                display: 'flex', position:'fixed',top:0,left:0,
                zIndex:100,
                justifyContent:'center',alignItems:'center',
                width: '100%', height: '100%', backgroundColor: 'rgb(0,0,0,0.5)'
            }}>
                    <div style={{display:'flex',width:'50%',height:'50%',backgroundColor:'white'}}></div>
            </div> */}

            <div className={ShoppingPageCSS.nav}>
                <Navbar />
            </div>
            <div className={ShoppingPageCSS.title}>

            </div>
            <div className={ShoppingPageCSS.beverage}>
                <Beverage />

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
            <div className={ShoppingPageCSS.footer}>
                <Footer/>
            </div>
        </div>

    )
}
export default ShoppingPage;