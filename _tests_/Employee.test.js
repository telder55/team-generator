// Getting class constructor for this file
const Employee = require('../lib/employee')

test('can instantiate a new instance of employee', () => {
    // new + Capital Employee is instantiating a new employee
    const x = new Employee(name);
    // test if i was using new employee constructor, and i pass into it a name or anything (data). Then it would pass the test and create a new object. 
    expect(typeof(x)).toBe('object');
})

test('can set name via constructor argument', () => {
    const name = 'TJ'
    // new + Capital Employee is instantiating a new employee
    const x = new Employee(name);

    // Test to see if name matches what it should be
    expect(x.name).toBe(name)
})

// Test for ID
test('can set ID via constructor argument', () => {
    const id = 5
    // Using foo because you need to pass something for first param to test second one 'id' 
    const x = new Employee('Foo', id);

    // Test to see if ID matches what it should be
    expect(x.id).toBe(id);
})

test('can set email via constructor argument', () => {
    const email = 'test@gmail.com'
    // Using foo because you need to pass something for first param to test second one 'id' 5 is also placeholder here.
    const x = new Employee('Foo', 5, email);

    // Test to see if email matches what it should be
    expect(x.email).toBe(email);
})

// Test for getting name 
test('can get ID via getID()', () => {
    const testValue = 1
    const x = new Employee('TJ', testValue);
    expect(x.getID()).toBe(testValue);

})