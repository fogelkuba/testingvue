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
                    title: 'The title',
                    body: 'The body'
                }
            }
        });
    });

    it('presents the title and the body', () => {
        // expect(wrapper.html()).toContain('The Title');
        // expect(wrapper.html()).toContain('The body');
        see('The title');
        see('The body');
    });

    it('can be edited', () => {
        expect(wrapper.contains('input[name=title]')).toBe(false)
        wrapper.find('#edit').trigger('click');
        expect(wrapper.find('input[name=title]').element.value).toBe('The title');
        expect(wrapper.find('input[name=body]').element.value).toBe('The body');
    });

    it('hides the edit button during edit mode', () => {
        wrapper.find('#edit').trigger('click');
        expect(wrapper.contains('#edit')).toBe(false);
    });

    let see =  (text, selector) => {
        let wrap = selector ? wrapper.find(selector) : wrapper;
        expect(wrap.html()).toContain(text);
    }
});