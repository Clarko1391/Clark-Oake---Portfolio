// Selectors
// Nav Link Buttons
const aboutMeBtn = document.getElementById('aboutMeButton');
const aboutMe = document.getElementById('aMHeader');
const projectsBtn = document.getElementById('projectsButton');
const projects = document.getElementById('projectsHeader');
const experienceBtn = document.getElementById('experienceButton');
const experience = document.getElementById('experienceHeader');
const skillsBtn = document.getElementById('skillsButton');
const skills = document.getElementById('skillsHeader');
const educationBtn = document.getElementById('educationButton');
const education = document.getElementById('educationHeader');
const resumeBtn = document.getElementById('resumeButton');
const resume = document.getElementById('resumeHeader');
const hobbiesBtn = document.getElementById('hobbiesButton');
const hobbies = document.getElementById('hobbiesHeader');
const contactBtn = document.getElementById('contactButton');
const menuBtn = document.getElementById('menuIcon');
// const nav = document.getElementsByClassName('nav');
const navLinks = document.getElementById('navLinks');

// Event Listeners
aboutMeBtn.addEventListener('click', function() {smoothScroll(aboutMe, 1500)});
projectsBtn.addEventListener('click', function() {smoothScroll(projects, 1500)});
experienceBtn.addEventListener('click', function() {smoothScroll(experience, 1500)});
skillsBtn.addEventListener('click', function() {smoothScroll(skills, 1500)});
educationBtn.addEventListener('click', function() {smoothScroll(education, 1500)});
resumeBtn.addEventListener('click', function() {smoothScroll(resume, 1500)});
hobbiesBtn.addEventListener('click', function() {smoothScroll(hobbies, 1500)});
menuBtn.addEventListener('click', function () {navSlide()});

// Functions
function smoothScroll(target, duration) {
    let targetPosition = target.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let startTime = null;
    checkMedia();
    console.log(typeof(startPosition));
    console.log(targetPosition);

    function checkMedia(targetPosition) {
        let tablet = window.matchMedia("(min-width: 660px) and (max-width: 1024px)");
        let mobile = window.matchMedia("(max-width: 659px)");
        // Adding offset for responsiveness queries (sidebar is 150px tall in tablet, 100px tall in mobile)
        if (mobile.matches) {targetPosition = (targetPosition - 100)
        } else if (tablet.matches) {targetPosition = (targetPosition - 150)
        } else {targetPosition = targetPosition}
        console.log(targetPosition);
        console.log(typeof(targetPosition));
        }


    function animation(currentTime) {
        if(startTime === null) startTime  = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, targetPosition, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease (t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

function navSlide() {
    // nav.classList.toggle('navActive');
    navLinks.classList.toggle('navActive');
}

