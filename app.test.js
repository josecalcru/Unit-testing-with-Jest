// import the function sum from the app.js file
const { fromEuroToDollar } = require('./app.js');

// start your first test
test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(dollars);
})
test("3.5 dollars should be 373.041666666 Yen", function(){
    //import the function from app.js
    const { fromDollarToYen } = require('./app.js')

    // use the function like its suppoed to be used
    const yens = fromDollarToYen(3.5)


    const expected = 3.5 * 1/1.2*127.9; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(yens);
})

test("1 yen is 0.8/127.9 pounds", function(){
    //import the function from app.js
    const { fromYenToPound } = require('./app.js')

    // use the function like its suppoed to be used
    const pounds = fromYenToPound(1)


    const expected = 1 * 0.8/127.9; 
    
    // this is the comparison for the unit test
    expect(expected).toBe(pounds);
})
