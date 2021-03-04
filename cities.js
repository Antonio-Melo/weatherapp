const citiesJSON = require('./city.list.min.json');

const comparator = function(a, b) {
    var nameA = a.name.toUpperCase();
    var nameB = b.name.toUpperCase();
    if (nameA < nameB) {
        return -1;
    }
    if (nameA > nameB) {
        return 1;
    }

    return 0;
};

exports.findCityByName = query => {
    const lowerCaseQuery = query.toLowerCase();
    let citiesFound = citiesJSON.filter(c => c.name.toLowerCase()
        .startsWith(lowerCaseQuery));

    // sort by name
    citiesFound.sort(comparator);

    if(citiesFound.length > 20){
        citiesFound = citiesFound.slice(0, 20);
    }
    
    return citiesFound;
}