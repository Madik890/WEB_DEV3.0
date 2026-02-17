const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("list");
const emptyState = document.getElementById("emptyState");

function updateEmptyState() {
  emptyState.style.display =
    list.children.length === 0 ? "block" : "none";
}

function createTodoItem(textValue) {

  const li = document.createElement("li");
  li.className = "item";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const text = document.createElement("div");
  text.className = "text";
  text.textContent = textValue;

  const delBtn = document.createElement("button");
  delBtn.className = "delete-btn";
  delBtn.textContent = "🗑️";

  checkbox.addEventListener("change", () => {
    li.classList.toggle("done");
  });

  delBtn.addEventListener("click", () => {
    list.removeChild(li);
    updateEmptyState();
  });

  li.appendChild(checkbox);
  li.appendChild(text);
  li.appendChild(delBtn);

  return li;
}

function addTask() {

  const value = taskInput.value.trim();
  if (value === "") return;

  const item = createTodoItem(value);

  list.appendChild(item);

  taskInput.value = "";
  taskInput.focus();

  updateEmptyState();
}

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

updateEmptyState();
