// Exercice 4: Créer une fonction pour ajouter un nombre de jours à une date
module.exports = function ajouterJours(date, jours) {
    let val = new Date(date);
    val.setDate(val.getDate() + jours);

    return val.toLocaleDateString();
}