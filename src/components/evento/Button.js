//disparar um evento baseado em comp. pai que enviou para o filho
function Button(props){
    return <button onClick={props.event}>{props.text}</button>
}

export default Button
