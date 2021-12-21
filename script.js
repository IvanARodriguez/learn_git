let trueName = "Ivan";
let newAge = 30;
// the following function returns my name
function nameFunction(newName){
    newName = trueName;
    return newName;
}

function nameFunction(newName, funcAge){
    funcAge = newAge;
    newName = trueName;

    return newName + " " + funAge;
}

console.log(nameFunction());
console.log(nameWithAge());