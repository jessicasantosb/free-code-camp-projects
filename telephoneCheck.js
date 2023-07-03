function telephoneCheck(str) {
    // test if the input phone number match the regex pattern;
      let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/
    // return true since the format represents a valid US telephone number;
        return regex.test(str)
    }
    
console.log(telephoneCheck("1 222-333-4444"))
console.log(telephoneCheck("55 66 77777-8888"))