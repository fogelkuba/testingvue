<template>   
    <div>
        <span class="count" v-text="count"></span>
        <button class='increment' @click="count++">Increment</button>
        <button class='decrement' v-show="count > 0" @click="count > 0 && count--">Decrement</button>
    </div>
</template>   

<script>
    export default {
    data() {
        return {
        count: 0
        };
    }
    };
</script>