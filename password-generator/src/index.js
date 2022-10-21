const paragraphPassword = document.querySelector("#password");
const form = document.querySelector("#form");
const buttonCopy = document.querySelector("#button-copy");
const inputLenght = document.querySelector("#input-length");
const passwordLengthParagraph = document.querySelector("#password-length");

const API = "https://goquotes-api.herokuapp.com/api/v1/random?count=5";

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
let words = [];

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

    if(checkbuttons.words){
        arrayOfArrays = [];
        arrayOfArrays.push(words);
    }
    
    let strongPassword = [];
    for (let i = 0; i < passwordLength; i++) {
        const myArray = arrayOfArrays[getRandomNumber(0, arrayOfArrays.length - 1)];
        const randomCharacter =  myArray[getRandomNumber(0, myArray.length - 1)];

        strongPassword.push(randomCharacter);   
    }
    
    if(checkbuttons.words){
        strongPassword = strongPassword.join("-"); //adds each password character to a string 
    } else {
        strongPassword = strongPassword.join(""); 
    }
    paragraphPassword.value = strongPassword;
}

function fetchData(API) {
    fetch(API)
    .then((response) => response.json())
    .then((data) => {
        words = data.quotes.map((quote) => quote.text);
        words = words.join("").split(" ").sort();
    });
}

fetchData(API);

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1));
}

function copyToClipboard(target) {

    const element = document.querySelector(target);
    const value = element.value;

    if(value.length == 0){
        alert("You have to generate a password first");
    } else {
        window.navigator.clipboard.writeText(value);
        alert("You copied the password");
    }
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formElement = event.target;
    const passwordLength = formElement.length.value;
    const checks = {
        letters: formElement.letters.checked,
        symbols: formElement.symbols.checked,
        numbers: formElement.numbers.checked,
        words: formElement.words.checked,
    }

    if(checks.words){
        formElement.letters.checked = false;
    }

    generatePassword(passwordLength, checks);
    buttonCopy.disabled = false;
});

buttonCopy.addEventListener("click", () => {
    copyToClipboard("#password");
});

inputLenght.addEventListener("input", (e) => {
    passwordLengthParagraph.innerText = e.target.value;
});



