<template>
  <div class="todos">
    <div class="holder container">

      <form @submit.prevent="addTodo">
        <input type="text" placeholder="Enter your todo to do..." v-model="todo" v-validate="'min:5'" name="todo">
        
        <transition name="alert-in" enter-active-class="animated flipInX" leave-active-class="animated flipOutX"> <!-- flipInX / flipOutX comes from external library -->
          <p class="alert" v-if="errors.has('todo')">{{ errors.first('todo') }}</p>
        </transition>
      
      </form>

      <ul>
        <transition-group name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown"> <!-- flipInX / flipOutX comes from external library -->
          <li v-for="(data, index) in todos" :key='index'>
            {{ data.todo }}
            <i class="fa fa-minus-circle" v-on:click="remove(index)"></i>
          </li>
        </transition-group>
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
    },
    remove(id) {
      this.todos.splice(id, 1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /* Import external animations */
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
 
  /* Import font awsome */
  @import "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"; 
  
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

  /* Add custom alert animation on enter and leave */

  .alert-in-enter-active {
    animation: bounce-in .5s;
  }

  .alert-in-leave-active {
    animation: bounce-in .5s reverse;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  i {
    float: right;
    cursor: pointer;
  }

</style>
