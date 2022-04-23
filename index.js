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

// function createTable(){
//     //creating table element
//    let table = document.createElement("table");
//     //setting the styles to the table
//    table.setAttribute("border", "solid");
//    table.setAttribute("width", "600px");
//     //adding the header to the table

//     let thead = document.createElement("thead");

//     thead.innerHTML = `<tr><th>Id</th><th>Name</th></tr>`;
//     table.append(thead);

//     //creating body elements

//     let tbody = document.createElement("tbody");

//     let trow = document.createElement("tr");

//     trow.innerHTML = `
//     <td>1</td>

//     <td>Rajesh</td>`;

//     tbody.appendChild(trow);
//     table.appendChild(tbody);

//     document.getElementById("table-div").append(table);
// }

// createTable();

function getStyledTable() {
	let table = document.createElement("table");
	//setting the styles to the table
	table.setAttribute("border", "solid");
	table.setAttribute("width", "600px");

	return table;
}

function getTableHeader() {
	let thead = document.createElement("thead");
	thead.innerHTML = `
      <tr>
          <th>Id</th>
          <th>Name</th>
      </tr>
    `;
	return thead;
}

function createStudentTableRow(id, name) {
	let tRow = document.createElement("tr");
	tRow.innerHTML = `<td> ${id}</td>
                     <td> ${name} </td>`;
	return tRow;
}

function loadTableRowsFromJson(){
    let tBody = document.createElement("tbody");

    for(let i=0; i<students.length; i++)
    {
        let currentStudent = students[i];
        let tRow = createStudentTableRow(currentStudent.id, currentStudent.name);
        tBody.appendChild(tRow);
    }

    return tBody;
    
}

function loadTableRefactored() 
{
    let showTableButton = document.querySelector('button');
    showTableButton.addEventListener('click', function(){
        //Create table element
        let table = getStyledTable();	

        //create thead and append it to table element
        let thead = getTableHeader();
        table.appendChild(thead);

        //create table body and append it to table element
        let tBody = loadTableRowsFromJson();
        table.appendChild(loadTableRowsFromJson()); 

        //table should be appended to document within <div> element
        document.getElementById("table-div").append(table);
    })
   
}

loadTableRefactored();







