const data = document.getElementById('pentagon');

const answer = document.getElementById('answer');

function Area() {
    const Side = parseFloat(data.elements ['a'].value);

    const formula = (1/ 4) * Math.sqrt(5 *(5 + 2 * Math.sqrt(5))) * Side**2

    answer.innerHTML = `The Area Of A Pentagon is ${formula.toFixed(2)}`
};