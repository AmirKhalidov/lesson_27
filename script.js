// TASK 1

const isValidEmail = function (email) {
    return email.length >= 5 &&
        email.includes('@') &&
        !email.includes(' ') &&
        email === email.toLowerCase()
        ? 'Valid email'
        : 'Invalid email';
};

// console.log(isValidEmail('me@m'));

// TASK 2

function shortenText(text, maxLength) {
    if (text.length > maxLength) return `${text.slice(0, maxLength)}...`;
}

// console.log(shortenText('Hello my friend', 12));

// TASK 3

const formatName = (name) => {
    const noSpacesLowerName = name.trim().toLowerCase();
    const capitalizedName =
        noSpacesLowerName[0].toUpperCase() + noSpacesLowerName.slice(1);
    alert(capitalizedName);
};

// formatName('    amir    ');

// TASK 4

const containsWord = (text, word) => {
    return text.toLowerCase().includes(word.toLowerCase()) ? true : false;
};

// console.log(containsWord('Horse-knight', 'hors'));

// TASK 5

const analyzeString = function (str) {
    return `Length: ${str.length}, number of whitespaces: ${
        str.match(/\s/g).length
    }, upper-case-no-whitespaces: ${str.toUpperCase().split(' ').join('')}`;
};

// console.log(analyzeString('    Hello there!'));
