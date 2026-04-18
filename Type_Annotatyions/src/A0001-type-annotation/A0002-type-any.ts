// eu to falando que meu cod vai ser do tipo ANY
// msg:any
// utilize any em apenas ultimo caso
function showMessage(msg: any){
     return msg;
}
console.log(showMessage([1,2,3]));
console.log(showMessage('ola'));
console.log(showMessage('oi'));