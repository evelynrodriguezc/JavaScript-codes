
function showAlert(){
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    if(name == "" || email == ""){
        alert("Please complete the required info")
    }else{
        alert("Name: "+ name + "\nEmail: "+email)
    }
}

function toggleText(){
    let text = document.getElementById("hiddenText")
    let button = document.getElementById("toggleButton")

    if(text.style.display==="none" || text.style.display ===""){
        text.style.display="block"
        button.textContent="Hide Text"
    }else{
        text.style.display="none"
        button.textContent="Show Text"
    }

}

let counter = 0;
function incrementCounter(){
    counter++
    document.getElementById("counter").textContent = counter
}