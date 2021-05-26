const form = document.getElementById('form')
const username = document.getElementById('user')
const email = document.getElementById('mail')
const password = document.getElementById('pass')
const check = document.getElementById('pass2')

 form.addEventListener('submit', function(e) {
     e.preventDefault()
    //  console.log('pass');
    
     checkInputs()
 })
 function checkInputs(){
     //get values
     const usernameValue =username.value.trim()
     const emailValue = email.value.trim()
     const passValue = password.value.trim()
     const checkValue = check.value.trim()
      if(usernameValue === ''){
          //show error
          //add  error classs
          setErrorFor(username, 'Username can not b blank')
      }else{
          //add success class
          setSuccessFor(username)
      }
      if(emailValue === ''){
          setErrorFor(email, 'Email cannot b Blank')
      }else if(!correctMail(emailValue)){
          setErrorFor(email, 'Email is invaild')
      }else{
          setSuccessFor(email)
      }
      if(passValue === ''){
          setErrorFor(pass, 'Password cannot be empty')
      }else{
          setSuccessFor(pass)
      }
      if(checkValue === ''){
          setErrorFor(pass2, 'password cannot be empty')
      }else if(passValue !== checkValue){
          setErrorFor(pass2, 'Password do not match!!')
      }else{
          setSuccessFor(pass2)
      }
      if()
 }
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