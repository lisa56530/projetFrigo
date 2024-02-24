<<<<<<< HEAD
=======

>>>>>>> 899855273b6cd44f094b5cc63fc4716f4b00a451
<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const nomA = ref("");
const qteA = ref("");
const photoA = ref("");
const nomE = ref("");
const qteE = ref("");
const photoE = ref("");
defineProps(["liste"]);
const emit = defineEmits(["addc","enleverc"]);
</script>

<template>
<h2>Qu'est-ce qu'on a acheté ? </h2>
<form @submit.prevent= "$emit('addc', nomA, qteA, photoA)"> <br><br> 
  <input type="text" v-model="nomA" placeholder="Quoi ?" /><br>
  <input type="text" v-model="qteA" placeholder="Combien ?" /><br>
  <input type="text" v-model="photoA" placeholder="A quoi ça ressemble ?"  /> <br>
 <input type="submit" value="Valider" />
</form>

<br><br>

<h2>Qu'est-ce qu'on a mangé ?</h2> 
<form @submit.prevent= "$emit('enleverc', nomE, qteE)"> <br><br> 
  <div v-for="aliment in liste"
      :key=[aliment.id]>
    <label v-bind:for="aliment.id">{{aliment.nom}}</label>
    <input type="radio" v-model="nomE" name="nom" v-bind:id="aliment.id" v-bind:value="aliment.nom" v-bind:tabindex="aliment.id"/>
    </div>
 <!-- <input type="text" v-model="nomE" placeholder="Quoi ?"/> <br>-->
  <input type="number" min="1" v-model="qteE" required/> <br>
 <input type="submit" value="Valider" />
</form>
<<<<<<< HEAD
</template>
=======
</template>
>>>>>>> 899855273b6cd44f094b5cc63fc4716f4b00a451
