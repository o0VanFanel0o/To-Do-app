const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const addTask = () => {
    if (inputBox.value.trim() === ""){
        alert("Debes escribir la tarea!");
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        const span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData()
}

listContainer.addEventListener("click",(e) =>{
    if(e.target.tagName.trim() === "LI"){
        e.target.classList.toggle("check");
        saveData()
    }
    else if(e.target.tagName.trim() === "SPAN"){
        e.target.parentElement.remove();
        saveData()
    }

}, false);

const saveData = () => {
    localStorage.setItem("data", listContainer.innerHTML);

}

const showTask = () => {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();