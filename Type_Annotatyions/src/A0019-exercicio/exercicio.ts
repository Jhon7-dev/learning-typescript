const SHOW_ERROR_MESSAGES = 'show-error-message';
import isEmail from 'validator/lib/isEmail';
// VALIDAR NO ENVIO DO FORMULÁRIO 

//seleciona os form
const form = document.querySelector('.fom') as HTMLFormElement;
const username = document.querySelector('.username') as HTMLInputElement;
const email = document.querySelector('.email')as HTMLInputElement;
const password = document.querySelector('.password')as HTMLInputElement;
const password2 = document.querySelector('.password2')as HTMLInputElement;

// captura o evento de submit do form

form.addEventListener('submit', function(event){
     event.preventDefault(); //p nao enviar mais
     // quero fazer uma função que se tiver um erro, eu vou ocultá-la
     hideErrorMessages(this);
     //checar campos vazios
     checkForEmptyFields(username,email,password,password2); 
     //CHECAR EMAIL
     checkEmail(email);
     //checagem de password
     checkEqualPasswords(password,password2);
});
function checkForEmptyFields(...input: HTMLInputElement[]):void{
     input.forEach(input =>{
          if(!input.value) showErrorMessage(input,'Este camoi não pode ficar vazio')
     });
}
function checkEmail (input: HTMLInputElement):void{
     if(!isEmail(input.value)) showErrorMessage(input, 'Email Inválido');
}
function checkEqualPasswords(password:HTMLInputElement,password2:HTMLInputElement){
     if(password.value !== password2.value){
          showErrorMessage(password,'senhas não batem')
          showErrorMessage(password2,'senhas não batem')
     }
}
function hideErrorMessages(form:HTMLFormElement):void{
     // selecionar todos os elemntos
     form.querySelectorAll('.' + SHOW_ERROR_MESSAGES).forEach(item => item.classList.remove(SHOW_ERROR_MESSAGES));
}
function showErrorMessage(input:HTMLInputElement,msg:string):void{
     // vou exibir uma mensagem p cada campo 
     // quero receber um input
     const formFields = input.parentElement as HTMLDivElement;
     const errorMessage = formFields.querySelector('.error-message',) as HTMLSpanElement;
     errorMessage.innerHTML = msg;
     formFields.classList.add(SHOW_ERROR_MESSAGES);
     
}
showErrorMessage(username, 'MENSAGEM'); // MOSTRAR A MENSAGEM
hideErrorMessages(form); // ocultar as mensagens