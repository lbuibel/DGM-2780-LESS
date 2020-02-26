// Custom JS here

// OPENING HAMBURGER MENU
const navOpen = () => {
    const body = document.querySelector('body')
    const burger = document.querySelector('#burger')
    const nav = document.querySelector('.nav-window')
    const navLinks = document.querySelectorAll('.nav-links li')
    // CLICKING ON THE MENU BTN
    burger.addEventListener('click', ()=> {
        nav.classList.toggle('nav-active')
        // FADE IN LINKS - INDEX IS USED TO DELAY EACH LINK fade in links
        navLinks.forEach((link, index) => {
            link.style.animation = `nav-link-fade .75s ease ${index / 7}s`
        })
        body.setAttribute("style", "overflow-y: hidden")
    })
}

// CLOSING MENU
const navClose = () => {
    const close = document.querySelector('#close')
    const nav = document.querySelector('.nav-window')
    const navLinks = document.querySelectorAll('.nav-links li')
    close.addEventListener('click', () => {
        nav.classList.remove('nav-active')
        navLinks.forEach((link, index) => {
            // REMOVING ANIMATION FROM LINKS AFTER USER CLOSES MENU
            link.style.animation = `nav-link-fade-out .75s ease ${index / 7}s`
        })
    document.querySelector('body').setAttribute("style", "overflow-y: visible")
    })
}

function delay (URL) {
    setTimeout( function() { window.location = URL }, 750 );
}

const calcNavHeight = () => {
    const height = document.querySelector('nav').clientHeight
    document.querySelector('.close-container').setAttribute("style", `height:${height}px`)
}

navOpen()
navClose()
calcNavHeight()
