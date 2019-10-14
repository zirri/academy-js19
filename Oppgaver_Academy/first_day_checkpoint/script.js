let existingList = [];

function addTask(){
    const newItem = document.getElementById("inputItem");
    existingList.push(newItem);
    document.getElementById("todoList").innerHTML += `<li>${newItem.value}<li>`;
    document.getElementById("numberOfTasks").innerHTML = `Total: ${existingList.length} tasks`;
    return false;
}
