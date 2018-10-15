import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import InputFeed from '../src/components/shared/Inputfeed.vue'
import BootstrapVue from 'bootstrap-vue'


const localVue = createLocalVue()

localVue.use(Vuex)
localVue.use(BootstrapVue)

describe('inputFeed', () => {
    let actions;
    let store;

    beforeEach(() => {
        actions = {
            addPostAction: jest.fn(),
            fakeAddAction : jest.fn()
        }

        store = new Vuex.Store({
            modules: {
                PostStore: {
                    actions,
                }
            }
        })

    })


    it('calls button meong', () => {
        const wrapper = shallowMount(InputFeed, { store, localVue });
        wrapper.find('button').trigger('click');
        expect(actions.addPostAction).toHaveBeenCalled();
    })

});
