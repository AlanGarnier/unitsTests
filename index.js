const express = require('express');
const app = express();
const addition = require('./s1/exercice1')
const soustraction = require('./s1/exercice2')
const multiplication = require('./s1/exercice3')
const division = require('./s1/exercice4')
const factorielle = require('./s1/exercice5')
const estPairOuImpair = require('./s1/exercice6')
const celsiusEnFahrenheit = require('./s1/exercice7')
const aireCercle = require('./s1/exercice8')
const estPalindrome = require('./s1/exercice9')
const pgcd = require('./s1/exercice10')

const dateIlYADixAns = require('./s2/exercice1')
const formaterDate = require('./s2/exercice2')
const differenceEnJours = require('./s2/exercice3')
const ajouterJours = require('./s2/exercice4')
const estAnneeBissextile = require('./s2/exercice5')
const premierJourDuMois = require('./s2/exercice6')
const dernierJourDuMois = require('./s2/exercice7')
const formaterDuree = require('./s2/exercice8')
const chevauchementDates = require('./s2/exercice9')
const calculerAge = require('./s2/exercice10')

const PORT = 3001;

app.use(express.json());

app.get('/', (req, res) => {
    return res.json([{ id: 1, name: 'John Doe' }]);
});

app.post('/:param', (req, res) => {
    return res.json([{ error: false, num: req.params.param }]);
});

