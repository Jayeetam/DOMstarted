var itemList = document.querySelector('#items');

//parentNode //
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

//parentElement//
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//childnodes//
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';


//FirstChild//
console.log(itemList.firstChild);
//FirstElementChild //
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'Hello 1';

//lastChild//
console.log(itemList.lastChild);
//lastElementChild//
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling//
console.log(itemList.nextSibling);
//nextElementSibling//
console.log(itemList.nextElementSibling);

//previousSibling//
console.log(itemList.previousSibling);
//previousElementSibling//
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

//createElement//

//create a div //
var newDiv = document.createElement('div');

//Add class//
newDiv.className = 'hello';

//Add id//
newDiv.id = 'hello1';

//Add attribute//
newDiv.setAttribute('title','Hello Div');

//create text node//
var newDivText = document.createTextNode('HEllo');

//Append child//
newDiv.appendChild(newDivText);

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv,h1);

//add HEllo word before Item 1//

var parentnode = document.getElementById('items');
console.log(parentnode.innerHTML);
parentnode.innerHTML = '<li>HEllo</li>' + parentnode.innerHTML;


