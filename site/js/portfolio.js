var image = document.getElementById('avatar')

image.addEventListener('click', function(){
    changeImage()
})

function changeImage(){
    image.src = './image/avatar.svg'
}

function changeName(){
    var colorText = prompt("Please enter a background color");
    
    // document.getElementById("description").style.backgroundColor = colorText
        var color = document.getElementsByClassName("pink-text")
        for (let i = 0; i < color.length; i++) {
            color[i].style.color =  colorText
           
        } 
        var color = document.getElementsByClassName("pink-bg")
        for (let i = 0; i < color.length; i++) {
            color[i].style.backgroundColor = colorText
        } 
    var person = prompt("Please enter your name");
    
    if (person != null) {
        document.getElementById("name").innerHTML = person
        document.getElementById("name").style.color = "#FFF";
    } 
    

    button.addEventListener('click', function(){
        changeName()
})
}