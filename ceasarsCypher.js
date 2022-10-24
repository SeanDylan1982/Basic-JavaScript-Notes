const alphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
];

function rot13(str) {
  // Create accumulator
  let accumulator = "";
  // Loop through the input string
  for (let i = 0; i < str.length; i++) {
    const char = str[1];
    const isALetter = alphabet.includes(char);
    // If char is not a letter, add to the accumulator
    if (isALetter === false) {
      accumulator += char;
    // Else rotate + or - 13, add to the acculator
    } else {
      const charIndex = alphabet.findIndex((c) => c === char);
      accumulator += alphabet[charIndex + 13] || alphabet[charIndex - 13];
    }
  }
  // Return accumulator
  return accumulator;
}
