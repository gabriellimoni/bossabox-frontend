<template>
    <b-card text-variant="dark">
        <template v-slot:header>
            <a :href="url" target="blank">
                <h5 class="mb-0">{{ name }}</h5>
            </a>
        </template>

        <p v-html="description"></p>
        <ul>
            <li v-for="(tag, i) of tags" :key="i">
                <b-badge variant="info">
                    {{ tag }}
                </b-badge>
            </li>
        </ul>

        <div style="text-align: right;">
            <b-button 
                variant="danger"
                @click="handleDeleteToolClick"
            >
                <b-icon-trash></b-icon-trash>
            </b-button>
        </div>
    </b-card>
</template>

<script>
export default {
    props: {
        id: { type: String, description: 'Tool ID', required: true },
        name: { type: String, description: 'Tool name', required: true },
        description: { type: String, description: 'Tool description' },
        tags: { type: Array, description: 'Tool tags' },
        url: { type: String, description: 'Tool URL' },
    },
    methods: {
        handleDeleteToolClick () {
            console.log('delete tool')
        },
    },
}
</script>

<style scoped>
ul {
    display: flex;
    align-items: center;
    padding: 0;
}

li {
    list-style-type: none;
    margin-right: 5px;
}
</style>