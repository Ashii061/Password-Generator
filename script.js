const passwordBox= document.getElementById("password");
const copyIcon= document.getElementById("copyIcon");
const generateBtn = document.getElementById("generateBtn");

function generatePassword(length=12){
    const chars ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password="";

    for(let i=0;i<length;i++)
    {
        const randomChars=chars[Math.floor(Math.random()*chars.length)];
        password+=randomChars;
    }
    return password;
}

generateBtn.addEventListener("click",()=>{
    const newPassword=generatePassword();
    passwordBox.value=newPassword;
});


copyIcon.addEventListener("click",()=>{
    if(passwordBox.value){
    navigator.clipboard.writeText(passwordBox.value);    
    alert("Password copied to the clipboard");
    }
});