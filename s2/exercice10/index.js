// Exercice 10: Créer une fonction pour calculer l'âge à partir de la date de naissance
module.exports = function calculerAge(dateNaissance) {
    let birthDay = new Date(dateNaissance).getFullYear();
    let currentYear = new Date().getFullYear();

    return currentYear - birthDay
}
