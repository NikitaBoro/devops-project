
const button = document.querySelector('.btn')
const input = document.querySelector('.input-name')
const message = document.getElementById('msg')

button.onclick = function(){
    const name = input.value.trim();
    if (name===""){
        message.textContent="Please enter name";
        message.style.color="red";
    } else {
        message.textContent=`Welcome ${name}!`;
        message.style.color="green";
    }
}