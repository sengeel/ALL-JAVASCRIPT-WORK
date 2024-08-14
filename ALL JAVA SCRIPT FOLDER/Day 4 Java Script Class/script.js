// const FirstName = document.getElementById('name');

// FirstName.innerHTML = 'Mr Chizurum';

// const Career = document.querySelector('.career');

// Career.innerHTML = 'Programmer'


// const Your_Name = prompt('What Is Your Name?');

// const DOB =  parseFloat(prompt('What Year Where You Born? '));

// const answer = document.getElementById('answer')

// function calBtn() {
//     const userAge = new Date().getFullYear() - DOB
//     // alert(`You Are ${userAge} Years Old`)

//     answer.innerHTML = `Hello ${Your_Name}, you were born in ${DOB}. Therefore you are ${userAge} years od today.`
// };

const Your_Name = prompt('What Is Your Name');
const Fuel_Litre = parseFloat(prompt('Enter Your Fuel Litre'));
const Official_Rate = 591

const answer = document.getElementById('answer');

function calBtn() {
   const fuelprice = Official_Rate * Fuel_Litre
   
   answer.innerHTML = `Hello ${Your_Name}, you bought ${Fuel_Litre} litres so your amount is  ${fuelprice}. Do have a nice day.`
}