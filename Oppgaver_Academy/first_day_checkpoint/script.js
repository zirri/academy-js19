let todoList = [];

function addTask(){
    const newItem = document.getElementById("inputItem");
    todoList.push(newItem);
    document.getElementById("todoList").innerHTML += `<li>${newItem.value}<li>`;
    document.getElementById("numberOfTasks").innerHTML = `Total: ${todoList.length} tasks`;
    return false;
}
