let inputValue = document.querySelector("#input-field");
let outputValue = document.querySelector("#output-field");

function convertLower(){
  let result = inputValue.value.toLowerCase();
  outputValue.textContent = result ;
}

function convertUpper(){
  let result =  inputValue.value.toUpperCase();
    outputValue.textContent = result ;
}

function bold(){
  outputValue.style.fontWeight = "bold";
  let result = inputValue.value;
  outputValue.textContent = result;
}
function italic(){
  outputValue.style.fontStyle = "italic"
  let result =  inputValue.value;
  outputValue.textContent = result ;
}

function underLine(){
  outputValue.style.textDecoration = "underline"
  let result =  inputValue.value;
  outputValue.textContent = result ;
}

function capitalize(){
  
  let result =  inputValue.value.charAt(0).toUpperCase()+ inputValue.value.slice(1);
    outputValue.textContent = result ;
}

 document.querySelector(".uppercase").addEventListener("click",convertUpper);

 document.querySelector(".lowercase").addEventListener("click",convertLower);

 document.querySelector(".bold").addEventListener("click",bold);

 document.querySelector(".italic").addEventListener("click",italic);

 document.querySelector(".underline").addEventListener("click",underLine);

 document.querySelector(".capitalize").addEventListener("click",capitalize);

 