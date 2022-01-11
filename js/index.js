const ham = document.getElementById('ham');
const cross = document.getElementById('cross');

ham.addEventListener('click', () => {
    document.querySelector('.slideBar').classList.toggle('slideBarCome');
    if (document.querySelector('.slideBar').classList.contains('slideBarCome')) {
        ham.style.display = 'none';
    }
})

cross.addEventListener('click', () => {
    document.querySelector('.slideBar').classList.remove('slideBarCome');
    ham.style.display = 'inline';
})