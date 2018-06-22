<template>
  <section class="container">
    <div>
      <h2 class="subtitle">
        Form Validation
      </h2>
      <p><nuxt-link to="/validate/form">Form Validation Manual</nuxt-link></p>
      <p><nuxt-link to="/validate/plugin">Form Validation Plugin</nuxt-link></p>
      <div class="links">
        <!--tuserdata is :-->
         <!--{{userInfo}}-->
      </div>
    </div>
  </section>
</template>

<script>

export default {
  middleware: 'authenticated',
  computed: {
//    userInfo: function () {
//      return ` id: ${this.$store.state.user.id},
//      first name:  ${this.$store.state.user.first_name},
//      last name:  ${this.$store.state.user.last_name},
//      email:  ${this.$store.state.user.email}
//
//      `
//    }
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

.links {
  padding-top: 15px;
}
</style>
