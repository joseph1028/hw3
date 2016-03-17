function greet(callback) {
	console.log('Hola,wakaka!');
	var data = {
		name: 'Richa'
	};

	callback(data);
}

greet(data => {
	console.log('The first callback was invoked!');
	console.log(data);
});

greet(data => {
	console.log('The seconed callback was invoked!');
	console.log(data.name);
});
