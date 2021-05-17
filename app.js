'use strict'


  // 入力したTodoを配列として保存
  const todos = [];

  // DOM操作
const textbox = document.getElementById('input-todo-box');
const addbutton =document.getElementById('submit');
const todoListElement = document.getElementById('todo-list');

    // 登録ボタンを押した時の挙動
  addbutton.addEventListener('click', () => {
  // 変数todoにテキストボックスに入力した文字をvalueプロパティを用いて代入
  const todo = textbox.value;
  // 入力したテキストボックスを空にする
  textbox.value = '';

  if(todo && todo.match(/\S/g)){
    todos.push(todo);
    showTodo(); 
  }
  });

const showTodo = () => {
    // HTML上の表示を一旦リセットする
    while(todoListElement.firstChild) {
      todoListElement.removeChild(todoListElement.firstChild);
    }
    
    todos.forEach((todo, index) => {
      // ulに追加するためにliタグの作成、todos内の配列を代入
      const liElement = document.createElement("li");
      // index値そのままを代入すると0からのスタートになるので、1を足す
      liElement.textContent = `${index + 1} : ${todo}$`;
});

    //作成した要素をHTML上に表示させる
    liElement.appendChild(deleteButton);
    todoListElement.appendChild(liElement);
};