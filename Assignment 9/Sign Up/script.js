const onSignUp = e => {
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const username = document.querySelector("#username").value;
    const userID = Math.ceil(Math.random() * 1000) + 1000;
    const payload = {
        email,
        password,
        username,
        userID 
    };
    let users = localStorage.getItem("users");
    if(users == null) {
        users = [] ;
    }else {
        users = JSON.parse(users);
    }
    users.push(payload);
    users = JSON.stringify(users);
    localStorage.setItem("users" , users);
    localStorage.setItem("user",JSON.stringify(payload));
    alert("Your account has been created successfully :> :> :>");
    window.location = "../Sign\ In/index.html";
    return false;
}