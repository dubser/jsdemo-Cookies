let CookkName = "SduCookie";  /* Nom du cookie*/
let CookValue = "123";        /* Valeur du Cookie*/
let ListString = " ";         /* Contenu a afficher dans ListWindow*/

let text = "Affichage des résultats. ";

function ecrire() {
    let max_age=36000;
    let days = 1;

    console.log( Date() + " Bouton Ecrire Cookie CookName: " +CookkName
    +"  "+CookValue);
    document.getElementById("ListWindow").innerHTML = Date() + "<br>" +
    "Écrire Cookie cliqué : " +CookkName
    +"  "+CookValue;
   /* document.cookie = CookkName+"="+ CookValue + ";" + "path=/" ; */
    /* document.cookie = CookkName+"="+ CookValue + ";Max-Age="+ max_age  +"path=/" ;*/

      var expire = new Date ();
      
      expire.setTime (expire.getTime() + (24 * 60 * 60 * 1000) * days);
      document.cookie = CookkName + "=" + CookValue + "; expires=" +expire.toGMTString();

    lire();
}

function lire() {
     let tmp=" ";
    tmp= document.cookie 
    if(tmp==""){
        document.getElementById("ListWindow").innerHTML = Date()
        +"<br>" + "Pas de cookies.." ;
      } else {
        document.getElementById("ListWindow").innerHTML = Date()
    +"<br>" +document.cookie ;
      }    
}

function supprimer() {
  
  document.cookie = CookkName+"="+ CookValue + ";"+ "Max-Age=-1" +"path=/" ;
  lire();
}



/* Demande le nom du Cookie a traiter*/ 
  /*utilisé*/ 

function GetCokNam(event) {
  /*alert("On Blurr activé");*/
  let tmp=document.getElementById('cookNameIn');
  /*alert("Nom " + tmp.value);*/
  if (tmp.value==="")return;
  CookkName=tmp.value;
  RefreshInput()
}

/* Demande la valeur du Cookie a traiter*/
function GetCokValue(event) {
      let tmp=document.getElementById('cookValuIn');
      /*alert("Value " + tmp.value);*/
      if (tmp.value==="")return;
      CookValue=tmp.value;
      RefreshInput()
  }

function RefreshInput() {
  /*Rafraichit les fenetre de saisies*/

 document.getElementById('cookNameIn').value=CookkName;
 document.getElementById('cookValuIn').value=CookValue;

 }

 function test() {

 alert("test a été cliqué !");

/*function SetCookie(name, value, days) 
https://javascript.developpez.com/faq/javascript/?page=navig#cookies*/

 
 }
