import { mount } from '@vue/test-utils'
import HelloComponent from '../src/components/views/Hello.vue';
describe('heloo',()=>{
    const message = 'testing';
    const wrapper = mount(HelloComponent)
    wrapper.setData({msg : message})

    it('h1 must be equal with  message',()=>{
        expect(wrapper.find('h1').text()).toBe(message)
    })

});
