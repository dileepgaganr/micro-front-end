<template>
  <div id="app">
    <span class="logo">
      <img alt="Vue logo" src="./assets/logo.png">
    </span>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/counter">Counter</RouterLink>
    </nav>
    <main>
      <RouterView></RouterView>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',

}
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #333;
  margin-top: 60px;
}

.logo {
  display: inline-block;
  margin-bottom: 20px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
}
</style>