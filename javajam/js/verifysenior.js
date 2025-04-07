// Create an external script called verifysenior.js in the js folder that prompts the user for their age on the music.html page.
// If the user is 65 or older, utilize the getElementById and innerHTML to show/output to a paragraph "Free Friday Coffee Night for Senior!"
// Else show/output to a paragraph "Enjoy Music and Make Memories!"

var user_age;

user_age = prompt("Enter your age:")
if (user_age >= 65) {
    message = "Free Friday Coffee Night for Seniors!" 
    document.getElementById('verify').style.color = '#8C3826';
    document.getElementById('verify').style.fontVariantCaps = 'small-caps';
} else {
    message = "Enjoy Music and Make Memories!"
}

document.getElementById("verify").innerHTML = message;