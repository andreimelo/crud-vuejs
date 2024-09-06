const validateEmail = (email) => {
	const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
};

const validateMobileNumber = (number) => {
	const regex = /^\+?[1-9]\d{1,14}$/; // For E.164 format
	return regex.test(number);
};

// const validateStringOnly = (name) => {
// 	const regex = /^\d+$/;
// 	return regex.test(name);
// };

const validateForm = (inputs) => {
	const error = {};
	if (!validateEmail(inputs.email) || !inputs.email) {
		error.email = 'Invalid email format';
	}

	if (!inputs.name) {
		error.name = 'Name is required';
	}

	if (inputs.name.length > 24) {
		error.name = 'Name too long ,max length is 24';
	}

	if (!validateMobileNumber(inputs.contact)) {
		error.contact = 'Maximum 15 digits, optionally prefixed with a +';
	}

	if (!inputs.birthDate) {
		error.birthDate = 'Birth Date is required';
	}
	return error;
};

export { validateForm };
