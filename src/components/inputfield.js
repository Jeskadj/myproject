function Inputfield(props){
    return(
        <div>
            <input 
            type={props.type} 
            placeholder={props.placeholder} 
            style={{margin:props.margin,padding:props.padding}}
            onChange={props.onChange}
            value={props.value}
            name={props.name}
            />

        </div>
    )

}


export default Inputfield