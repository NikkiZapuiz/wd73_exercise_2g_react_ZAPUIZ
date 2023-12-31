function AppFooter() {
    return (
        <div className="container-fluid" style={{ backgroundColor: "#E2E1E5" }}>
            <footer className="text-center text-white container-fluid shadow" style={{ backgroundColor: "#E2E1E5" }}>
                <div className="container">
                    <section className="mt-5">
                        <div className="row text-center d-flex justify-content-center pt-5">
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a className="nav-link active text-black" aria-current="page" href="#">Home</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                <a className="nav-link active text-black" aria-current="page" href="#">Cat Breeds</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a className="nav-link active text-black" aria-current="page" href="#">Cat Facts</a>
                                </h6>
                            </div>
                            <div className="col-md-2">
                                <h6 className="text-uppercase font-weight-bold">
                                    <a className="nav-link active text-black" aria-current="page" href="#">Contact</a>
                                </h6>
                            </div>
                        </div>
                    </section>
                    <hr className="my-3" style={{ color: "#B8ACB0" }}/>
                    <section className="mb-2">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8 text-black">
                                <p>
                                Cats are known for their independent nature, but they also form strong bonds with their owners. They can provide companionship and emotional support, which can be particularly beneficial for individuals living alone or those in need of a comforting presence.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="text-center mb-5">
                        <a href="" className="text-black me-4">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="" className="text-black me-4">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="" className="text-black me-4">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="" className="text-black me-4">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="" className="text-black me-4">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="" className="text-black me-4">
                            <i className="fab fa-github"></i>
                        </a>
                    </section>
                </div>

                <div className="text-center p-3" style={{ backgroundColor: "#7E979B" , font:"#E2E1E5"}}>
                    © {new Date().getFullYear()} CATalogue. All rights reserved.
                </div>
            </footer>
        </div>
    );
}

export default AppFooter;
