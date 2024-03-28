
let form=document.querySelector("form")
let tasklist=document.querySelector(".alltask")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let desc=document.querySelector(".desc").value
    if(desc==""){
        alert("Enter the description of the task")
    }
    else{
        tasklist.innerHTML+=
        `
        <div class="task">
            <h2>${desc}</h2>
            <button class="remove" onclick="this.parentElement.remove()">Remove</button>
            <button class="complete" onclick="markcomplete(this.parentElement)">Completed</button>
        </div>
        `
    }
})



function markcomplete(elem){
    elem.querySelector("h2").setAttribute("style","text-decoration: line-through;")
}