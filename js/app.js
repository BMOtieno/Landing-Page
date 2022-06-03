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





/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
for(let i = 1; i <= 4; i++){
    const myLi = document.createElement("li"); 
    myLi.innerHTML = "Section " + i;
    myLi.style.color = "black";
    myUl.appendChild(myLi);   
    
    myLi.addEventListener('click', function(){
        document.location.href = '#section' + i;
    });
    
}
 

 

// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
const secOne = document.getElementById("section1");
const secTwo = document.getElementById("section2");
const secThree = document.getElementById("section3");
const secFour = document.getElementById("section4");

/**
 * End Main Functions
 * Begin Events
 * 
*/
window.addEventListener('scroll', () =>{

    const scrolled = window.scrollY;
    
    switch(scrolled){
        case 300:
            secOne.classList.add('active');
            break;
        case 1400:
            secOne.classList.remove('active');
            secTwo.classList.add('active');
            break;
        case 2500:
            secTwo.classList.remove('active');
            secThree.classList.add('active');
            break;
        case 3800:
            secThree.classList.remove('active');
            secFour.classList.add('active');
            break;
    }

    
});

// Build menu 

// Scroll to section on link click

// Set sections as active