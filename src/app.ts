console.log('working app');

const msg = 'node, ts, nodemon up and running';
console.log(msg);

class Dog {
	constructor(public name: string) {
		this.name = name;
	}
}

const leo = new Dog('Leonidas');
console.log(leo);
