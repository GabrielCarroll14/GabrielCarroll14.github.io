
// Get the color that is passed in when the function is called and create the function
function changecolour(color) {
    
    // Get all the id's of the elements that will change colour and put the in variables
    var status = document.getElementById("status");
    var description = document.getElementById("description");
    var header = document.getElementById("header");
    var name = document.getElementById("name");
    var navbar = document.getElementById("navbarUl");
    var status = document.getElementById("status")
    
    //If the colour that was passed in when the function was called is black change all the appropriate colours
    if (color == 'black') {
        document.body.style.backgroundColor = 'black';
        description.style.color = 'white';
        header.style.color = 'white';
        name.style.color = 'white';
        navbar.style.backgroundColor = 'black';
        navbar.style.color = 'white';
        status.style.backgroundColor = 'black';
    }
    
    
    // If the passed in colour wasn't black change all appropriate colours
    else {
        document.body.style.backgroundColor = 'white';
        description.style.color = 'black';
        header.style.color = 'black';
        name.style.color = 'black';
        navbar.style.backgroundColor = 'white';
        navbar.style.color = 'black';
        status.style.backgroundColor = 'white';
    }

    document.getElementById('clicksound').play();
}

// This is the function that plays audio when the user clicks on a menubar item
function menuclicksound() {
    document.getElementById('hoverclicksound').play();
}