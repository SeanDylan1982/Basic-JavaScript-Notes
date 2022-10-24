function convertToRoman(num) {
  // Create Roman Numeral to number lookup table
  const lookupTable = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  }
  // Create a Roman Numeral accumulator
  let accumulator = '';
  // Loop through the lookup table
  for (const key in lookupTable) {
    const numberValue = lookupTable[key];
  // while currentNumber is <= input num. then subtract currentNumber from num. add symbol to accumulator.
    while (numberValue <= num) {
      num -= numberValue;
      accumulator += key;
    }
  }
  // Return accumulator
  return accumulator;
}

convertToRoman(36);