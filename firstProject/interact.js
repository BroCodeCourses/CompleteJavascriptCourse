let btn = document.querySelector('button')


btn.addEventListener('click', () => {
    let pStyle = document.querySelector('p').style.color;
    if(pStyle === 'pink') {
        document.querySelector('p').style.color = 'green';
        document.querySelector('p').innerText = "now it's in green"
    } else {
        document.querySelector('p').style.color = 'pink';
        document.querySelector('p').innerText = 'This first paragraph is in pink';
    }
})