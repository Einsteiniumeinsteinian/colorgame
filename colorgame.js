// variables
var mode = 6;
var colors = generateRandomColors(mode);
var allSquares = document.querySelectorAll(".square");
var checkText = document.getElementsByTagName("span")[1];
var outputSpan = document.querySelector("span");
var pickedColor = outputSpan.textContent = pickedColors();
var topDiv = document.querySelector("#navbar");
var easyMode = document.getElementById("easybtn");
var hardMode = document.getElementById("hardbtn");
var newColors = document.querySelectorAll("button")[0];

hardMode.classList.add("btncolor");
// **
// All functions
// Check color function
function colorChecker(color, square) {
    console.log(color, pickedColor);
    if (color !== pickedColor) {
        square.style.background = "#232323";
        checkText.textContent = "try again";

    }
    else {
        checkText.textContent = "correct";
        newColors.textContent = "play again";
        for (var i = 0; i < colors.length; i++) {
            allSquares[i].style.background = pickedColor;
            topDiv.style.background = pickedColor;
        };
    };
};
// Select Random 
function pickedColors() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}
// Color Generator
function generateRandomColors(num) {
    // Make an array
    var colorArray = [];
    // repeat num times
    for (var i = 0; i < num; i++) {
        // get random color and push into array
        colorArray.push(randomColorsGenerator())

    };
    // Return that array 
    return colorArray;
};
// Function to generate random colors
function randomColorsGenerator() {
    var comma = ",";
    var space = " ";
    // lGenerate Red, Green and Blue
    var red = Math.floor(Math.random() * 256);
    // Generate Green
    var green = Math.floor(Math.random() * 256);
    // Generate Blue
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + comma + space + green + comma + space + blue + ")";
}
// Hover Function 
function onHover(x) {
    x.style.background = "#558dc1";
    x.style.color = "white";
}
function hoverOut(x) {
    x.style.background = "white";
    x.style.color = "#558dc1";
}
// reset function
function reset() {
    // // My method
    // location.reload()

    // or using Cole Steel's Method
    // ***
    colors = generateRandomColors(mode);
    pickedColor = outputSpan.textContent = pickedColors();
    checkText.textContent = "";
    newColors.textContent = "NEW COLORS";
    topDiv.style.background = "#558dc1";
};

//  functtion mode easyMode hardmode
function allModes(level, level1, level2) {
    mode = level;
    level1.classList.remove("btncolor");
    level2.classList.add("btncolor");
    reset()
    if(level === 3){
        for (var i = 0; i < colors.length; i++) {
            allSquares[i].style.background = colors[i];
        };
        for (var i = 3; i < allSquares.length; i++) {
            allSquares[i].style.display = "none";
        }
    }
    else{
        for (var i = 0; i < colors.length; i++) {
            allSquares[i].style.display = "block";
            allSquares[i].style.background = colors[i];
        };
    }
};


// ***
// For Loops
// For loops to color all squares
for (var i = 0; i < colors.length; i++) {
    allSquares[i].style.background = colors[i];
};
// For loop to loop event listener on squares 
// for (var i = 0; i < colors.length; i++) {
//     let allSquareboxes = allSquares[i];
//     let allcolors = colors[i];
//     allSquares[i].addEventListener("click", function () {
//         colorChecker(allcolors, allSquareboxes);
//     });
    
// }
allSquares[0].addEventListener("click", function(){
      colorChecker(colors[0], allSquares[0]);
});
allSquares[1].addEventListener("click", function(){
      colorChecker(colors[1], allSquares[1]);
});
allSquares[2].addEventListener("click", function(){
      colorChecker(colors[2], allSquares[2]);
});
allSquares[3].addEventListener("click", function(){
      colorChecker(colors[3], allSquares[3]);
});
allSquares[4].addEventListener("click", function(){
      colorChecker(colors[4], allSquares[4]);
});
allSquares[5].addEventListener("click", function(){
      colorChecker(colors[5], allSquares[5]);
});
// New Colors Event listener
newColors.addEventListener("click", function () {
    reset();
    for (var i = 0; i < colors.length; i++) {
        allSquares[i].style.background = colors[i];
    };
});
// Easy Mode
// ***
easyMode.addEventListener("click", function () {
    allModes(3, hardMode, easyMode);
});
// Hard Mode
// ***
hardMode.addEventListener("click", function () {
     allModes(6, easyMode, hardMode);
})
