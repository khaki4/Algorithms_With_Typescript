var foo = [
    'Alpha',
    'beta',
    'Gamma',
    'delta'
];
foo.sort(function (a, b) { return a.toLowerCase().localeCompare(b.toLowerCase()); });
foo.forEach(function (x) { return console.log(x); });
