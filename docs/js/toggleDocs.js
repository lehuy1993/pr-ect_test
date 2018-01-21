 function toggleDocs(event) {
/*    var x = document.getElementById("myDIV");
*/    if (event.target && event.target.className == 'howto' ) {

        var next = event.target.nextElementSibling;


        if (next.style.display == "none") {
            next.style.display = "block";

        } else {
            next.style.display = "none";
        }
    }
}

document.addEventListener('click', toggleDocs, true);