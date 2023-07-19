function Facts() {
    return (
        <>
        <div className="accordion" idName="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" idName="headingOne">
                    <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Cat Facts
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>1. Cats can jump up to 6 times their height.</strong> That’s right!
                            Cats are really good jumpers and can jump really high.You can often see 
                            them on the top of a garden fence or on a really high wall! They have 
                            very strong muscles in their legs which catapults them into the air.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" idName="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>2. They have a total of 18 toes.</strong>
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    That’s a lot of toes! Cats have 5 toes on each 
                    of their front paws. They then have four toes 
                    on their back paws.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header" idName="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>3. Cats sleep for around 13 to 16 hours a day (70% of their life).</strong>
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    Have you ever noticed that cats are always sleeping?
                    They do this to save their energy. In the wild they 
                    would be saving their energy to go and hunt for their food.
                    House cats obviously don’t need to do this but it just comes 
                    naturally to them.
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default Facts