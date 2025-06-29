const todoArray = ['make dinner', 'wash dishes'];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

for(let i = 0; i < todoArray.length; i++){
  const todo = todoArray[i];
  console.log(todoArray[i]);
  todoListHTML += `<p>${todo}</p>`;
  //generating the HTMl step ^
}

document.querySelector('.js-todo-list').innerHTML = todoListHTML;

}

function clickAdd(){
  const inputElement = document.querySelector('.js-input-2');
  let task = inputElement.value;
  todoArray.push(task);
  console.log(todoArray);

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