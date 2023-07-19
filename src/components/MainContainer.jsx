import Content from "./Content.jsx";
import Facts from "./Facts.jsx";

function MainContainer() {
    const catsInfo = [
        {
            id: 1,
            url: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
            name: "Abyssinian",
            temperament: "Active, Energetic, Independent, Intelligent, Gentle",
            origin: "Egypt",
            description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
            life_span: "14 - 15",
            wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
        },
        {
            id: 2,
            name: "Aegean",
            url: "https://cdn2.thecatapi.com/images/ks5wRxZmP.jpg",
            temperament: "Affectionate, Social, Intelligent, Playful, Active",
            origin: "Greece",
            description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
            life_span: "9 - 12",
            wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",

        },
        {
            id: 3,
            name: "American Bobtail",
            url: "https://cdn2.thecatapi.com/images/hBXicehMA.jpg",
            temperament: "Intelligent, Interactive, Lively, Playful, Sensitive",
            origin: "United States",
            country_codes: "US",
            country_code: "US",
            description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
            life_span: "11 - 15",
            wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
        },
    {
        id: 4,
        name: "LaPerm",
        url: "https://cdn2.thecatapi.com/images/ggoVRMisX.jpg",
        temperament: "Affectionate, Friendly, Gentle, Intelligent, Playful, Quiet",
        origin: "Thailand",
        description: "LaPerms are gentle and affectionate but also very active. Unlike many active breeds, the LaPerm is also quite content to be a lap cat. The LaPerm will often follow your lead; that is, if they are busy playing and you decide to sit and relax, simply pick up your LaPerm and sit down with it, and it will stay in your lap, devouring the attention you give it.",
        life_span: "10 - 15",
        wikipedia_url: "https://en.wikipedia.org/wiki/LaPerm",
        
    }
    ];

    const catsInfoList = catsInfo.map((cats) => (
        <Content
            key={cats.id}
            url={cats.url}
            name={cats.name}
            temperament={cats.temperament}
            origin={cats.origin}
            description={cats.description}
            life_span={cats.life_span}
            wikipedia_url={cats.wikipedia_url}
        />
    ));

    return (
        <div className="d-flex flex-wrap justify-content-around">
        {catsInfoList}
        <Facts />
        </div>
    )
}

export default MainContainer;
