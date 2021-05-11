import Inputfield from "../../src/components/inputfield"
import Button from "../../src/components/button";
import ShoppingSignUpCSS from "../../src/shopping/shoppingsignup.module.css";
import Navbar from "../components/navbar";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/footer";


function ShoppingSignup() {
    const [toggle, setToggle] = useState('signup')
    const history = useHistory();

    const [values, setValues] = useState({})

    const updatevalues = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
        function Shoppingpagelogin(e) {
            e.preventDefault()

            let json_object = JSON.stringify(values)
            fetch('http://localhost:5001/api/v1/login', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: json_object,
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);

                    if (data.success == true) {
                        history.push('/Shoppingpage')
                    }
                    else if (data.success == false) {
                        alert('wrong email or pass')
                    }

                    else if (data.success == 'error') {
                        alert('account doesnt exist')
                    }
                })
        }



        function getStarted(e) {
            // () => history.push('/Shoppingpage')
            e.preventDefault()
            // console.log(values);

            let json_object = JSON.stringify(values)
            // console.log(json_object);

            fetch('http://localhost:5001/api/v1/signup', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: json_object,
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);

                    if (data.message) {
                        history.push('/Shoppingpage')
                    }
                    else {
                        alert('error')
                    }
                })

        }
        return (
            <div className={ShoppingSignUpCSS.whole}>

                <div className={ShoppingSignUpCSS.main}>
                    <div className={ShoppingSignUpCSS.nav}>
                        <Navbar />
                    </div>

                    <div className={ShoppingSignUpCSS.form} style={{ display: 'flex', flexDirection: 'column' }}>
                        <h3 style={{ marginBottom: "25px", color: "white" }}>
                            TO GET SHOPPING
               </h3>
                        <div>
                            <Button onClickButton={() => setToggle('signup')} text='Sign Up' />
                            <Button onClickButton={() => setToggle('login')} text='Log In' />
                        </div>
                        <form className={toggle == 'signup' ? ShoppingSignUpCSS.firstform_open : ShoppingSignUpCSS.firstform_closed}>
                            <Inputfield padding='4px 0px' type="text" placeholder="Firstname" onChange={updatevalues} name="firstname" />
                            <Inputfield padding='4px 0px' type="text" placeholder="Lastname" onChange={updatevalues} name="lastname" />
                            <Inputfield padding='4px 0px' type="text" placeholder="Phone " onChange={updatevalues} name="phone" />
                            <Inputfield padding='4px 0px' type="text" placeholder="Email" onChange={updatevalues} name="email" />
                            <Inputfield padding='4px 0px' type="text" placeholder="Create Password" onChange={updatevalues} name="password" />
                            <Inputfield padding='4px 0px' type="text" placeholder="Address" onChange={updatevalues} name="address" />
                            <div style={{ display: 'flex', flexDirection: 'center', alignItems: 'center', alignContent: 'center', paddingLeft: '70px', width: '100px', height: '100px' }}>
                                <Button onClickButton={getStarted} text='Get Started' />
                            </div>
                        </form>
                        <form className={toggle == 'login' ? ShoppingSignUpCSS.secondform_open : ShoppingSignUpCSS.secondform_closed}>
                            <Inputfield padding='4px 0px' type="text" placeholder="Email" onChange={updatevalues} name="email" />
                            <Inputfield padding='4px 0px' type="text" placeholder="Password" onChange={updatevalues} name="password" />
                            <div style={{ display: 'flex', flexDirection: 'center', alignItems: 'center', alignContent: 'center', paddingLeft: '70px', width: '100px', height: '100px' }}>
                                <Button onClickButton={Shoppingpagelogin} text='Get Started' />
                            </div>
                        </form>
                    </div>
                    <div className={ShoppingSignUpCSS.footer}>

                        <Footer />
                    </div>

                </div>
            </div>


        )
    }
    export default ShoppingSignup;