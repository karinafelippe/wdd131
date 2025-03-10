// DOM = DOCUMENT OBJECT MODEL
//        Object{} that represents the page you see in the web browser
//        and provides you with an API to interact with it.
//        Web browser constructs the DOM when it loads an HTML document,
//        and structures all the elements in a tree-like representation.
//        JavaScript can access the DOM to dinamically
//        change the content, structure, and style of a web page.

document.title = "DOM Activities";
document.body.style.backgroundColor = "hsl(0, 0%, 15%)";
document.body.style.color = "#fff";

const username = "Sis Karina";
const welcomingMsg = document.getElementById("welcome-msg");

welcomingMsg.textContent += username === "" ? `Guest` : username;

const article = document.querySelector('article');
article.innerHTML = 'innerHTML supports <strong>HTML</strong> tags. The textContent property does not.';
article.style.textAlign = 'right';
article.setAttribute('class', 'active');
// An alternative way to change an attribute of an element—specifically the class attribute—is by directly manipulating the element's classList.
// article.classList.add('active');
const paragraph = document.createElement('p');
article.appendChild(paragraph);
article.append(paragraph, 'Hello World Addition!');