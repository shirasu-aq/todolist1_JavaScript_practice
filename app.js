"use strict";

/**
 * ADDを押す(id='submit'のsubmitメソッドを実行す)
 *
 * ADDとイベントを結びつける
 * 追加する内容を作る
 *
 * 行が追加される
 * バツボタンを追加する
 * チェックボタンを追加する
 * inputした内容を追加する
 */
const ulTag = document.getElementById("todo-list");

// ADDを押したら(id='submit'のsubmitメソッドを実行したら)行を追加する
const formTag = document.getElementById("submit");
formTag.addEventListener("submit", (event) => {
  event.preventDefault();
  const liTag = document.createElement("li");

  // バツボタンを追加する
  const deleteButton = document.createElement("span");
  deleteButton.innerText = "×";
  deleteButton.addEventListener("click", () => {
    liTag.remove();
  });
  liTag.appendChild(deleteButton);

  // チェックボタンを追加する
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  liTag.appendChild(checkbox);

  // inputした内容を追加する
  const inputLabel = document.createElement("label");
  // inputに入力した内容をinputLabelのinnerTextに入れる。
  const inputTag = document.getElementById("input-todo-box");
  inputLabel.innerText = inputTag.value;
  liTag.appendChild(inputLabel);

  ulTag.appendChild(liTag);

  inputTag.value = "";
});

// 全件削除
// Clearボタンを取得
// Clearボタンを押したら、全てのToDoListを消す
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
  ulTag.innerText = "";
});
