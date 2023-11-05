// Exercice 1: Obtenir la date d'aujourd'hui il y a 10 ans
const moment = require('moment');
module.exports = function dateIlYADixAns() {
    return moment().subtract(10, 'years').calendar();
}
