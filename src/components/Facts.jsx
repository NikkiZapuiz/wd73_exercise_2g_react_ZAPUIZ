function Facts() {
    return (
        <>
        <div class="accordion" id="accordionExample">
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Cat Facts
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>1. Cats can jump up to 6 times their height.</strong> That’s right!
                            Cats are really good jumpers and can jump really high.You can often see 
                            them on the top of a garden fence or on a really high wall! They have 
                            very strong muscles in their legs which catapults them into the air.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    2. They have a total of 18 toes.
                    </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                    That’s a lot of toes! Cats have 5 toes on each 
                    of their front paws. They then have four toes 
                    on their back paws.
                    </div>
                </div>
            </div>
            <div class="accordion-item">
                <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    4. Cats sleep for around 13 to 16 hours a day (70% of their life).
                    </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
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