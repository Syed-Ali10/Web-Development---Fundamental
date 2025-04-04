const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

/* Declaring the alternative text for each image file */
const alts = {
    'pic1.jpg': 'Closeup of a blue human eye',
    'pic2.jpg': 'A rock that looks like a wave',
    'pic3.jpg': 'Purple and white flowers',
    'pic4.jpg': 'Section of wall from a pharaoh\'s tomb',
    'pic5.jpg': 'Large moth on a leaf'
};

/* Looping through images */
images.forEach(image => {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `images/${image}`);
    newImage.setAttribute('alt', alts[image]);
    
    // Add click event to display clicked image
    newImage.addEventListener('click', () => {
        displayedImage.src = `images/${image}`;
        displayedImage.alt = alts[image];
    });
    
    thumbBar.appendChild(newImage);
});

/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', () => {
    const btnClass = btn.getAttribute('class');
    if (btnClass === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});