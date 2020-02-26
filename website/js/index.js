// Custom JS here
const navOpen = () => {
    const burger = document.querySelector('#burger')
    const nav = document.querySelector('.nav-window')
    const navLinks = document.querySelectorAll('.nav-links li')
    // opens navigation page
    burger.addEventListener('click', ()=> {
        console.log('test')
        nav.classList.toggle('nav-active')
    })
    // fade in links
    navLinks.forEach((link, index) => {
        // fades in each element with time delay
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `nav-link-fade 1s ease forwards ${index / 15 + 1.5}s`
        }
        console.log(index/7 + 1.5)
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