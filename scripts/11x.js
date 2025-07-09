const todoList = JSON.parse(localStorage.getItem("List")) || [];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

for(let i = 0; i < todoList.length; i++){
  const todoObject = todoList[i];
  //const name = todoObject.name;
  //const dueDate = todoObject.dueDate;
  const {name, dueDate} = todoObject; //destructuring

  todoListHTML += `
    <div> ${name}</div>
    <div> ${dueDate}</div>
    <button onclick='
      todoList.splice(${i},1);
      renderTodoList();
    ' class='delete-todo-button'>Delete</button>
  `;
  //generating the HTMl step ^
}


localStorage.setItem("List", JSON.stringify(todoList));
document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

function clickAdd(){
  const inputElement = document.querySelector('.js-input');
  let name = inputElement.value;



  const dateInputElement = document.querySelector('.js-date-input');
  const dueDate = dateInputElement.value;

  if(name === '' || dueDate === ''){
    return;
  }
  todoList.push({
    //task: task,
    //dueDate : dueDate,
    name,
    dueDate // shorthand property
  });

  localStorage.setItem("List", JSON.stringify(todoList));
  
  inputElement.value = '';

  renderTodoList();
}

//add what is in the input box to the array and then print the array tothe todoPrint paragraph element

/*
Main Idea of JavaScipt
1. Save the data
2. Generate the HTML
3. Make it interactive

*/