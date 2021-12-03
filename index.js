// Code your solution in this file!
function returnFirstTwoDrivers (a) {
    let na = []
    na[0] = a[0]
    na[1] = a[1]
    return na
}

function returnLastTwoDrivers(a) {
    let na = []
    na.push(a[a.length - 2])
    na.push(a[a.length - 1])
    return na
}

let selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers ];

const createFareMultiplier = function(multiplier) {
    return function (val) {
        return multiplier * val
    }
}

const fareDoubler = function(fare) {
    return fare * 2
}

const fareTripler = function(fare) {
    return fare * 3
}

const selectDifferentDrivers = function(arr1, arr2) {
    return arr2(arr1)
}