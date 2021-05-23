"use strict";

const addButton = document.getElementById("submit");

// アドボタンを押してul表示;
addButton.addEventListener("click", () => {
  const taskHolder = document.getElementById("todo-list");
  const taskList = document.createElement("li");
  taskHolder.appendChild(taskList);
  event.preventDefault();
});

// const todoList = document.getElementById("to-dolist");
