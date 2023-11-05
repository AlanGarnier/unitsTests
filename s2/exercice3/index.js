// Exercice 3: Créer une fonction pour calculer la différence en jours entre deux dates
module.exports = function differenceEnJours(date1, date2) {
    // Conversion des dates
    let first = new Date(date1);
    let second = new Date(date2);
    // Différence en heures
    let timeDiff = second.getTime() - first.getTime();
    // Différence en jours
    let dayDiff = timeDiff / (1000 * 3600 * 24);

    return dayDiff;
}
