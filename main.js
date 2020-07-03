// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata(kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

// KATA 0 ~ Example
const greenEyes1 = users.filter(user => user.eyeColor === "green")

printKata(0, greenEyes1)

// KATA 1 ~ Use the .filter() method
const isTrueActive = users
    .filter(users => users.isActive)

printKata(1, isTrueActive)

// KATA 2 ~ Use the .map() method
const seekOnlyEmail = users
    .map(users => users.email)

printKata(2, seekOnlyEmail)

// KATA 3 ~ Use the .some() method
const checkUserCompany = users
    .some(users => users.company === "OVATION")

printKata(3, checkUserCompany)

// KATA 4 ~ Use the .find() method
const findFirstOver38 = users
    .find(users => users.age > 38)

printKata(4, findFirstOver38)

// KATA 5 ~ Use the .filter() and .find() methods
const filterFindActive38 = users
    .filter(users => users.isActive)
    .find(users => users.age > 38)

printKata(5, filterFindActive38)

// KATA 6 ~ Use the .filter() and .map() methods
const filterMapCompanyBal = users
    .filter(users => users.company === "ZENCO")
    .map(users => users.balance)

printKata(6, filterMapCompanyBal)

// KATA 7 ~ Use the .filter() method with .includes() and the .map() method
const filterIncludesMapUsers = users
    .filter(users => users.tags.includes("fugiat"))
    .map(users => users.age)

printKata(7, filterIncludesMapUsers)
