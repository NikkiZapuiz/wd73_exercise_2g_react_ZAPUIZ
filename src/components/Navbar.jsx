function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg mb-5 shadow" style={{height: 150}}>
                <div className="container-fluid">
                    <img src="/CAT.png" width={130} height={70} alt="cat" className="animate__animated animate__tada animate__infinite ms-5"/>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ms-5 ps-5" id="navbarNav">
                        <ul className="navbar-nav me-5">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cat Breeds</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Cat Facts</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar