const wordsLowercase = ["de", "da", "do", "dos"];
const input = document.querySelector("#name");

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
  const words = input.value.split(" ");
  if (!words.length) return;

  const lowerCaseWords = setWordsInLowercase(words);
  const capitalizedWords = capitalizeWords(lowerCaseWords);
  const formattedWords = setSpecificWordsToLowercase(capitalizedWords);
  input.value = formattedWords.join(" ");
});
