<template>
  <div class="login">
    <b-row class="justify-content-center h-100">
      <b-col md="7" lg="4" xl="3">
        <h2>Useful tools app</h2>
        <b-card title="Login">
          <b-form>
            <b-form-group>
              <b-form-input
                v-model="email"
                type="text"
                required
                placeholder="Email"
              ></b-form-input>
            </b-form-group>
            <b-form-group>
              <b-form-input
                v-model="password"
                type="password"
                required
                placeholder="Senha"
              ></b-form-input>
            </b-form-group>

            <div style="text-align: center;">
              <b-button 
                @click="handleTryLogin"
                variant="primary" 
                outlined
                class="mr-1"
              >
                Entrar
              </b-button>
              <b-button 
                variant="warning"
              >
                Voltar
              </b-button>
            </div>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    async handleTryLogin () {
      try {
        const loginData = {
          email: this.email,
          password: this.password,
        }
        const loggedData = await this.$store.dispatch('user/login', loginData)
        this.$router.push('/')
      } catch (error) {
        // todo toast
        console.log(error)
      }
    }
  },
  computed: {
    
  }
}
</script>

<style scoped>
</style>