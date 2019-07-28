
var person = {}; 
person.firstName = 'Вася';
person.secondName = 'Иванов'
person['his age'] = 25; 
person.isMan = true;
person.driver = '';
person.wife = {
	firstName: 'Olya',
	secondName: 'Petrova',
	age: 25,
	isMman: 1,
	driver: null
	}
person.brather = 'Ivan';
person.age =34;

var secondPerson = {};
var counter = 0;

function copyObject(oldObject) {
	var newObject = {};
	
	for (var key in oldObject) {
		if (typeof oldObject[key] === 'object' && oldObject[key]) {
			console.log(oldObject[key]);
			newObject[key] = copyObject(oldObject[key]);   
		}
		else {
			newObject[key] = oldObject[key];
		}
	}
	return newObject;
}

secondPerson  = copyObject(person);
 console.log ('Новый объект secondPerson = ', secondPerson);

console.log (secondPerson.wife.firstName);
secondPerson.wife.firstName = 'Дима';
console.log (secondPerson.wife.firstName);
console.log (person.wife.firstName);
 console.log (person);
person.wife.firstName = 'BUJJJ';
console.log (secondPerson.wife.firstName);
console.log (person.wife.firstName);
 



