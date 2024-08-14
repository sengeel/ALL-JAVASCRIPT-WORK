// const colours = ['red', 'black', 'blue', 'green','orange','white'];

//  colours.push('indigo','gray')
//  colours.unshift('gold','yellow')

// console.log(colours)

// const cars = ['camry','Lamborghini','Ferrari'];
// cars[0] = 'Buggati';

// // cars.pop()
// // cars.shift()
// cars.sort()
// cars.concat()

// console.log(cars)

// const new_car = ['Aston','Pagani'];

// const car_garage = ['Ferrari','Camry','Bugatti'];

// const all_cars = car_garage.concat(new_car)
// console.log(all_cars)

// const car_garage = ['Ferrari','Camry', 'Bugatti'];
// const selected_cars = car_garage.slice(1);
// console.log(selected_cars);

// const car_garage = ['Ferrari','Camry','Bugatti'];
// const car_position = car_garage.indexOf('Bugatti');
// console.log(car_position)

// Objects In Java Script

// const person = {
//     FirstName: 'Chizurum',
//     LastName: 'Okere-Olujie',
//     BirthYear: 2007,
//     Cars: ['Bugatti','Camry','Toyota'],
//     Job: 'Developer',
//     IsMarried: true

// };

// console.log(person.Cars)

// const colours = ['White','Green','Orange','Blue','Gray','Purple','Gold'];

// for (let i = 0; i < colours.length; i++) {
//     const element = colours[i];
//     console.log(element)
    
// }

// const cars = ['Bugatti','Ferrari','Porsche','Audi','Lamborghini'];

// for (let i = 0; i < cars.length; i++) {
//     const element = cars[i];
//     console.log(element);
    
// }






const form = document.getElementById('triangle-form');

const resultElement = document.getElementById('results');

function CalculateArea() {
    const BaseLength = parseFloat(form.elements['l'].value)

    const BaseWidth = parseFloat(form.elements['w'].value);

    const Heigth = parseFloat(form.elements['h'].value);

   const area = (BaseLength + BaseWidth) / 2 * Heigth
   
   resultElement.innerHTML = `Area Of A Trapeziod is ${area.toFixed(2)}`
};

// AREA OF A PENTAGON

const data = document.getElementById('pentagon');

const answer = document.getElementById('answer');

function CalculateArea() {
    const Side = parseFloat(data.elements ['a'].value);

    const formula = (1/ 4) * Math.sqrt(5 *(5 + 2 * Math.sqrt(5))) * Side**2

    answer.innerHTML = `The Area Of A Pentagon is ${formula.toFixed(2)}`
};


// AREA OF A RIGHT RECTANGULAR PYRAMID

const table = document.getElementById('pentagon');

const solution = document.getElementById('answer');

function Area() {
    const Length = parseFloat(table.elements['l'].value);

    const Width = parseFloat(table.elements['w'].value);

    const Height = parseFloat(table.elements['h'].value);

   const large = Length * Width + Length * Math.sqrt((Width / 2)**2 + Height**2) + Width * Math.sqrt((Length / 2)**2 + Height**2) 
   
   solution.innerHTML = `Area Of A Right Rectangular Pyramid is ${large.toFixed(2)}`
};


