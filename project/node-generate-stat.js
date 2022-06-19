function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

const identity      = 'dis';
const max           = 11;

let max_users       = {
    id              : '',
    value           : 0,
};
let max_employees   = {
    id              : '',
    value           : 0,
};
let max_documents   = {
    id              : '',
    value           : 0,
};
let max_commodities = {
    id              : '',
    value           : 0,
};
let max_traffics    = {
    in              : {
        id          : '',
        value       : 0,
    },
    out             : {
        id          : '',
        value       : 0,
    },
};

for (let i = 1; i <= max; i++) {
    const id            = identity + i;
    const users         = getRandomInt(2, 100);
    const employees     = getRandomInt(2, 60);
    const documents     = getRandomInt(2, 420);
    const commodities   = getRandomInt(2, 40);
    const traffic_in    = getRandomInt(2, 20);
    const traffic_out   = getRandomInt(2, 20);

    console.log('{');
    console.log('rid\t\t: \''+id+'\',');
    console.log('users\t\t: '+users+',');
    console.log('employees\t: '+employees+',');
    console.log('documents\t: '+documents+',');
    console.log('commodities\t: '+commodities+',');
    console.log('traffics\t: {');
    console.log('\t\tin\t    : '+traffic_in+',');
    console.log('\t\tout\t    : '+traffic_out+',');
    console.log('},');
    console.log('},');

    if (max_users.value < users) {
        max_users.id            = id;
        max_users.value         = users;
    }
    if (max_employees.value < employees) {
        max_employees.id        = id;
        max_employees.value     = employees;
    }
    if (max_documents.value < documents) {
        max_documents.id        = id;
        max_documents.value     = documents;
    }
    if (max_commodities.value < commodities) {
        max_commodities.id      = id;
        max_commodities.value   = commodities;
    }
    if (max_traffics.in.value < traffic_in) {
        max_traffics.in.id      = id;
        max_traffics.in.value   = traffic_in;
    }
    if (max_traffics.out.value < traffic_out) {
        max_traffics.out.id     = id;
        max_traffics.out.value  = traffic_out;
    }
}

console.log('\n\n');
console.log('users : '+max_users.id+'\t| '+max_users.value);
console.log('employees : '+max_employees.id+'\t| '+max_employees.value);
console.log('documents : '+max_documents.id+'\t| '+max_documents.value);
console.log('commodities : '+max_commodities.id+'\t| '+max_commodities.value);
console.log('traffics in : '+max_traffics.in.id+'\t| '+max_traffics.in.value);
console.log('traffics out : '+max_traffics.out.id+'\t| '+max_traffics.out.value);