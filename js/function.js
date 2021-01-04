//valider le formulaire
let lastName = document.querySelector("#lastName");
let  firstName = document.querySelector("#firstName");
let inputAdresse = document.querySelector("#inputAdresse");
let email = document.querySelector("#email");
let inputCity = document.querySelector("#inputCity");
let tel = document.querySelector("#tel");
let cp = document.querySelector("#cp");

let telValid =/^\d{10}$/;
let lastNameValid = /^(.|\n|\r|\n\r){3,}$/;
let  firstNameValid =/^(.|\n|\r|\n\r){3,}$/;
let inputAdresseValid = /^(.|\n|\r|\n\r){3,}$/;
let inputCityValid =/^[A-Z-a-z-\s]{3,40}$/;
let cpValid =/^[0-9]{5}$/;
let emailValid = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function validationlastName() { 
    let misslastName = document.querySelector("#misslastName");
    //si champs vide
    if (lastName.validity.valueMissing) { 
        misslastName.textContent = "lastName manquant!";
        misslastName.style.color = "red";
    //si saisie incorrect
    }else if (lastNameValid.test(lastName.value) == false) { 
        misslastName.textContent = "Format incorrect";
        misslastName.style.color = "orange";
    }else{
        misslastName.textContent = "";
    }
}

function validationfirstName () {
    let missfirstName = document.querySelector("#missfirstName");
    if ( firstName.validity.valueMissing) { 
        missfirstName.textContent = " firstName manquant!";
        missfirstName.style.color = "red";
    }else if ( firstNameValid.test( firstName.value) == false) { 
        missfirstName.textContent = "Format incorrect";
        missfirstName.style.color = "orange";
    }else{
        missfirstName.textContent = "";
    };
}

function validationAdresse () {  
    let missInputAdresse = document.querySelector("#missInputAdresse");
    if (inputAdresse.validity.valueMissing) { 
        missInputAdresse.textContent = "Adresse manquant!";
        missInputAdresse.style.color = "red";
    }else if (inputAdresseValid.test(inputAdresse.value) == false) { 
        missInputAdresse.textContent = "Format incorrect";
        missInputAdresse.style.color = "orange";
    }else{
    missInputAdresse.textContent = "";
    };
}

function validationEmail () {        
    let missEmail = document.querySelector("#missEmail");
    if (email.validity.valueMissing) { 
        missEmail.textContent = "Email manquant!";
        missEmail.style.color = "red";
    }else if (emailValid.test(email.value) == false) { 
        missEmail.textContent = "Format incorrect";
        missEmail.style.color = "orange";
    }else{
        missEmail.textContent = "";
    };
}

function validationCity() { 
    let missInputCity = document.querySelector("#missInputCity");
 if (inputCity.validity.valueMissing) { 
     missInputCity.textContent = "Ville manquant!";
     missInputCity.style.color = "red";
 }else if (inputCityValid.test(inputCity.value) == false) { 
     missInputCity.textContent = "Format incorrect";
     missInputCity.style.color = "orange";
 }else{
     missInputCity.textContent = "";
 };
}

function validationCp() {
    let missCp = document.querySelector("#missCp");
    if (cp.validity.valueMissing) { 
        missCp.textContent = "Code postal manquant!";
        missCp.style.color = "red";
    }else if (cpValid.test(cp.value) == false) { 
        missCp.textContent = "Format incorrect";
        missCp.style.color = "orange";
    }else{
        missCp.textContent = "";
    };
}

function validationTel() {
    let missTel = document.querySelector("#missTel");
   
    if (tel.validity.valueMissing) { 
        missTel.textContent = "Numéro de téléphone manquant!";
        missTel.style.color = "red";
    }else if (telValid.test(tel.value) == false) { 
        missTel.textContent = "Format incorrect";
        missTel.style.color = "orange";
    }else{
        missTel.textContent = "";
    };
}

function validation() {
    validationlastName()
    validationfirstName()
    validationAdresse()  
    validationEmail()    
    validationCity()
    validationCp()
    validationTel()
     
    if (lastNameValid.test(lastName.value) &&  firstNameValid.test( firstName.value) && inputAdresseValid.test(inputAdresse.value) && telValid.test(tel.value) && emailValid.test(email.value) && cpValid.test(cp.value) && inputCityValid.test(inputCity.value) === true) {
        let contact = {
        firstName:  firstName.value,
        lastName: lastName.value,
        address: inputAdresse.value,
        city: inputCity.value,
        email: email.value,
        }
        let products = []
        for (i = 0; i < localStorage.length; i++) {
            let key = localStorage.getItem(localStorage.key((i)));
            let product = JSON.parse(key); 
            let products_id = product["id"];
            products.push((products_id));      
        }
        console.log(products);
      
        fetch('http://localhost:3000/api/furniture/order', {
            method: "POST",
            headers: {
            'Content-Type':'application/json',
            },
            body: JSON.stringify({
                contact,
                products,   
            }),  
        })
        . then(response => { 
            if (response.ok){
                return response.json();
            }else{console.log('response pas ok!')}
            
        }).then(data =>
            localStorage.setItem( "numero_commande",data.orderId),
            alert(" Votre commande a bien été prise en compte"),
            window.location = "confirmation.html" 
            )
        .catch((err) => console.log('Erreur :' + err));
    }else{
    
        alert("Veullez  remplir les champs correctement et accepter les conditions générale de la vente ")
    }        
}


 
 

   















