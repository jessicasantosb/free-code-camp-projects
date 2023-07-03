function convertToRoman(num) {
    // Split the string into an array of individual characters;
    // Then convert eachElement from a string to a number;
    let array = String(+num).split('').map((eachElement) => +eachElement );
    
    let searchRoman = {
        1: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        2: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        3: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        4: ['', 'M', 'MM', 'MMM', 'MMMM', 'MMMMM', 'MMMMMM', 'MMMMMMM', 'MMMMMMMM', 'MMMMMMMMM'],
    }

    let arrayLength = array.length;
    let roman = '';
    // Appends the roman numeral symbol for eachElement at the corresponding to arrayLength
    array.forEach(function (eachElement) {
        roman += searchRoman[arrayLength][eachElement];
        arrayLength--;
    })
    // Return the roman string after the loop completes;
    return roman;
}

console.log(convertToRoman(6789));