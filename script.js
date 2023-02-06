//login
const popUpBtn= document.querySelector(".popUpBtn");
const xBtn= document.querySelector(".xBtn");
const form = document.querySelector(".form");
const h2welcome = document.querySelector(".welcome");
const loginBtn= document.querySelector(".loginBtn");
const logoutBtn = document.querySelector(".logoutBtn");


popUpBtn.addEventListener("click", popUp);
// logoutBtn.addEventListener("click", logOut);
xBtn.addEventListener("click", cancelform);
loginBtn.addEventListener("click", checkCode);


form.style.display="none";

function popUp(){
    console.log("popup form")
    form.style.display="block";
}


function cancelform(){
    console.log("cancel form")
    form.style.display="none";
}

let userArray =[
    {
        username: "Ammar",
    },
    {
        username: "Robert"
    }
]

localStorage.setItem("userArray", JSON.stringify(userArray));

function init(){
    if(localStorage.getItem("username")){
        renderSeccessful()
    }
}
init()

function checkCode(){
    for (let users of userArray){
        console.log(users.username);
        console.log(username.value);
     if (users.username == username.value) {
         localStorage.setItem("userName", username.value);
         renderSeccessful();
         return
     }
    }
 }

//function for seccessful login
function renderSeccessful(){
    let userkey =localStorage.getItem("userName", username.value);
    h2welcome.innerText = "DU ÄR INLOGGAD SOM" + " " + userkey;
    form.style.display = "none";
    loginBtn.style.display="block";
}
// logoutBtn.style.display="none";




// function checkCode(){
//     form.style.display="block"
// }






function logOut(){
localStorage.removeItem("username");
form.style.display="none";
logoutBtn.style.display = "none";
}
