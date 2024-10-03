let number = [];
let dictionary = {};
let set = new Set();

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

//Dictionaries

function addDictionary(){
    let key = document.getElementById("keyInput").value.trim();
    let value = document.getElementById("valueInputDic").value.trim();
    if(key !== "" && value !== ""){
        dictionary[key]=value;
        document.getElementById("keyInput").value="";
        document.getElementById("valueInputDic").value="";
        updateResultDic();
    }else{
        alert("Please enter a key and a valid value");
    }
}

function updateResultDic(){
    let result = document.getElementById("resultDictionary");
    let message = "Dictionary:<br>";
    for(let key in dictionary){
        message += `${key}: ${dictionary[key]}<br>`;
    }
    result.innerHTML = message;
}

function modifyDictionary(){
    let key = document.getElementById("keyInput").value.trim();
    let value = document.getElementById("valueInputDic").value.trim();
    if(key in dictionary){
        dictionary[key] = value;
        document.getElementById("keyInput").value="";
        document.getElementById("valueInputDic").value="";
        updateResultDic();
    }else{
        alert("The key doesn't exist in the dictionary, so it can't be modified")
    }
}

function deleteKey(){
    let key = document.getElementById("keyInput").value.trim();
    if(key in dictionary){
        delete dictionary[key];
        document.getElementById("keyInput").value="";
        updateResultDic();
    }else{
        alert("The key doesn't exist in the dictionary, so it can't be deleted")
    }
}

//Sets

//valueInputSet
//addSet()
//modifySet()
//deleteSetValue()
//resultSet



function addSet(){
    let value = document.getElementById("valueInputSet").value.trim();
    if(value !== ""){
        set.add(value);
        document.getElementById("valueInputSet").value="";
        updateResultSet();
    }else{
        alert("Please enter a valid value");
    }
}

function updateResultSet(){
    let result = document.getElementById("resultSet");
    result.innerHTML = `Set: [${Array.from(set).join(", ")}]`
}

function modifySet(){
    let value = document.getElementById("valueInputSet").value.trim();
    if(set.has(value)){
        set.delete(value);
        let newValue = prompt("Enter a new value to replace");
        if(newValue && newValue.trim() !== ""){
            set.add(newValue.trim())
            updateResultSet();
        }
    }else{
        alert("Please enter a valid value");
    }
    document.getElementById("valueInputSet").value = "";
}

function deleteSetValue(){
    let value = document.getElementById("valueInputSet").value.trim();
    if(set.has(value)){
        set.delete(value);
        document.getElementById("valueInputSet").value = "";
        updateResultSet();
        }else{
            alert("Please enter a valid value")
        }
}