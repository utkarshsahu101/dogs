var form = document.getElementById('form');
var humanAge = document.getElementById('humanAge');
var humanAgeMonth = document.getElementById('humanAgeMonth');
var dogsAgeYear = document.getElementById('dogsAgeYear');
var dogsAgeMonth = document.getElementById('dogsAgeMonth');
var dogImage = document.getElementById('dogImage');
var dogData = document.getElementById('dogData');
var humanData = document.getElementById('humanData');

var hA, dAY, dAM;

function convertFunction(event) {
    event.preventDefault();
    hA = parseFloat(humanAge.value);
    hA += (10/12*humanAgeMonth.value)/10;
    dAY = parseFloat(dogsAgeYear.value);
    dAY = hA < 21 ? hA/10.5 : (hA-21)/4 + 2;
    dAM = Math.round((dAY - Math.floor(dAY)) * 12);
    dogsAgeYear.value = Math.floor(dAY);
    dogsAgeMonth.value = dAM;
    // dogImage.style.display = "block";
    dogData.style.display = "block";
    humanData.style.display = "none";
}

// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = "#";
//     for(let i = 0; i < 6; i++) 
//         color += letters[Math.floor(Math.random() * 16)];
//     return color;
// }
// function changeBackgroundColor(color) {
//     document.body.style.background = color;
// }
// window.addEventListener('load', changeBackgroundColor(getRandomColor()));