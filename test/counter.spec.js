import {mount} from '@vue/test-utils';
import Counter from './src/components/Counter.js';
import expect from 'expect';

describe('Counter', () => {

    if ('defaults to a count of 0', () => {
        let wrapper = mount(Counter);
        wrapper.vm.count
    });

})