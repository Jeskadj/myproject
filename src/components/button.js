function  Button(props) {
    return(
       <button style={{backgroundColor:props.color,padding:props.padding,margin:props.margin, width:'80px'}}
       onClick={props.onClickButton}>{props.text}</button> 
    )
    
}

export default Button 