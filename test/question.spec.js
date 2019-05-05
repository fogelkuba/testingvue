import {
    mount
} from 'vue-test-utils';
import expect from 'expect';
import Question from '../src/components/Question.vue';

describe('Question', () => {
   
    let wrapper;
    beforeEach( () => {
        wrapper = mount(Question, {
            propsData: {
                question: {
                    title: 'The Title',
                    body: 'The body'
                }
            }
        });
    });

    it('presents the title and the body', () => {
        // expect(wrapper.html()).toContain('The Title');
        // expect(wrapper.html()).toContain('The body');
        see('The Title');
        see('The body');
    });

    let see =  (text, selector) => {
        let wrap = selector ? wrapper.find(selector) : wrapper;
        expect(wrap.html()).toContain(text);
    }
});