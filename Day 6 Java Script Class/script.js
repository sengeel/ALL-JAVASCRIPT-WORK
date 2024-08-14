
function generatePassword() {
   const PasswordLength = 8;
   const characterSet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   let password = '';

for (let i = 0; i < PasswordLength; i++) {
    let randomIndex =Math.floor(Math.random() * characterSet.length)
    password += characterSet.charAt(randomIndex);
    
};

const fresh = document.getElementById('password').value = password

};

function Reset() {
    password.value = ''   
}

function specialCharacter() {
    const PasswordLength = 8;
   const spe = "!@#$%^&*()-_+=}]{[:;'?/>.<,~`|0987654321abcdefghijklmnopqrstuvwxyz"
    let password = '';
 
 for (let i = 0; i < PasswordLength; i++) {
     let randomIndex =Math.floor(Math.random() * spe.length)
     password += spe.charAt(randomIndex);
     
 };
 const slap = document.getElementById('password').value = password
 

 
}