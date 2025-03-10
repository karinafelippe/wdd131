const input = document.querySelector('#favchap');
const btnAdd = document.querySelector('button');
const list = document.querySelector('#list');
const li = document.createElement('li');
const btnDelete = document.createElement('button');

li.textContent = input.value;
btnDelete.textContent = '❌';
li.append(btnDelete);
list.append(li);