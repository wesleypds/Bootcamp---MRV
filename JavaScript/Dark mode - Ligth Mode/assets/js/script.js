const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];

function darkMode(){
    mudarClasses();
    mudarTextos();
}

function mudarClasses(){
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function mudarTextos(){
    if(body.classList.contains('dark-mode')){
        button.innerHTML = 'Ligth Mode';
        h1.innerHTML = 'Dark Mode ON';
        return;
    }
    button.innerHTML = 'Dark Mode';
    h1.innerHTML = 'Ligth Mode ON';
}

button.addEventListener('click', darkMode);