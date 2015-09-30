var _ = require('lodash'),
    input = {
        "wholesaler": "US Foods",
        "delivered": "2015-06-19T05:15:00-0500",
        "contacts": [
            {
                "wholesaler": "US Foods",
                "name": "John Lederer"
            },
            {
                "wholesaler": "Sysco",
                "name": "Bill Delaney"
            }
        ]
    },

    expected_result = {
        "wholesaler": "US Foods",
        "delivered": "2015-06-19T05:15:00-0500",
        "contacts": [
            {
                "name": "John Lederer"
            },
            {
                "name": "Bill Delaney"
            }
        ]
    }

var result = _.cloneDeep(input);

result.contacts = result.contacts.map(function (contact) {
    delete contact.wholesaler;
    return contact;
})

console.log('request:', JSON.stringify(input));
console.log('result:', JSON.stringify(result));
console.log('expected:', JSON.stringify(expected_result) === JSON.stringify(result));
