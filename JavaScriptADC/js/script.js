
function addTask(){
    let taskInput = document.getElementById("new-task");
    let taskText = taskInput.value.trim();

    if(taskText === ""){
        alert("Please add a task");
        return;
    }

    let newTask = document.createElement("li");
    newTask.innerHTML=`${taskText} <button onclick="deleteTask(this)">Delete</button>`; //?
    newTask.addEventListener("click", function(){
        newTask.classList.toggle("completed");
    });

    let listTasks = document.getElementById("task-list");
    listTasks.appendChild(newTask);
    taskInput.value="";
}
    document.getElementById("new-task").addEventListener("keydown", function(event){
        if(event.key === "Enter"){
            addTask();
        }
});



function deleteTask(button){
    let task = button.parentElement
    task.remove()
}

function arrayExample(){
    let numbers = [1, 2, 3, 4, 5, 6, 7]
    let result = document.getElementById("resultArray")
}


