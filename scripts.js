const colors = ["red", "yellow", "green", "blue", "black", "pink", "white", "#b32932", "#aab329", "#29b3ae"]

const button = document.querySelector('button');
const body = document.querySelector('body');

button.addEventListener('click', () => { 

    const colorIndex = parseInt(Math.random() * colors.length) 
    body.style.backgroundColor = colors[colorIndex]

})

