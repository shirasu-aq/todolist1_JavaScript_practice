'use strict'

  // DOM操作
  const addbutton =document.getElementById('submit');
  const todoListElement = document.getElementById('todo-list');
  const addtextbox = document.getElementById('input-todo-box');

  // 登録したタスクを表示
  const addTask = task => {
    const listItem = document.createElement('li');
    // <li>で表示されるテキストを、引数でとったタスクの文字列にする
    listItem.innerText = task;
    // 動的に子要素を追加
    todoListElement.appendChild(listItem);
  };

  // 登録ボタンに対してタスク登録イベントを設定
  addbutton.addEventListener('submit', event => {
    // インプット要素に入力された値を取得し、タスク登録メソッドに値を渡す
    const task = addtextbox.value;
    addTask(task);
    addtextbox.value = '';
  });




// ↓関係ないが残しておく

  // // 入力したTodoを配列として保存
  // const todos = [];


  //   // 登録ボタンを押した時の挙動
  // addbutton.addEventListener('click', () => {
  // // 変数todoにテキストボックスに入力した文字をvalueプロパティを用いて代入
  // // const todo = textbox.value;
  // const todo = document.createElement('li');
  // // 入力したテキストボックスを空にする
  // textbox.value = '';

  // todo.innerText = textbox.value;
  // todoListElement.appendChild(todo);
  // });
  
