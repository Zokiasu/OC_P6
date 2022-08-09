function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  /* Template de la carte photographe */
  function setPhotographeCard() {
    const lien = document.createElement("a");
    lien.setAttribute("href", `./photographer.html?id=` + id);

    const article = document.createElement("article");
    article.setAttribute("aria-label", "carte de " + name);

    const div = document.createElement("div");

    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", "portrait de " + name);

    const h2 = document.createElement("h2");
    h2.textContent = name;

    const photographerDetails = document.createElement("section");

    const h3 = document.createElement("h3");
    h3.textContent = city + ", " + country;

    const h4 = document.createElement("h4");
    h4.textContent = tagline;

    const h5 = document.createElement("h5");
    h5.textContent = price + "€/jour";

    article.appendChild(div);
    article.appendChild(lien);
    lien.appendChild(div);
    div.appendChild(img);
    div.appendChild(h2);
    article.appendChild(photographerDetails);
    photographerDetails.appendChild(h3);
    photographerDetails.appendChild(h4);
    photographerDetails.appendChild(h5);

    return article;
  }

  /* Template de la section de contact */
  function setPhotographerDetailHeader() {
    const articlePage = document.createElement("section");
    const divProfil = document.createElement("div");
    
    const h1Page = document.createElement("h1");
    h1Page.textContent = name;
    
    const h2Page = document.createElement("h2");
    h2Page.textContent = city + ", " + country;
    
    const h3Page = document.createElement("h3");
    h3Page.textContent = tagline;
    
    const btnContact = document.createElement("button");
    btnContact.classList.add("contact-button");
    btnContact.setAttribute("onclick", "openModal()");
    btnContact.setAttribute("aria-label", "Contact Me");
    btnContact.textContent = "Contactez-moi";

    const imgPage = document.createElement("img");
    imgPage.setAttribute("src", picture);
    imgPage.setAttribute("alt", "portrait du photographe");

    articlePage.appendChild(divProfil);
    divProfil.appendChild(h1Page);
    divProfil.appendChild(h2Page);
    divProfil.appendChild(h3Page);
    articlePage.appendChild(btnContact);
    articlePage.appendChild(imgPage);
    return articlePage;
  }

  /* Template compteur de like */
  function setLikeCounter() {
    
    const asideWidget = document.createElement("aside");
    const counterLikes = document.createElement("div");

    
    const counterLikesDisplay = document.createElement("span");
    counterLikesDisplay.classList.add("counter-likes");
    const likeHeart = document.createElement("i");
    likeHeart.classList.add("fas", "fa-heart");
    likeHeart.setAttribute("alt", "");
    likeHeart.setAttribute("role", "img");

    
    const priceWidget = document.createElement("div");
    const h5Widget = document.createElement("h5");
    h5Widget.textContent = price + "€/jour";

    asideWidget.appendChild(counterLikes);
    counterLikes.appendChild(counterLikesDisplay);
    counterLikes.appendChild(likeHeart);
    asideWidget.appendChild(priceWidget);
    priceWidget.appendChild(h5Widget);
    return asideWidget;
  }

  /* Nom du photographe */
  function setPhotographerName() {
    const contactName = document.createElement("span");
    contactName.textContent = name;
    return contactName;
  }

  return {
    name,
    id,
    city,
    country,
    tagline,
    price,
    picture,
    setPhotographeCard,
    setPhotographerDetailHeader,
    setLikeCounter,
    setPhotographerName
  };
}