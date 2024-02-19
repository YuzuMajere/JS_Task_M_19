const person = {
    name: "John",
    age: 25
};
const string = "name";

function property(obj, str) {
    if (obj.hasOwnProperty("name")) {
        if (str.hasOwnProperty("name")) {
            console.log(str.hasOwnProperty("name"))
        } else {
            console.log(str.hasOwnProperty("name"))
        }
    }
};

property(person, string);