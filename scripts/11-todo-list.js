const todoList = [];

function addTodo() {
  const inputElement =  document.querySelector('.js-name-input2');
  const name = inputElement.value;
  todoList.push(name);
  console.log(todoList);
  inputElement.value = '';
  renderTodoList();
}

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `
    <p>
    ${todo} 
    <button onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
    " >delete</button>
    </p>`
    ;
    todoListHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


