function displayProduct (data) { 
  for(let i = 0; i < data.length; i++) {
    const divTr =  document.createElement('tr');    divTr.classList = 'row';
      const divImage = document.createElement('td');  divImage.className = "col";   divImage.classList.add("col-lg-4", "col-md-8");   //div image 
      let myImg = new Image();  myImg.addEventListener('load', function () { });  //création image
      myImg.style.width = " 400px"; myImg.style.height = "270px";        //dimension image
      myImg.className = "img-fluid";  myImg.classList.add("img-thumbnail");
      myImg.src = data[i]["imageUrl"];  
      const elt = document.querySelector('#productList');       //récuperer le conteneur 
      const titreElt = document.createElement('td');
      titreElt.className = "col-lg-3";   titreElt.classList.add("text-center", "col-xs-12", "h3");
      const priceElt = document.createElement('td');
      priceElt.className = "col-lg-3";   priceElt.classList.add("text-center", "col-xs-12", "h4"); 
      const divDescription = document.createElement('td');
      divDescription.className = "col";   divDescription.classList.add("w-25", "text-justify", "align-middle", "col-xs-12", "h5")     //rajoute la description
      divDescription.textContent = data[i]["description"];
      const lienProduct = document.createElement("a"); lienProduct.style.textDecoration = "none";
      let idLien = data[i]["_id"];
      lienProduct.href = "produit.html?id=" + idLien;       //rajoute le lien du produit
      elt.appendChild(lienProduct).appendChild(divTr).appendChild(divImage).appendChild(myImg); 
      divTr.appendChild(titreElt).textContent = data[i]["name"];
      divTr.appendChild(priceElt).textContent ="Prix : " + data[i]["price"] / 100 + "€";
      divTr.appendChild(divDescription); 
  } 
}

// ///////Répération des donnés depuis le serveur/////
let url = 'http://localhost:3000/api/furniture';
function getPromises () {
  fetch(url)
  .then(response => {
    if (response.ok) {  
       return response.json();
    }else{
      return Promise.reject(response.status);
    }
  })
  .then((data) => displayProduct(data))
  .catch((err) => console.log('Erreur :' + err));
}
getPromises()