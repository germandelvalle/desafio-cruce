

const ButtonLogin =({click,text,className,svg})=>{
    return(
        <button className={className} type='button' onClick={click}>{svg}{text}</button>
    )
}

export default ButtonLogin