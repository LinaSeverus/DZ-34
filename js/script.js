'use strict';

(function () {

    const form = document.getElementById('form');

    form.addEventListener('submit', event => {
        event.preventDefault();
        const inputs = event.target.querySelectorAll('input,select,textarea');
        const obj = {};

        inputs.forEach(input => {

            if (!input.value) {
                alert('Empty cells are not allowed!');
            }

            obj[input.name] = input.value;

            localStorage.setItem('inputsData', JSON.stringify(obj));
        });

        console.log(obj);
        event.target.reset();
    });

})();