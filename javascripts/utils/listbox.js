const elementSelected = document.querySelector("select");
const listboxCustom = document.querySelector(".listbox-custom");

const listboxCustomtNew = document.createElement("div");
listboxCustomtNew.classList.add("listbox-custom-new");
listboxCustomtNew.setAttribute("role", "button");
listboxCustomtNew.setAttribute("aria-haspopup", "listbox");
listboxCustomtNew.setAttribute("aria-expanded", "");
listboxCustomtNew.setAttribute("tabindex", 0);
listboxCustomtNew.innerHTML = elementSelected.options[elementSelected.selectedIndex].innerHTML;
listboxCustom.appendChild(listboxCustomtNew);

const newMenu = document.createElement("div");
newMenu.classList.add("select-items", "select-hide");
newMenu.setAttribute("id", "listbox-select-items");
newMenu.setAttribute("aria-haspopup", "listbox");
newMenu.setAttribute("aria-expanded", "true");
newMenu.setAttribute("tabindex", "0");

for (let option of elementSelected.options) {
  const newOption = document.createElement("div");

  newOption.setAttribute("role", "listbox");
  newOption.setAttribute("aria-activedescendant", "sort");
  newOption.setAttribute("aria-labelledby", "listbox-select-items");
  newOption.setAttribute("tabindex", "0");

  newOption.innerHTML = option.innerHTML;

  newOption.addEventListener("click", function () {
    const updateSorting = () => {
      for (let option of elementSelected.options) {
        if (option.innerHTML === this.innerHTML) {
          elementSelected.selectedIndex = option.index;
          listboxCustomtNew.innerHTML = this.innerHTML;
        }
      }
      listboxCustomtNew.click();
    };
    updateSorting();
  });

    newOption.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const updateSorting = () => {
        for (let option of elementSelected.options) {
          if (option.innerHTML === this.innerHTML) {
            elementSelected.selectedIndex = option.index;
            listboxCustomtNew.innerHTML = this.innerHTML;
          }
        }
        listboxCustomtNew.click();
      };
      updateSorting();
    }
  });

    newMenu.appendChild(newOption);
}

listboxCustom.appendChild(newMenu);

listboxCustomtNew.addEventListener("click", function (e) {
    e.stopPropagation();
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("active");
  photographGaleryDisplay();
  initLike();
});

listboxCustomtNew.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.stopPropagation();
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("active");
    photographGaleryDisplay();
  }
});

function sortMediaByTitle(a, b) {
  if (a.title.toLowerCase() < b.title.toLowerCase()) {
    return -1;
  }
  if (a.title.toLowerCase() > b.title.toLowerCase()) {
    return 1;
  }
  return 0;
}

function sortMediaByLikes(a, b) {
  return b.likes - a.likes;
}

function sortMediaByDate(a, b) {
  if (a.date > b.date) {
    return -1;
  }
  if (a.date < b.date) {
    return 1;
  }
  return 0;
}
