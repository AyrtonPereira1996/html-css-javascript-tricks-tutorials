const btnForm = document.querySelector('.btn-login');
const form = document.querySelector('form');



btnForm.addEventListener('click', function(evento) {
    evento.preventDefault();

    const fields = [...document.querySelectorAll('.input-block input')]

    fields.forEach(function(field) {
        if (field.value == '') {
            form.classList.add('validate-error');
        };



    })

    const formError = document.querySelector('.validate-error');

    if (formError) {
        formError.addEventListener('animationend', function(evento) {
            if (evento.animationName == 'nono') {
                formError.classList.remove('validate-error');
            }
        });
    } else {
        form.classList.add('form-hide');
    }



});

form.addEventListener('animationend', function(event) {
    if (event.animationName == 'formMoveDown') {
        form.style.display = 'none';
        document.querySelector('body').style.overflowY = 'none';
    }

});

form.addEventListener('animationstart', function(evento) {
    if (evento.animationName == 'formMoveDown') {
        document.querySelector('body').style.overflowY = 'hidden';
    }
});


const ulSquares = document.querySelector('ul.squares');

for (let i = 0; i < 11; i++) {
    const li = document.createElement('li');

    const getRandom = function(min, max) {
        return Math.random() * (max - min) + min;

    }

    const size = Math.floor(getRandom(10, 120));
    const position = Math.floor(getRandom(1, 99));
    const delay = getRandom(5, 0.1);
    const duration = getRandom(24, 12);


    li.style.width = `${size}px`;
    li.style.height = `${size}px`;
    li.style.bottom = `-${size}px`;

    li.style.left = `${position}%`;

    li.style.animationDelay = `${delay}s`;
    li.style.animationDuration = `${duration}s`;
    li.style.animationTimingFunction = `cubic-bezier(${Math.random()}, ${Math.random()}, ${Math.random()}, ${Math.random()})`;


    ulSquares.appendChild(li);


}