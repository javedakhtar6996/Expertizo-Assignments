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


let sum = 0
for(var i = 0; i < user.length; i++)
{
  sum += parseInt(user[i].amount);
}
document.getElementById("total")
.innerHTML = parseInt(sum) ;

function MyPrint() 
{
  document.getElementById("print").style.display = "none"
  window.print();
}



