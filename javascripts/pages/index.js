async function getPhotographers() {
    await fetch( "./data/photographers.json" )
        .then((res) => res.json() )
        .then( (data) => (photographers = data.photographers) );
    return { photographers };
}

async function displayData(photographers) {
    const photographerSection = document.querySelector(".photographer_section");

    photographers.forEach((photographer) => {
        const getPhotographerFactory = photographerFactory(photographer);
        const photographerCard = getPhotographerFactory.setPhotographeCard();
        photographerSection.appendChild(photographerCard);
    });
};

async function init() {
    const { photographers } = await getPhotographers();
    displayData(photographers);
};

init();