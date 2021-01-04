//Sauvegarde des nouveaux produits
function add(){
  if (localStorage.getItem("newProduct")) {
    let session = localStorage.getItem("newProduct");
    localStorage.setItem("item" + localStorage.length++, session);
    localStorage.removeItem("newProduct")
    localStorage.removeItem("quantity" )  
    localStorage.removeItem("varnish" );
  }
}
let priceElt;
let tPrice = [];
let totals = [];
//afficher les éléments du panier//
function displayBasket() {  
  if  (localStorage.length > 0) {
    for (i = 0; i < localStorage.length; i++) { 
      //let product = JSON.parse(localStorage.getItem("item"+ localStorage.key));
      let key = localStorage.getItem(localStorage.key((i)));
      let product = JSON.parse(key); 
      console.log(product)
      let elt = document.createElement("div");
      elt.className = "col-lg-5";  elt.classList.add("col-sm-12", "col-md-4", "p-3");
      let newElt = document.createElement('div'); newElt.classList.add("col-sm-12", "col-md-4");
      newElt.className = "col-lg-5";
      let eltBasket = document.querySelector("#basket");
      eltBasket.appendChild(elt);
      eltBasket.appendChild(newElt);
      let imgElt = document.createElement('div'); 
      imgElt.className = "card-img-top";   imgElt.classList.add("img-fluid", "border-info"); 
      let myImg = new Image();  myImg.addEventListener('load', function () { });
      myImg.style.width = "200px"; myImg.style.height = "200px"; 
      myImg.src = product["imageUrl"]; elt.appendChild(imgElt).appendChild(myImg);
      let varnishElt = document.createElement('h5');
      varnishElt.className = "m-1";
      let titreElt = document.createElement('h4');
      titreElt.className = "m-1";   titreElt.classList.add("pt-1", "col-xs-12");
      priceElt = document.createElement('h4');
      priceElt.className = "m-1";   priceElt.classList.add("pt-1", "col-xs-12");
      let quantityElt = document.createElement('h5');
      quantityElt.className = "m-1";
      let deleteButton = document.querySelector("#clear")
      deleteButton.style.display = "block"; 
      newElt.appendChild(titreElt).innerHTML =  "Nom de l'article : " + product["name"];
      newElt.appendChild(varnishElt).innerHTML =  "Couleur du modèle : " + product["varnish"];
      newElt.appendChild(priceElt).innerHTML =  "Prix: " + product["price"] + "€";
      newElt.appendChild(quantityElt).innerHTML =  "Quantité : " + product["quantity"];
      totals.push((product["price"]));console.log(totals)
      //supprimer les produits du panier
      deleteButton.addEventListener("click", function(event){
        event.preventDefault();
        event.stopPropagation();
        localStorage.clear(product);
        sessionStorage.clear();
        window.location = "panier.html";
        deleteButton.style.display = "none"; 
      })  
     
    }
 
  }
}

//   (function s (v) {
//     // si l'article est déjà présent, on incrémente la quantité
//     if (v.name == product["name"]) {
//         product = false;
//         v.quantity += quantity;
//         //$('#'+ id).html('<a href="'+ url +'">'+ name +'<br><small>Quantité : <span class="qt">'+ v.qt +'</span></small></a>');
//     }
// });


//calcule du panier
function calculeBasket() {
  if (localStorage.length > 0){
    let totalPrice = []
    let subtotal = document.querySelector("#subtotal")
    for (i = 0; i < localStorage.length; i++){
      let product = JSON.parse(localStorage.getItem(localStorage.key(i)));
      let calcule = product["price"] * product["quantity"]; 
      totalPrice.push((calcule))
 
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      console.log(totalPrice.reduce(reducer));
      console.log(totalPrice)
     subtotal.innerHTML = "Sous total : " + totalPrice.reduce(reducer) + "€";
      sessionStorage.setItem("productPrice", JSON.stringify(totalPrice.reduce(reducer)));
  
    }
  } 
 
}

//vérication des données du formulaire
function checkForm() {
  let eltSubmit = document.querySelector("#submit");
  eltSubmit.addEventListener('click', validation) 
}

function send () {
  add()
  displayBasket()
  calculeBasket()
  checkForm() 
}
send()




  