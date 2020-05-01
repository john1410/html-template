const content = document.querySelector('div.content');
const bottom = document.querySelector('div.bottom');
const img = document.querySelector('div.image img');

content.addEventListener('click', () => {
    console.log(img)
    if (bottom.classList.contains('active')) {
        bottom.classList.remove('active');
        img.classList.remove('normal');
        img.classList.add('active-image');



    } else {
        bottom.classList.add('active');
        img.classList.remove('active-image');
        img.classList.add('normal');


    }
});