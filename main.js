//BOOK LIST
//linked to booklist.html

//array of books
const books = [
  {
    title: 'The Design of EveryDay Things',
    author: 'Don Norman',
    alreadyRead: false,
    link: 'https://atasr2p9qzn2dv1dr1y68qz1-wpengine.netdna-ssl.com/wp-content/uploads/2018/04/bears-in-alaska-iii-1180x700.jpg'
  }, {
    title: 'The Most Human Human',
    author: 'Brian Christian',
    alreadyRead: true,
    link: 'https://ichef.bbci.co.uk/news/660/cpsprodpb/1401A/production/_102764918_003899173.jpg'
  }
];


//Iterate through the array of books. For each book, create a p element with the book title and author and append it to the page.

/*
let header = document.querySelector('header');

for (let i = 0; i < books.length; i++) {

  //for each loop, create a new p element
  let newP = document.createElement('p');

  //add text for each loop
  newP.innerHTML = `${books[i].title} by ${books[i].author}`;

  //append p elements to header
  header.appendChild(newP);
}

console.log(header);
*/



//Use a ul and li to display the books.
/*
let header = document.querySelector('header');

//create one new ul
let newUl = document.createElement('ul');

//append new ul to the header
header.appendChild(newUl);

//declare variable to target ul inside header
let headerUl = document.querySelector('header ul');

//same as exercise, but with li instead of p
for (let i = 0; i < books.length; i++) {
  let newLi = document.createElement('li');
  newLi.innerHTML = `${books[i].title} by ${books[i].author}`;
  headerUl.appendChild(newLi);
}

console.log(header);
*/


//Add an img to each book that links to a URL of the book cover.

//all same as above, except an img (as link) is added for each iteration (added links to books array)
let header = document.querySelector('header');
let newUl = document.createElement('ul');
header.appendChild(newUl);
let headerUl = document.querySelector('header ul');

for (let i = 0; i < books.length; i++) {
  let newLi = document.createElement('li');
  newLi.innerHTML = `${books[i].title} by ${books[i].author}`;
  headerUl.appendChild(newLi);

  //creating new link
  let newLink = document.createElement('a');
  //with the attribute href and value refering to the link
  newLink.setAttribute('href', books[i].link);

  //same for the img, but src instead of href
  let newImg = document.createElement('img');
  newImg.setAttribute('src', books[i].link);
  //and set max width of img
  newImg.style.maxWidth = '400px';

  //adding the img as child of the link
  newLink.appendChild(newImg);

  //adding each link (with img) to each li element
  newLi.appendChild(newLink);

  //change style of book if read
  if (books[i].alreadyRead === true) {
    newLi.style.backgroundColor = 'yellow';
  }
}

let createLink = document.createElement('a');
createLink.innerHTML = 'About me';
createLink.setAttribute('href', 'about-me.html');
document.body.appendChild(createLink);

console.log(document.body);



//Change the style of the book depending on whether you have read it or not.

//see above example
