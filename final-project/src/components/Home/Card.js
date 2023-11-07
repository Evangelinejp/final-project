function Card(props) {
    return(
        <article className="card">
            <img src={props.image} alt={props.alt}/>
            <div>
            <h3>{props.header}</h3>
            <h4>{props.price}</h4>
            </div>
            <p>{props.text}</p>
            <h5>Order delivery now! →</h5>
        </article>
    )
}

export default Card;