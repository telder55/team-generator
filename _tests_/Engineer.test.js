// Getting class constructor for this file
const Engineer = require('../lib/engineer')

test('can create a new instance of engineer', () => {
    const x = new Engineer(name);
    expect(typeof(x)).toBe('object');
})

test('can set name via constructor argument', () => {
    const name = 'TJ'
    const x = new Engineer(name);
    expect(x.name).toBe(name)
})

// Test for ID
test('can set ID via constructor argument', () => {
    const id = 5
    const x = new Engineer('Foo', id);
    expect(x.id).toBe(id);
})

test('can set email via constructor argument', () => {
    const email = 'test@gmail.com'
    const x = new Engineer('Foo', 5, email);
    expect(x.email).toBe(email);
})

test('can get Github via getGithub()', () => {
    const testValue = 'telder55'
    const x = new Engineer('Foo', 5, 'foo', testValue);
    expect(x.getGithub()).toBe(testValue);

})