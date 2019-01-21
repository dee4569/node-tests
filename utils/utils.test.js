const expect = require ('expect');

const utils = require ('./utils');

describe('Utils', () =>{

    describe('#add', () =>{
        it('should add two numbers', () => {
            var res = utils.add(33, 11);
            expect(res).toBe(44).toBeA('number');
        });
    });
    
    
    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });
    
    it('should square a number', () => {
        var res = utils.square(5);
        expect(res).toBe(25).toBeA('number');
    });
    
    it('it should async square a number', (done) => {
        utils.asyncSquare(5, (square) => {
            expect(square).toBe(25).toBeA('number');
            done();
        });
    });

});



it('should verify first and last names are set', () => {
    var user = utils.setName({
        age: 20,
        location: 'Sri Lanka'
    }, 'Dilshani Costa');

    expect(user).toInclude({
        firstName: 'Dilshani',
        lastName: 'Costa',
        age: 20
    });

});

// it('should expect some values', () => {
//     // expect(12).toNotBe(15);
//     // expect({name:'Dilshani'}).toNotEqual({name:'DIlshani'});
//     // expect([1, 2, 3, 4]).toExclude(10);
//     expect({
//         name: 'Dilshani',
//         age: 20,
//         location: 'Sri Lanka'
//     }).toExclude({
//         age: 23
//     })
// });