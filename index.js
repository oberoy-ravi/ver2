// ===========================================AUTO NAVBAR SCROLLING========================================================

window.onload = () =>{
const element = document.querySelectorAll('.portfolio-box');
  element.forEach(elem =>{
if(window.matchMedia("(min-width: 768px)").matches){
elem.removeAttribute("data-aos", "flip-right");}
});
} //onload ended

const section = document.querySelectorAll('section')
const navLink = document.querySelectorAll('header nav a')
window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id')
        if (top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active')
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
            })
        }

    }) 


// ===========================================STICKY NAVBAR========================================================

var header=document.querySelector('header')
header.classList.toggle("sticky",window.scrollY>100)


menubar.classList.remove('bx-x')
navbar.classList.remove('active')


};

// ===========================================TOGGLE CHANGER========================================================

let menubar=document.querySelector('#menu')
let navbar=document.querySelector('.navbar')

menubar.onclick= ()=>{
    menubar.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}

// ===========================================TEXT CHANGER========================================================

var type=new Typed('.textline',{
    strings:['Technophile','Web Developer', 'Andro Head', 'Web Designer',],
    typeSpeed:100,
    backSpeed:40,
    backdelay:1000,
    loop:true,

})
