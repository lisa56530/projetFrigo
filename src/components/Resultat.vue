<script setup>
defineProps(["aliment"]);
</script>
<template>
    <tr>
    <th>{{aliment.nom}}</th>
    <th>{{aliment.qte}}</th>
    </tr>

</template>
