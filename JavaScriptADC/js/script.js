let number = [];

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
    let task = button.parentElement;
    task.remove();
}


function loadArray(){
    let arrayInput = document.getElementById("arrayInput").value.trim();
    number = arrayInput.split(",").map(Number).filter(n => !isNaN(n));
    document.getElementById("arrayInput").value="";
    updateResult();
}

function updateResult(){
    let result = document.getElementById("resultArray");
    result.innerHTML= `[${number.join(", ")}]`;
}

function pushElement(){
    let value = document.getElementById("inputValue").value.trim();
    if(!isNaN(value) && value!==""){
        number.push(Number(value));
        document.getElementById("inputValue").value="";
        updateResult();
    }else{
        alert("Enter a valid value");
    }
}

function popElement(){
    number.pop();
    updateResult();
}

function shiftElement(){
    number.shift();
    updateResult();
}

function unshiftElement(){
    let value = document.getElementById("inputValue").value.trim();
    if(!isNaN(value) && value !== ""){
        number.unshift(Number(value))
        document.getElementById("inputValue").value="";
        updateResult()
    }else{
        alert("Enter a valid value")
    }
}