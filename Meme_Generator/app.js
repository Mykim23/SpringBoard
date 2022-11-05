
// this gets the form
const form = document.getElementById("currentMeme");

// values submitted in form
const topInput = document.querySelector('input[name="toptext"]');
const imgLink = document.querySelector('input[name="imglink"]');
const bottomInput = document.querySelector('input[name="bottomtext"]');

const results = document.getElementById("results");
//results.style.display = "flex";
//results.style.flexDirection = "row";

// eventListener for submit button on form
form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log("submit");
    console.log(topInput.value, imgLink.value, bottomInput.value);
    
    results.appendChild(makeMeme(topInput, imgLink, bottomInput));

    topInput.value = "";
})

// Make a meme
function makeMeme(topInput, imgLink, bottomInput) {
    const meme = document.createElement('div'); // make a new div

    // cenetering
    meme.style.position = "relative";
    meme.style.display = "flex";
    meme.style.justifyContent = "center";
    meme.style.flexDirection = "row";

    const memeImg = makeImg(imgLink.value);
    const topWords = makeTop(topInput.value);
    const bottomWords = makeBottom(bottomInput.value);
    meme.appendChild(memeImg);
    meme.appendChild(topWords);
    meme.appendChild(bottomWords);

    return meme;
}

// make... a fucntion that does something with the form
function makeImg(imgLink) {
    const memepic = document.createElement('img');
    memepic.src = imgLink;


    return memepic;
    
}


// make words on top
function makeTop(topInput) {
    const topWords = document.createElement('h1');
    topWords.innerHTML = topInput; // top text
     
    topWords.style.position = "absolute";
    topWords.style.top = "5%"; // distance from top?
    //topWords.style.left = "50%";
    //topWords.style.color = "blue";
    //topWords.style.fontSize = "100px";
    //topWords.style.transform ="translate(-50%, -50%)";
    

    return topWords;
}

function makeBottom(bottomInput) {
    const bottomWords = document.createElement('h1');
    bottomWords.innerHTML = bottomInput; // top text
     
    bottomWords.style.position = "absolute";
    bottomWords.style.bottom = "5%";
    //bottomWords.style.left = "50%";
    //bottomWords.style.color = "blue";
    //bottomWords.style.fontSize = "100px";
    //bottomWords.style.transform ="translate(-50%, -50%)";

    return bottomWords;
}