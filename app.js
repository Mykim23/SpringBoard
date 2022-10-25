// RANDOM STUFF
console.log("HELLO!");

const person = {name: 'timothy', age: 58};

person.age;
person['age'];


// EXERCISE: Countdown (accepts a number, then countdowns to zero)
function countdown (numbah) {
    const intervalID = setInterval(function() {
        numbah--;
        if(numbah <= 0) {
            clearInterval(intervalID);
            console.log("DUNNN!");
        } else {
            console.log(numbah);
        }
    }, 1000);

}

// EXERCISE: Random Game (logs the number of tries it took to find
// a number greater than .75)
function randomGame() {
    var randomNumber = Math.random();
    var tryCounter = 0;

    const babo = setInterval(function(){
        tryCounter++;
        if(randomNumber > .75) {
            clearInterval(babo);
            console.log(tryCounter);
        } else {
            randomNumber = Math.random();
            console.log(randomNumber);
        }
    }, 1000)
    console.log("badabadaboom")
}

// CALL DA FUNCTIONS ^-^
//countdown(5);
randomGame();
