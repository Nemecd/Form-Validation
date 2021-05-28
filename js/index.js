const form = document.getElementById('form')
const username = document.getElementById('user')
const email = document.getElementById('mail')
const password = document.getElementById('pass') 
const check = document.getElementById('pass2')

 form.addEventListener('submit', function(e) {
     e.preventDefault()
     checkInputs();
    //  console.log('pass');
    
     /* if(checkInputs()){
         alert('Pls fill up the forms correctly') 
    }else{
        document.getElementById('form').submit(); 
    } */
    //  formsub()
 })

function checkEmail() {
    const emailValue = email.value.trim();
    if(emailValue === ''){
        setErrorFor(email, 'Email cannot b Blank')
        return false;
    }else if(!correctMail(emailValue)){
        setErrorFor(email, 'Email is invaild');
        return false;
    }else{
        setSuccessFor(email);
        return true;
    }
}

function checkUsername(){
    const usernameValue =username.value.trim()
    if(usernameValue === ''){
        //show error
        //add  error classs
        setErrorFor(username, 'Username can not b blank')
        return false;
    }else{
        //add success class
        setSuccessFor(username)
        return true
    }
}

function checkPassword(){
    let passValue = password.value.trim()
    if(passValue === ''){
        setErrorFor(pass, 'Password cannot be empty')
        return false
    }else{
        setSuccessFor(pass)
        return true;
    }
}

function confirmPassword(){
    const checkValue = check.value.trim()
    let passValue = password.value.trim();
    if(checkValue === ''){
        setErrorFor(pass2, 'password cannot be empty')
        return false;
    }else if(passValue !== checkValue){
        setErrorFor(pass2, 'Password do not match!!');
        return false;
    }else{
        setSuccessFor(pass2)
        return true;
    }
}


 function checkInputs(){
    if (checkUsername() === true && checkEmail() === true && checkPassword() === true && confirmPassword() === true) {
        form.submit();
    }
}


//  function formsub(){
//      if (checkInputs === true){
//         alert.document.getElementById('form').submit();
//      }else{
//          alert('Pls Check Your form before submting')
//      }
//  }
 function setErrorFor(input ,msg){
     const formControl = input.parentElement
     const small = formControl.querySelector('small')
     // add error message inside the small tag
     small.innerText = msg;
     //add error class
     formControl.className = 'form-control error'
 }
 function setSuccessFor(input){
    const formControl = input.parentElement
    formControl.className = 'form-control success'
 }
 function correctMail(email){
     return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
 }