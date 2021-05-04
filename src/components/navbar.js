
// import jesMoveLogo from "../images/jesMoveLogo.png";
import Button from './button';
import {useHistory} from 'react-router-dom'




function  Navbar() {
   const history = useHistory();
   return (
     <div className="wholenav" style={{width:'100vw',display:'flex',padding:'20px'}}>
         
         <div style={{color:'#3fc1c9',paddingLeft:"40px"}}>

         <h1>jesMove</h1>
         </div>
         <div style={{display:'flex',justify:'space-around',paddingLeft:600}}> 
         {/* <Button  text='Connect with Us' margin='10px' onClickButton={() => history.push('/Connect')} /> */}
         <Button text ='Log In' margin='10px'  onClickButton={() => history.push('/LandingLogin')}/>
         <Button text='Sign Up' margin='10px' onClickButton={() => history.push('/LandingSignup')}/>
         <Button text='About Us'  margin='10px' onClickButton={() => history.push('/About')}/>
         <Button text='Services' margin='10px'onClickButton={() => history.push('/Service')} />
         <Button text='Shop' margin='10px' onClickButton={() => history.push('/Shoppingsignup')}/>
         <Button text='More' margin='10px' />
         </div>
             


         
         
         </div>
   )
}

export default Navbar;