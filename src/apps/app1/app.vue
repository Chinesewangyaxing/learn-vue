<template>
    <div class="message">
        {{ msg }}
    </div>
</template>

<script>
    export default {
        data() {
            return {
                msg: 'hello msg'
            }
        }
    }
</script>

<style lang="sass">
    .message {
        color: red;
    }
</style>