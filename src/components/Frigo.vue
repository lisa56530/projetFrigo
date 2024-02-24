<script setup>
import { reactive, onMounted } from "vue";
import FrigoForm from "./FrigoForm.vue";
import FrigoOuvert from "./FrigoOuvert.vue";
import Resultat from  "./Resultat.vue";
import Aliment from "../../Aliment";


const listeC = reactive([]);


// -- l'url de l'API
const url = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/8/produits";



function handlerDelete(id) {
  console.log(id);
  const fetchOptions = {
    method: "DELETE",
  };
  // -- l'id de l'aliment à supprimer doit être ajouté à la fin de l'url
  fetch(url + "/" + id, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getTodos();
    })
    .catch((error) => console.log(error));
}



      function handlerAdd(nom, qte,photo) {
  // -- il faut créer un nouvel aliment instance de la classe


  console.log(nom, qte);
 
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");


  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({nom:nom, qte:qte, photo:photo}),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getTodos();
    })
    .catch((error) => console.log(error));
}


/*

function handlerPlus(aliment) {
  console.log(aliment);
  let id = aliment.id;
  let nom = aliment.nom;
  let photo = aliment.photo;
  aliment.qte=aliment.qte+1;
  let qte = aliment.qte;




  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const fetchOptions = {
    method: "PUT",
    headers : myHeaders,
    body: JSON.stringify({id: id, nom: nom, qte: qte, photo:  photo}),
  };


  fetch(url , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
     getTodos();
  })
    .catch((error) => console.log(error));
}
*/

function handlerMoins(nom,qte) {
let aliment;
console.log(nom,qte);
for(var ali of listeC){
  if(ali.nom==nom){
    aliment=ali;
    aliment.qte=aliment.qte-qte
  }
}


if(qte<=0){handlerDelete(aliment.id)}

  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

console.log(aliment)
 
  const fetchOptions = {
    method: "PUT",
    headers : myHeaders,
    body: JSON.stringify({id: aliment.id, nom: aliment.nom, qte: aliment.qte, photo: aliment.photo}),
  };
  console.log(fetchOptions);

  fetch(url , fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
     getTodos();
  })
    .catch((error) => console.log(error));
}

/*
function handlerRecherche(mot){
    const urlPers = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/14/produits?search=";
    let fetchOptions = { method: "GET" };


    fetch(urlPers+mot, fetchOptions)
    .then((response) => {
        return response.json();
    })
    .then((dataJSON) => {
        let aliments = dataJSON; // les aliments sont le tableau "results"
        //let resHTML = ""; // variable pour contenir le html généré
        document.getElementById("rechercheAliment").innerHTML = ""
     
        document.getElementById("rechercheAliment").innerHTML += "<ul>";
      // on insère de l'html pour créer une liste de livre correspondant au critère
      for (let l of aliments) {
        // pour chaque livres, on récupère ses attributs et on l'incère dans l'html 
        document.getElementById("rechercheAliment").innerHTML +=
          "<li>" +


          l.nom+
          "</li>";
      }
      // on oublie pas de fermer la liste 
      document.getElementById("rechercheAliment").innerHTML += "</ul>";
    })
    .catch((error) => {
            // gestion des erreurs
            console.log(error);
   });
  }

*/


function getTodos() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // -- vider la liste des choses
      listeC.splice(0, listeC.length);
      // pour chaque donnée renvoyée par l'API
      //  créer un objet instance de la classe Chose
      //  et l'ajouter dans la liste listeC
      dataJSON.forEach((v) => listeC.push(new Aliment(v.id, v.nom, v.qte, v.photo)));
    })
    .catch((error) => console.log(error));
}


onMounted(() => {
  getTodos();
});


</script>





<template>
  
  <br>
    <h1> Mon frigo </h1>
    <h3>Dans mon frigo il y a pour l'instant des/du/de la : </h3>

  <div>
    <ul>
    <FrigoOuvert v-for="aliment in listeC"
      :key=[aliment.id]
      :aliment="aliment"
      ></FrigoOuvert>
    </ul>
    <br> <br>
      <img src= './FrigoNourritures.jpg' alt="frigo" >
      <br> <br>
    <FrigoForm
    :liste="listeC"
    @addc="handlerAdd"
    @enleverc="handlerMoins"
    ></FrigoForm>
    <br><br>
    <table border ="1">
    <caption>Résultat des courses : </caption> <!--il faut lier ce tableau avec les ofnctions. J'ai tenté pleins de trucs et ça marchait pas, ça m'a gavé. Au pire tant pispour ce tableau.-->
    <thead>
        <tr>
            <th>Produit</th>
            <th>Quantité</th>
        </tr>
    </thead>
    <tbody>
      <Resultat v-for="aliment in listeC"
      :key=[aliment.id]
      :aliment="aliment"
      ></Resultat>
    </tbody>
    </table>

    <br><br>
    <h3>Découvre le secret de la mousse au cholocat de Stitch -></h3>
    <p><a href="https://www.marmiton.org/recettes/recette_mousse-au-chocolat-facile_13585.aspx"><img src="./Chocolat.png" alt="Mousse au chocolat"></a></p>


    </div>
    </template>


