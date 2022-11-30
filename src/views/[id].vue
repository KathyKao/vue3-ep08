<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log(route);
</script>
<template>
  <div>
    <h1>{{ route.path }}</h1>
  </div>
</template>
