
// var image = document.getElementById('avatar')

// image.addEventListener('click', function(){
//     changeImage()
// })

// function changeImage(){
//     image.src = './image/avatar.svg'
// }

/* ******************* IMAGE FLIPPER ******************* */

let defaultImg = document.getElementById("avatar");
let flipButton = document.getElementById("btn");

function imgFlipper () {

    if (defaultImg.getAttribute('src') === './image/avatar.svg') {
        defaultImg.setAttribute('src', './image/avatar-bis.png');
    }
    else {
        defaultImg.setAttribute('src', './image/avatar.svg');
    }
}

flipButton.addEventListener("click", imgFlipper);


/* ******************* MODIFY NAME AND COLOR ******************* */

function changeName(){
    var colorText = prompt("Please enter a background color");
    
    // document.getElementById("description").style.backgroundColor = colorText
    // recolor pink text
        var color = document.getElementsByClassName("pink-text")
        for (let i = 0; i < color.length; i++) {
            color[i].style.color =  colorText
           
        } 
    // recolor pink backgrounds
        var color = document.getElementsByClassName("pink-bg")
        for (let i = 0; i < color.length; i++) {
            color[i].style.backgroundColor = colorText
        } 
    // change name and color
        var person = prompt("Please enter your name");
        if (person != null) {
            document.getElementById("name").innerHTML = person
            document.getElementById("name").style.color = "#FFF";
        } 
    // recolor all <a> in portfolio 
        let textA = document.getElementsByTagName('a')
        for (let i = 0; i < textA.length; i++) {
            textA[i].style.color = colorText
        }

    button.addEventListener('click', function(){
        changeName()
    })
}

/* ******************* BUTTON TO MODIFY SKILLS ******************* */

const skillsButton = document.getElementsByClassName('modify-skills-button')
const frontSkillsList = document.getElementById('front-dev-tools')
const frontSkillInput = document.getElementsByClassName('front-skill-input')

const newSkill =["VSCode","Github", "Terminal"]


function addSkill () {
    newSkill = document.createElement('li');
    newSkill.innerHTML = frontSkillInput.value;
    frontSkillsList.appendChild(newSkill);
    preventDefault();
}
