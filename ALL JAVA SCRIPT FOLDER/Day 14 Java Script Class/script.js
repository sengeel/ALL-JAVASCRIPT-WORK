const fight = document.getElementById("color")
const get = document.getElementById('show-color');
const slap = document.getElementById("show-rgb")

document.getElementById("generate").addEventListener('click', function() {
    let randomColor = getRandomColor();

    fight.style.backgroundColor = randomColor;

    slap.style.backgroundColor = randomColor;
    


});

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        
    }

    get.innerHTML = color;
    get.style.color =color;

    const colortext = slap.style.backgroundColor;
    slap.innerHTML = colortext;
    slap.style.color = colortext;

    return color;

    // const colortext = fight.style.backgroundColor;
    // slap.innerHTML = colortext;
    // slap.style.color = colortext;

}

function reset() {

    get.innerHTML = '';

    fight.style.backgroundColor= null

    slap.innerHTML = '';
}

function CopyHEX(){
    const colorText = fight.style.backgroundColor;
    const hexCode = rgbtoHex(colorText);
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = hexCode;
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('Color copied to clipoard ' + hexCode);
}

function rgbtoHex(rgbColor){
    const regex = /rgb\((\d+), (\d+), (\d+)\)/;
    const matches = regex.exec(rgbColor);
    const r = parseInt(matches[1]);
    const g = parseInt(matches[2]);
    const b = parseInt(matches[3]);
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

function componentToHex(c){
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}


function CopyRGB(){
    const colortext = slap.style.backgroundColor;
    const tempInput = document.createElement('input');
    document.body.appendChild(tempInput);
    tempInput.value = colortext;
    tempInput.select();
    document.execCommand('copy')
    document.body.removeChild(tempInput);
    alert('color copied to clipboard: ' + colortext);

}




