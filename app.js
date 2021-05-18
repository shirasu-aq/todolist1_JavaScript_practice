"use strict";

// DOM操作
const addButton = document.getElementById("submit");
const todoListElement = document.getElementById("todo-list");
const addTextBox = document.getElementById("input-todo-box");

// 登録したタスクを表示
const addTask = (task) => {
  // li タグ作成
  const listItem = document.createElement("li");

  // <span id='delete'>×</span>を作成
  const deleteButton = document.createElement("span");
  deleteButton.innerText = "×";
  deleteButton.setAttribute("id", "delete");
  listItem.appendChild(deleteButton);
  /**
   * 今この状態
   * <li>
   *  <span id='delete'>×</span>
   * </li>
   */

  // <input type='checkbox' name='check'>作成
  const checkButton = document.createElement("input");
  checkButton.setAttribute("type", "checkbox");
  checkButton.setAttribute("name", "check");
  listItem.appendChild(checkButton);

  /**
   * 今この状態
   * <li>
   *  <span id='delete'>×</span>
   *  <input type='checkbox' name='check'>
   * </li>
   */

  // <label style='text-decoration: none; color: rgb(47, 79, 79);'>todo</label>を追加
  const todoDescription = document.createElement("label");
  todoDescription.innerText = task;
  todoDescription.setAttribute(
    "style",
    "text-decoration: none; color: rgb(47, 79, 79);"
  );
  listItem.appendChild(todoDescription);

  todoListElement.appendChild(listItem);
};

// 登録ボタンに対してタスク登録イベントを設定
addButton.addEventListener("submit", (event) => {
  // デフォルトの処理をキャンセルする
  event.preventDefault();

  // インプット要素に入力された値を取得し、タスク登録メソッドに値を渡す
  const task = addTextBox.value;
  addTask(task);
  addTextBox.value = "";
});
