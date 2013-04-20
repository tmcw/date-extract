var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
        'August', 'September', 'October', 'November', 'December'],
    abbrevs = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug',
        'Sept', 'Oct', 'Nov', 'Dec'],
    all = '(' + months.join('|') + '|' + abbrevs.join('|') + ')' +
        '\\.?\\s+([\\d]{1,2}),?\\s?([\\d]{4})';

module.exports = function(text) {
    var re = new RegExp(all, 'g'), d, dates = [];
    while (d = re.exec(text)) dates.push(new Date(d[0]));
    return dates;
};
