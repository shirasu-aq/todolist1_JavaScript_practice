'use strict'

{
  const todo = document.getElementById('todo');   
  const submit = document.getElementById('submit');

  // 登録ボタン
submit.addEventListener('click', () => {
  const todo = textboxElement.value;
  textboxElement.value = '';

  if(todo) {
    todos.push(todo);
    showTodos();
  }

});

item.done = false; // 完了はひとまずBoolean値で設定
item.todo = todo.value 

// フォームをリセット
todo.value = '';

console.log(item); // 確認

}

