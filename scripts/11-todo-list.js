const todoList = [];

function addTodo() {
  const inputElement =  document.querySelector('.js-name-input2');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date');
  const dueDate = dateInputElement.value;

  todoList.push({
    name: name,
    dueDate: dueDate
  });
  console.log(todoList);
  inputElement.value = '';
  renderTodoList();
}

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    //const name = todoObject.name;
    //const { dueDate } = todoObject;
    const { name, dueDate } = todoObject;
    const html = `
    <p>
    ${name} ${dueDate}
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


