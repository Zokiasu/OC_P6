function galeryFactory(data) {
  const { id, photographerId, title, image, video, likes, date, price } = data;

  let srcMedia = `./assets/medias/${photographerId}/`;
  
  if (image) srcMedia += image;
  else srcMedia += video;

  // afficher la galerie du photographe
  function setPhotographeGalery() {

    const figureGalery = document.createElement("figure");
    figureGalery.classList.add("media-figure");
    figureGalery.setAttribute("id", "figure-" + id);
    figureGalery.setAttribute("aria-label", "carte du média " + title);

    const legendGalery = document.createElement("figcaption");

    const legendTitle = document.createElement("span");
    legendTitle.classList.add("legend-title");
    legendTitle.textContent = title;

    const legendLike = document.createElement("div");
    legendLike.classList.add("legend-like");

    const likeInput = document.createElement("input");
    likeInput.setAttribute("type", "checkbox");
    likeInput.setAttribute("id", id);
    likeInput.classList.add("like-input");
    likeInput.setAttribute("role", "img");
    likeInput.setAttribute("aria-label", "likes");
    likeInput.setAttribute("tabindex", "0");

    const likeLabel = document.createElement("label");
    likeLabel.setAttribute("for", id);
    likeLabel.classList.add("like-numbers");
    likeLabel.textContent = likes + " ";


    if (image) {
      const imgPhoto = document.createElement("img");
      imgPhoto.classList.add("galery-medias");
      imgPhoto.setAttribute("src", srcMedia);
      imgPhoto.setAttribute("data-mediaid", id);
      imgPhoto.setAttribute("alt", title + ", closeup view");
      imgPhoto.setAttribute("role", "link");
      imgPhoto.setAttribute("tabindex", 0);
      figureGalery.appendChild(imgPhoto);
    } else {
      const vidPhoto = document.createElement("video");
      vidPhoto.classList.add("galery-medias");
      vidPhoto.setAttribute("type", "video/mp4");
      vidPhoto.setAttribute("src", srcMedia);
      vidPhoto.setAttribute("data-mediaid", id);
      vidPhoto.setAttribute("alt", title + ", closeup view");
      vidPhoto.setAttribute("role", "link");
      vidPhoto.setAttribute("tabindex", 0);
      figureGalery.appendChild(vidPhoto);
    }

    figureGalery.appendChild(legendGalery);
    legendGalery.appendChild(legendTitle);
    legendGalery.appendChild(legendLike);
    legendLike.appendChild(likeInput);
    legendLike.appendChild(likeLabel);
    return figureGalery;
  }

  function setGaleryLigthbox() {

    const slidesContainer = document.createElement("div");
    slidesContainer.classList.add("slides-container");

    const slides = document.createElement("figure");
    slides.classList.add("slides");
    slidesContainer.appendChild(slides);

    const slideMedia = document.createElement("div");
    slideMedia.setAttribute("id", "slide-media" + id);
    slideMedia.classList.add("slide-media");
    slides.appendChild(slideMedia);

    if (image) {
      const imgPhotoLightbox = document.createElement("img");
      imgPhotoLightbox.setAttribute("src", srcMedia);
      imgPhotoLightbox.classList.add("lightbox-modal-media");
      imgPhotoLightbox.setAttribute("alt", "");
      imgPhotoLightbox.setAttribute("tabindex", "1");
      slideMedia.appendChild(imgPhotoLightbox);
    } else {
      const vidPhotoLightbox = document.createElement("video");
      vidPhotoLightbox.setAttribute("controls", "");
      vidPhotoLightbox.setAttribute("src", srcMedia);
      vidPhotoLightbox.setAttribute("type", "video/mp4");
      vidPhotoLightbox.setAttribute("preload", "metadata");
      vidPhotoLightbox.classList.add("lightbox-modal-media");
      vidPhotoLightbox.setAttribute("aria-label", title);
      vidPhotoLightbox.setAttribute("tabindex", "1");
      slideMedia.appendChild(vidPhotoLightbox);
    }

    const lightboxLegendTitle = document.createElement("figcaption");
    const titlePhoto = document.createElement("h4");
    titlePhoto.setAttribute("id", "title-photo");
    titlePhoto.textContent = title;

    slides.appendChild(lightboxLegendTitle);
    lightboxLegendTitle.appendChild(titlePhoto);
    return slidesContainer;
  }

  return {
    id,
    photographerId,
    title,
    image,
    video,
    likes,
    date,
    price,
    srcMedia,
    setPhotographeGalery,
    setGaleryLigthbox,
  };

}


