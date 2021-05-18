"use strict";

// DOM操作
const addbutton = document.getElementById("submit");
const todoListElement = document.getElementById("todo-list");
const addtextbox = document.getElementById("input-todo-box");

//clearボタンをトリガーにする
const clearbutton = document.getElementById("clear");
clearbutton.addEventListener("click", () => removeAllTask(clearbutton));
// クリアボタンを押して全てのタスクを削除
const removeAllTask = (clearbutton) => {
  const removeAllTasks = clearbutton.closest("li");
  todoListElement.remove(removeAllTasks);
};

// 登録したタスクを表示
const addTask = (task) => {
  // チェックボタン表示
  const checkbutton = document.createElement("input");
  checkbutton.setAttribute("type", "checkbox"); // [or] input.type = 'checkbox';
  // checkbutton.setAttribute("checked", "checked"); // [or] input.checked = true;

  // ×ボタン表示
  const deletebutton = document.getElementById("delete");
  // クリックしたらremoveTaskが発動
  deletebutton.addEventListener("click", () => removeATask(deletebutton));

  const listItem = document.createElement("li");
  // <li>で表示されるテキストを、引数でとったタスクの文字列にする
  listItem.innerText = task;

  // 動的に子要素を追加
  todoListElement.appendChild(listItem);
  listItem.append(deletebutton, checkbutton);

  // 登録したタスクを削除
  const removeTask = (removeButton) => {
    const targetTask = removeButton.closest("li");
    listItem.remove(targetTask);
  };
};
console.log(addbutton);
// 登録ボタンに対してタスク登録イベントを設定
addbutton.addEventListener("submit", (event) => {
  console.log("クリック");
  // デフォルトの処理をキャンセルする
  event.preventDefault();

  // インプット要素に入力された値を取得し、タスク登録メソッドに値を渡す
  const task = addtextbox.value;
  addTask(task);
  addtextbox.value = "";
});
