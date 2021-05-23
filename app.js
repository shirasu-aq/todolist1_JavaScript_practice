"use strict";

const addButton = document.getElementById("add");

// アドボタンを押してul表示;
addButton.addEventListener("click", () => {
  const taskHolder = document.getElementById("todo-list");
  const taskList = document.createElement("li");
  taskHolder.appendChild(taskList);
  event.preventDefault();

  // 削除ボタン表示
  const deleteButton = document.createElement("span");
  deleteButton.innerText = "×";
  taskList.appendChild(deleteButton);
});
