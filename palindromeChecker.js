function palindrome(str) {
  // Remove any non-alphanumeric characters;
  // Convert everything to lowercase;
    var answer = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  // If the reversed string is the same as the original, it will return TRUE;
    return answer == answer.split("").reverse().join("");
}

console.log(palindrome("eibohphobie"));