let todoList = [];

//mangler 

function calculateCompletedTasks(){
    let completedCounter = 0;
    for(let i=0; i<todoList.length;i++){
        if(todoList[i].completed){
            completedCounter ++;
        }
    }
    return completedCounter
}

function addTask(){
    const newItem = document.getElementById("inputItem").value;
    const item = {
        name: newItem, 
        completed: false
    };
    todoList.push(item);
    document.getElementById("todoList").innerHTML += `<li><input type="checkbox" id="task${todoList.length}" value="task${todoList.length}" onclick="calculateCompletedTasks()">${newItem} <li>`;
    document.getElementById("numberOfTasks").innerHTML = `Total: ${todoList.length} tasks`;
    document.getElementById("completedTasks").innerHTML = `Completed: ${calculateCompletedTasks(todoList)} tasks`;
    return false;
}
