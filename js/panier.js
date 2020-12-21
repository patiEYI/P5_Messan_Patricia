//afficher les éléments dans le panier//
let newProduct =  localStorage.getItem("basket");
let product = JSON.parse(newProduct);

function displayBasket() { 
if (localStorage.length >= 1) {
    for (i = 0; i < localStorage.length; i++) { 
let elt = document.createElement("card")
let eltBasket = document.querySelector("#basket").appendChild(elt);//récuperer le conteneur 
let imgElt = document.createElement('li'); 
 imgElt.className = "card-img-top";   imgElt.classList.add("img-fluid");    //div image
let myImg = new Image();  myImg.addEventListener('load', function () { });
myImg.style.width = " 100px"; myImg.style.height = "100px"; //création image
myImg.src = product["imageUrl"]; elt.appendChild(imgElt).appendChild(myImg);
let newElt = document.createElement('li');
let varnishElt = document.createElement('li');
varnishElt.className = "col";
let titreElt = document.createElement('li');
titreElt.className = "col";   titreElt.classList.add("pt-1", "col-xs-12");
let priceElt = document.createElement('li');
priceElt.className = "col";   priceElt.classList.add("pt-1", "col-xs-12");
let quantityElt = document.createElement('li');
quantityElt.className = "col";
//
elt.appendChild(newElt).appendChild(titreElt).innerHTML =  "Nom de l'article : " + product["name"];
elt.appendChild(newElt).appendChild(varnishElt).innerHTML =  "Couleur du modèle : " + product["varnish"];
elt.appendChild(newElt).appendChild(priceElt).innerHTML =  "Prix: " + product["price"] + "€";
elt.appendChild(newElt).appendChild(quantityElt).innerHTML =  "Quantité : " + product["quantity"];
}}}
displayBasket();

//supprimer les produits du panier
function removeProduct() {
    let deleteButton = document.querySelector("#delete-command");
    deleteButton.addEventListener("click", function(event) {
        localStorage.clear()
    })
}
removeProduct()

//calcule du panier
function calculeBasket() {
    let totalPrice = []
    let calculeDiv = document.querySelector("#subtotal");
    for (i = 0; i<localStorage.length; i++){
     let calcule = product["price"] * product["quantity"]; 
     totalPrice.push(calcule)
    }
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    console.log(totalPrice.reduce(reducer));
    calculeDiv.innerHTML = "Prix total :" + totalPrice.reduce(reducer);
}
calculeBasket()

//vérication des données du formulaire

function checkValidity() {
    'use strict';
    window.addEventListener('load', function() {
      let forms = document.querySelector('.needs-validation');
      let validation = Array.prototype.filter.call(forms, function(form) {
        form.addEventListener('submit', function(event) {
          if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          form.classList.add('was-validated');
        }, false);
      });
    }, false);
  } 
  checkValidity()
 
  //si saisie incorrect
function checkForm() {
    let eltSubmit = document.querySelector("#submit");
    eltSubmit.addEventListener('click', validation);

 }
 checkForm()


  