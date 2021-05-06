import Navbar from '../components/navbar';
import PickuploginCSS from "../Pickuplogin/Pickuplogin.module.css"
import Footer from "../components/footer";



function Pickuplogin() {
    return (
        <div className={PickuploginCSS.main}>

           

            <div className={PickuploginCSS.nav}>
                <Navbar />
            </div>
            
            <div className={pickuploginCSS.footer}>
                <Footer/>
            </div>
        </div>

    )
}
export default Pickuplogin;