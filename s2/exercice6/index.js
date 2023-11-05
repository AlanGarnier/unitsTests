// Exercice 6: Créer une fonction pour obtenir le premier jour du mois d'une date donnée
module.exports = function premierJourDuMois(date) {

    let firstDay = new Date(date);

    firstDay.setDate(1)

    let day = firstDay.getDay();

    // Tableau des noms des jours de la semaine
    const week = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    return week[day]+ " " + firstDay.toLocaleDateString();
}