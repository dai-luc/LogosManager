<template>
  <div class="container">
    <p>{{ message }}</p>
    <div />
    <div> {{ users[0].id }},{{ users[0].name }} </div>
    <ul>
      <li v-for="user in users" :key="user.id">
        {{ user.id }},{{ user.name }}
      </li>
    </ul>
    <hr>
    <br>
    <router-link to="/price">
      price page
    </router-link>
    <p>{{ $store.state.hello.message }}</p>
    <!--<button @click="$store.commit('updateMessage')">
      Update!
    </button>
    <button @click="$store.commit('updateMessage', 'Commit with payload')">
      Update!
    </button>-->
    <button @click="$store.dispatch('hello/updateMessageAction')">
      dispatch
    </button>
    <Counter />
    <br>
    <Counter />
    <br>
    <Counter />
    <br>
  </div>
</template>

<script>
import Counter from '~/components/Counter.vue'
const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/users'
export default {
  components: {
    Counter
  },
  asyncData ({ params, error }) {
    return axios.get(url)
      .then((res) => {
        return { users: res.data }
      })
      .catch((e) => {
        error({ users: e.response.status, message: 'Error!!!!!' })
      })
  },
  data () {
    return {
      message: 'Hello World!'
    }
  }
}
</script>

<!--<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

</style>-->
