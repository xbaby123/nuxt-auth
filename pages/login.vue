
<template>
  <section class="container">
    <div>
      <h1 class="title">
        login page
      </h1>
      <h2 class="subtitle">
        you see this beacuse you are not authenticated
      </h2>

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

export default {
  middleware: 'notAuthenticated',
  data: function () {
    return {
      username: 'test9@mail.com',
      password: '12345678'
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
