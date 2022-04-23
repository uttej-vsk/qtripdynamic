/*console.log("Hello, from JS!");*/
// const element = document.getElementsByTagName("h1");
// const ele = element[0];
// console.log(ele.innerHTML="Practicing DOM Manipulation!");
const para = document.createElement("p");
para.innerHTML= "innerText property refers to the text inside an element";

const divEle = document.getElementById("facts-list");
divEle.appendChild(para);
