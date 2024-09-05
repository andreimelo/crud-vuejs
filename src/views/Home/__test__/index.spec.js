import { shallowMount } from '@vue/test-utils';
import Home from '../Home.vue'; // adjust the path based on your setup
import { addUser, getUser, deleteUser, updateUser } from '../../../services/user'; // mock the services

jest.mock('../../../services/user', () => ({
	addUser    : jest.fn(),
	getUser    : jest.fn(),
	deleteUser : jest.fn(),
	updateUser : jest.fn(),
}));

describe('Home.vue', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallowMount(Home);
		global.alert = jest.fn(); // Mock window.alert
	});

	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should render the component properly', () => {
		expect(wrapper.exists()).toBe(true);
	});

	it('should fetch users on mount', async () => {
		await wrapper.vm.$nextTick(); // wait for any promises
		expect(getUser).toHaveBeenCalled();
	});

	it('should update form data when editing user', async () => {
		const user = {
			id        : 1,
			email     : 'test@example.com',
			name      : 'Test User',
			contact   : '1234567890',
			birthDate : '2000-01-01',
		};
		wrapper.vm.editUser(user);
		expect(wrapper.vm.form.email).toBe('test@example.com');
		expect(wrapper.vm.form.name).toBe('Test User');
		expect(wrapper.vm.form.contact).toBe('1234567890');
		expect(wrapper.vm.form.birthDate).toBe('2000-01-01');
		expect(wrapper.vm.userId).toBe(1);
	});

	it('should clear form data on clearForm call', () => {
		wrapper.vm.clearForm();
		expect(wrapper.vm.form.email).toBe('');
		expect(wrapper.vm.form.name).toBe('');
		expect(wrapper.vm.form.contact).toBe('');
		expect(wrapper.vm.form.birthDate).toBe('');
	});

	it('should call addUser on form submit', async () => {
		wrapper.vm.handleSubmitForm();
		await wrapper.vm.$nextTick();
		expect(addUser).toHaveBeenCalledWith(wrapper.vm.form);
		expect(getUser).toHaveBeenCalled();
	});

	it('should call updateUser on form submit if userId exists', async () => {
		wrapper.vm.userId = 1;
		wrapper.vm.handleSubmitForm();
		await wrapper.vm.$nextTick();
		expect(updateUser).toHaveBeenCalledWith(1, wrapper.vm.form);
		expect(getUser).toHaveBeenCalled();
	});

	it('should call removeUser on user deletion', async () => {
		window.confirm = jest.fn(() => true); // mock the confirmation dialog
		await wrapper.vm.removeUser(1);
		expect(deleteUser).toHaveBeenCalledWith(1);
		expect(getUser).toHaveBeenCalled();
	});
});
