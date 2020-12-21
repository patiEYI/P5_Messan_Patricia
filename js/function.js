//valider le formulaire
    function validation(event) {
        let nom = document.querySelector("#nom");
        let missNom = document.querySelector("#missNom");
        let nomValid = /^[a-zA-Z][a-zA-Z]{3,}$/;
        //si champs vide
        if (nom.validity.valueMissing) { 
            event.preventDefault();
            missNom.textContent = "Nom manquant!";
            missNom.style.color = "red";
       //si saisie incorrect
        }else if (nomValid.test(nom.value) == false) { 
            event.preventDefault()
            missNom.textContent = "Format incorrect";
            missNom.style.color = "orange";
        }else{
            missNom.textContent = "";
        }
////////////////////////////////////////// prénom ////////////////////////////
        let prenom = document.querySelector("#prenom");
        let missPrenom = document.querySelector("#missPrenom");
        let prenomValid =/^[a-zA-Z][a-zA-Z]{3,}$/;
        //si champs vide
        if (prenom.validity.valueMissing) { 
            event.preventDefault();
            missPrenom.textContent = "Prenom manquant!";
            missPrenom.style.color = "red";
       //si saisie incorrect
        }else if (prenomValid.test(prenom.value) == false) { 
            event.preventDefault()
            missPrenom.textContent = "Format incorrect";
            missPrenom.style.color = "orange";
        };
 ////////////////////////////////////////// Adresse ////////////////////////
 let inputAdresse = document.querySelector("#inputAdresse");
 let missInputAdresse = document.querySelector("#missInputAdresse");
 let inputAdresseValid = /^[A-Z-a-z-0-9\s]{10,80}$/;
 //si champs vide
 if (inputAdresse.validity.valueMissing) { 
     event.preventDefault();
     missInputAdresse.textContent = "Adresse manquant!";
     missInputAdresse.style.color = "red";
//si saisie incorrect
 }else if (inputAdresseValid.test(inputAdresse.value) == false) { 
     event.preventDefault()
     missInputAdresse.textContent = "Format incorrect";
     missInputAdresse.style.color = "orange";
 };
 ///////////////////////////////////////////// Email /////////////////
 let email = document.querySelector("#email");
 let missEmail = document.querySelector("#missEmail");
 let emailValid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 //si champs vide
 if (email.validity.valueMissing) { 
     event.preventDefault();
     missEmail.textContent = "Email manquant!";
     missEmail.style.color = "red";
//si saisie incorrect
 }else if (emailValid.test(email.value) == false) { 
     event.preventDefault()
     missEmail.textContent = "Format incorrect";
     missEmail.style.color = "orange";
     }
     ////////////////////////////////////////// City ////////////////////////////
     let inputCity = document.querySelector("#inputCity");
    let missInputCity = document.querySelector("#missInputCity");
    let inputCityValid =/^[A-Za-z][a-zA-Z]{3,}$/;
     if (inputCity.validity.valueMissing) { 
        event.preventDefault();
        missInputCity.textContent = "Ville manquant!";
        missInputCity.style.color = "red";
   //si saisie incorrect
    }else if (inputCityValid.test(inputCity.value) == false) { 
        event.preventDefault()
        missInputCity.textContent = "Format incorrect";
        missInputCity.style.color = "orange";
    };
    /////////////////////////////////////////  code postal ///////////////////////////
    let cp = document.querySelector("#cp");
    let missCp = document.querySelector("#missCp");
    let cpValid =/^[0-9]{5}$/;
     if (cp.validity.valueMissing) { 
        event.preventDefault();
        missCp.textContent = "Code postal manquant!";
        missCp.style.color = "red";
   //si saisie incorrect
    }else if (cpValid.test(cp.value) == false) { 
        event.preventDefault()
        missCp.textContent = "Format incorrect";
        missCp.style.color = "orange";
    };
    //////////////////////////////////////// Tel ///////////////////////////////////
    let tel = document.querySelector("#tel");
    let missTel = document.querySelector("#missTel");
    let telValid =/^\d{10}$/;
     if (tel.validity.valueMissing) { 
        event.preventDefault();
        missTel.textContent = "Numéro de téléphone manquant!";
        missTel.style.color = "red";
   //si saisie incorrect
    }else if (telValid.test(tel.value) == false) { 
        event.preventDefault()
        missTel.textContent = "Format incorrect";
        missTel.style.color = "orange";
    };
 }















