

if ( document.readyState == "Loading") {
    document.addEventListener("DOMContentLoaded", ready)
  }else{
    ready()
  }
  var totalAmount= "0,00"
  
  function ready(){
  const removeProductButtons = document.getElementsByClassName("remove-product-button")
  for (var i = 0; i < removeProductButtons.length; i++) {
    removeProductButtons[i].addEventListener("click", removeProduct)
    }
  
    const quantityInputs = document.getElementsByClassName("product-qtd-input")
    for ( var i = 0; i< quantityInputs.length; i++){
      quantityInputs[i].addEventListener("change", updateTotal)
    }
  //mudar
    const addToCartButtons = document.getElementsByClassName("button-hover-background")
    for (var i = 0; i < addToCartButtons.length; i++){
      addToCartButtons[i].addEventListener("click", addProductToCart)
    }
  
    const purchaseButton = document.getElementsByClassName("purchase-button")[0]
    purchaseButton.addEventListener("click", makePurchase)
  }
  function makePurchase(){
    if (totalAmount === "0,00"){
      alert("Seu carrinho está vazio!")
    }else{
      alert(
        `
        Obrigada pela sua compra!
        Valor do pedido: R$${totalAmount}
        Volte sempre, o ARCPET está a sua espera :)
        `
      )
    }
    document.querySelector(".cart-table tbody").innerHTML =""
    updateTotal()
    
  }
  
  function checkIfInputIsNull(event) {
    if(event.target.value === "0"){
      event.target.parentElement.parentElement.remove()
    }
  
  
  
    updateTotal()
  }
  
  function addProductToCart(event){
    const button = event.target
    const productInfos = button.parentElement.parentElement
    const productImage = productInfos.getElementsByClassName("product-image")[0].src
    const productTitle = productInfos.getElementsByClassName("product-title")[0].innerText
    const productPrice = productInfos.getElementsByClassName("product-price")[0].innerText
   
  const productsCartName = document.getElementsByClassName("cart-product-title")
  for (var i = 0; i < productsCartName.length;i ++){
    if(productsCartName[i].innerText === productTitle){
       productsCartName[i].parentElement.parentElement.getElementsByClassName("product-qtd-input")[0].value++
       return
    }
  }
  
  let newCartProduct = document.createElement("tr")
  newCartProduct.classList.add("cart-product")
  
  newCartProduct.innerHTML = 
  `
  <td class="product-identification">
    <img src="${productImage}" alt="${productTitle}" class="cart-product-image">
    <strong class="cart-product-title">${productTitle}</strong>
  </td>
  <td>
    <span class="cart-product-price">${precoc}</span>
  </td>
  <td>
    <input type="number" value="1" min="0" class="product-qtd-input">
    <button type="button" class="remove-product-button">Remover</button>
  </td>
              
  `
  
  const tableBody = document.querySelector(".cart-table tbody")
  tableBody.append(newCartProduct)
  
  updateTotal()
  newCartProduct.getElementsByClassName("product-qtd-input")[0].addEventListener("change", checkIfInputIsNull)
  newCartProduct.getElementsByClassName("remove-product-button")[0].addEventListener("click", removeProduct)
  
  }
  
  
  
  function removeProduct(event) {
    event.target.parentElement.parentElement.remove()
    updateTotal()
  }
  
  function updateTotal(){
    totalAmount = 0 
    const cartProducts = document.getElementsByClassName("cart-product")
    for(var i= 0; i < cartProducts.length; i++) {
      //console.log(cartProducts[i])
      const productprice = cartProducts[i].getElementsByClassName("cart-product-price")[0].innerText.replace("R$", "").replace(",", ".")
      const productQuantity = cartProducts[i].getElementsByClassName("product-qtd-input")[0].value 
      
      totalAmount += productprice * productQuantity
    }
  totalAmount = totalAmount.toFixed(2)
  totalAmount = totalAmount.replace(".", ",")
  document.querySelector(".cart-total-container span").innerText = "R$" + totalAmount
  }

  function ver(){

   
    var Nome = document.getElementById("info-name")
    var Preço = document.getElementById("info-preço")  
    var imagem = document.getElementById("info-img")
    var Preçototal = document.getElementById("valor-total"); 

    Nome.textContent = localStorage.getItem('nome');
    Preço.textContent = "R$"+localStorage.getItem('preco')+",00";
    imagem.src = localStorage.getItem('img');
    Preçototal.textContent = "R$"+localStorage.getItem('preco')+",00";

    
  }

  function add1(){

    let nomeAdd =  "Alimento Nutrópica Extrusados e Frutas para Papagaio 5kg"
    let precoAdd = "260"
    let variavelFoto = "img/rpapagaio.webp"
    let idValueAdd = "1"
    
    localStorage.setItem('idValue', idValueAdd);
    localStorage.setItem('nome', nomeAdd);
    localStorage.setItem('preco', precoAdd);
    localStorage.setItem('img', variavelFoto);
    
  

  }

  function add2(){
    let nomeAdd = "Ração Pedigree Para Cães Adultos Sabor Carne E Cereais 20kg"
    let precoAdd = "120"
    let variavelFoto = "img/raçaoc-removebg-preview.png"
    let idValueAdd = "2"
    
    localStorage.setItem('idValue', idValueAdd);
    localStorage.setItem('nome', nomeAdd);
    localStorage.setItem('preco', precoAdd);
    localStorage.setItem('img', variavelFoto);
    
  }

  function add3(){
    let nomeAdd = "Ração Royal Canin Premium Cat Beleza da Pelagem para Gatos 10kg "
    let precoAdd = "380"
    let variavelFoto = "img/rgato.webp"
    let idValueAdd = "3"
    
    localStorage.setItem('idValue', idValueAdd);
    localStorage.setItem('nome', nomeAdd);
    localStorage.setItem('preco', precoAdd);
    localStorage.setItem('img', variavelFoto);
    
  }

  function add4(){
    let nomeAdd = "Areia Sanitária Kelco Pipicat Floral 4kg e 12kg"
    let precoAdd = "50"
    let variavelFoto = "img/Areia_Sanitária_Kelco_Pipicat_Floral_-_12_Kg_3105881-1_0008_1.jpg"
    let idValueAdd = "4"
    
    localStorage.setItem('idValue', idValueAdd);
    localStorage.setItem('nome', nomeAdd);
    localStorage.setItem('preco', precoAdd);
    localStorage.setItem('img', variavelFoto);
    
  }

  function add5(){
    let nomeAdd = "Ração Úmida Whiskas Sachê Peixe ao Molho para Gatos Adultos Castrados"
    let precoAdd = "10"
    let variavelFoto = "img/Ração_Úmida_Whiskas_Sachê_Peixe_ao_Molho_para_Gatos_Adultos_Castrados_2032056.jpg"
    let idValueAdd = "5"
    
    localStorage.setItem('idValue', idValueAdd);
    localStorage.setItem('nome', nomeAdd);
    localStorage.setItem('preco', precoAdd);
    localStorage.setItem('img', variavelFoto);
    
  }

  function remove(){

    localStorage.setItem('idValue', " ");
    localStorage.setItem('nome', " ");
    localStorage.setItem('preco', " ");
    localStorage.setItem('img', " ");

    ver();
   

}
