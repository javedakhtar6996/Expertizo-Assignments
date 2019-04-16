const username = localStorage.getItem("user");
let userName = JSON.parse(username).username ;
document.getElementById("username").innerHTML = userName ;
let category = JSON.parse(localStorage.getItem("AllCategories"));
document.getElementById("body").innerHTML = 
`
<label>Category:</label>
<select class="form-control"  id="cat" required>
        <option>Select category</option>
        ${
            category.map(element => {
                return `<option value = ${element.addCat}>${element.addCat}</option>`
            }).join(" ")
        }
</select> 
`   

function myFun() {
    let user = JSON.parse(localStorage.getItem("user"));
    let userId = user.userID;
    let category = document.getElementById("cat").value ;
    let description = document.getElementById("description").value ;
    let amount = document.getElementById("amount").value ;
    var newDate = new Date();
    var Time = newDate.toLocaleTimeString();
    var dt = newDate.toLocaleDateString();
    const date = Time + ' ' + dt
    let Id = Math.ceil(Math.random() * 1000) + 1000 ;
    const payload = {
        Id ,
        amount ,
        description,
        date,
        userId,
        category
    }
    let users = localStorage.getItem("AddExpenses");
    if(users == null) {
        users = [] ;
    }else {
        users = JSON.parse(users);
    }
    users.push(payload);
    users = JSON.stringify(users);
    localStorage.setItem("AddExpenses" , users);
    alert('Expense is Added');
    return false;
}
