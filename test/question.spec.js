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
        expect(wrapper.find('textarea[name=body]').element.value).toBe('The body');
    });

    it('hides the edit button during edit mode', () => {
        wrapper.find('#edit').trigger('click');
        expect(wrapper.contains('#edit')).toBe(false);
    });

    it('updates the question after being edited', () => {
        wrapper.find('#edit').trigger('click')

        // wrapper.find('input[name=title]').element.value = 'Changed title';
        // wrapper.find('input[name=title]').trigger('input');
        type('input[name=title]', 'Changed title');
        type('textarea[name=body]', 'Changed body');
    });

    //helpers
    let see =  (text, selector) => {
        let wrap = selector ? wrapper.find(selector) : wrapper;
        expect(wrap.html()).toContain(text);
    };

    let type = (text, selector) => {
        wrapper.find(selector).element.value = text;
        wrapper.find(selector).trigger('input');
    };
});