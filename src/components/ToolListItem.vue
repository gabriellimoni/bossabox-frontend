<template>
    <b-card text-variant="dark">
        <template v-slot:header>
            <a :href="url" target="blank">
                <h5 class="mb-0">{{ name }}</h5>
            </a>
        </template>

        <p v-html="description"></p>

        <b-button 
            variant="primary" 
            class="mr-1"
            @click="handleEditToolClick"
        >
            <b-icon-pencil></b-icon-pencil>
        </b-button>
        <b-button 
            variant="danger"
            @click="handleDeleteToolClick"
        >
            <b-icon-trash></b-icon-trash>
        </b-button>
    </b-card>
</template>

<script>
export default {
    props: {
        id: { type: String, description: 'Tool ID', required: true },
        name: { type: String, description: 'Tool name', required: true },
        description: { type: String, description: 'Tool description' },
        url: { type: String, description: 'Tool URL' },
    },
    methods: {
        handleEditToolClick () {
            console.log('edit tool')
        },
        handleDeleteToolClick () {
            console.log('delete tool')
        },
    },
}
</script>

<style>

</style>