const convertTimeStamp = (timestamp) => {
	const date = new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000);
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
	const day = String(date.getDate()).padStart(2, '0');

	return `${year}-${month}-${day}`;
};
const maxDate = (ref) => ref(new Date().toISOString().split('T')[0]);

export { convertTimeStamp, maxDate };
