"use strict";

//* getting all the values of the elements

const value1 = document.getElementById('unit1');       

const value2 = document.getElementById('unit2');                   

const enterValue = document.getElementById('in'); 

const outputValue = document.getElementById('out');       

const convert = document.getElementById('clickToConvert');    

const swap = document.getElementById('swapbtn');   

const reset = document.getElementById('resetbtn');   

const day = document.getElementById("day");

const theme = document.getElementById("theme");

//---------------------------------------------------------

// add day/night button

day.addEventListener("click", ()=>{
    if(day.innerHTML == '<i class="fa-solid fa-sun"></i>'){
    day.innerHTML = '<i id="btnday" class="fa-solid fa-moon"></i>';
    theme.style.background = "rgb(229, 242, 253)";
    theme.style.color = "black"
    document.getElementById("btn").style.color =  "rgb(0, 0, 0)";
    document.getElementById("btnday").style.color =  "rgb(0, 0, 0)";
        

    }else{
        day.innerHTML ='<i class="fa-solid fa-sun"></i>';
        theme.style.background = "rgb(15, 15, 20)";
        document.getElementById("btn").style.color =  "#fff";
        theme.style.color = "#fff"
    }

})



// Add event on convert button

convert.addEventListener('click', ()=>{
    var val1 = +value1.value;
    var val2 = +value2.value;


//converting Binary to Decimal format


    if(val1 == 2 && val2 == 10){
        var text = enterValue.value;
        if(!isNaN(Number('0B' + text))){
            var convertedVal = (parseInt(text, 2));
            outputValue.value = convertedVal;
    
        }else{
            outputValue.value = "Please Enter Valid Number";
        }

        console.log("hello");
    }

// converting Binary to Octal


    if(val1 == 2 && val2 == 8){
        var text = enterValue.value;
        if(!(Number.isNaN('0B'+text))){
            var convertedVal = (parseInt(text, 2)).toString(8);
            outputValue.value = convertedVal;
            console.log(convertedVal);
            console.log(outputValue.value);
        }else{
            outputValue.value = "Please Enter Valid Number";
        }
    }

//converting Binary to Hexadecimal
if(val1 == 2 && val2 == 16){
    var text = enterValue.value;
    if(!(Number.isNaN('0B'+text))){
        var convertedVal = (parseInt(text, 2)).toString(16);
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}

// converting Hexadecimal to Binary

if(val1 == 16 && val2 == 2){
    var text = enterValue.value;
    if(!(Number.isNaN('0x'+text))){
        var convertedVal = (parseInt(text, 16)).toString(2);
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}

// converting Hexadecimal to Decimal

if(val1 == 16 && val2 == 10){
    var text = enterValue.value;
    if(!(Number.isNaN('0x'+text))){
        var convertedVal = (parseInt(text, 16));
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}


// converting Hexadecimal to Octal

if(val1 == 16 && val2 == 8){
    var text = enterValue.value;
    if(!(Number.isNaN('0x'+text))){
        var convertedVal = (parseInt(text, 16)).toString(8);
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}

// converting Decimal to Binary

if(val1 == 10 && val2 == 2){
    var text = enterValue.value;
    if(!isNaN(text)){
        var convertedVal = (parseInt(text, 10)).toString(2);
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}

// converting Decimal to Octal

if(val1 == 10 && val2 == 8){
    var text = enterValue.value;
    if(!isNaN(text)){
        var convertedVal = (parseInt(text, 10)).toString(8);
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}


//  converting  Decimal to Hexadecimal

if(val1 == 10 && val2 == 16){
    var text = enterValue.value;
    if(!isNaN(text)){
        var convertedVal = (parseInt(text, 10)).toString(16);
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}

// converting Octal to Binary

if(val1 == 8 && val2 == 2){
    var text = enterValue.value;
    if(!(Number.isNaN('0O'+text))){
        var convertedVal = (parseInt(text, 8)).toString(2);
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}

// converting Octal to Decimal

if(val1 == 8 && val2 == 10){
    var text = enterValue.value;
    if(!(Number.isNaN('0O'+text))){
        var convertedVal = (parseInt(text, 8));
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}

//converting Octal to Hexadecimal

if(val1 == 8 && val2 == 16){
    var text = enterValue.value;
    if(!(Number.isNaN('0O'+text))){
        var convertedVal = (parseInt(text, 8)).toString(16);
        outputValue.value = convertedVal;
        console.log(convertedVal);
        console.log(outputValue.value);
    }else{
        outputValue.value = "Please Enter Valid Number";
    }
}

});

//------------------------------------------

// Add Event on Swap Button

swapbtn.addEventListener('click', ()=>{
    let changeTo = value2.value;
    let changeFrom = value1.value;
    value1.value = changeTo;
    value2.value = changeFrom;

    let inputFrom = enterValue.value;
    let inputTo = outputValue.value;
    outputValue.value = inputFrom;
    enterValue.value = inputTo;
});

//-------------------------------------------

// Add Event on Reset Button

reset.addEventListener("click", ()=>{
    outputValue.value = "";
    enterValue.value = "";
  });