// Make it so that when the center button is clicked, the text on either side switches
let b1 = document.getElementById('textButton');
let p1 = document.querySelector('p');
let p2 = document.querySelectorAll('p')[1];

b1.addEventListener('click', () => {
    let tempText1 = p1.textContent;
    let tempText2 = p2.textContent;
    p1.textContent = tempText2;
    p2.textContent = tempText1;
})


// Give the button a different background when hovered over
b1.addEventListener('mouseover', () => {
    b1.style.background = 'yellow';
})

b1.addEventListener('mouseleave', () => {
    b1.style.background = 'inherit';
})


// When the top left button is clicked, change the background color first to teal, then yellow, then green, and repeat.
let b2 = document.getElementById('backgroundButton')

let idx = 0;
let colors = ['teal', 'yellow', 'green'];
b2.addEventListener('click', () => {
    document.querySelector('body').style.background = colors[idx % 3];
    idx++;
})


// When the top right button is clicked, trigger an alert!
let b3 = document.querySelector('#alertButton');

b3.addEventListener('click', () => {
    window.alert('AHHHHHHHH');
})


// When the cat image is dragged, change the background color. When it is released, bring the background color back to normal.
let catImage = document.querySelector('img');
catImage.addEventListener('drag', (e) => {
    document.querySelector('body').style.background = 'purple';
})

catImage.addEventListener('dragend', () => {
    document.querySelector('body').style.background = 'white';
})

// If the f key is pressed, raise an alert 
let body = document.querySelector('body')
document.addEventListener('keydown', (e) => {
    if(e.key === 'f') {
        window.alert('paying respects')
    }
})

// Use the o and p buttons to change the background and font colors of all elements on the page.
document.addEventListener('keydown', (e) => {
    if(e.key === 'p') {
        body.style.background = 'black';
        body.style.color = 'white';
    } else if(e.key === 'o') {
        body.style.background = 'white';
        body.style.color = 'black';
    }
})



