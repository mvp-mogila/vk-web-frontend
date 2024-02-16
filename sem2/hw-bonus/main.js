'use strict';

const mainElement = document.getElementById('root');

const openButton = document.createElement('button');
openButton.setAttribute('id', 'openBtn');
openButton.appendChild(document.createTextNode('click'));

const modalWindow = document.createElement('div');
modalWindow.setAttribute('id', 'modalWin');

mainElement.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target instanceof HTMLButtonElement) {
        modalWindow.style.display = 'block';
    } else if (e.target.id !== 'modalWin') {
        modalWindow.style.display = 'none';
    }
});

mainElement.appendChild(openButton);
mainElement.appendChild(modalWindow);