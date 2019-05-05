<template>
<div>
    <!-- view the question -->
    <div v-if="!editing">
        <h1>{{question.title}}</h1>
        <div class="body">{{question.body}}</div>
        <button id="edit" v-if="!editing" @click="editing = !editing">Edit</button>
    </div>

    <!-- edit the question -->
    <div v-else>
        <input type="text" name="title" v-model="question.title">
        <textarea type="text" name="body" v-model="question.body"></textarea>

        <button id="update" @click="editing = false">Update</button>
    </div>

</div>
</template>

<script>
export default {
    props: ['question'],
    data() {
        return {
            question: this.dataQuestion,
            editing: false
        };
    },
    computed: {

    },
    methods: {

    }
}
</script>
