const obj = {
    '1': 1,
    '2': 2,
    '3': 3,
};

function getOwnKeysAndValues(a) {
    for (let key in a) {
        if (a.hasOwnProperty(key)) {
            console.log(a.key);
        }
    }
};

getOwnKeysAndValues(obj);