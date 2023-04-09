// console.log(window.location.href);

// let buttonGoogleOpen = document.getElementById("btn-google-open");

// buttonGoogleOpen.addEventListener("click", function () {
//     window.open('https://www.google.com');
//     // console.log(buttonGoogle.textContent);
//     buttonGoogleOpen.textContent = 'opening in new tab!';
// });

// let buttonGoogleClose = document.getElementById("btn-google-close");

// buttonGoogleClose.addEventListener("click", function () {
//     window.close();
//     // console.log(buttonGoogle.textContent);
//     buttonGoogleClose.textContent = 'tab closed';
// });

// console.log(window.location);
// in pixels
// console.log(window.innerHeight, window.innerWidth);

// window.alert('this is an alert');

// if (window.confirm('Do you want to confirm the action?')) {
//     console.log('user selected ok');
// } else {
//     console.log('user selected cancel');
// }

// let name = window.prompt('enter your name');
// console.log(`hi ${name}. Nice to meet you!`);

// execute after 5 seconds

// function executeThis() {
//     console.log('executed after 5 seconds');
// }

// window.setTimeout(executeThis, 5000);

// let i = 0;
// function Incrementer() {
//     // console.log(i);

//     document.getElementById("timer").innerText = i;
//     i++;
// }

// window.setInterval(Incrementer, 1000);


// let timerParagraph = document.getElementById('timer');

// console.log(timerParagraph.innerText);
// console.log(timerParagraph.style.color);

// timerParagraph.innerText = 'Time Out!';

// timerParagraph.innerHTML = `<ol>
// <li>First item</li>
// <li>Second item</li>
// <li>Third item</li>
// <li>Fourth item</li>
// </ol>`;

// let newElement = document.createElement('p');
// newElement.textContent = 'Second Paragraph!';

// timerParagraph.appendChild(newElement);

// const xhr = new XMLHttpRequest();

// xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');

// xhr.onload = function () {
//     // response handling
//     // console.log(this.status);
//     if (this.status == 200) {
//         const data = JSON.parse(xhr.responseText);
//         // console.log(data[0].address.zipcode);

//         // document.getElementById('timer').innerText = data[0].address.zipcode;
//     }
// };

// xhr.send();
// let a =10;
// console.log(a);

//  var p = document.createElement("p");

//  p.innerHTML="this is div"

//  document.body.append(p)

// <!-- <div class="container">
// <div class="row">
//     <div class="col"></div>
// </div>
// </div> -->

// var parent=document.createElement("div");
// parent.setAttribute("class","container")
// var child=document.createElement("div");
// child.setAttribute("class","row")
// var child2=document.createElement("div");
// child2.setAttribute("class","col")
// child.append(child2)
// parent.append(child);
// document.body.append(parent);


function rest() {
    var Firtname =document.getElementById("Firt name").value;
    var middlename =document.getElementById("Middle name").value;
    var lastname=document.getElementById("last name").value;
    var email =document.getElementById("email").value;

    console.log(Firtname);
    console.log(middlename);
    console.log(lastname);
    console.log(email);
    
}



