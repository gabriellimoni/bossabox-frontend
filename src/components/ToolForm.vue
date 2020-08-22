<template>
    <div text-variant="dark">
        <b-form>
            <b-form-group
                label="Nome:"
            >
                <b-form-input
                    type="text"
                    required
                    placeholder="Nome da ferramenta"
                    @change="setToolTitle($event)"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                label="Link:"
            >
                <b-form-input
                    type="text"
                    required
                    placeholder="https://..."
                    @change="setToolLink($event)"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                label="Descrição:"
            >
                <b-form-textarea
                    required
                    rows="3"
                    placeholder="Descrição da ferramenta"
                    @change="setToolDescription($event)"
                ></b-form-textarea>
            </b-form-group>

            <label>Tags:</label>
            <b-form-tags 
                v-model="tags" 
                class="mb-4"
                placeholder="Adicione uma tag..."
                addButtonText="Adicionar"
            >
            </b-form-tags>

            <div style="text-align: right;">
                <b-button 
                    variant="outline-success" 
                    outlined
                    class="mr-1"
                    @click="saveTool"
                >
                    Salvar
                </b-button>
                <b-button 
                    variant="outline-danger"
                    @click="close"
                >
                    Cancelar
                </b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('toolForm')
export default {
    methods: {
        async saveTool () {
            if (this.mode === 'creating') {
                await this.createTool()
            } else if (this.mode === 'editing') {
                
            }
            this.close()
        },
        close () {
            this.$emit('close')
        },
        ...mapMutations([
            'setToolTitle',
            'setToolLink',
            'setToolDescription',
            'setToolTags',
        ]),
        ...mapActions([
            'createTool',
        ]),
    },
    computed: {
        tags: {
            get () {
                return this.$store.state.toolForm.tags
            },
            set (tags) {
                this.setToolTags(tags)
            }
        },
        ...mapState([
            '_id',
            'title',
            'link',
            'description',
            'mode',
        ])
    },
}
</script>

<style scoped>
</style>