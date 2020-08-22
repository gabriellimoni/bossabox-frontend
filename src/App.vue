<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  async created () {
    // Just to hold user logged in... DO NOT DO THISSSS
    await this.$store.dispatch('user/login', {
      email: 'gabrielblimoni@gmail.com',
      password: 'gabriel123'
    })
    this.$store.commit('user/setPassword', 'gabriel123')
    setInterval(async () => {
      await this.$store.dispatch('user/refreshLogin')
    }, 1 * 1000 * 30)
    // endGambi
  }
}
</script>

<style lang="scss">

</style>
