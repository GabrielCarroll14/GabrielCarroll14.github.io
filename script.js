
// Get the color that is passed in when the function is called and create the function
function changecolour(color) {
    
    // Get all the id's of the elements that will change colour and put the in variables
    var status = document.getElementById("status");
    var description = document.getElementById("description");
    var header = document.getElementById("header");
    var name = document.getElementById("name");
    var navbar = document.getElementById("navbar");
    var buttonLight = document.getElementById("buttonlight");
    var buttonDark = document.getElementById("buttondark");
    var buttonDiv = document.getElementById("buttonDiv");

    
    // If the colour that was passed in when the function was called is black change all the appropriate colours
    if (color == 'black') {
        document.body.style.backgroundColor = 'black';
        status.style.backgroundColor = 'white';
        description.style.color = 'white';
        header.style.color = 'white';
        name.style.color = 'white';
        navbar.style.color = 'white';

        // if the colour is dark which is the dark background we want the buttons also to be black to match the background.
        buttonDark.style.backgroundColor = 'black';
        buttonLight.style.backgroundColor = 'black';
    }
    
    // If the passed in colour wasn't black change all appropriate colours
    else {
        document.body.style.backgroundColor = 'white';
        status.style.backgroundColor = 'black';
        description.style.color = 'black';
        header.style.color = 'black';
        name.style.color = 'black';
        navbar.style.color = 'black';

        // If the colour is light which is the background change the buttons to light to match the background
        buttonDark.style.backgroundColor = 'white';
        buttonLight.style.backgroundColor = 'white';
    }
}