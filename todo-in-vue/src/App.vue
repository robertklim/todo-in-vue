<template>
  <div id="app">
    <Todos />
  </div>
</template>

<script>
import Todos from './components/Todos.vue'

export default {
  name: 'app',
  components: {
    Todos
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
  
  body {
    background: #fff;
    font-family: 'Roboto', sans-serif;
    display: grid;
    grid-template-rows: auto;
    justify-items: center;
    align-items: center;
  }

  body, html {
    margin: 0px;
    height: 100%;
  }
  #app {
    width: 50%;
  }
</style>
