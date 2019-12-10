let btn = document.querySelector('button')


btn.addEventListener('click', () => {
    let pElement = document.querySelector('p');
    if(pElement.style.color === 'pink' || !pElement.style.color) {
        pElement.style.color = 'green';
        pElement.innerText = "now it's in green"
    } else {
        pElement.style.color = 'pink';
        pElement.innerText = 'This first paragraph is in pink';
    }
})