
const btn = document.querySelector('button');

const body = document.querySelector('body');

let colors =['red', 'blue', 'gray', 'green' , 'pink' , 'yellow' , 'seagreen' , 'orange' , 'purple' , 'white' , 'brown' ];

btn.addEventListener('click', function(){

    let colorIndex = Math.floor(Math.random() * colors.length );

    body.style.backgroundColor = colors[colorIndex];
})
