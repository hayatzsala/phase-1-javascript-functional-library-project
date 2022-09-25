function myEach(collection, callback){
    for(var i in collection){
        callback(collection[i]);
    }
    return collection;
}

function myMap(collection, callback){
    let newCollection = [];
    for(var i in collection){
        newCollection.push(callback(collection[i]));
    }
    return newCollection;
}

function myReduce(collection, callback, acc){
   
    //let newCollection = acc === undefined ? collection.slice(1) : collection
    let newAcc = acc=== undefined 
    ? collection["one"] === undefined? collection[0]
    :collection["one"]
    : acc ;
    //console.log(newAcc);
    for(var i in collection){
        //console.log(i);
        if((i == 0 || i === "one") && acc === undefined){
            continue;
        }
        newAcc = callback(newAcc, collection[i], collection);
    }
    return newAcc;
}

function myFind(collection, predicate){
    for(var i in collection){
        if(predicate(collection[i])){
            return collection[i];
        }
    }
    return undefined;
}

function myFilter(collection, predicate){
    let result = [];
    for(var i in collection){
        if(predicate(collection[i])){
            result.push(collection[i]);
        }
    }
    return result;
}

function mySize(collection){
    let size = 0;
    for(var i in collection){
        size++;
    }
    return size;
}

function myFirst(array, n){
    if(n === undefined){
        return array[0];
    }
    let result = [];
    for(let i = 0; i < n; i++){
        result.push(array[i]);
    }
    return result;
}

function myLast(array, n){
    if(n === undefined){
        return array[array.length-1];
    }
    let result = [];
    for(let i = array.length-n; i < array.length; i++){
        result.push(array[i]);
    }
    return result;
}

function myKeys(object){
    let result = [];
    for(var key in object){
        result.push(key);
    }
    return result;
}

function myValues(object){
    let result = [];
    for(var key in object){
        result.push(object[key]);
    }
    return result;
}

function mySortBy(array, callback){
    array.sort(callback);
}