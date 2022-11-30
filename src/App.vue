<script setup>
// RouterView: 讓 vue-router 知道要替換組件內容的地方
// RouterLink: 本質是個 a tag, 帶入一個 to 參數去切換 router
// useRoute: 跟 route 傳入資料有關, ex. 網址傳入參數
// useRouter: 操作網址用的函式, 跟動作有關
import { RouterLink, RouterView, useRoute, useRouter } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
const route = useRoute();
// console.log("route.params", route.params);
// console.log("route.query", route.query);
// console.log("route.path", route.path);
// console.log("route.fullPath", route.fullPath);

const router = useRouter();
setTimeout(() => {
  //router.push("/about"); // push: 會紀錄上一頁, 然後換頁
  // router.push({
  //   path: "/about",
  //   query: { name: "kathy" },
  // });
  // router.replace("/about"); // replace: 不會紀錄上一頁, 但是會換頁
}, 3000);
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/address">Address</RouterLink>
      </nav>
    </div>
  </header>

  <!-- 讓 vue-router 知道要替換組件內容的地方 -->
  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
