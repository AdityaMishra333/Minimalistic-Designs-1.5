const input = document.getElementById("input")
const add = document.getElementById("add")
const tasklist = document.getElementById("tasklist")
const del = document.getElementById("delete");

input.addEventListener("click", () => {

})

add.addEventListener("click", () => {
    const input2 = input.value.trim();

    if(input2 == "")return;

    const li = document.createElement("li");

    li.textContent = ". " + input2;

    tasklist.appendChild(li);

    input.value = "";
})

tasklist.addEventListener("click", (e) => {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("line-through");
    }
});

document.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        add.click();
    }
})

del.addEventListener("click", ()=>{
    const tasks = tasklist.querySelectorAll("li");
    tasks.forEach(task => {
        if(task.classList.contains("line-through")){
            task.remove();
        }
    })
})

document.addEventListener("keydown", (e) => {
    if(e.key === "Delete"){
        del.click();
    }
})