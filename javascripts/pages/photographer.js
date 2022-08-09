async function getPhotographers() {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (photographers = data.photographers));
  return { photographers: [...photographers] };
}

const getMedias = async () => {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (medias = data.media));

  return { medias: [...medias] };
};

function getPhotographerId() {
  return parseInt(new URLSearchParams(window.location.search).get("id"));
}

function photographerProfile() {
  // Header
  const photographerHeader = document.querySelector(".photographer_header");
  // Compteur de like
  const widget = document.querySelector(".widget");
  // Nom du photographe
  const contact = document.querySelector(".nameContact");

  photographers.forEach((photographer) => {
    if (photographer.id === getPhotographerId()) {
      // Header
      const photographerModelPage = photographerFactory(photographer);
      const photographerDetailHeader = photographerModelPage.setPhotographerDetailHeader();
      photographerHeader.appendChild(photographerDetailHeader);
      // Compteur de like
      const widgetDisplay = photographerModelPage.setLikeCounter();
      widget.appendChild(widgetDisplay);
      // Nom du photographe
      const contactDisplay = photographerModelPage.setPhotographerName();
      contact.appendChild(contactDisplay);
    }
  });
}

function photographGaleryDisplay() {
  // Filtre de la galerie du photographe actuel
  const mediasFilter = medias.filter((media) => media.photographerId === parseInt(getPhotographerId()));

  const itemsSort = document.querySelector(".listbox-custom-new").textContent;

  function selectSort(itemSort) {
    if (itemSort === "Date") return sortMediaByDate;
    else if (itemSort === "Popularité") return sortMediaByLikes;
    else return sortMediaByTitle;
  }
  
  mediasFilter.sort(selectSort(itemsSort));

  const photographGalery = document.querySelector(".photograph-galery");
  const photographLightbox = document.getElementById("lightbox-container");

  photographGalery.innerHTML = "";
  photographLightbox.innerHTML = "";

  mediasFilter.forEach((media) => {
    if (mediasFilter.indexOf()) {
      const photographerModelGalery = galeryFactory(media);
      const userGalery = photographerModelGalery.setPhotographeGalery();
      photographGalery.appendChild(userGalery);

      const photographerModelGaleryPhoto = galeryFactory(media);
      const userGaleryPhoto = photographerModelGaleryPhoto.setGaleryLigthbox();
      photographLightbox.appendChild(userGaleryPhoto);
    }
  });

  const mediasLightbox = document.querySelectorAll(".galery-medias");

  for (let i = 0; i < mediasLightbox.length; i++) {
    mediasLightbox[i].addEventListener("click", () => {
      new Lightbox(i, mediasLightbox.length);
      openLightbox();
    });

    mediasLightbox[i].addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        new Lightbox(i + 1, mediasLightbox.length);
        openLightbox();
      }
    });
  }
  new Lightbox();
}

async function initPage() {
  const { photographers } = await getPhotographers();
  const { medias } = await getMedias();
  
  photographerProfile(photographers);
  photographGaleryDisplay(medias);
}

initPage();