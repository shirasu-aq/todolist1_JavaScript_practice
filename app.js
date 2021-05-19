"use strict";

const todoListElement = document.getElementById("todo-list");

// 登録したタスクを表示
const addTask = (task) => {
  // liタグの生成
  const listItem = document.createElement("li");

  // ×ボタン表示
  const deleteButton = document.createElement("span");
  deleteButton.innerText = "×";
  deleteButton.setAttribute("id", "delete");
  listItem.appendChild(deleteButton);

  // チェックボタン表示
  const checkButton = document.createElement("input");
  checkButton.setAttribute("type", "checkbox"); // [or] input.type = 'checkbox';
  // checkbutton.setAttribute("checked", "checked"); // [or] input.checked = true;
  listItem.appendChild(checkButton);

  // 登録されたテキストを要素で表示（ラベル要素使用）
  const todoDescription = document.createElement("label");
  // 入力されたテキストを引数でとった文字列にする
  todoDescription.innerText = task;
  listItem.appendChild(todoDescription);

  // 動的に子要素を追加
  todoListElement.appendChild(listItem);

  // 登録したタスクを削除
  deleteButton.addEventListener("click", () => deleteTask(deleteButton));
  const deleteTask = () => {
    // セレクタの条件に合う、最も近い祖先要素を取得
    const targetTask = deleteButton.closest("li");
    listItem.remove(targetTask);
  };
};

const addButton = document.getElementById("submit");
// 登録ボタンに対してタスク登録イベントを設定
addButton.addEventListener("submit", () => {
  // ページのリロードを止める（デフォルトの処理をキャンセルする）
  event.preventDefault();

  const addTextbox = document.getElementById("input-todo-box");
  // インプット要素に入力された値を取得し、タスク登録メソッドに値を渡す
  const task = addTextbox.value;
  // 渡された値をaddする
  addTask(task);
  addTextbox.value = "";
});

//clearボタンをトリガーにする
const clearButton = document.getElementById("clear");
// クリアボタンを押して全てのTodoを削除
clearButton.addEventListener("click", () => removeAllTask(clearButton));
const removeAllTask = () => {
  while (todoListElement.firstChild) {
    todoListElement.removeChild(todoListElement.firstChild);
  }
};
