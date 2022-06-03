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
 * 
 * 
 * window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    console.log(scroll);

});
 * 
 * 
 * const scrolled = window.scrollY;
 *  
 * const secO = {from: 0, to: 606};
    const secT = {from:606, to:1415};
    const secTT = {from: 1415, to:2302};
    const secF = {from:2302, to: 3342};
    const end = {from:3342, to:3614};

    switch(scrollValue){
        case secO:
            secOne.classList.add('active');
            break;
        case secT:
            secTwo.classList.add('active');
            secOne.classList.remove('active');
            break;
        case secTT:
            secThree.classList.add('active');
            secTwo.classList.remove('active');
            break;
        case secF:
            secFour.classList.add('active');
            secThree.classList.remove('active');
            break;
        case end:
            secFour.classList.remove('active');
            break;
    }


 * 
 * 
 * 
    
*/


const onScroll = () => {
    const scrollValue = document.documentElement.scrollTop;

    if(scrollValue > 600 && scrollValue < 1400){
        secOne.classList.add('active');
    }else{
        secOne.classList.remove('active');
    }

    if(scrollValue > 1400 && scrollValue < 2400){
        secTwo.classList.add('active');
    }else{
        secTwo.classList.remove('active');
    }

    if(scrollValue > 2400 && scrollValue < 3400){
        secThree.classList.add('active');
    }else{
        secThree.classList.remove('active');
    }

    if(scrollValue > 3400 && scrollValue < 3950){
        secFour.classList.add('active');
    }else{
        secFour.classList.remove('active');
    }

    if(scrollValue > 3950 && scrollValue < 4150){
        secFour.classList.remove('active');
    }

    
    
}
window.addEventListener('scroll', onScroll);



// Build menu 

// Scroll to section on link click

// Set sections as active

