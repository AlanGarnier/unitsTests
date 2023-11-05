// Exercice 5: Créer une fonction pour vérifier si une année est bissextile
module.exports = function estAnneeBissextile(annee) {

    let firstDay = new  Date(annee+'-01-01');
    let lastDay = new  Date(annee+'-12-31');

    // Différence en heures
    let timeDiff = lastDay.getTime() - firstDay.getTime();
    // Différence en jours
    let dayDiff = timeDiff / (1000 * 3600 * 24);

    return dayDiff;
}