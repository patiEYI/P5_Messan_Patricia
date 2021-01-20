let idUrl = window.location.search;
let idFurniture = idUrl.substr(4);console.log(idFurniture)
let newProduct = []
localStorage.removeItem("varnish");
localStorage.removeItem("quantity");

//affiche le produit//
function displayProductById(furniture) { 
  let divCardImage = document.createElement("img");
  let divCard = document.querySelector('.card');
  divCard.style.backgroundColor = "#c4accd";
  let divCardTitre = document.querySelector('.card-title');
  let cardPrice = document.querySelector('.card-price');
  cardPrice.style.color = "#c97a58";
  let divCardDescription = document.querySelector('.card-text');
  let myImg = new Image();              
  myImg.addEventListener('load', function () { });
  divCardImage.classList.add("img-thumbnail");
  divCard.appendChild(divCardImage).src = furniture["imageUrl"];
  divCardTitre.innerHTML = furniture["name"];
  cardPrice.innerHTML = "Prix : " + furniture["price"] / 100 + " euros";
  divCardDescription.innerHTML = "Description :" + furniture["description"];

}

//choix du vernis//
  function displayVarnish(furniture) {  
    let divVarnish= document.querySelector('#selection'); 
      for (d = 1; d < furniture["varnish"].length; d++) {
        if (d < 0) { 
          let option = document.createElement("option");
          divVarnish.appendChild(option);
        }else{ 
          let option = document.createElement("option");
          option.text = furniture["varnish"][d];
          option.setAttribute("value", option.text);
          divVarnish.add(option);
          divVarnish.addEventListener("click", function(event){
          localStorage.removeItem("varnish")
        if (divVarnish.value !="choisir") {
          let varnishStorage = divVarnish.value;
          localStorage.setItem("varnish", varnishStorage);
         
          }
        })
      }
    };
  }
 
 //ajouter produit au panier
  function addToBasket(furniture)  { 
    let buttonBasket = document.querySelector(".add-to-cart");
    buttonBasket.addEventListener("click", function(event){
      if (localStorage.getItem("varnish")){ 
        event.preventDefault();
        let product = (JSON.stringify({ 
        id: furniture["_id"],
        name: furniture["name"],
        price: furniture["price"] / 100,
        imageUrl: furniture["imageUrl"],
        quantity:localStorage.getItem("quantity"),
        varnish:localStorage.getItem("varnish"),
        }));
        localStorage.setItem("newProduct",product);
        window.location = "panier.html";
        alert("votre produit à été bien ajouter au panier");
      }else {
        event.preventDefault();
        alert(" veuillez choisir une couleur")
      }
    })
  }

// //choix de la quantité du produit//
function quantityChoice() {
  let amount = document.querySelector("#quantity");
  for (d = 1; d <= 5; d++) { 
    let optionAmount = document.createElement("option");
    optionAmount.text = d;
    amount.appendChild(optionAmount);
    localStorage.setItem("quantity", "1")
    amount.addEventListener("click", function (event) {
      let amountStorage = amount.value
      localStorage.setItem("quantity", amountStorage);
      event.preventDefault();
    })
  }
}

/////Afficher produit selon l'id////
let furniture;
const url = 'http://localhost:3000/api/furniture/' + idFurniture;
function getProductById () {
  fetch(url)
  .then(response => {
    if (response.ok) {  
       return response.json().then(data => {
         furniture = new Furniture(data["_id"], data["name"], data["price"], data["description"], data["imageUrl"], data["varnish"], data[length]);
        console.log(furniture)
      
       });
    }else{
      return Promise.reject(response.status);
    }
  })
  .then(function(data) { displayProductById (furniture);
    displayVarnish(furniture); quantityChoice(); addToBasket(furniture)
    })
  .catch((err) => console.log('Erreur :' + err));
}
getProductById()














