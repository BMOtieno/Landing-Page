/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const myUl = document.getElementById("navbar__list");
const secOne = document.getElementById("section1");
const secTwo = document.getElementById("section2");
const secThree = document.getElementById("section3");
const secFour = document.getElementById("section4");
const allSect = document.querySelectorAll("section");
/**
 * End Global Variables
 * 
 * 
*/

// Build menu 
// build the nav
for(let i = 1; i <= allSect.length; i++){
    const myLi = document.createElement("li"); 
    myLi.innerHTML = "Section " + i;
    myLi.style.color = "black";
    myUl.appendChild(myLi);   
    // Scroll to section on link click
    myLi.addEventListener('click', function(){
        document.location.href = '#section' + i;
    });
}

const onScroll = () => {
    //numerical value when user scrolls through the page
    const scrollValue = document.documentElement.scrollTop;
    // Set sections as active
    (scrollValue > 240 && scrollValue < 900) ? secOne.classList.add('your-active-class') : secOne.classList.remove('your-active-class');
    (scrollValue > 900 && scrollValue < 1710) ? secTwo.classList.add('your-active-class') : secTwo.classList.remove('your-active-class');
    (scrollValue > 1710 && scrollValue < 2800) ? secThree.classList.add('your-active-class'): secThree.classList.remove('your-active-class');
    (scrollValue > 2800 && scrollValue < 4260) ? secFour.classList.add('your-active-class') : secFour.classList.remove('your-active-class');
}

// Scroll to anchor ID using scrollTO event
window.addEventListener('scroll', onScroll);










