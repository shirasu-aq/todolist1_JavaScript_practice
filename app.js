"use strict";

// DOM操作
const addButton = document.getElementById("submit");
const todoListElement = document.getElementById("todo-list");
const addTextbox = document.getElementById("input-todo-box");

// 登録したタスクを表示
const addTask = (task) => {
  // liタグの生成
  const listItem = document.createElement("li");
  console.log("liタグの生成");

  // ×ボタン表示
  const deleteButton = document.createElement("span");
  deleteButton.innerText = "×";
  deleteButton.setAttribute("id", "delete");
  listItem.append(deleteButton);

  // チェックボタン表示
  const checkButton = document.createElement("input");
  checkButton.setAttribute("type", "checkbox"); // [or] input.type = 'checkbox';
  // checkbutton.setAttribute("checked", "checked"); // [or] input.checked = true;
  listItem.append(checkButton);
  console.log("チェックボタン表示");
  $("checkButton").click(function () {
    if ($(this).is(":checked")) {
      $(this).closest("tr").css("text-decoration", "line-through");
    } else {
      $(this).closest("tr").css("text-decoration", "none");
    }
  });

  // 登録されたテキストを要素で表示（ラベル要素使用）
  const todoDescription = document.createElement("label");
  // 入力されたテキストを引数でとった文字列にする
  todoDescription.innerText = task;
  listItem.append(todoDescription);
  console.log("登録されたテキストを要素で表示");

  // 動的に子要素を追加
  todoListElement.appendChild(listItem);
  console.log("listItemを子要素として追加");

  // 登録したタスクを削除
  deleteButton.addEventListener("click", () => deleteTask(deleteButton));
  console.log("×ボタン表示");
  const deleteTask = () => {
    // セレクタの条件に合う、最も近い祖先要素を取得
    const targetTask = deleteButton.closest("li");
    listItem.remove(targetTask);
  };

  // //チェックボタンを押したら完了
  // checkButton.addEventListener("click", () => completeTask(checkButton));
  // const completeTask = () => {
  //   // チェックマークをつける
  //   // checkButton.setAttribute("checked", "checked");
  //   const targetTask = checkButton.closest("li");
  //   // 特定の要素を追加
  //   targetTask.classList.add("isComplete");
  // };

  // const ch = document.form1.ch1.checked;
};

// 登録ボタンに対してタスク登録イベントを設定
addButton.addEventListener("submit", () => {
  console.log("登録ボタンに対してタスク登録イベントを設定");
  // ページのリロードを止める（デフォルトの処理をキャンセルする）
  event.preventDefault();

  // インプット要素に入力された値を取得し、タスク登録メソッドに値を渡す
  const task = addTextbox.value;
  console.log("タスク登録メソッドに値を渡す");
  addTask(task);
  addTextbox.value = "";
});

//clearボタンをトリガーにする
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => removeAllTask(clearButton));
// クリアボタンを押して全てのタスクを削除
// const removeAllTask = (clearButton) => {
//   const removeAllTasks = clearButton.closest("li");
//   todoListElement.remove(removeAllTasks);
//   console.log("reset");
//   const resetTasks = document.createAttribute("id", "todo-list");

const removeAllTask = () => {
  todoListElement.innerHTML = "";
};

// // チェックでTodoの完了
// const completeCheck = document.createElement("input");
// checkButton.setAttribute("checked", "checked");
// //  チェックボタンにイベント追加
// completeCheck.addEventListener("click", () => completeTask(checkButton));
// const completeTask = () => {
//   const targetTask = completeButton.closest("li");
//   // 特定の要素を追加
//   targetTask.classList.add("isComplete");
// };

// function changelinethrough(target) {
//   var obj = document.getElementById(target);
//   if (obj.style.textDecoration == "line-through") {
//     obj.style.textDecoration = "none";
//   } else {
//     obj.style.textDecoration = "line-through";
//   }
// }
