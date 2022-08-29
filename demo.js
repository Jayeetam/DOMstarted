//console.dir(document);
//console.log(document.domain);
//console.log(document.URL);
//console.log(document.title);
//console.log(document.doctype);
//console.log(document.head);
//console.log(document.body);
//console.log(document.all);
//console.log(document.all[10]);
//document.all[10].textContent = 'Hello';
//console.log(document.forms[0]);
//console.log(document.links);
//console.log(document.images);

//GETELEMENTSBYID//

//console.log(document.getElementById('header-title'));
//var headerTitle = document.getElementById('header-title');
//var header = document.getElementById('main-header');
//console.log(headerTitle);
//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'Goodbye';
//console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello</h3>';
//header.style.borderBottom = 'solid 3px #000';

//GETELEMENTSBYCLASSNAME//

//var items = document.getElementsByClassName('list-group-item');
//console.log(items);
//console.log(items[1]);
//items[1].textContent = 'Hello 2';
//items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'yellow';

//for(var i=0; i< items.length; i++){
    //items[i].style.backgroundColor  = '#f4f4f4';
//}

//var additems = document.getElementsByClassName('title');
//console.log(additems);
//console.log(additems[0]);
//additems[0].style.fontWeight = 'bold';
//additems[0].style.color = 'green';

//Question 2//
//items[2].style.backgroundColor = 'green';

//Question 3//
//for(var i=0; i< items.length; i++){
    //items[i].style.fontWeight = 'bold';
//}


//GETELEMENTSBYTAGNAME//

//var li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[1]);
//li[1].textContent = 'Hello 2';
//li[1].style.fontWeight = 'bold';
//li[1].style.backgroundColor = 'yellow';

//for(var i=0; i< li.length; i++){
    //li[i].style.backgroundColor  = '#f4f4f4';
//}


//var additems = document.getElementsByClassName('item5');
//console.log(additems);
//console.log(additems[0]);
//additems[0].style.fontWeight = 'bold';
//additems[0].style.color = 'green';
//additems[0].style.backgroundColor = 'yellow';


//var li = document.getElementsByTagName('li');
//console.log(li);
//console.log(li[4]);
//li[4].textContent = 'Hello Jayeeta Here!';
//li[4].style.fontWeight = 'bold';
//li[4].style.backgroundColor = 'yellow';

// QUERYSELECTOR //
var header = document.querySelector('#main-header');
header.getElementsByClassName.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Hello World'

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND"

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'blue';

// ASSIGNMENT //

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.backgroundColor = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.display = 'none';

// QUERYSELECTORALL //

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
for(var i=0;i < odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4';
    even[i].style.backgroundColor = '#ccc';
}

// ASSIGNMENT //

var fontcolor = document.querySelectorAll('.list-group-item');
console.log(fontcolor);
fontcolor[1].style.color = 'green';

var odd = document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i < odd.length; i++){
    odd[i].style.backgroundColor = 'green';
}


