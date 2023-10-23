const wynik = document.querySelectorAll('#gora');
const button = document.querySelectorAll('button');

const liczby = ["0","1","2","3","4","5","6","7","8","9"];
const znaki = ["+/-","AC","%",":","*","-","+",",","="];

let num1 = "";
let num2 = "";
let znak = "";


for(let i = 0; i < button.length; i++){

    button[i].addEventListener('click',function(evt){

        if (liczby.includes(button[i].value)){
             if(!znak){
                num1 +=button[i].value;
                wynik.innerHTML = num1;
                console.log(`num1 = ${num1}`);
             }

              else {
                num2 +=button[i].value;
                wynik.innerHTML = `${num1} ${znak} ${num2} `
                console.log(`num2 = ${num2}`);
             }


        }
    })
}




