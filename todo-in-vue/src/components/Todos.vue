<template>
  <div class="todos">
    <div class="holder container">
      
      <form @submit.prevent="addTodo">
        <input type="text" placeholder="Enter your todo to do..." v-model="todo" v-validate="'min:5'" name="todo">
        <p class="alert" v-if="errors.has('todo')">{{ errors.first('todo') }}</p>
      </form>

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
      todo: '',
      todos: [

      ]
    }
  },
  methods: {
    addTodo() {
      this.$validator.validateAll().then((result) => {
        if (result) {
          this.todos.push({ todo: this.todo });
          this.todo = '';
        }
      })
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

  input {
    width: calc(100% - 40px);
    border: 0;
    padding: 20px;
    font-size: 1.3em;
    background-color: #333;
    color: orangered;
  }

  .alert {
    background: rgb(231, 112, 33);
    font-weight: bold;
    display: inline-block;
    padding: 5px;
    margin-top: -20px;
  }

</style>
