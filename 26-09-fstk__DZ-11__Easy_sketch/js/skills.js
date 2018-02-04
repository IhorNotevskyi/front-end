// generate all list items in the section “Skills”
var skills = [
    {name: 'HTML5', level: 8},
    {name: 'CSS3', level: 5},
    {name: 'JavaScript', level: 10},
    {name: 'ReactJS', level: 8},
    {name: 'AngularJS', level: 8}
];

(function addSkills(skills) {
    skills.forEach(function (item) {
        var black = '&#9679'.repeat([item.level]);
        var grey = '&#9679'.repeat(10 - [item.level]);

        var language = document.getElementsByClassName('language')[0];
        var header = document.createElement('h5');
        header.innerHTML = item.name;
        language.appendChild(header);

        var level = document.getElementsByClassName('level')[0];
        var span = document.createElement('span');
        span.setAttribute('class', 'circles');
        span.innerHTML = '<span class=\'black\'>' +  black + '<span class=\'grey\'>' + grey + '</span></span>';
        level.appendChild(span);
    });
})(skills);