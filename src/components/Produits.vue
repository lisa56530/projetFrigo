<script setup>
// -- il faut déclarer les 2 params (props) du composant
defineProps([ "aliment", "deletec"]);
defineEmits(["deletec","ajouterc","enleverc"])
</script>

<template>
  <li>
    {{ chose.pourAfficher() }}
    <button @click="() => deletec(aliment.id)">Supprimer</button>
    <button @click="() => ajouterc(aliment)">Ajouter</button>
    <button @click="() => enleverc(aliment)">Enlever</button>
    <button @click="() => rechercher(aliment)">Rechercher</button>
  </li>
</template>

<style></style>
