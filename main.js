/* Botones Flechas arriba y abajo */
const btnArrowUp = document.querySelector('.arrow-up');
const btnArrowDown = document.querySelector('.arrow-down');

// Contenedor Tools
const containerTools = document.querySelector('.tools');


btnArrowDown.addEventListener('click', () => {
    containerTools.style.display = 'flex';
    btnArrowDown.style.display = 'none';
})

btnArrowUp.addEventListener('click', () => {
    containerTools.style.display = 'none';
    btnArrowDown.style.display = 'block';
})




