const btn = document.getElementById('toggle');
const alert = document.querySelector('.modal');
btn.addEventListener('click', () => {
    console.log(alert)
    const classs = alert.classList;
    if (classs.contains('show')) {
        classs.remove('show');

    } else {
        classs.add('show');
    }

});