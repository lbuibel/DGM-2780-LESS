// Custom JS here

// OPENING HAMBURGER MENU
const navOpen = () => {
    const burger = document.querySelector('#burger')
    const nav = document.querySelector('.nav-window')
    const navLinks = document.querySelectorAll('.nav-links li')
    // CLICKING ON THE MENU BTN
    burger.addEventListener('click', ()=> {
        console.log('test')
        nav.classList.toggle('nav-active')
        // FADE IN LINKS - INDEX IS USED TO DELAY EACH LINK fade in links
        navLinks.forEach((link, index) => {
            link.style.animation = `nav-link-fade .5s ease ${index / 7}s`
        })
    })
}

// CLOSING MENU
const navClose = () => {
    const close = document.querySelector('#close')
    const nav = document.querySelector('.nav-window')
    const navLinks = document.querySelectorAll('.nav-links li')
    close.addEventListener('click', () => {
        nav.classList.remove('nav-active')
        navLinks.forEach((link) => {
            // REMOVING ANIMATION FROM LINKS AFTER USER CLOSES MENU
            link.style.animation = ''
        })
    })
}

navOpen()
navClose()