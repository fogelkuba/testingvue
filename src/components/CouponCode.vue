<template>
    <div>
        <input type="text" 
               class="coupon-code" 
               v-model="code" 
               @input="validate"
        />
        <p v-if="valid">
            Coupon Redeemed: {{message}}
        </p>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                code: '',
                valid: false,
                coupons: [
                    {
                        code: '50OFF',
                        message: '50% Off!',
                        discount: 50
                    },
                    {
                        code: 'FREE',
                        message: 'Entirely Free!',
                        discount: 100
                    },
                ]
            };
        },
        methods: {
            validate() {
                this.valid = this.coupons.map(coupon => coupon.code).includes(this.code);
                if (this.valid) {
                    this.$emit('applied', 50, 'foobar');
                }
            }
        },
        computed: {
            message() {
                return this.coupons.find((coupon) => {
                    return coupon.code === this.code;
                }).message;
            }
        }
    }
</script>