
use('SigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('courses').insertMany([
    { 'name': 'java', 'cost': 9.99, 'instructor': 'Joseph' },
    { 'name': 'python', 'cost': 12.99, 'instructor': 'Alice' },
    { 'name': 'javascript', 'cost': 14.99, 'instructor': 'Bob' },
    { 'name': 'c++', 'cost': 10.99, 'instructor': 'Carol' },
    { 'name': 'ruby', 'cost': 11.99, 'instructor': 'Dave' },
    { 'name': 'swift', 'cost': 15.99, 'instructor': 'Eve' },
    { 'name': 'go', 'cost': 13.99, 'instructor': 'Frank' },
    { 'name': 'rust', 'cost': 14.49, 'instructor': 'Grace' },
    { 'name': 'php', 'cost': 8.99, 'instructor': 'Heidi' },
    { 'name': 'perl', 'cost': 9.49, 'instructor': 'Ivy' },
    { 'name': 'kotlin', 'cost': 12.49, 'instructor': 'Jack' },
    { 'name': 'typescript', 'cost': 13.49, 'instructor': 'Kim' },
    { 'name': 'scala', 'cost': 11.49, 'instructor': 'Leo' },
    { 'name': 'haskell', 'cost': 14.99, 'instructor': 'Mia' },
    { 'name': 'clojure', 'cost': 13.99, 'instructor': 'Nina' }
    
]);

console.log('Done inserting data')