const navmenuEl = document.querySelector('.nav-menu')
const menuEL = document.querySelector('.menu');
const sectionEl = document.querySelectorAll('.service');
const WelImageEL = document.querySelector('.Wel-Image');
const WHYUSEL = document.querySelector('.WHY-US');
const mainbtnEL = document.querySelector('.main-btn');
const signinEL = document.querySelector('.sign-in');
const infoEL = document.querySelector('.info');
const BottomDetailsEl = document.querySelector('.Bottom-Details');
const bodyEL = document.querySelector('body');
const newAccEL = document.querySelector('.newAcc')
const RegisterEL = document.querySelector('.Register')
const logInEl = document.querySelector('.logIn');
const homeEL = document.getElementById('home');
const aboutEL = document.getElementById('about');
const whyusEL = document.getElementById('why-us');
const contact = document.getElementById('contact');




mainbtnEL.addEventListener('click',()=>{
    mainbtnEL.classList.remove('main-btn')
    signinEL.classList.add('active');
    infoEL.classList.add('blur');
    BottomDetailsEl.classList.add('Hidden')
    navmenuEl.classList.add('remove')
})


window.onscroll = () =>{
    sectionEl.forEach(section =>{
        let top = window.scrollY;
        let offset = section.offsetTop -300;
        let height = section.offsetHeight

        if(top >= offset && top < offset + height){
            section.classList.add('animate')
            WelImageEL.classList.add('animate');
            WHYUSEL.classList.add('animate')
            bodyEL.classList.add('changeColor')

        }else{
            section.classList.remove('animate');
            WelImageEL.classList.remove('animate')
            WHYUSEL.classList.remove('animate')
            bodyEL.classList.remove('changeColor')
        }
    });
}

navmenuEl.addEventListener('click',()=>{
    menuEL.classList.toggle('ACTIVEE');
    navmenuEl.classList.toggle('UpsideDown');

});



