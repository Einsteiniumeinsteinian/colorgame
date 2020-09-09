var colors = generateRandomColors(6);

// variables
var allSquares = document.querySelectorAll(".square");
var h3span = document.getElementsByTagName("span")[1];
var outputSpan = document.querySelector("span");
var pickedColor = outputSpan.textContent = pickedColor();
var h1 = document.querySelector("h1");


var newColor = document.querySelectorAll("button")[0];


// functions
// function colorChecker(color, square) {
//     if (color !== pickedColor) {
//         square.style.background = "#232323";
//         h3span.textContent = "try again";
//     }
//     else {
//         h3span.textContent = "correct";
//         for (var i = 0; i < colors.length; i++) {
//             allSquares[i].style.background = pickedColor;
//             h1.style.background = pickedColor;
//         };
//     };
//     console.log(color, pickedColor);
// };
// Select Random 
function pickedColor() {
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
    }
    // Return that array 
    return colorArray;
}

function randomColorsGenerator() {
    var comma = ",";
    var space = " ";
    // lGenerate Red, Green and Blue
    var red = Math.floor(Math.random() * 256);
    // Generate Green
    var green = Math.floor(Math.random() * 256);
    // Generate Blue
     var blue = Math.floor(Math.random() * 256);

      return "rgb(" + red + comma + space + green + comma + space + blue +")";

}

for (var i = 0; i < colors.length; i++) {
    allSquares[i].style.background = colors[i];
};




function colorChecker(color, square) {
    if (color !== pickedColor) {
        square.style.background = "#232323";
        h3span.textContent = "try again";
    }
    else {
        h3span.textContent = "correct";
        for (var i = 0; i < colors.length; i++) {
            allSquares[i].style.background = pickedColor;
            h1.style.background = pickedColor;
        };
    };
    console.log(color, pickedColor);
};
 
for(var i = 0; i < colors.length; i++){
    allSquares[i].addEventListener("click", function () {
     console.log(allSquares[i], allSquares, colors.length)
        colorChecker(colors[i], allSquares[i]);
    });
}
// allSquares[0].addEventListener("click", function () {
//     colorChecker(colors[0], allSquares[0]);
// });
// allSquares[1].addEventListener("click", function () {
//     colorChecker(colors[1], allSquares[1]);
// });
// allSquares[2].addEventListener("click", function () {
//     colorChecker(colors[2], allSquares[2]);
// });
// allSquares[3].addEventListener("click", function () {
//     colorChecker(colors[3], allSquares[3]);
// });
// allSquares[4].addEventListener("click", function () {
//     colorChecker(colors[4], allSquares[4]);
// });
// allSquares[5].addEventListener("click", function () {
//     colorChecker(colors[5], allSquares[5]);
// });


