const wordList = [
  "ability",
  "able",
  "aboard",
  "about",
  "above",
  "accept",
  "accident",
  "according",
];

const word = () => {
  return wordList[Math.floor(Math.random() * wordList.length)];
};
