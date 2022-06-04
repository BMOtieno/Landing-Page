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
/**
 * End Global Variables
 * 
 * 
*/

// Build menu 
// build the nav
for(let i = 1; i <= 4; i++){
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

    if(scrollValue > 600 && scrollValue < 1400){
        // Set sections as active
        secOne.classList.add('active');
    }else{
        secOne.classList.remove('active');
    }

    if(scrollValue > 1400 && scrollValue < 2400){
        // Set sections as active
        secTwo.classList.add('active');
    }else{
        secTwo.classList.remove('active');
    }

    if(scrollValue > 2400 && scrollValue < 3400){
        // Set sections as active
        secThree.classList.add('active');
    }else{
        secThree.classList.remove('active');
    }

    if(scrollValue > 3400 && scrollValue < 3950){
        // Set sections as active
        secFour.classList.add('active');
    }else{
        secFour.classList.remove('active');
    }

    if(scrollValue > 3950 && scrollValue < 4150){
        secFour.classList.remove('active');
    }   
}

// Scroll to anchor ID using scrollTO event
window.addEventListener('scroll', onScroll);








