function Rating(props) {
    return(
        <article className="rating">
            <h3>{props.rating}</h3>
            <div>
                <img src={props.image} alt={props.alt}/>
                <h4>{props.name}</h4>
            </div>
            <p>{props.quote}</p>
        </article>
    )
}

export default Rating;