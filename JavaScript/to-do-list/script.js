const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

addButton.addEventListener("click", addTask);

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.textContent = taskText;
    taskItem.addEventListener("click", toggleTask);
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

function toggleTask(event) {
  const clickedTask = event.target;
  clickedTask.classList.toggle("completed");
}

taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    addTask();
  }
});
