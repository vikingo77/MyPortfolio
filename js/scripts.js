const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');

const toggleColors = document.getElementById('toggle-colors');

/*Vamos a trakear a nuestras variables del css*/
const rootStyles = document.documentElement.style; // aqui estamos accediendo a todas las variables css

/*Agregaremos el json para el cambio de idioma*/
const flagsElement = document.getElementById('flags');

const textsToChange = document.querySelectorAll('[data-section]');

const changeLanguage = async (language) => {
    try {
        const requestJson = await fetch(`./languages/${language}.json`);
        const text = await requestJson.json();

        // Itera sobre textsToChange correctamente
        for (const element of textsToChange) {
            const section = element.dataset.section;
            const value = element.dataset.value;

            element.innerHTML = text[section][value];
        }
    } catch (error) {
        console.error('Error al cambiar el idioma:', error);
    }
};



flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});

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
