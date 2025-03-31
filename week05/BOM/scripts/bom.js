const input = document.querySelector('#favchap');
const btnAdd = document.querySelector('button');
const list = document.querySelector('#list');
let chaptersArray = getChapterList() || [];
chaptersArray.forEach(chapter => displayList(chapter));

btnAdd.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }
});

function getChapterList() {
    return JSON.parse(localStorage.getItem('favBOMList'));
}

function setChapterList() {
    localStorage.setItem('favBOMList', JSON.stringify(chaptersArray));
}

function displayList(item) {
    let li = document.createElement('li');
    let btnDelete = document.createElement('button');
    li.textContent = item;
    btnDelete.textContent = '❌';
    btnDelete.classList.add('delete');
    li.append(btnDelete);
    list.append(li);

    btnDelete.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent);
        chaptersArray = chaptersArray.filter((item) => item !== chapter);
        setChapterList();
        input.focus();
    });
}

function deleteChapter(item) {
    chapter = chapter.slice(0, item.length - 1);
}