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

  // チェックボックス表示
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  taskList.appendChild(checkBox);

  const taskLabel = document.createElement("label");
  // タスク登録
  const textBox = document.getElementById("input-todo-box");
  // 登録する
  taskLabel.innerText = textBox.value;
  taskList.appendChild(taskLabel);
});
