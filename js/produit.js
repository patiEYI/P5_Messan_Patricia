let idUrl = window.location.search;
let idFurniture = idUrl.substr(4);
let newProduct = []
sessionStorage.removeItem("varnish");
sessionStorage.removeItem("quantity");

//affichage produit
function displayProductById(data) { 
  let divCardImage = document.createElement("img");
    let divCard = document.querySelector('.card');
    divCard.style.backgroundColor = "#CA6F1E";
    let divCardTitre = document.querySelector('.card-title');
    let cardPrice = document.querySelector('.card-price');
    let divCardDescription = document.querySelector('.card-text');
    let myImg = new Image();              
    myImg.addEventListener('load', function () { });
  
    divCardImage.className = "card-img-top";
    //let divCardImage = document.querySelector(".card-img-top").src = data["imageUrl"];
    divCard.appendChild(divCardImage).src = data["imageUrl"];
    divCardTitre.innerHTML = data["name"];
    cardPrice.innerHTML = "Prix : " + data["price"] / 100 + " euros";
    divCardDescription.innerHTML = "Description :" + data["description"];

}



//choix du vernis//
  function displayVarnish(data) {  
    let divVarnish= document.querySelector('#selection'); 
      for (d = -1; d < data["varnish"].length; d++) {
        if (d < 0) { 
          let option = document.createElement("option");
          option.text = "vernis disponible";
          divVarnish.appendChild(option);
        }else{ 
          let option = document.createElement("option");
          option.text = data["varnish"][d];
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
  function addToBasket(data)  { 
    let buttonBasket = document.querySelector(".add-to-cart");
    buttonBasket.addEventListener("click", function(event){
      if (localStorage.getItem("varnish")){ 
        event.preventDefault();
        let product = (JSON.stringify({ 
        id: data["_id"],
        name: data["name"],
        price: data["price"] / 100,
        imageUrl: data["imageUrl"],
        quantity:localStorage.getItem("quantity"),
        varnish:localStorage.getItem("varnish"),
        }));
        localStorage.setItem("newProduct",product);
        //sessionStorage.removeItem("quantity");
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
    //sessionStorage.removeItem("quantity")
    let amountStorage = amount.value
    event.preventDefault();
    if (amount.value === null){ 
      alert("veuilez choisir une quantité!")
    }
    
    //sessionStorage.setItem("quantity", amountStorage);
    localStorage.setItem("quantity", amountStorage);
    })
  }
}

/////Afficher produit selon l'id////
function getSecondPromise(){  
  let url = 'http://localhost:3000/api/furniture/' + idFurniture;
  fetch(url).then((response) => response.json())
  .then(function(data) { displayProductById (data);
    displayVarnish(data); quantityChoice(); addToBasket(data)
  })
  .catch((err) => console.log('Erreur :' + err));
}


getSecondPromise()