app.post('/s1/exercice1', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2

    if(n1 == null || n2 == null) {
        return res.json([{ reponse: "Veuillez saisir un nombre valide"}]);
    }

    if (!n1) {
        return res.json([{ reponse: "Veuillez saisir un nombre valide"}]);
    }

    if(!n2) {
        return res.json([{ reponse: "Veuillez saisir un nombre valide"}]);
    }
    let a = addition(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice2', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2

    if(n1 == null || n2 == null) {
        return res.json([{ reponse: "Veuillez saisir un nombre valide"}]);
    }

    if (!n1) {
        return res.json([{ reponse: "Veuillez saisir un nombre valide"}]);
    }

    if(!n2) {
        return res.json([{ reponse: "Veuillez saisir un nombre valide"}]);
    }
    let a = soustraction(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice3', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2

    if(n1 == null || n2 == null) {
        return res.json([{ reponse: "Veuillez saisir un nombre valide"}]);
    }

    if (!n1) {
        return res.json([{ reponse: "Veuillez saisir un nombre valide"}]);
    }

    if(!n2) {
        return res.json([{ reponse: "Veuillez saisir un nombre valide"}]);
    }
    let a = multiplication(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice4', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2

    if(n1 == null || n2 == null) {
        return res.json([{ reponse: "Veuillez saisir un nombre valide"}]);
    }

    if (!n1) {
        return res.json([{ reponse: "Veuillez saisir un nombre valide"}]);
    }

    if(!n2) {
        return res.json([{ reponse: "Veuillez saisir un nombre valide"}]);
    }
    let a = division(n1, n2)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice5', (req, res) => {
    const n1 = req.body.n1

    if (!n1) {
        return res.json([{reponse: "Veuillez saisir un nombre valide"}]);
    }

    if(typeof(n1) == 'string') {
        return res.json([{reponse: "Veuillez saisir un nombre"}]);
    }

    let a = factorielle(n1)
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice6', (req, res) => {
    const n1 = req.body.n1
    let a = estPairOuImpair(n1)

    if(typeof(n1) == 'string') {
        return res.json([{reponse: "Veuillez saisir un nombre"}]);
    }
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice7', (req, res) => {
    const n1 = req.body.n1
    let a = celsiusEnFahrenheit(n1)

    if(typeof(n1) == 'string') {
        return res.json([{reponse: "Veuillez saisir un nombre"}]);
    }
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice8', (req, res) => {
    const n1 = req.body.n1
    let a = aireCercle(n1)

    if(typeof(n1) == 'string') {
        return res.json([{reponse: "Veuillez saisir un nombre"}]);
    }
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice9', (req, res) => {
    const n1 = req.body.n1
    let a = estPalindrome(n1)

    if (!n1) {
        return res.json([{ reponse: "Veuillez saisir un mot"}]);
    }

    if (!a) {
        return res.json([{ reponse: "Le mot saisis n'est pas un palindrôme"}]);
    }
    return res.json([{ reponse: a }]);
});

app.post('/s1/exercice10', (req, res) => {
    const n1 = req.body.n1
    const n2 = req.body.n2

    if(n1 == null || n2 == null) {
        return res.json([{ reponse: "Veuillez saisir un nombre valide"}]);
    }
    let a = pgcd(n1, n2)
    return res.json([{ reponse: a }]);
});

app.get('/s2/exercice1', (req, res) => {
    let date = dateIlYADixAns();
    //console.log(date);
    return res.json([{ reponse: date }]);
});

app.post('/s2/exercice2', (req, res) => {
    let date = req.body.date;
    if (typeof (date) == 'undefined' || typeof (date) == 'number'){
        return res.json([{reponse: "Veuillez saisir une date valide"}])
    }

    if(!date ) {
        return res.json([{reponse: "Veuillez saisir une date valide"}])
    }

    let response = formaterDate(date);
    return res.json([{ reponse: response }]);
});

app.post('/s2/exercice3', (req, res) => {
    let date1 = req.body.date1;
    let date2 = req.body.date2

    if (typeof (date1) == 'undefined' || typeof (date1) == 'number'){
        return res.json([{reponse: "Veuillez saisir une date"}])
    }
    if(!date1 || !date2) {
        return res.json([{reponse: "Veuillez saisir une date valide"}])
    }

    let answer = differenceEnJours(date1, date2);
    return res.json([{ reponse: answer }]);
});

app.post('/s2/exercice4', (req, res) => {
    let date = req.body.date;
    let day = req.body.day;

    if (typeof (date) == 'undefined' || typeof (date) == 'number'){
        return res.json([{reponse: "Veuillez saisir une date valide"}])
    }
    if(!date || !day) {
        return res.json([{reponse: "Veuillez saisir une date valide"}])
    }
    if(typeof(day) !== 'number') {
        return res.json([{reponse: "Veuillez saisir un nombre"}]);
    }

    let answer = ajouterJours(date,day);
    return res.json([{ reponse: answer }]);
});

app.post('/s2/exercice5', (req, res) => {

    let annee = req.body.annee;

    if (typeof (annee) == 'undefined' || typeof (annee) == 'string'){
        return res.json([{reponse: "Veuillez saisir une annee"}])
    }
    if(annee == null) {
        return res.json([{reponse: "Veuillez saisir une annee valide"}])
    }

    let value = estAnneeBissextile(annee);
    let response = "L'année : " + annee + " n'est pas bissextile";

    if (value === 365) {
        response = "L'année : " + annee + " est  bissextile";
    }


    return res.json([{ reponse: response }]);
});

app.post('/s2/exercice6', (req, res) => {
    let date = req.body.date;

    if (typeof (date) == 'undefined' || typeof (date) == 'number'){
        return res.json([{reponse: "Veuillez saisir une date"}])
    }
    if(date == null) {
        return res.json([{reponse: "Veuillez saisir une date valide"}])
    }

    let response = premierJourDuMois(date);

    return res.json([{ reponse: response }]);
});

app.post('/s2/exercice7', (req, res) => {
    let date = req.body.date;

    if (typeof (date) == 'undefined' || typeof (date) == 'number'){
        return res.json([{reponse: "Veuillez saisir une date"}])
    }
    if(date == null) {
        return res.json([{reponse: "Veuillez saisir une date valide"}])
    }

    let response = dernierJourDuMois(date);

    return res.json([{ reponse: response }]);
});

app.post('/s2/exercice8', (req, res) => {
    let heures = req.body.heures;
    let minute = req.body.minute;

    if (!heures) {
        return res.json([{reponse: "Veuillez saisir une heure valide"}])
    }
    if (!minute) {
        return res.json([{reponse: "Veuillez saisir une heure valide"}])
    }
    if (typeof(heures) != 'number') {
        return res.json([{reponse: "Veuillez saisir un nombre"}])
    }
    if (heures > 24 || heures < 1) {
        return res.json([{reponse: "Veuillez saisir une heure comprise entre 01 et 24"}])
    }
    if (typeof(minute) != 'number') {
        return res.json([{reponse: "Veuillez saisir un nombre"}])
    }
    if (minute > 59 || minute < 0) {
        return res.json([{reponse: "Veuillez saisir des minutes comprisent entre 01 et 59"}])
    }

    let response = formaterDuree(heures, minute);
    return res.json([{ reponse: response }]);
});

app.post('/s2/exercice9', (req, res) => {

    let debut1 = req.body.date1;
    let fin1 = req.body.date2;
    let debut2 = req.body.date3;
    let fin2 = req.body.date4;

    if (typeof (debut1) == 'undefined' || typeof (debut1) == 'number'){
        return res.json([{reponse: "Veuillez saisir une date"}])
    }
    if (typeof (fin1) == 'undefined' || typeof (fin1) == 'number'){
        return res.json([{reponse: "Veuillez saisir une date"}])
    }
    if (typeof (debut2) == 'undefined' || typeof (debut2) == 'number'){
        return res.json([{reponse: "Veuillez saisir une date"}])
    }
    if (typeof (fin2) == 'undefined' || typeof (fin2) == 'number'){
        return res.json([{reponse: "Veuillez saisir une date"}])
    }
    if(debut1 == null || fin1 == null ||  debut2 == null || fin2 == null ) {
        return res.json([{reponse: "Veuillez saisir une date valide"}])
    }

    let value = chevauchementDates(debut1, fin1, debut2, fin2)
    let response = "Les dates se chevauchent";

    if (value === false) {
         response = "Les dates ne se chevauchent pas";
    }

    return res.json([{ reponse: response }]);
});

app.post('/s2/exercice10', (req, res) => {
    let date = req.body.date;

    if (typeof (date) == 'undefined' || typeof (date) == 'number'){
        return res.json([{reponse: "Veuillez saisir une date"}])
    }
    if(date == null) {
        return res.json([{reponse: "Veuillez saisir une date valide"}])
    }

    let age = calculerAge(date);
    let response = "Vous avez " + age + " ans.";
    return res.json([{ reponse: response }]);
});

app.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});

module.exports = app


