<script setup>
import { ref } from "vue";
const nom = ref("");
const qte = ref("");
const emit = defineEmits(["addc"]);
function handlerSubmit() {
  emit("addc", libelle.value);
  libelle.value = "";
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



      <br> <br>
    <label for="produits">Qu'est-ce qu'on a acheté  </label>
    <select id="produit" name ="produit">
        <option value="tomate" selected= "selected">Tomate</option>
        <option value="lait" selected= "selected">Lait</option>
        <option value="letue" selected= "selected">Letue</option>
        <option value="mousseChocolat" selected= "selected">Mousse au Chocolat</option>
        <option value="champagne" selected= "selected">Champagne</option>
</select>

<label for="qte"></label>
  <select> <option value="1" selected= "selected">1</option>
        <option value="2" selected= "selected">2</option>
        <option value="3" selected= "selected">3</option>
        <option value="4" selected= "selected">4</option>
        <option value="5" selected= "selected">5</option>
    </select>


<br> <br>
<label for="produits"> Qu'est-ce qu'on a mangé  </label>
<select> <option value="tomate" selected= "selected">Tomate</option>
        <option value="lait" selected= "selected">Lait</option>
        <option value="letue" selected= "selected">Letue</option>
        <option value="mousseChocolat" selected= "selected">Mousse au Chocolat</option>
        <option value="champagne" selected= "selected">Champagne</option>
      </select>


  <label for="qte"></label>
  <select> <option value="1" selected= "selected">1</option>
        <option value="2" selected= "selected">2</option>
        <option value="3" selected= "selected">3</option>
        <option value="4" selected= "selected">4</option>
        <option value="5" selected= "selected">5</option></select>



<br> <br>
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



