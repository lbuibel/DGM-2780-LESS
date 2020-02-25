// Custom JS here
const navOpen = () => {
    const burger = document.querySelector('#burger')
    const nav = document.querySelector('.nav-window')

    burger.addEventListener('click', ()=> {
        console.log('test')
        nav.classList.toggle('nav-active')
    })
}

const navClose = () => {
    console.log('closed')
    const close = document.querySelector('#close')
    const nav = document.querySelector('.nav-window')
    close.addEventListener('click', () => {
        nav.classList.remove('nav-active')
    })
}

navOpen()
navClose()