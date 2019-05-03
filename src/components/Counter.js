export default {
    template: `
        <div>
            <span class="count">{{count}}</span>
            <button @click="increment()">+</button>
        </div>
    `,
    data () {
        return {
            count: 0
        }
    },
    methods: {
        increment() {
            this.count++
        }
    }
}