<script setup>
import { ref } from "vue";
// -- donnée réactive pour la saisie du libellé
const motsCle = ref("");
const emit = defineEmits(["recherche"]);
</script>


<template>
  <form @submit.prevent="$emit('recherche',motsCle )">
    <div>
      <input type="text" v-model="motsCle" placeholder="saisir l'aliment" />
    </div>
    <input type="submit" value="rechercher" />
    <div id="rechercheAliment"></div>
  </form>
  <!--<select>
        <option v-for="aliment in listeC" :key="aliment" :value="aliment">{{ aliment.nom }}</option>
      </select>
      -->
</template>


<style scoped>
</style>