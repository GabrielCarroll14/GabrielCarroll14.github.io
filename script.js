function changecolour(color) {
    var status = document.getElementById("status");
    var description = document.getElementById("description");
    var header = document.getElementById("header");
    var name = document.getElementById("name");
    var navbar = document.getElementById("navbar");
    if (color == 'black') {
        document.body.style.backgroundColor = 'black';
        status.style.color = 'white';
        description.style.color = 'white';
        header.style.color = 'white';
        name.style.color = 'white';
        navbar.style.color = 'white';
    }
    
    
    else {
        document.body.style.backgroundColor = 'white';
        status.style.color = 'black';
        description.style.color = 'black';
        header.style.color = 'black';
        name.style.color = 'black';
        navbar.style.color = 'black';
    }
}
        