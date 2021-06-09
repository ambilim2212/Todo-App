let input = document.getElementById("todo-input");
let button = document.getElementById("addTask");
let output = document.getElementById("output");
let task = document.getElementById("task");

let list = [];

if(list.length == 0){
    task.style.display = "none";
}
let today = new Date();


button.addEventListener('click', () => {
    console.log(input);
    if(input.value.length > 0){
        const todo = {
            task : input.value,
            // date : today.toLocaleString('default', { month: 'long' })+''+(today.getMonth()+1)+','+today.getDate(),
            date : today.toLocaleString('default', { month: 'long' })+' '+(today.getDate())+','+today.getFullYear(),
            isCompleted: false
        }
        input.value = "";
        list.push(todo);
        console.log(list);
        render(list);
    }
});


function render(todosArray){
    if(list.length > 0){
        task.style.display = "";
    }
    else{
        task.style.display = "none";
    }
    let todosHTML = todosArray.map((todo, index) => {
        return `<li class="${todo.isCompleted ? "done  list-group-item" : "input list-group-item"}
        p-2  text-white rounded">
        ${index + 1}. ${todo.task}  
            <span class="float-right d-flex align-items-center">
            ${todo.date}
                <button class="btn btn-success text-white ml-2 mr-2 btn-sm" onClick="completeHandler(${index})"><i class="fas fa-check"></i></button>
                <button class="btn btn-danger text-white mr-2 btn-sm" onClick="deleteHandler(${index})"><i class="fas fa-trash"></i></button>
            </span>
        </li>`;
    });
    output.innerHTML = todosHTML.join("");
}

function completeHandler(index){
    list[index].isCompleted = true;
    render(list);
}

function deleteHandler(idx) {
    let newTodo = list.filter((todo, index) => index != idx);
    list = newTodo;
    render(list);
  }