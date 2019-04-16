const username = localStorage.getItem("user");
let userName = JSON.parse(username).username ;
document.getElementById("username").innerHTML = userName ;

const user = JSON.parse(localStorage.getItem("AllCategories"));
var tableData = user.map(Category => (
    `
      <tr>
        <td>${Category.Id}</td>
        <td>${Category.addCat}</td>
        <td>${Category.date}</td>
      </tr>
    `
  )).join('');
  
  var tbody = document.querySelector('#body');
  tbody.innerHTML = tableData;



