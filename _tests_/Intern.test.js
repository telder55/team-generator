// Getting class constructor for this file
const Intern = require('../lib/intern')

test('can create a new instance of intern', () => {
    const x = new Intern(name);
    expect(typeof(x)).toBe('object');
})

test('can set name via constructor argument', () => {
    const name = 'TJ'
    const x = new Intern(name);
    expect(x.name).toBe(name)
})

// Test for ID
test('can set ID via constructor argument', () => {
    const id = 5
    const x = new Intern('Foo', id);
    expect(x.id).toBe(id);
})

test('can set email via constructor argument', () => {
    const email = 'test@gmail.com'
    const x = new Intern('Foo', 5, email);
    expect(x.email).toBe(email);
})

test('can get school via getSchool()', () => {
    const testValue = 'Southpark Elementary'
    const x = new Intern('Foo', 5, 'foo', testValue);
    expect(x.getSchool()).toBe(testValue);

})