<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <nav>
      <RouterLink to="/about/aaa">aaa</RouterLink>
      <RouterLink to="/about/bbb">bbb</RouterLink>
      <RouterLink to="/about/ccc">ccc</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav > a {
  margin: 0 10px;
}
</style>
