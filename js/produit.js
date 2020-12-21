let idUrl = window.location.search;
let idFurniture = idUrl.substr(4);
let newFurniture = []
sessionStorage.removeItem("varnish");
sessionStorage.removeItem("quantity");

/////Afficher produit selon l'id////
function getSecondPromise(){  
let url = 'http://localhost:3000/api/furniture/' + idFurniture;
    fetch(url).then((response) => response.json()
  .then((data)  => {  console.log(data)
  let divVarnish= document.querySelector('#selection'); 
//
  function displayProductById() { 
   let divCard = document.querySelector('.card');
   divCard.style.backgroundColor = "#CA6F1E";
   let divCardTitre = document.querySelector('.card-title');
   let cardPrice = document.querySelector('.card-price');
   let divCardDescription = document.querySelector('.card-text');
   let myImg = new Image();              
    myImg.addEventListener('load', function () { });
    let divCardImage = document.querySelector(".card-img-top").src = data["imageUrl"];
     divCardImage.className = "col-lg-6";
    divCardTitre.innerHTML = data["name"];
    cardPrice.innerHTML = "Prix : " + data["price"] / 100 + " euros";
    divCardDescription.innerHTML = "Description :" + data["description"];
  }
  displayProductById()

   //choix du vernis//
  function displayVarnish() {  
  for (d = -1; d < data["varnish"].length; d++) {
  if (d < 0){ 
    let option = document.createElement("option");
    option.text = "vernis disponible";
    divVarnish.appendChild(option);
  }else{ let option = document.createElement("option");
  option.text = data["varnish"][d];
  option.setAttribute("value", option.text);
  divVarnish.add(option);
  divVarnish.addEventListener("click", function(event){
    sessionStorage.removeItem("varnish")
    if (divVarnish.value !="choisir") {
      let varnishStorage = divVarnish.value;
      sessionStorage.setItem("varnish", varnishStorage);}
  })}};}
  displayVarnish()

//choix de la quantité du produit//
function quantityChoice() {
let amount = document.querySelector("#quantity");
for (d = 1; d <= 5; d++) { 
let optionAmount = document.createElement("option");
optionAmount.text = d
amount.appendChild(optionAmount);
 sessionStorage.setItem("quantity", "1")
  amount.addEventListener("click", function (event) {
      sessionStorage.removeItem("quantity")
      let amountStorage = amount.value
      event.preventDefault();
      sessionStorage.setItem("quantity", amountStorage);
  });};}
  quantityChoice()

//ajouter produit au panier
function addToBasket()  { 
let buttonBasket = document.querySelector(".add-to-cart");
buttonBasket.addEventListener("click", function(event){
  if (sessionStorage.getItem("varnish")){ 
  event.preventDefault();
  let product = { 
    id: data["_id"],
    name: data["name"],
    price: data["price"] / 100,
    imageUrl: data["imageUrl"],
    quantity: sessionStorage.getItem("quantity"),
    varnish:sessionStorage.getItem("varnish"),
  }
  let newProduct = JSON.stringify(product);
  localStorage.setItem("basket",newProduct);
   sessionStorage.removeItem("varnishStorage");
   window.location = "panier.html";
  alert("votre produit à été bien ajouter au panier");
  } 
  else {
    event.preventDefault();
    alert(" veuillez choisir une couleur")
}
  })
}

addToBasket()
})
).catch((err) => console.log('Erreur :' + err));
    }
    getSecondPromise()
   











