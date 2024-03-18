
// Get the color that is passed in when the function is called and create the function
function changecolour(color) {
    
    // Get all the id's of the elements that will change colour and put the in variables
    var status = document.getElementById("status");
    var description = document.getElementById("description");
    var header = document.getElementById("header");
    var name = document.getElementById("name");
    var navbar = document.getElementById("navbar");
    var button = document.getElementById("themeButtons");
    
    // If the colour that was passed in when the function was called is black change all the appropriate colours
    if (color == 'black') {
        document.body.style.backgroundColor = 'black';
        status.style.color = 'white';
        description.style.color = 'white';
        header.style.color = 'white';
        name.style.color = 'white';
        navbar.style.color = 'white';
    }
    
    // If the passed in colour wasn't black change all appropriate colours
    else {
        document.body.style.backgroundColor = 'white';
        status.style.color = 'black';
        description.style.color = 'black';
        header.style.color = 'black';
        name.style.color = 'black';
        navbar.style.color = 'black';
    }
}