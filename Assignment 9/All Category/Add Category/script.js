const username = localStorage.getItem("user");
let userName = JSON.parse(username).username ;
document.getElementById("username").innerHTML = userName ;
function myFun() {
    const addCat = document.getElementById("add-category").value ;
    const Id = Math.ceil(Math.random() * 1000) + 1000;
    var newDate = new Date();
    var Time = newDate.toLocaleTimeString();
    var dt = newDate.toLocaleDateString();
    const date = Time + ' ' + dt;
    let user = JSON.parse(localStorage.getItem("user"));
    let userId = user.userID;
    const payload = {
        addCat,
        Id,
        date,
        userId 
    }
    let users = localStorage.getItem("AllCategories");
    if(users == null) {
        users = [] ;
    }else {
        users = JSON.parse(users);
    }
    users.push(payload);
    users = JSON.stringify(users);
    localStorage.setItem("AllCategories" , users);
    alert("Category is added!");
    return false;
}