const NNumber1 = document.getElementById("number1");
const NNumber2 = document.getElementById("number2");
const NNumber3 = document.getElementById("number3");
const randomNumber = document.getElementById("randomnumber");
const min = 1;
const max = 6;

randomNumber.onclick = function() 
{
    let randNumber1 = Math.floor(Math.random() * (max - min + 1)) + min;
    let randNumber2 = Math.floor(Math.random() * (max - min + 1)) + min;
    let randNumber3 = Math.floor(Math.random() * (max - min + 1)) + min;
    NNumber1.textContent = randNumber1;
    NNumber2.textContent = randNumber2;
    NNumber3.textContent = randNumber3;
}
