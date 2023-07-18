function Content(props) {
    const { url, name, temperament, origin, life_span, description, wikipedia_url } = props;
    return (
        <div className="card my-5" style={{ width: "21rem" }}>
            <img src={url} className="card-img-top" height={350} alt={name}/>
            <div className="card-body shadow" style={{ backgroundColor: "#E2E1E5" }}>
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{temperament}</p>
                <p className="card-text">Origin: <span>{origin}</span></p>
                <p className="card-text">Life Span: <span>{life_span} years</span></p>
                <p className="card-text">{description}</p>
                <a href={wikipedia_url} className="btn btn-dark">More</a>
            </div>
        </div>
    );
}

export default Content;
