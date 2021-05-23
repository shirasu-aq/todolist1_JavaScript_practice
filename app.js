"use strict";
const taskHolder = document.getElementById("todo-list");

const addButton = document.getElementById("add");
// アドボタンを押してul表示;
addButton.addEventListener("click", () => {
  // const taskHolder = document.getElementById("todo-list");
  const taskList = document.createElement("li");
  taskHolder.appendChild(taskList);
  event.preventDefault();

  // 削除ボタン表示
  const deleteButton = document.createElement("span");
  deleteButton.innerText = "×";
  taskList.appendChild(deleteButton);
  // 削除ボタンを押すと削除
  deleteButton.addEventListener("click", () => {
    const pointTask = deleteButton.closest("li");
    taskList.remove(pointTask);
    // ↑18行目なくして、taskList.remove()でも可能
  });

  // チェックボックス表示
  const checkBox = document.createElement("input");
  checkBox.setAttribute("type", "checkbox");
  taskList.appendChild(checkBox);
  // チェックボタンを押した後の挙動追加
  checkBox.addEventListener("click", () => {
    if (checkBox.checked) {
      taskLabel.setAttribute("class", "deleteline");
    } else {
      taskLabel.removeAttribute("class", "deleteline");
    }
  });

  const taskLabel = document.createElement("label");
  // タスク登録
  const textBox = document.getElementById("input-todo-box");
  // 登録する
  taskLabel.innerText = textBox.value;
  taskList.appendChild(taskLabel);
  // 入力した文字を空にする
  textBox.value = "";
});

const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
  taskHolder.innerText = "";
});
