const myinput = document.getElementById("qnt");
function stepper(btn){

   let id = btn.getAttribute("id");
   let min = myinput.getAttribute("min");
   let max = myinput.getAttribute("max");
   let step = myinput.getAttribute("step");
   let val = myinput.getAttribute("value");
   let calcStep = (id == "tirar") ? (step*1) : (step * -1);
   let newvalue = parseInt(val) + calcStep;
   
   


   if(newvalue >= min && newvalue <= max){
    myinput.setAttribute("value", newvalue);

    
    let preco = localStorage.getItem("preco") 

    var valorQuant = document.getElementById('qnt').value;
    var totalF = valorQuant * preco;

    var Preçototal = document.getElementById("valor-total");
    Preçototal.innerHTML = "R$"+totalF+",00";

    var subtotal = document.getElementById("sub-total")
    var total = document.getElementById("total")

    
    localStorage.setItem('qnt', valorQuant);
    localStorage.setItem('preçototal', totalF);


    subtotal.innerHTML = totalF+",00";
    total.innerHTML = totalF+",00";
   }

}

function ver(){


  

    var Nome = document.getElementById("info-name")
    var Preço = document.getElementById("info-preço")  
    var imagem = document.getElementById("info-img") 
    var Preçototal = document.getElementById("valor-total");
    var subtotal = document.getElementById("sub-total");
    var total = document.getElementById("total");

   

    Nome.textContent = localStorage.getItem('nome');
    Preço.textContent = "R$"+localStorage.getItem('preco')+",00";
    imagem.src = localStorage.getItem('img');
    Preçototal.textContent = "R$"+localStorage.getItem('preco')+",00"; 
    subtotal.textContent = localStorage.getItem('preco')+",00";
    total.textContent = localStorage.getItem('preco')+",00";
    


    if(valorQuant == 1){
       Preçototal.textContent = "R$"+localStorage.getItem('preco')+",00"; 
       subtotal.textContent = localStorage.getItem('preco')+",00";
       total.textContent = localStorage.getItem('preco')+",00";

    }
    else{
        stepper();
    }
    

     Nome.textContent = localStorage.getItem('nome');
     Preço.textContent = "R$"+localStorage.getItem('preco')+",00";
     imagem.src = localStorage.getItem('img');

     
}


function remove(){

    localStorage.setItem('idValue', null);
    localStorage.setItem('nome', null);
    localStorage.setItem('preco', null);
    localStorage.setItem('img', null);
    localStorage.setItem('preçototal', null);
    localStorage.setItem('qnt', null);
   

}

function enviar(){

}

