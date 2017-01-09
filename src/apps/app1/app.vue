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

<style>
    .message {
        color: red;
    }
</style>