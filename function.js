////function pour compter les produits////

let count = 1;
let countElt = document.getElementById("count");
function p(){
count++;
countElt.value = "count";
}
p()
function m(){
if (count > 0) {
count--;
countElt.value = "count";
}
}
m()


/*La fonction principale de ce script est d'empêcher l'envoi du formulaire si un champ a été mal rempli
 *et d'appliquer les styles de validation aux différents éléments de formulaire*/
(function() {
    'use strict';
    window.addEventListener('load', function() {
      let forms = document.getElementsByClassName('needs-validation');
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
  })();