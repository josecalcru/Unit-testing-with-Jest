// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromDollarToYen = (number)=>{

   return number*(1/oneEuroIs.USD)*(oneEuroIs.JPY);
}
const fromEuroToDollar = (number)=>{

   return number*oneEuroIs.USD;
}

const fromYenToPound = (number)=>{

   return number*(1/oneEuroIs.JPY)*(oneEuroIs.GBP);
}


// just a console log for ourselves.
console.log(fromDollarToYen(3.5));

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { fromDollarToYen, fromEuroToDollar,fromYenToPound }
