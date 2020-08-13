let colorAzul = 'blue';
function cambioColor(event) {
    if (colorAzul == 'red') {
        event.currentTarget.style.backgroundColor = 'red';
        colorAzul = 'blue'
    }
    else {
        event.currentTarget.style.backgroundColor = 'blue';
        colorAzul = 'red'
    }
}
let cuadro = document.querySelectorAll('div');
for (let i = 0; i < cuadro.length; i++) {
    cuadro[i].addEventListener('click', cambioColor);
}