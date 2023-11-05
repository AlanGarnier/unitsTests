// Exercice 7: Créer une fonction pour obtenir le dernier jour du mois d'une date donnée
module.exports = function dernierJourDuMois(date) {

    let lastDay = new Date(date);

    lastDay.setMonth(lastDay.getMonth() +1,1);

    lastDay.setDate(lastDay.getDate() - 1)

    let day = lastDay.getDay();

    // Tableau des noms des jours de la semaine
    const week = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

    return week[day]+ " " + lastDay.toLocaleDateString()

}