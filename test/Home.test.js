import Vuex from 'vuex';
import { createLocalVue,shallowMount } from '@vue/test-utils';
import { __createMocks as createStoreMocks } from './__mocks__/index';
import BootstrapVue from 'bootstrap-vue'
import Card from '../src/components/Home/Card.vue'

import {Alert,Loading,InputFeed}   from '../src/components/shared'
import Home from '../src/components/views/Home.vue';


// Tell Jest to use the mock
// implementation of the store.
jest.mock('../src/store/Index.js');

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(BootstrapVue)


describe('testing home', () => {
    let storeMocks;
    let wrapper;

    beforeEach(() => {
        // Create a fresh store and wrapper
        // instance for every test case.
       
        storeMocks = createStoreMocks();
        wrapper = shallowMount(Home, {
            store: storeMocks.store,
            localVue,
            // stubs :{
            //     'app-loading' : Loading
            // }
        });
    });

    test('It should fetch post.', () => {
        expect(storeMocks.actions.fetchPost).toBeCalled();
    });


    test('sum lenght item', () => {
        let item = wrapper.findAll(Card);
        expect(item).toHaveLength(storeMocks.getters.getPostCount());
        expect(wrapper.find(Loading).exists()).toBe(false);
        expect(wrapper.find(Alert).exists()).toBe(false);
    });

})