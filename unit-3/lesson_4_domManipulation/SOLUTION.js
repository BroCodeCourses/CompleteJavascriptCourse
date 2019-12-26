// Use the Class Name Selector to select

// ALL CODE SHOULD BE TESTED IN THE DEVELOEPR TERMINAL

// Select all elements with the class name 'listItem'
document.getElementsByClassName('listItem');

//Use querySelector to select the same elements
document.querySelectorAll('.listItem')

// Select the element with the ID 'background'
document.getElementById('background');

//Use querySelector to select the same element
document.querySelector('#background');

// Select all elements with the 'p' tag
document.getElementsByTagName('p');

//Use querySelector to select the same elements
document.querySelectorAll('p');

// Use query selector to find an li element that's a child of a ul
document.querySelector('ul > li');

// Use query selector all to find all div elements
document.querySelectorAll('div');

// Change the text of the first p element 
document.querySelector('p').textContent = 'this food sucks, don\'t order it';

// Change the source on the last of the list images to https://heartmdinstitute.com/wp-content/uploads/2019/04/brunch-recipes-eggs-pastrami-480x300.jpg' to find my favorite food! 
document.querySelectorAll('li img')[document.querySelectorAll('li img').length - 1].src = 'https://heartmdinstitute.com/wp-content/uploads/2019/04/brunch-recipes-eggs-pastrami-480x300.jpg';

// Change the color of the text in the third p element to purple
document.querySelectorAll('p')[2].style.color = 'purple';