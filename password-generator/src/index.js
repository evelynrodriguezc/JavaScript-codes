const paragraphPassword = document.querySelector("#password");
const form = document.querySelector("#form");

const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
  
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const symbols = ["'", ":", "!", "@", "#", "$", "^", ")", "&", "*", "%", "-"];


function generatePassword(passwordLength, checkbuttons) {
    const arrayOfArrays = [];

    if(checkbuttons.letters){
        arrayOfArrays.push(letters);
    }

    if(checkbuttons.numbers){
        arrayOfArrays.push(numbers);
    }

    if(checkbuttons.symbols){
        arrayOfArrays.push(symbols);
    }

    console.log(arrayOfArrays);
    
    let strongPassword = [];
    for (let i = 0; i < passwordLength; i++) {
        const myArray = arrayOfArrays[getRandomNumber(0, arrayOfArrays.length - 1)];
        const randomCharacter =  myArray[getRandomNumber(0, myArray.length - 1)];

        strongPassword.push(randomCharacter);   
    }
     
    strongPassword = strongPassword.join(""); //adds each password character to a string 
    paragraphPassword.innerText = `Your password will appear here: ${strongPassword}`;
    console.log(strongPassword);
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formElement = event.target
    const passwordLength = formElement.length.value;
    const checks = {
        letters: formElement.letters.checked,
        symbols: formElement.symbols.checked,
        numbers: formElement.numbers.checked,
        words: formElement.words.checked,
    }


    generatePassword(passwordLength, checks);
});
