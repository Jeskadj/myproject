
import jesMoveLogo from "../images/jesMoveLogo.png";
import Button from './button';
import {useHistory} from 'react-router-dom'
import LocalGroceryStoreOutlinedIcon from '@material-ui/icons/LocalGroceryStoreOutlined';




function  Navbar() {
   const history = useHistory();
   return (
     <div className="wholenav" style={{width:'100vw',display:'flex',padding:'20px'}}>
         
         <div>
         <img src={jesMoveLogo} alt='jesMoveLogo' onClick={() => history.push('/')} style={{width:200,cursor:'pointer'}}/>
         </div>
         <div style={{display:'flex',justify:'space-around',paddingLeft:450,flexDirection:'row',alignItems:'center'}}> 
         <Button text ='Log In' margin='10px'  onClickButton={() => history.push('/LandingLogin')}/>
         <Button text='Sign Up' margin='10px' onClickButton={() => history.push('/LandingSignup')}/>
         <Button text='About Us'  margin='10px' onClickButton={() => history.push('/About')}/>
         <Button text='Services' margin='10px'onClickButton={() => history.push('/Service')} />
         <Button text='Shop' margin='10px' onClickButton={() => history.push('/Shoppingsignup')}/>
         <Button text='More' margin='10px' />

         <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
         <LocalGroceryStoreOutlinedIcon  style={{fontSize:30,color:'white'}}/>
         <p style={{color:'white'}}>5</p>
         </div>
         </div>
             </div>
   )
}

export default Navbar;