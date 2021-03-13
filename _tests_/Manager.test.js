// Getting class constructor for this file
const Manager = require('../lib/manager')

test('can create a new instance of manager', () => {
    const x = new Manager(name);
    expect(typeof(x)).toBe('object');
})

test('can set name via constructor argument', () => {
    const name = 'TJ'
    const x = new Manager(name);
    expect(x.name).toBe(name)
})

// Test for ID
test('can set ID via constructor argument', () => {
    const id = 5
    const x = new Manager('Foo', id);
    expect(x.id).toBe(id);
})

test('can set email via constructor argument', () => {
    const email = 'test@gmail.com'
    const x = new Manager('Foo', 5, email);
    expect(x.email).toBe(email);
})

test('can get Phone Number via getOfficeNumber()', () => {
    const testValue = 2033133331
    const x = new Manager('Foo', 5, 'foo', testValue);
    expect(x.getOfficeNumber()).toBe(testValue);

})