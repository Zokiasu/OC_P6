async function getLikes() {
  await fetch("./data/photographers.json")
    .then((res) => res.json())
    .then((data) => (medias = data.media));
  return { medias: [...medias] };
}

function addLikes() {
  const likesInput = document.querySelectorAll(".like-input");

  likesInput.forEach((likeInput) => {
    likeInput.addEventListener("click", (e) => {
      
      let likeText = parseInt(e.target.nextSibling.textContent); 
      let liked = e.target.nextSibling; 
      let maker = e.currentTarget; 
      
      if (!maker.checked) {
        likeText--; 
        
      } else {
        likeText++; 
      }

      liked.textContent = likeText; 
      displayLikes(); 
    });
  });
}

function displayLikes() {
  const likeNumbers = document.querySelectorAll(".like-numbers");
  const counterLikes = document.querySelector(".counter-likes");

  let likesText = 0;
  let totalLike = 0;
  let arrayLikes = [];

  likeNumbers.forEach((like) => {
    likesText = parseInt( like.textContent ); 
    
    arrayLikes.push( likesText ); 

    totalLike = arrayLikes.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0); 

    return (counterLikes.textContent = totalLike + " "); 
  });
}

async function initLike() {
  getLikes(); 
  return ( addLikes(), displayLikes() ); 
}

initLike();