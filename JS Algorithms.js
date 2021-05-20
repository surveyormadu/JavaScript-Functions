// JavaScript source code

//Convert Fahrenheit To Celsius
function convertFahrToCelsius(value) {

    var result;

    if ((typeof value === "number") && (isNaN(value) === false)) {
        result = convertTemp(value);
    }

    else if ((typeof value === "string") && (isNaN(parseInt(value)) === false) && (Number(value) === 0)) {
        result = convertTemp(value);
    }

    else if ((typeof value === "string") && (isNaN(parseInt(value)) === false) && (isNaN(Number(value)) === false)) {
        result = convertTemp(value);
    }

    else {
        result = JSON.stringify(value) + " is not a valid number but a/an " +
            Object.prototype.toString.call(value).slice(8, -1).toLowerCase() + ".";
    };

    console.log(result);
    return result;

};

function convertTemp(entry) {
    var degreeCel = (entry - 32) * (5 / 9);
    return degreeCel.toFixed(4);
};



//Check YuGiOh
function checkYuGiOh(n) {

    var newArray;

    if ((typeof n === "number") && (isNaN(n) === false) && (n !== Infinity)) {
        newArray = createArray(n);
    }

    else if ((typeof n === "string") && (isNaN(parseInt(n)) === false) && (Number(n) === 0)) {
        newArray = createArray(n);
    }

    else if ((typeof n === "string") && (isNaN(parseInt(n)) === false) && (isNaN(Number(n)) === false)) {
        newArray = createArray(n);
    }

    else {
        newArray = "invalid parameter: " + JSON.stringify(n);
    };

    console.log(newArray);
    return newArray;

};


function createArray(entry) {
    var numberArray = [];
    var yuGiOhArray;

    for (var i = 1; i <= entry; i++) {
        yuGiOhArray = [];

        if (i % 2 === 0) {
            yuGiOhArray.push("yu");
        };

        if (i % 3 === 0) {
            yuGiOhArray.push("gi");
        };

        if (i % 5 === 0) {
            yuGiOhArray.push("oh");
        };

        if (yuGiOhArray.length > 0) {
           var yuGiOhString = yuGiOhArray.join("-");
           numberArray.push(yuGiOhString);
        }

        else {
           numberArray.push(i);
        };

    };

    return numberArray;
};



