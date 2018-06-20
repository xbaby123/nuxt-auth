

<template>
  <section class="container">
    <div>
      <h1 class="title">
        login page
        <p><nuxt-link to="/post">Blog</nuxt-link></p>
      </h1>
      <h2 class="subtitle">
        you see this beacuse you are not authenticated
        {{firstPost}}
      </h2>
      <div class="container">
        <h2>Users</h2>
        <ul class="users">
          <li v-for="user in users" :key="user.id">
            <nuxt-link :to="{ name: 'users-id', params: { id: user.id} }">{{ user.name }}</nuxt-link>
          </li>
        </ul>
      </div>
      <div>
          <input type="text" v-model="username" />
          <br>
          <input type="password" value="" v-model="password" />
          <br>
          <button  @click="postLogin" >Login</button>
      </div>
    </div>
  </section>
</template>

<script>
// import Cookie from 'js-cookie'
import axios from 'axios'

export default {
  middleware: ['notAuthenticated', 'userAgent'],
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  async asyncData ({ userAgent, params }) {
    // We can return a Promise instead of calling the callback
    console.log('user agent in context is: ', userAgent)
    console.log('sending request async data')
    let posts

    let { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    posts = data.slice(0, 5)

    let response = await axios.get('https://jsonplaceholder.typicode.com/users')

    return {
      posts,
      users: response.data.slice(0, 5)
    }
  },
  computed: {
    firstPost: function () {
      return this.posts[0].title
    }
  },
  methods: {
    postLogin () {
      let router = this.$router
      this.$store.dispatch('sendLoginRequest', {username: this.username, password: this.password})
        .then(function () {
          console.log('After login')
          router.push('/')
        })
        .catch(function (e) {
          console.log(e)
          console.log(`login fail ${e.message}`)
          alert(`login fail ${e.message}`)
        })
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 30px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 22px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
