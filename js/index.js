
function displayProduct (allFurniture) { 
  for(let i = 0; i < allFurniture.length; i++) {
    const divTr =  document.createElement('tr'); 
    divTr.classList = 'row';
    const divImage = document.createElement('td'); 
    divImage.className = "col";   
    divImage.classList.add("col-lg-4", "col-md-8");
    let myImg = new Image(); 
    myImg.addEventListener('load', function () { });
    myImg.style.width = " 400px";
    myImg.style.height = "270px";       
    myImg.className = "img-fluid";  
    myImg.classList.add("img-thumbnail");
    myImg.src = allFurniture[i]["imageUrl"];  
    const elt = document.querySelector('#productList');       
    const titreElt = document.createElement('td');
    titreElt.className = "col-lg-3";  
    titreElt.classList.add("text-center", "col-xs-12", "h3");
    const priceElt = document.createElement('td');
    priceElt.className = "col-lg-3";  
    priceElt.style.color = "#c97a58";
    priceElt.classList.add("text-center", "col-xs-12", "h4"); 
    const divDescription = document.createElement('td');
    divDescription.className = "col"; 
    divDescription.classList.add("w-25", "text-justify", "align-middle", "col-xs-12", "h5")   
    const lienProduct = document.createElement("a"); 
    lienProduct.style.textDecoration = "none";
    lienProduct.style.color = "black";
    let idLien = allFurniture[i]["_id"];      
    lienProduct.href = "produit.html?id=" + idLien;      
    elt.appendChild(lienProduct).appendChild(divTr).appendChild(divImage).appendChild(myImg); 
    divTr.appendChild(titreElt).textContent = allFurniture[i]["name"];
    divTr.appendChild(priceElt).textContent = "Prix : " + allFurniture[i]["price"] / 100 + "€";
    divTr.appendChild(divDescription).textContent = allFurniture[i]["description"]; 
  } 
}

// ///////Récupération de tous les furnitures/////
const url = 'http://localhost:3000/api/furniture';
let allFurniture = [];
function getListProducts () {
  fetch(url)
  .then(response => {
    if (response.ok) {  
      return response.json().then(data => {
      for(let i = 0 ; i < data.length ; i++){
        allFurniture[i] = new Furniture(data[i]['_id'], data[i]['name'], data[i]['price'], data[i]['description'], data[i]['imageUrl'], data[i]["varnish"], data[i][length]);
      }
      console.log(allFurniture)
      });
    }else{
      return Promise.reject(response.status);
    }
  })
  .then((data) => displayProduct(allFurniture))
  .catch((err) => console.log('Erreur :' + err));
}
getListProducts()

