const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];


// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// counter for keeping track of when div is clicked
let counter = 0;

// variables used for handleCardClick
let firstCardColor;
let secondCardColor;
let firstCard;
let secondCard;

// variable to help finish guessing before guessing again
let finishCards = true;

// matched colors array
let matchedCards = [];



// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  console.log("you just clicked", event.target);

  // stuff so that u cant click same card again
  for(let matchedCard of matchedCards) {
    if(matchedCard == event.target.className) {
      console.log("Click a new card!")
      // ends the function
      return;
    } 
  }

  if(counter == 0 && (finishCards == true)) {    
    // assign first card
    firstCard = event.target;

    // assign color of first card
    firstCardColor = event.target.className;

    firstCard.style.backgroundColor = firstCardColor; //change color
    
     
    counter = 1; //increment counter
  }

  else if(counter == 1 && (event.target != firstCard) && (finishCards == true)) {
    // secondCard element
    secondCard = event.target;
    // change secondCardColor
    secondCardColor = secondCard.className;

    secondCard.style.backgroundColor = secondCardColor;
    
    
    // test if firstCard and secondCard are the same colors
    if(firstCardColor == secondCardColor) { //if match
      console.log("It Matches! ");
      matchedCards.push(secondCardColor);

      // add a "matched" class to it so that the card can't be clicked again...


    } else { // if no match
      console.log("THEY DONT MATCH:(");
      finishCards = false;
      setTimeout(function(){
        secondCard.style.backgroundColor = "white";
        firstCard.style.backgroundColor = "white";
        finishCards = true;
      }, 1000)
    }

    counter = 0;
    
  }


}

// when the DOM loads
createDivsForColors(shuffledColors);

/* */