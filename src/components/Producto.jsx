


const Producto = ({nombre,precio,imagen})=>{
    return (
        <article>
            <section>
                <img src={imagen} alt={nombre} />
            </section>
            <section>
                <h3>{nombre}</h3>
                <h6>{precio}</h6>
            </section>
        </article>
    )
}

export default Producto