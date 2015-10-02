function getArrays(obj) {
    var result = [];
    for (var prop in obj) {
        if (Array.isArray(obj[prop]))  {
            result.push ( obj[prop]);
        }
    }
    return result;
}

removeChildDuplicateKeyInParent = function (data) {
    var arr = getArrays(data);

    arr.forEach(function(child) {
        child.forEach(function (item) {
            for (var prop in item) {
                if (data[prop] !== undefined) {
                    delete item[prop];
                }
            }
        })
    });
    return data
};

var jsonClean = {
    removeChildDuplicateKeyInParent: removeChildDuplicateKeyInParent
};

module.exports = jsonClean;