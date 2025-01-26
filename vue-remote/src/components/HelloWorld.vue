<template>
  <div class="hello">
      <h1>{{ msg }}</h1>
      <p>Welcome to your Vue.js application!</p>
      <p>This is home component of Vue js app!!. navigate to  Counter for playground!!</p>
      <span class="hello-message">Hello, World!</span>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
      msg: {
          type: String,
          default: 'Hello World (Vue Home) Component'
      }
  }
}
</script>

<style scoped>
.hello {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-family: Arial, sans-serif;
}


.hello-message {
  font-size: 20px;
  font-weight: bold;
}

h1 {
  color: #42b983;
  font-size: 24px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  color: #333;
  margin: 5px 0;
}
</style>