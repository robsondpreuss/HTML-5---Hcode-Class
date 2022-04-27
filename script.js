//script para verificar o atributo data-*
document.querySelectorAll('li').forEach(Elementli => {
    console.log(Elementli.dataset);
});

//script para verificar o atributo dropzone
const elemento = document.querySelectorAll('.quadrado');
const dropzone = document.querySelector('[dropzone]'); //Utilizamos os [ ] para selecionar pelo atributo.

elemento.forEach(element => {
    element.addEventListener('dragstart', event => {
        event.dataTransfer.setData('text/plain', event.target.id);
        console.log(event.target.id);
    });
});

dropzone.addEventListener('dragover', event => {
    event.preventDefault();
});

dropzone.addEventListener('drop', event => {
    const id = event.dataTransfer.getData('text/plain');
    const elemento = document.getElementById(id);
    dropzone.appendChild(elemento);
});

const box1 = document.getElementById('box-1');

console.log(box1.innerText);

const box2 = document.querySelector('#box-2');

console.log(box2.innerText);
