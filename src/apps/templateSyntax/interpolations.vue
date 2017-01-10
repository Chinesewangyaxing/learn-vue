<template>
    <div>
        <p>Show Text: {{ textValue }}</p>
        <p>Show HTML: <span v-html="htmlValue"></span></p>
        <p v-bind:class="arrtibuteValue">Arrtibute Value</p>

        <p>Use Javascript Expression: {{ num1 }} + {{ num2 }} = {{ num1 + num2 }}</p>

        <p>"{{ character1 }}" is {{ character1 | determineCase }}</p>
        <p>"{{ character2 }}" is {{ character2 | determineCase }}</p>

        <h2>Shorthands</h2>
        <p :class="arrtibuteValue">":attr" equal "v-bind:attr"</p>
        <button @click="handleClick">"@event" equal "v-on:event"</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                textValue: 'this is a msg',
                htmlValue: '<strong>HTML</strong>',
                arrtibuteValue: 'color',
                num1: 10,
                num2: 20,
                character1: 'a',
                character2: 'A'
            }
        },
        filters: {
            determineCase: function(value) {
                if (typeof value === 'string' && value.length > 0) {
                    if (value[0] >= 'a' && value[0] <= 'z') {
                        return 'lower case';
                    } else {
                        return 'upper case';
                    }
                }
                return value;
            }
        },
        methods: {
            handleClick: function() {
                console.log('click button');
            }
        }
    }
</script>

<style>
    .color {
        color: red;
    }
</style>