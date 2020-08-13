function colorAlatorio () {
    let max = 256;
    let min = 0;

    let X = Math.floor(Math.random() * (max - min) + min);
    let Y = Math.floor(Math.random() * (max - min) + min);
    let Z = Math.floor(Math.random() * (max - min) + min);

    let rgb = '';
    rgb = `rgb(${X}, ${Y}, ${Z})`;
    return rgb;
}
const parrafos = ('.container p');

function colorEstablecido() {
    let parrafos = texto.currentTarget;
    parrafos.style.color = 'black';
}
const texto = document.querySelectorAll(' .container p');

for (let i = 0; i < texto.length; i++) {
    texto[i].style.color = colorAlatorio();
}

for (let g = 0; g < texto.length; g++) {
    texto[g].addEventListener('mouseenter', colorAlatorio);
    texto[g].addEventListener('mouseenter', colorEstablecido);    
}


