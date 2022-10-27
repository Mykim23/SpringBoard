// TITLE: Javascript for Exercise 2 with the DOM


// 1 Select the section with an id of container without using querySelector
var getContainer = document.getElementById("container");
console.log("hi");

// 2 Select the section with an id of container using querySelector
var getContainerAgain = document.querySelector("#container");

// 3 Select all of the list items with a class of "second"
document.getElementsByClassName("second");

// 4 Select a list with a class of third, but only the list item inside of the ol tag
var ols = document.getElementsByTagName("ol");
ols.document.getElementsByClassName("third");
// right answer: document.querySelector("ol .third");

// 5 Give the section with an id of container the text "hello!"
getContainer.innerText = "Hello!";

// 6 Add the class main to the div with a class of footer
let footer = document.querySelector(".footer"); // gets the element wit the class of footer
footer.classList.add("main"); // adds a class called "main" to the footer class
// or footer.className += "main"

// 7 Remove the class main on the div with a class of footer
footer.classList.remove("main");

// 8 Create a new li element
var newLi = document.createElement("li");

// 9 Give the li the text "four"
newLi.innerText = "four";

// 10 Append the li to the ul element
document.append("li", "ul"); // wrong!
// Right Answer:
new list = document.querySelector("ul"); // selects the first ul element
list.appendChild(newLi); // appends a new list element to ul element


// 11 Loop over all of the li's inside the ol tag and give them a background color of "green"
for(const ol of ols) {
    ol.document
} //idk how to do it...
// Right Answer:
let liInsideOl = document.querySelectorAll("ol li");

for(let i = 0; i < liInsideOl.length; i++) {
    liInsideOl[i].getElementsByClassName.backgroundColor = "green";
}
// I think thers a different way to do it with for of loop...!!!


// 12 Remove the div with a class of footer
footer.remove();
// made 
