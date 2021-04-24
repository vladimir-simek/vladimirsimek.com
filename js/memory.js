
document.onload = function() {

}

document.addEventListener('DOMContentLoaded', function () {

    // Get the modal
    let modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    let span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }

    for (let i = 0; i < emojisList.length; i++) {
        let wtf = document.createTextNode("")
        let innerDiv = document.createElement("div")
        innerDiv.className = "box boxOverlap"
        innerDiv.id = "box boxOverlap overNum" + i
        innerDiv.innerHTML = questionMark
        innerDiv.appendChild(wtf)
        document.getElementById("memoryGameCenteredDiv").appendChild(innerDiv)
    }


    /*for (let i = 0; i < emojisList.length; i++) {
        let wtf = document.createTextNode("")
        let innerDiv = document.createElement("div")
        innerDiv.className = "box"
        innerDiv.id = "box"
        innerDiv.innerHTML = emojisList[i]
        innerDiv.appendChild(wtf)
        document.getElementById("memoryGameCenteredDiv").appendChild(innerDiv);
    }*/

    for (let i = 0; i < emojisList.length; i++) {

    }
});
