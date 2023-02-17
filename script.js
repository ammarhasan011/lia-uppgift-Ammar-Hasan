const blur = document.querySelector(".blur");
const popupBtn= document.querySelector(".popupBtn");
const loginBtn= document.querySelector(".loginBtn");
const form = document.querySelector(".form");
const xBtn= document.querySelector(".xBtn");
const logoutBtn = document.querySelector(".logoutBtn");
const firstMessage = document.querySelector(".firstMessage");
const secondMessage = document.querySelector(".secondMessage");
const bgimagetext = document.querySelector(".bgimagetext");

// blur around login form
popupBtn.addEventListener("click", () => {
    blur.showModal();
    console.log("öppna")
  });
xBtn.addEventListener("click", () => {
    blur.close();
    console.log("stäng")
});
loginBtn.addEventListener("click", () => {
    blur.close();
    console.log("stäng")
});

let username =document.querySelector(".username");


popupBtn.addEventListener("click", popUp);
logoutBtn.addEventListener("click", logOut);
loginBtn.addEventListener("click", checkCode);
xBtn.addEventListener("click", cancelForm);


logoutBtn.style.display = "none";
firstMessage.style.display = "none";
secondMessage.style.display = "none";
form.style.display="none";


let userArray =[
    {
        username: "Ammar",
    },
    {
        username: "Robert"
    },
    {
        username: "Bamse",
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
    bgimagetext.style.display="none";
}

function cancelForm(){
    console.log("cancel form")
    form.style.display="none";
    bgimagetext.style.display="block";
}

function checkCode(){
    let search= false;
    for (let users of userArray){
        // console.log(users.username);
        // console.log(username.value);
     if (users.username == username.value) {
        search=true;
         renderSeccessful();
         return
        }
    }
    if(!search){
        alert("Användarnamn finns inte i systemet. Var god testa med Ammar, Robert eller Bamse.");
    }
}

//function for seccessful login
function renderSeccessful(){
    let userkey = localStorage.getItem("userName");

    console.log(userkey);
        //  console.log(username.value);
    if (username.value != userkey){
          //DU ÄR INLOGGAD SOM
        let loggingIn = document.querySelector(".loggingIn");
        loggingIn.innerText = username.value;
        firstMessage.style.display = "block";
        secondMessage.style.display = "none";
    } else {
        //Välkommen tillbaka
        let loggedIn = document.querySelector(".loggedIn");
        loggedIn.innerText = username.value;
        secondMessage.style.display = "block";
        firstMessage.style.display = "none";
    }
    localStorage.setItem("userName", username.value);
    form.style.display = "none";
    popupBtn.style.display="none";
    logoutBtn.style.display="block";
    bgimagetext.style.display="block";
}

function logOut(){
    localStorage.removeItem("username");
    form.style.display="none";
    logoutBtn.style.display = "none";
    popupBtn.style.display="block";
    firstMessage.style.display = "none";
    secondMessage.style.display = "none";
    username.value = "";
    bgimagetext.style.display="block";
}