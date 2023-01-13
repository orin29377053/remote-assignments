/* Request 1: Click to Change Text.
When the user clicks on the "Welcome Message" block, change the text to "Have a Good Time!".*/

let head = document.getElementsByClassName("hello");
head[0].addEventListener('click', function () {
  head[0].textContent = "Have a Good Time!";
}
)

/* Request 2: Click to Show More Content Boxes.
There are some more content boxes waiting to show. When the user clicks the Call-to-Action button, show those hidden content boxes.*/

let btn = document.getElementById('button');
let hide_box = document.getElementsByClassName('second');
btn.addEventListener('click', function () {
  hide_box[0].style.display = "flex";
})