const btn = document.getElementById('toggle');
const alert = document.querySelector('.modal');
btn.addEventListener('click', () => {
    const classs = alert.classList;
    if (classs.contains('hide')) {
        classs.remove('hide');
        classs.add('show');
        setTimeout(() => {
            classs.remove('show');
            classs.add('hide');
        }, 2000);
    } else {
        classs.remove('show');
        classs.add('hide');
    }

});