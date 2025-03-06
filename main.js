document.addEventListener("DOMContentLoaded", function () {
    var user=document.querySelector("#user");
    var pass=document.querySelector("#pass");
    var btn1=document.querySelector("#btn1");
    btn1.addEventListener("click",()=>{
        if(!(user.value=="gpgnvm" && pass.value="gpt@183")){
            btn1.disabled="true";
        }
    });
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');

    if (registerBtn && loginBtn && container) {
        registerBtn.addEventListener('click', () => {
            container.classList.add('active');
        });

        loginBtn.addEventListener('click', () => {
            container.classList.remove('active');
        });
    } else {
        console.error("One or more elements not found. Check your HTML structure.");
    }
});
