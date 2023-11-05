// Exercice 8: Créer une fonction pour formater une durée en heures et minutes
module.exports = function formaterDuree(heures, minutes) {

    // Formater les heures en chaîne de caractères (en ajoutant un "0" devant si nécessaire pour assurer un format à deux chiffres)
    const heuresStr = heures < 10 ? "0" + heures : heures.toString();

    // Formater les minutes en chaîne de caractères (en ajoutant un "0" devant si nécessaire pour assurer un format à deux chiffres)
    const minutesStr = minutes < 10 ? "0" + minutes : minutes.toString();

    return heuresStr + "h" + minutesStr + "min";
}

