window.onload = function () {
    var myNodeList = document.getElementsByTagName("li");
    for (i = 0; i < myNodeList.length; i++) {
        createX(myNodeList[i]);
    }
}

// Creating and adding "X" closing button
function createX(targetElement) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.addEventListener("click", function () {
        this.parentElement.style.display = "none";
    });
    span.appendChild(txt);
    targetElement.appendChild(span);
}

// Toggle strikethrough
function completeItem(activityValue) {
    var check = document.getElementById(activityValue);
    if (check.classList.contains("linethrough")) {
        check.classList.remove("linethrough");
    }
    else {
        check.classList.add("linethrough");
    }
}

// Create a new list item
function newElement() {
    var listElement = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    if (inputValue === "") {
        alert("Can not be blank!");
    } else {
        var text = document.createTextNode(inputValue);
        listElement.appendChild(text);
        document.getElementById("myList").appendChild(listElement);
        event.preventDefault()
    }

    createX(listElement);
}