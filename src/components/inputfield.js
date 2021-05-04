function Inputfield(props){
    return(
        <div>
            <input type={props.type} placeholder={props.placeholder} style={{margin:props.margin,padding:props.padding}}/>

        </div>
    )

}


export default Inputfield