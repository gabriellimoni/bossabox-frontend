<template>
  <div class="home">
    <b-container>
      <b-card bg-variant="dark" text-variant="white" style="min-height: 400px;">
        <template v-slot:header>
          <b-row>
            <b-col>
              <h4 v-if="!loadingTools" class="mb-0">Lista de ferramentas</h4>
              <h4 v-else class="mb-0">Carregando ferramentas...</h4>
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
            <b-col 
              sm="12" 
              md="6" 
              class="mb-3" 
              v-for="tool of tools"
              :key="tool._id"
            >
              <tool-list-item 
                :name="tool.title"
                :description="tool.description"
                :id="tool._id"
                :url="tool.link"
                :tags="tool.tags"
              />
            </b-col>
          </b-row>
        </template>

        <template v-slot:footer>
          <h5 class="mb-0">Lista de ferramentas</h5>
        </template>
      </b-card>
    </b-container>

    <b-modal v-model="openCreateToolForm" hide-footer title="Cadastrar Ferramenta">
      <tool-form @close="openCreateToolForm = false" />
    </b-modal>
  </div>
</template>

<script>
import ToolListItem from '../components/ToolListItem'
import ToolForm from '../components/ToolForm'

export default {
  name: 'Home',
  components: {
    ToolListItem,
    ToolForm,
  },
  data () {
    return {
      openCreateToolForm: false,
      loadingTools: false,
    }
  },
  async mounted () {
    this.loadingTools = true
    // Waiting for login workaround. Needs middleware
    setTimeout(() => {
      this.$store.dispatch('tool/loadAllTools')
      this.loadingTools = false
    }, 3000)
  },
  methods: {
    handleAddNewToolClick () {
      this.$store.commit('toolForm/setCreatingMode')
      this.$store.commit('toolForm/clear')
      this.openCreateToolForm = true
    },
  },
  computed: {
    tools () {
      return this.$store.state.tool.tools
    },
  }
}
</script>

<style lang="scss">
.home {
  padding: 20px 0;
}
</style>