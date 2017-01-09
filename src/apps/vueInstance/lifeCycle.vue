<template>
    <p>Life Cycle. {{ a }}</p>
</template>

<script>
    const data = { a: 1 };
    setTimeout(() => data.a = 10, 100);
    export default {
        data() {
            return data;
        },
        el: '#lifeCycle',
        created: function() {
            console.log('component is created');
        },
        mounted: function() {
            console.log('component is mounted');
        },
        updated: function() {
            console.log('component is updated');
        },
        destroyed: function() {
            console.log('conponent is destroyed');
        }
    }
</script>