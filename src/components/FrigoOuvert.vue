<script setup>
import { ref } from "vue";
const nom = ref("");
const qte = ref("");
const photo = ref(""); 
const emit = defineEmits(["addc", "eleverc"]);
function handlerSubmit() {
  emit("addc", aliment.value);
  aliment.value = "";
}
function handlerDelete() {
  emit("enleverc", aliment.value);
  aliment.value = "";
}

const url = "https://webmmi.iut-tlse3.fr/~pecatte/frigo/public/8/produits"; 
</script>



<template>

  
   
    <br>
    <h1> Mon frigo </h1>
    <form @submit.prevent="handlerSubmit">

      <!-- la direective v-model permet de faire le lien bidirectionnel
           entre la variable et la zone de saisie ;
           si on modifie la var, la zone de saisie est modifié
           si on modifie la zone de saisir, la variable est modifié
           -->
  
        <h3>Dans mon frigo il y a pour l'instant des/du/de la : </h3>
        <ul>
      <li>
        Tomate <br>
        Letue <br>
        Lait <br>
        Mousse au Chocolat<br>
        Champagne
  
      </li>
      </ul>
      
      <br> <br>
      <img src= './FrigoNourritures.jpg' alt="frigo" >


    <body> 
      <h2>Qu'est-ce qu'on a acheté ? </h2>
      <form @submit.prevent= "$emit('addc', nom, qte, photo)"> <br><br><br>  
        <input type="text" v-model="nom" placeholder="Quoi ?" /><br>
        <input type="text" v-model="qte" placeholder="Combien ?" /><br>
        <input type="text" v-model="photo" placeholder="A quoi ça ressemble ?"  /> <br>
       <input type="submit" value="Valider" />
      </form>
    </body>


<body> 
  
      <h2>Qu'est-ce qu'on a mangé ?</h2> 
      <form @submit.prevent= "$emit('enleverc', nom, qte, photo)"> <br><br><br>  <!--il reconnait pas enlervec-->
        <input type="text" v-model="nom" placeholder="Quoi ?"/> <br>
        <input type="text" v-model="qte" placeholder="Combien ?"/> <br>
        <input type="text" v-model="photo" placeholder="A quoi ça ressemble ?" /> <br>
       <input type="submit" value="Valider" />
      </form>
    </body>

<table border ="1">
    <caption>Résultat des courses : </caption>
    <thead>
        <tr>
            <th>Produit</th>
            <th>Quantité</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <th>Tomate</th>
        <th>1</th>
        </tr>

        <tr>
        <th> Lait</th>
        <th> 1 brique </th>
        </tr>
        
        <tr>
        <th> Letue</th>
        <th>1</th>
        </tr>

        <tr>
        <th>Mousse au chocolat</th>
        <th>1 pot</th>
        </tr>

        <tr>
        <th>Champagne</th>
        <th>1 bouteille</th>
        </tr>
        
    </tbody>
</table>


    <!-- quand le formulaire est validé,
      on doit emmetre un event vers le composant parent 
      pour faire ressortir du composant 
      la valeur de la variable "libelle";
    -->
    <!-- <form @submit.prevent="$emit('addc', libelle)">-->
    <!-- 2ème syntaxe possible avec un handler-->
    
    <br> 

      
    </form>
  </template>






  
  <style setup></style>


<style setup></style>



