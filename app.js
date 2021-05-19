"use strict";

// DOM操作
const addButton = document.getElementById("submit");
const todoListElement = document.getElementById("todo-list");
const addTextbox = document.getElementById("input-todo-box");

//clearボタンをトリガーにする
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => removeAllTask());
// クリアボタンを押して全てのタスクを削除
const removeAllTask = () => {
  todoListElement.innerHTML = "";
};

// 登録したタスクを表示
const addTask = (task) => {
  // liタグの生成
  const listItem = document.createElement("li");

  // ×ボタン表示
  const deleteButton = document.createElement("span");
  deleteButton.innerText = "×";
  deleteButton.setAttribute("id", "delete");
  listItem.append(deleteButton);
  deleteButton.addEventListener("click", () => deleteTask(deleteButton));

  // チェックボタン表示
  const checkButton = document.createElement("input");
  checkButton.setAttribute("type", "checkbox"); // [or] input.type = 'checkbox';
  // checkbutton.setAttribute("checked", "checked"); // [or] input.checked = true;
  listItem.append(checkButton);

  // 登録されたテキストを要素で表示（ラベル要素使用）
  const todoDescription = document.createElement("label");
  // 入力されたテキストを引数でとった文字列にする
  todoDescription.innerText = task;
  listItem.append(todoDescription);

  // 動的に子要素を追加
  todoListElement.appendChild(listItem);

  // 登録したタスクを削除
  const deleteTask = (deleteButton) => {
    const targetTask = deleteButton.closest("li");
    listItem.remove(targetTask);
  };
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
