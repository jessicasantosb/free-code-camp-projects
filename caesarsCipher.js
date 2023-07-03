function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const ciphers = "NOPQRSTUVWXYZABCDEFGHIJKLM";
  let translated = "";

  // Loop in each character in str and find the index;
  for (let i = 0; i < str.length; i++) {
      let character = str[i];
      let index = alphabet.indexOf(character);

    // If the character is not found in alphabet, indexOf will return -1;
    if (index === -1) {
      // Non-letter characters will be preserved in the translated string;
      translated += character;
    } else {
      // Using the index of the alphabet, we will access the letter at the same index in the ciphers string;
      let cipherChar = ciphers[index];
      // Then cipherChar is appended to the translated string;
      translated += cipherChar;
    }
}
  // It will return the str translated;
  return translated;
}

console.log(rot13("SERR PBQR PNZC"));