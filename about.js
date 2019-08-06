
// ABOUT ME
//linked to about-me.html

// * In JavaScript, change the body tag's style so it has a font-family of "Arial, sans-serif".
document.body.style.fontFamily = "Arial, sans-serif";


// * In JavaScript, replace each of the spans (nickname, favorites, hometown) with your own information.
const span = document.querySelectorAll("ul span");
span[0].innerHTML = "Trine"; //nickname
span[1].innerHTML = "colors"; //favorites
span[2].innerHTML = "Ry"; //hometown


// * Iterate through each li and change the class to "list-item".
const li = document.getElementsByTagName("li");
for (let i = 0; i < li.length; i++) {

  //set class name
  // li[i].className = "list-item";
  //or
  //to not replace old class name, use classList and add
  li[i].classList.add('list-item');

  // li[i].setAttribute('style', 'color: red');
  //or
  li[i].style.color = 'red';
}


// * Add a style tag that sets a rule for .list-item to make the color red.
// see above


// * Create a new img element and set its src attribute to a picture of you. Append that element to the page.
const newImg = document.createElement('img'); ////create new img, add src attribute and append to body
newImg.setAttribute('src', 'http://www.birdsandblooms.com/wp-content/uploads/2018/03/Yellow-Northern-Cardinal-Jeremy-Black-628x416.jpg');
document.body.appendChild(newImg);



console.log(document.body);
