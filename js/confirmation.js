function order () {
    let elt = document.querySelector("#thanks");
    let eltNew = document.createElement("h6"); eltNew.className = ("py-2");
    let eltbutton = document.querySelector("#confirmation");
    elt.appendChild(eltNew).innerHTML = " Orino  vous remercie pour vous commande n°" + localStorage.getItem("numero_commande")   + ". Le prix total de votre commande est: " + localStorage.getItem("totalPrice") + " euros. Tous les informations de votre commande vous serront transmis par mail."
    eltbutton.innerHTML = "continuer mes achats";  
}

order();
