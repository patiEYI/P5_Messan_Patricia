// ///////Répération des donnés depuis le serveur/////
let url = 'http://localhost:3000/api/furniture';
function getPromise () {  fetch(url)
.then((response) => response.json() 
.then((data) => {  console.log(data) 
let newProduct = new furniture()
console.log(newProduct);

function displayProduct () { 
        for(let i = 0; i < data.length; i++) {
       const divTr =  document.createElement('tr');    divTr.classList = 'row';
        const divImage = document.createElement('td');  divImage.className = "col";   divImage.classList.add("col-lg-4");   //div image 
        let myImg = new Image();  myImg.addEventListener('load', function () { });  //création image
        myImg.style.width = " 400px"; myImg.style.height = "250px";        //dimension image
        myImg.className = "img-fluid";  myImg.classList.add("img-thumbnail");
        myImg.src = data[i]["imageUrl"];  
        const elt = document.querySelector('#productList');       //récuperer le conteneur 
        const titreElt = document.createElement('td');
        titreElt.className = "col-lg-3";   titreElt.classList.add("pt-1", "col-xs-12");
        const priceElt = document.createElement('td');
        priceElt.className = "col-lg-3";   priceElt.classList.add("pt-1", "col-xs-12"); 
        const divDescription = document.createElement('td');
        divDescription.className = "col";   divDescription.classList.add("w-25", "text-left", "pt-1", "mb-5", "col-xs-12")     //rajoute la description
        divDescription.textContent = data[i]["description"];
        const lienProduct = document.createElement("a");  
        let idLien = data[i]["_id"];
        lienProduct.href = "produit.html?id=" + idLien;       //rajoute le lien du produit
        lienProduct.className = "stretched-link";
        elt.appendChild(lienProduct).appendChild(divTr).appendChild(divImage).appendChild(myImg); 
        elt.appendChild(lienProduct).appendChild(divTr).appendChild(titreElt).textContent = data[i]["name"];
        elt.appendChild(lienProduct).appendChild(divTr).appendChild(priceElt).textContent ="Prix : " + data[i]["price"] / 100 + "€";
       elt.appendChild(lienProduct).appendChild(divTr).appendChild(divDescription); 
      } 
     }
     displayProduct()
    })
   
    ).catch((err) => console.log('Erreur :' + err));
  }
    getPromise()