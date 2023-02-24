const randomWords = require("random-words");

const wordDefinition = async () => {
  const word = randomWords();

  const rawData = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  );

  const data = await rawData.json();

  const { definition } = await data[0].meanings[0].definitions[0];

  return `${word}: ${definition}`;
};
