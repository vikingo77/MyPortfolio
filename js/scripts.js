const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColors = document.getElementById('toggle-colors');

/*Vamos a trakear a nuestras variables del css*/
const rootStyles = document.documentElement.style; // aqui estamos accediendo a todas las variables css


toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    if(toggleIcon.src.includes('moon.svg')) {
        toggleIcon.src = 'assets/icons/sun.svg';
        toggleIcon.alt = 'Sol';
        toggleText.textContent = 'Modo Claro';
    } else {
        toggleIcon.src = 'assets/icons/moon.svg';
        toggleIcon.alt = 'Lua';
        toggleText.textContent = 'Modo Escuro';
    }
});

toggleColors.addEventListener('click', (e) => {
    rootStyles.setProperty('--primary-color', e.target.dataset.color);//va tener el valor de la propiedad color
} );
