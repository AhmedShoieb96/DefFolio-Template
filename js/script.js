let topBtn = document.querySelector('.btn-scroll-toUp')
let body = document.querySelector("body")
// function to apper btntop

let apperBtn = function () {
    topBtn.classList.add('top');
}

// function to apper btntop
let removeBtn = function () {
    topBtn.classList.remove('top');
}
// when window on scroll we used this function in top
window.onscroll = function () {
    if (this.scrollY > "200") {

        apperBtn()
    }
    else {
        removeBtn()
    }

}

// to go to the  top
topBtn.onclick = function () {
    window.scrollTo({
        top: 0,
        bahavior: "smooth",
    })
}


// to change sliders
let ul = document.getElementById('indecator-items')
let bullets = document.querySelectorAll('.indecator')
let slides = document.querySelector('.slidersContainer');
let slideCount = document.querySelectorAll('.slide').length;
let currentIndex = 0;
// to remove active bullets


function removeActive() {
    bullets.forEach(bullet => bullet.classList.remove('active'));

}

// to add active bullets

function addActive(currentIndex) {
    bullets[currentIndex].classList.add('active');
}


// to show first slide


function showSlide(currentIndex) {
    offset = currentIndex * -100;
    slides.style.transform = `translateX(${offset}%)`;
    // remove classactive from all bullets
    removeActive()

    // Add the 'active' class to current bullet

    addActive(currentIndex)


}

// to show next slide

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;

    showSlide(currentIndex);
}



// Change slide every 3 seconds

setInterval(nextSlide, 3000);

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});



// to change slide when click in bullets
for (let i = 0; i < bullets.length; i++) {
    bullets[i].addEventListener("click", () => {
        currentIndex = i
        showSlide(currentIndex)

    });


}

// to auto type for start home p
{
    let terget = document.getElementById('targetP');

    let typewriter = new Typewriter(terget, {
        loop: true,

    });

    typewriter

        .typeString('Developer')
        .pauseFor(1500)
        .deleteChars(10)
        .typeString(' Designer ')
        .pauseFor(1500)
        .deleteChars(10)
        .typeString(' Freelancer ')
        .pauseFor(1500)
        .deleteChars(10)
        .start();

}


// form validation


let Name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('Subject');
let form = document.getElementById('form');
let nameNotValid = document.getElementById('nameNotValid');
let emailNotValid = document.getElementById('emailNotValid');
let subjectNotValid = document.getElementById('subjectNotValid');


form.onsubmit = function (e) {

    let namevalid = false;
    let emailvalid = false;
    let subjectvalid = false;


    if (Name.value !== '' && Name.value.length >= 10) {
        namevalid = true;


    } else {
        nameNotValid.innerHTML = "your name should greater than or egual 10 "
    }
    if (email.value !== '' || email.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailvalid = true;
    } else {
        emailNotValid.innerHTML = " your email in not valid "

    }
    if (subject.value !== '') {
        subjectvalid = true;

    } else {
        subjectNotValid.innerHTML = " this feild is required"

    }
    if (namevalid === false || emailvalid === false || subjectvalid === false) {
        e.preventDefault();
    }

};


