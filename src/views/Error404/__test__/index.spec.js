import { shallowMount } from '@vue/test-utils';
import Error404 from '../Error404.vue';

describe('Error404.vue', () => {
	it('Renders 404 message', () => {
		const wrapper = shallowMount(Error404);

		const findH1 = wrapper.find('h1');
		expect(findH1.text()).toBe('404 - Page Not Found ⚠️');
	});
});
