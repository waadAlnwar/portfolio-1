



const sidebar = document.querySelector('.side-bar')
navBtn=document.querySelector('.nav-btn')
closeBtn = document.querySelector('.close-btn')
nav=document.querySelector('.nav');


navBtn.addEventListener('click', ()=> {
    sidebar.classList.add('show-side')
})
closeBtn.addEventListener('click', ()=> {
    sidebar.classList.remove('show-side')
})

window.addEventListener('scroll', ()=> {
    if(window.pageYOffset > nav.offsetHeight ) {
        nav.classList.add('fixed-nav')
    }
    else{
        nav.classList.remove('fixed-nav')
    }
})

const year = document.querySelector("#year");
year.innerHTML = new Date().getFullYear();

