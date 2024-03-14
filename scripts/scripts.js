
//New line
window.addEventListener("DOMContentLoaded", (event) => {
  const taskName = document.getElementById('task-name');
  const taskDescription = document.getElementById("task-description");
  const button = document.getElementById("add-todo");
  const listContainer = document.getElementById('lists');
  const taskArray = [];


  const addTodo = () => {
      if (taskName.value === "" || taskDescription.value === "") {
        alert("Please fill this form!");
        return;
      }
      const task = {};
      task["nameOfTask"] = taskName.value;
      task["descriptionOfTask"] = taskDescription.value;
      taskArray.push(task);
      taskName.value = "";
      taskDescription.value = "";
      return;
  };

  
  const deleteTodo = (e) => {
    const targetEle = e.target;
    let selector = "delete-btn";
    if (targetEle.className === selector) {
      console.log(targetEle.parentNode.textContent);
      listContainer.removeChild(targetEle.parentNode);
      const index = taskArray.indexOf(targetEle.previousSibling.textContent);
      taskArray.splice(index, 1);
    }
  };

  const editTodo = (e) => {
    const targetEle2 = e.target;
    let nameOfClass = "edit-btn";
    if (targetEle2.className === nameOfClass) {
      taskName.value = targetEle2.parentElement.children[0].innerHTML;
      taskDescription.value = targetEle2.parentElement.children[1].innerHTML;

      deleteTodo(e);
    }
  };
  
  const displayTodo = () => {
    listContainer.innerHTML = '';
    //const li = document.createElement("li");
    for (let i = 0; i < taskArray.length; i++) {
      //Create a div for each list item
      const itemDiv = document.createElement("div");

      //Add class name to the itemDiv
      itemDiv.className = 'li-container-div';

      //Create a list of items
      const li = document.createElement("li");

      // Create delete button
      const deleteBtn = document.createElement("button");

      // Add class name to the delete button
      deleteBtn.className = "delete-btn";

      // Add text content to the delete button
      deleteBtn.textContent = "Delete";

      // Create edit button
      const editBtn = document.createElement("button");

      // Add class name to the edit button
      editBtn.className = "edit-btn";

      // Add text content to the edit button
      editBtn.textContent = "Edit";

      li.innerHTML = `${taskArray[i].nameOfTask} <br/>  ${taskArray[i].descriptionOfTask}`;
      // li.innerHTML = taskArray[i].descriptionOfTask;

      /*Append each div to our ul element as a separate list item container*/
      listContainer.appendChild(itemDiv);

      /*Append each list item to it's separate container div*/
      itemDiv.appendChild(li);

      //Append edit button to each container div
      itemDiv.appendChild(editBtn);

      //Append delete button to each container div
      itemDiv.appendChild(deleteBtn);
    }
  }

  button.addEventListener('click', () => {
    addTodo();
    displayTodo();

  })

  listContainer.addEventListener("click", deleteTodo
  );

  listContainer.addEventListener("click", editTodo);

})


