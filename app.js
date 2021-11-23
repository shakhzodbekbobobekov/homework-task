let userNumber = prompt(`Siz bir raqam tanlang.`)
let random1 = Math.floor(Math.random() * 10) + 1
if( userNumber == random1 ) {
 alert(`${userNumber} Siz to'gri topdingiz.  Sizga gap yuq janob 😁😱`);
}else{
  alert(`Tanlangan raqam ${random1}🤪 edi. Yana urinib kuring`);
}