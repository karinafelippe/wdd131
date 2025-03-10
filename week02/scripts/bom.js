const input = document.querySelector('#favchap');
const btnAdd = document.querySelector('button');
const list = document.querySelector('#list');

btnAdd.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        const btnDelete = document.createElement('button');
        li.textContent = input.value;
        btnDelete.textContent = '❌';
        li.append(btnDelete);
        list.append(li);
        input.value = '';
        input.focus();

        btnDelete.addEventListener('click', function () {
            list.removeChild(li);
            input.value = '';
            input.focus();
        });
    }
});