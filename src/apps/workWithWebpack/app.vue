<template>
    <div class="message">
        {{ msg }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'hello vue.js'
            }
        }
    }
</script>

<style lang="sass">
    .message {
        color: red;
        font-size: 24px;
        text-align: center;
        width: 300px;
        height: 100px;
        border: 1px solid blue;
        margin-top: 10px;
        padding-top: 40px;
    }
</style>