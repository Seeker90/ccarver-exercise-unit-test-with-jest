test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07; 
    
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})

test("One dollar should be 156.5 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const yen = fromDollarToYen(1);
    const expected = 1 * 156.5; 
    
    expect(fromDollarToYen(1)).toBe(156.5); 
})

test("One yen should be 0.87 pounds", function() {
    const { fromYenToPound } = require('./app.js');
    const yen = fromYenToPound(1);
    const expected = 1 * 0.87; 
    
    expect(fromYenToPound(1)).toBe(0.87); 
})
