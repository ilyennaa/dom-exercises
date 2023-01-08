/*
Code provided by Odin Project
*/
const container = document.querySelector('#container');
const content = document.createElement('div');

content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

/* 
Personal code starts here
*/

// create the elements in memory
const redPara = document.createElement("p");
const blueH3 = document.createElement("h3");
const personalDiv = document.createElement("div");
const personalDivH1 = document.createElement("h1");
const personalDivP = document.createElement("p");

personalDiv.classList.add("personalDiv");




// style them
redPara.style.color = "red";
blueH3.style.color = "blue";
personalDiv.style.border = "2px solid black";
personalDiv.style.backgroundColor = "pink";

// apply content
redPara.textContent = "Hey I'm red!";
blueH3.textContent = "I'm a blue h3!";
personalDivH1.textContent = "I'm in a div"
personalDivP.textContent = "ME TOO!";


// append them to the DOM   
container.appendChild(redPara);
container.appendChild(blueH3);
container.appendChild(personalDiv); // need to add to DOM before querySelector
const personalDivSelector = document.querySelector(".personalDiv");
console.log(personalDivSelector);
personalDivSelector.appendChild(personalDivH1);
personalDivSelector.appendChild(personalDivP);




