function sayHello() {
    window.alert( screen.height +" "+ document.getElementById("gothic").clientHeight)
}

function checkImageSize() {
    if (window.innerHeight > document.getElementById("gothic").clientHeight)
        hideImage();
    else
        showImage ();
}

function hideImage () {
    document.getElementById("gothic").style.visibility = "hidden"
    if (document.getElementById("container").classList.contains("show"))
        document.getElementById("container").classList.add("hide")
        document.getElementById("container").classList.remove("show")
}

function showImage () {
    document.getElementById("gothic").style.visibility = "visible"
    if (document.getElementById("container").classList.contains("hide"))
    document.getElementById("container").classList.add("show")
        document.getElementById("container").classList.remove("hide")
}