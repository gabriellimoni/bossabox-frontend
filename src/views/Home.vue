<template>
  <div class="home">
    <b-container>
      <b-card bg-variant="dark" text-variant="white" style="min-height: 400px;">
        <template v-slot:header>
          <b-row>
            <b-col>
              <h4 class="mb-0">Lista de ferramentas</h4>
            </b-col>
            <b-col>
              <b-button 
                variant="primary"
                @click="handleAddNewToolClick"
              >
                Adicionar
                <b-icon-plus></b-icon-plus>
              </b-button>
            </b-col>
          </b-row>
        </template>

        <template>
          <b-row>
            <b-col sm="12" md="6" class="mb-3">
              <tool-list-item 
                name="Ferramenta Doida"
                description="descrição ... descrição ... descrição ... descrição ... descrição ... descrição ... descrição ... descrição ... descrição ... descrição ... "
                id="k1j23i12i3ji210239821uijn"
                url="//google.com"
              />
            </b-col>
          </b-row>
        </template>

        <template v-slot:footer>
          <h5 class="mb-0">Lista de ferramentas</h5>
        </template>
      </b-card>
    </b-container>
  </div>
</template>

<script>
import ToolListItem from '../components/ToolListItem'

export default {
  name: 'Home',
  components: {
    ToolListItem,
  },
  methods: {
    handleAddNewToolClick () {
      console.log('Create New Tool')
    },
  },
}
</script>

<style lang="scss">
.home {
  padding: 20px 0;
}
</style>