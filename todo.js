const myInput = document.querySelector("input");
const addBtn = document.querySelector(".add");
const todoContainer = document.querySelector(".todo-container");
const error = document.querySelector(".error");
// const myInputValue = myInput.value;
// console.log(myInputValue);
addBtn.addEventListener("click", () => {
  const para = document.createElement("p");
  const taskDoneBtn = document.createElement("button");
  const taskDeleteBtn = document.createElement("button");
  taskDoneBtn.innerText = "Task Done";
  taskDeleteBtn.innerText = "Delete Task";
  taskDoneBtn.classList.add("task-done-btn");
  taskDeleteBtn.classList.add("task-delete-btn");
  if (myInput.value === "") {
    error.innerText = "Enter Some Value";
  } else {
    error.innerText = "";
    para.innerText = myInput.value; //* pass the value directly
    myInput.value = "";
    para.classList.add("font-style");
    //? Don't store  myInput.value inside another variable.
    para.style.marginTop = "24px";
    para.append(taskDoneBtn);
    para.append(taskDeleteBtn);
    todoContainer.append(para);
    taskDoneBtn.addEventListener("click", () => {
      para.style.textDecoration = "line-through";
    });
    taskDeleteBtn.addEventListener("click", () => {
      todoContainer.removeChild(para);
    });
  }
  //   console.log(myInputValue);
  //   todoContainer.append(myInput.value);---the items comes side by side ina row
});
