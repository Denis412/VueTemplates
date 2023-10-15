import { afterEach, describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from './HelloWorld.vue';

describe('HelloWorld component', () => {
    const wrapper = mount(HelloWorld);

    it('trigger increment conut', async () => {
        expect(wrapper.getComponent(HelloWorld).vm.count).toBe(0);

        const btn = wrapper.find('button');
        const f = await btn.trigger('click');

        expect(wrapper.getComponent(HelloWorld).vm.count).toBe(1);
        expect(wrapper.html()).toContain('count is 1');

        console.log('btn', f);
    });

    afterEach(() => {
        wrapper.unmount();
    });
});
