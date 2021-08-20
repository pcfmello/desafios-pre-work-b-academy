const getElement = (elementName) => document.querySelector(elementName);
const createElement = (elementTagName) => document.createElement(elementTagName);

const wordsLowercase = ["de", "da", "do", "dos"];
const input = getElement("[data-js='fullname']");
const form = getElement("[data-js='form']");

const setWordsInLowercase = (words) =>
  words.map((word) => (!!word ? word.toLowerCase() : word));

const capitalizeWords = (words) =>
  words.map((word) =>
    !!word ? word[0].toUpperCase() + word.substring(1) : word
  );

const setSpecificWordsToLowercase = (words) =>
  words.map((word) =>
    !!word && wordsLowercase.includes(word.toLowerCase())
      ? word.toLowerCase()
      : word
  );

input.addEventListener("input", (event) => {
  const words = event.target.value.split(" ");
  if (!words.length) return;

  const lowerCaseWords = setWordsInLowercase(words);
  const capitalizedWords = capitalizeWords(lowerCaseWords);
  const formattedWords = setSpecificWordsToLowercase(capitalizedWords);
  input.value = formattedWords.join(" ");
});

const selectElement = createElement("select");
selectElement.setAttribute("multiple", "");

const divSelect = createElement("div");

const divColors = createElement("div");
divColors.style.display = "flex";

const colors = [
  { name: "Red", value: "#FF0000" },
  { name: "Blue", value: "#0000FF" },
  { name: "Green", value: "#00FF00" },
  { name: "Yellow", value: "#FFFF00" },
  { name: "Black", value: "#000" },
]

colors.forEach((color) => {
  const option = createElement("option");
  option.value = color.value;
  option.textContent = color.name;
  selectElement.appendChild(option);
});


selectElement.addEventListener("change", (event) => {
  divColors.innerHTML = "";
  Array.from(selectElement.selectedOptions).forEach((option) => {
    const divColorSelected = createElement("div");
    divColorSelected.style.width = "100px";
    divColorSelected.style.height = "100px";
    divColorSelected.style.backgroundColor = option.value;
    divColors.appendChild(divColorSelected);
  });
});

divSelect.appendChild(selectElement);
form.appendChild(divSelect);
form.appendChild(divColors);
