const username = localStorage.getItem("user");
let userName = JSON.parse(username).username ;
document.getElementById("username").innerHTML = userName ;


const user = JSON.parse(localStorage.getItem("AddExpenses"));
var tableData = user.map(Category => (
    `
        <tr>
            <td>${Category.Id}</td>
            <td>${Category.description}</td>
            <td>${Category.amount}</td>
            <td>${Category.category}</td>
            <td>${Category.date}</td>

        </tr>
    `
  )).join('');
  
  var tbody = document.querySelector('#body');
  tbody.innerHTML = tableData;
