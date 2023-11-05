// Exercice 9: Créer une fonction pour vérifier si deux plages de dates se chevauchent
module.exports = function chevauchementDates(debut1, fin1, debut2, fin2) {

    // Vérifiez si la première plage de dates se termine avant le début de la deuxième plage
    if (fin1 < debut2) {
        return false;
    }

    // Vérifiez si la deuxième plage de dates se termine avant le début de la première plage
    if (fin2 < debut1) {
        return false;
    }

    // Si aucune des conditions ci-dessus n'est vérifiée, alors les plages de dates se chevauchent
    return true;
}