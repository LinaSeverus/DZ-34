'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const inputsData = JSON.parse(
        localStorage.getItem('inputsData')
    )

    let ul = document.createElement('ul');
    document.body.prepend(ul);

    for (let key in inputsData) {
        let li = document.createElement('li');
        li.textContent = inputsData[key];
        document.querySelector('ul').append(li);
    }

});



