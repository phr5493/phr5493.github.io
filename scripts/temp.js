function sayHello() {
    window.alert( screen.height +" "+ document.getElementById("church").clientHeight)
}

function checkImageSize() {
    if (window.innerHeight > document.getElementById("church").clientHeight)
        hideImage();
    else
        showImage ();
}

function hideImage () {
    document.getElementById("church").style.visibility = "hidden"
    if (document.getElementById("container").classList.contains("show"))
        document.getElementById("container").classList.add("hide")
        document.getElementById("container").classList.remove("show")
}

function showImage () {
    document.getElementById("church").style.visibility = "visible"
    if (document.getElementById("container").classList.contains("hide"))
    document.getElementById("container").classList.add("show")
        document.getElementById("container").classList.remove("hide")
}