// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier (fareValue) {
    return function (mupltiplier) {
        return fareValue * mupltiplier;
    };
}

const fareDoubler = function (fareValue) {
    return createFareMultiplier(fareValue)(2);
}

const fareTripler = function (fareValue) {
    return createFareMultiplier(fareValue)(3);
}

function selectDifferentDrivers (drivers, firstOrLastTwoDrivers) {
    return firstOrLastTwoDrivers(drivers);
}