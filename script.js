const popupBtn= document.querySelector(".popupBtn");
const loginBtn= document.querySelector(".loginBtn");
const form = document.querySelector(".form");
const xBtn= document.querySelector(".xBtn");
const logoutBtn = document.querySelector(".logoutBtn");
const h2welcome = document.querySelector(".welcome");
let username =document.querySelector(".username");


popupBtn.addEventListener("click", popUp);
logoutBtn.addEventListener("click", logOut);
loginBtn.addEventListener("click", checkCode);
xBtn.addEventListener("click", cancelForm);


logoutBtn.style.display = "none";
form.style.display="none";


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

function popUp(){
    console.log("popup form")
    form.style.display="block";
}

function cancelForm(){
    console.log("cancel form")
    form.style.display="none";
}

function checkCode(){
    for (let users of userArray){
        console.log(users.username);
        console.log(username.value);
        let search= false;
     if (users.username == username.value) {
        search=true;
         localStorage.setItem("userName", username.value);
         renderSeccessful();
         return
        }
    }
    if(!search){
        alert("Användarnamn finns inte i vårt system. Var god försök igen.");
    }
}

//function for seccessful login
function renderSeccessful(){
    let userkey =localStorage.getItem("userName", username.value);
    if(username){
        h2welcome.innerText = "Välkommen Tillbaka" + " " + userkey;
    }else {
        h2welcome.innerText = "DU ÄR INLOGGAD SOM" + " " + userkey;
    }
    form.style.display = "none";
    popupBtn.style.display="none";
    logoutBtn.style.display="block";

}

function logOut(){
    localStorage.removeItem("username");
    form.style.display="none";
    logoutBtn.style.display = "none";
    popupBtn.style.display="block";
    h2welcome.style.display = "none";
}