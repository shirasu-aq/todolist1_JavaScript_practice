"use strict";

// DOM操作
const addButton = document.getElementById("submit");
const todoListElement = document.getElementById("todo-list");
const addTextbox = document.getElementById("input-todo-box");

// 登録したタスクを表示
const addTask = (task) => {
  // チェックボタン表示
  const checkButton = document.createElement("input");
  checkButton.setAttribute("type", "checkbox"); // [or] input.type = 'checkbox';
  // checkbutton.setAttribute("checked", "checked"); // [or] input.checked = true;

  // ×ボタン表示
  const deleteButton = document.getElementById("delete");

  const listItem = document.createElement("li");
  // <li>で表示されるテキストを、引数でとったタスクの文字列にする
  listItem.innerText = task;

  // 動的に子要素を追加
  todoListElement.appendChild(listItem);
  listItem.append(deleteButton, checkButton);
};

// 登録ボタンに対してタスク登録イベントを設定
addButton.addEventListener("submit", (event) => {
  console.log("クリック");
  // デフォルトの処理をキャンセルする
  event.preventDefault();

  // インプット要素に入力された値を取得し、タスク登録メソッドに値を渡す
  const task = addTextbox.value;
  addTask(task);
  addTextbox.value = "";
});
