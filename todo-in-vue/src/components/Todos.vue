<template>
  <div class="todos">
    <div class="holder container">
      <ul>
        <li v-for="(data, index) in todos" :key='index'>
          {{ data.todo }}
        </li>
      </ul>
      <p>Your list of things to do.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todos",
  data() {
    return {
      todos: [
        {"todo": "Fix docker file!"},
        {"todo": "Get a job!"}
      ],
      bgColor: 'yellow',
      bgWidth: '100%',
      bgHeight: '30px'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
  .holder {
    background: #fff;
  }

  ul {
    margin: 0px;
    padding: 0px;
    list-style-type: none;
  }

  ul li {
    padding: 20px;
    font-size: 1.3em;
    background-color: #eee;
    border-left: 5px solid orangered;
    margin-bottom: 3px;
    color: #333;
  }

  p {
    text-align: center;
    padding: 30px 0;
    color: #333;
  }

  .container {
    box-shadow: 0px 3px 5px #777;
  }

</style>
