const input = document.getElementById("favchap");
const button = document.getElementsByTagName("button")[0];
const list = document.getElementsByClassName("list")[0];

button.addEventListener('click', function() {
    if (isInputNotBlank()) {
        console.log("input was not blank.");
        addRow();
    }
});

function addRow() {
    let listItem = document.createElement("li");
    let deleteButton = document.createElement("button");
    listItem.textContent = input.value;
    deleteButton.textContent = "❌";
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);
    addDeleteEvent(listItem, deleteButton);
    cleanUp();
}

function isInputNotBlank() {
    return input.value != "";
}

function addDeleteEvent(listItem, deleteButton) {
    deleteButton.addEventListener('click', function() {
        list.removeChild(listItem);
    });
}

function cleanUp() {
    input.value = "";
    input.focus();
}



// function saveChapter() {

// }

// button.addEventListener('click', saveChapter());

