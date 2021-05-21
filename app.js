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

// ADDを押したら(id='submit'のsubmitメソッドを実行したら)行を追加する
const formTag = document.getElementById("submit");
formTag.addEventListener("submit", (event) => {
  const liTag = document.createElement("li");
  const ulTag = document.getElementById("todo-list");
  ulTag.appendChild(liTag);

  event.preventDefault();
});
