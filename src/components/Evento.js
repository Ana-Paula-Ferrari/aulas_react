import Button from './evento/Button'

function Evento({numero}){
    function meuEvento(){
        console.log(`Opa, fui ativado! ${numero}`)
    }


    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <Button  event={meuEvento} text="Primeiro Evento"/>
            <Button event={meuEvento} text="Segundo Evento"/>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )
}

export default Evento