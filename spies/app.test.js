const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy()
    };

    app.__set__('db', db);

    it('should call the spy correctly', () => {
        var spy = expect.createSpy();
        spy('Katerina', 20);
        expect(spy).toHaveBeenCalledWith('Katerina', 20);
    });

    it('should call saveUser with user object', () => {
        var email = 'katerina@example.com';
        var password = '123abs'

        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
    });
});