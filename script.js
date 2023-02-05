//login
const loginBtn= document.querySelector("#loginBtn");

loginBtn.addEventListener("click",()=>{
    popup.display="block"
});

function closePopup(){
    popup.display="none;"
}