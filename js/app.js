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
//build navigation dynamically
for(let i = 1; i <= allSect.length; i++){
    const myLi = document.createElement("li"); 
    myLi.className = "section" + i;
    const anchor = document.createElement("a");
    anchor.href = "#section" + i;
    anchor.innerText = "Section " + i;
    myLi.appendChild(anchor);
    myUl.appendChild(myLi);   

    //set a smooth scrolling behavior when user clicks on the navbar
    anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const aHref = anchor.getAttribute("href");
        const topOfSec = document.querySelector(aHref).offsetTop;
        
        scroll({
            top: topOfSec,
            behavior: "smooth"
        })
    });
}

//contains the elements in the navbar list
let child_nodes = myUl.childNodes;

window.addEventListener("scroll", () => {
    let currentSection = "";
    
    allSect.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if(window.scrollY >= (sectionTop - sectionHeight / 3)){
            currentSection = section.getAttribute("id");
        }
    });
    //highlights on the narbar when the user scrolls through the page
    child_nodes.forEach(li => {
       li.classList.remove("active");
       if(li.classList.contains(currentSection)){
           li.classList.add("active");
        }
   });
    //add 'your-active-class' on each section while scrolling
    allSect.forEach(section => {
        section.classList.remove("your-active-class");
        if(section.id === currentSection){
            section.classList.add("your-active-class");
        }
    });
});


