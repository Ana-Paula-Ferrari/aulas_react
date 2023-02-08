function OutraLista({itens}){
    return(
        <>
        <h3>Lista de front-end:</h3>

        {/*Imprimir itens da lista e uso de if e else*/}
        { itens.length > 0 ? (
            itens.map((item, index) => (
                <p key={index}>{item}</p>
            ))) : (
                <p>Não há itens na lista!</p>
            )}
        </>
    )
}

export default OutraLista