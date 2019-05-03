import { mount } from "vue-test-utils";
import expect from "expect";
import CouponCode from "../src/components/CouponCode.vue";

describe("CouponCode", () => {
    
    let wrapper;
    beforeEach(() => {wrapper = mount(CouponCode)});

    it('accepts a coupon code', () => {
        expect(wrapper.contains('input.coupon-code')).toBe(true);
    });

    it('validates a user-provided coupon code', () => {
        enterCouponCode('50OFF');

        expect(wrapper.text()).toContain('Coupon Redeemed: 50% Off!')
    });


    it('broadcasts the percentage discount when a valid coupon code is applied', () => {
            enterCouponCode('50OFF');

            expect(wrapper.emitted().aplied).toBeTruthy();
            expect(wrapper.emitted().aplied[0]).toEqual(50);
    });

    function enterCouponCode(code) {
        let couponCode = wrapper.find('input.coupon-code');
        couponCode.element.value = '50OFF';
        couponCode.trigger('input');
    }

}); 