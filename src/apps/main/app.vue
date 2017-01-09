<template>
    <ul>
        <li v-for="item in projects">
            <a v-bind:href="getUrl(item)">{{ item }}</a>
        </li>
    </ul>
</template>

<script>
    export default {
        data() {
            return {
                projects: [
                    'workWithScriptLabel',
                    'workWithWebpack'
                ]
            }
        },
        methods: {
            getUrl: function(item) {
                return '/' + item + '.html';
            }
        }
    }
</script>