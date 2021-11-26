const bars = document.querySelector('.bars')
const rem = document.querySelector('.rem')
const header = document.querySelector('header')

bars.addEventListener('click', function() {
    header.classList.add('active')
})

rem.addEventListener('click', function() {
    header.classList.remove('active')
})