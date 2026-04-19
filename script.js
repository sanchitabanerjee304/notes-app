const notescontainer = document.querySelector(".notes_container");
const createbtn = document.querySelector(".btn");

createbtn.addEventListener("click", () => {
    let note = document.createElement("div");
    let inputbox = document.createElement("p");
    let img = document.createElement("img");

    note.className = "note";
    inputbox.className = "input-box";
    inputbox.setAttribute("contenteditable", "true");

    img.src = "images/trash.png";

    note.appendChild(inputbox);
    note.appendChild(img);

    notescontainer.appendChild(note);
});

notescontainer.addEventListener("click", function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
});