// // /*console.log("Hello, from JS!");*/
// // // const element = document.getElementsByTagName("h1");
// // // const ele = element[0];
// // // console.log(ele.innerHTML="Practicing DOM Manipulation!");
// // const para = document.createElement("p");
// // para.innerHTML= "innerText property refers to the text inside an element";

// // const divEle = document.getElementById("facts-list");
// // divEle.appendChild(para);

// function addNewFact(factText) {
// 	const para = document.createElement("p");
// 	para.innerHTML = factText;

// 	const divEle = document.getElementById("facts-list");
// 	divEle.appendChild(para);
// }

// addNewFact("innerText property refers to the text inside an element");
// addNewFact("append() or appendChild() methods can add a new child element");

// document.getElementById("facts-list").innerHTML =
// `<p><i>Browser</i> creates DOM from HTML content</p>
// <p>Developers can access the DOM using the DOM APIs</p>
// <p>innerHTML property refers to the HTML inside an element</p>`;


	
document.getElementById("table-div").innerHTML = `

    <table border="1" width="400px"> 
        <thead> 
            <tr>
                <td>Id</td>

                <td>Name</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>

                <td>Ramesh</td>
            </tr>
        </tbody>
    </table>

`;
