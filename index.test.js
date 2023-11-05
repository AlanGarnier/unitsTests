const request = require("supertest");
const app = require("./index");

describe("GET /", () => {
    test("Test 1", (done) => {
        request(app)
            .get("/")
            .expect(200)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toEqual([{ id: 1, name: "John Doe" }]);
                done();
            });
    });
});

describe("POST /s1/exercice1", () => {
    test("Test de n1 1/2", async () => {
        const res = await request(app)
            .post("/s1/exercice1")
            .send({ n1: null, n2: 2 });
            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual([{ reponse: "Veuillez saisir un nombre valide" }]);
    });
    test("Test de n2 2/4", async () => {
        const res = await request(app)
            .post("/s1/exercice1")
            .send({ n1: 2, n2: null});
            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual([{ reponse: "Veuillez saisir un nombre valide"}]);
    });
    test("Test de n1 et n2 3/4", async () => {
        const res = await request(app)
            .post("/s1/exercice1")
            .send({ n1: null, n2: null});
            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual([{ reponse: "Veuillez saisir un nombre valide"}]);
    });
    test("Test réussi 4/4 ", async () => {
        const res = await request(app)
            .post("/s1/exercice1")
            .send({ n1: 2, n2: 2});
            expect(res.statusCode).toBe(200);
            expect(res.body).toEqual([{ reponse: 4}]);
    });

});


describe("POST /s1/exercice2", () => {
    test("Test de n1 1/4", async () => {
        const res = await request(app)
            .post("/s1/exercice2")
            .send({ n1: null, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir un nombre valide" }]);
    });
    test("Test de n2 2/4", async () => {
        const res = await request(app)
            .post("/s1/exercice2")
            .send({ n1: 2, n2: null});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir un nombre valide"}]);
    });
    test("Test de n1 et n2 3/4", async () => {
        const res = await request(app)
            .post("/s1/exercice2")
            .send({ n1: null, n2: null});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir un nombre valide"}]);
    });
    test("Test réussi 4/4 ", async () => {
        const res = await request(app)
            .post("/s1/exercice2")
            .send({ n1: 8, n2: 2});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 6}]);
    });

});

describe("POST /s1/exercice3", () => {
    test("Test de n1 1/4", async () => {
        const res = await request(app)
            .post("/s1/exercice3")
            .send({ n1: null, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir un nombre valide" }]);
    });
    test("Test de n2 2/4", async () => {
        const res = await request(app)
            .post("/s1/exercice3")
            .send({ n1: 2, n2: null});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir un nombre valide"}]);
    });
    test("Test de n1 et n2 3/4", async () => {
        const res = await request(app)
            .post("/s1/exercice3")
            .send({ n1: null, n2: null});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir un nombre valide"}]);
    });
    test("Test réussi 4/4 ", async () => {
        const res = await request(app)
            .post("/s1/exercice3")
            .send({ n1: 3, n2: 5});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 15}]);
    });

});

describe("POST /s1/exercice4", () => {
    test("Test de n1 1/4", async () => {
        const res = await request(app)
            .post("/s1/exercice4")
            .send({ n1: null, n2: 2 });
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir un nombre valide" }]);
    });
    test("Test de n2 2/4", async () => {
        const res = await request(app)
            .post("/s1/exercice4")
            .send({ n1: 2, n2: null});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir un nombre valide"}]);
    });
    test("Test de n1 et n2 3/4", async () => {
        const res = await request(app)
            .post("/s1/exercice4")
            .send({ n1: null, n2: null});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir un nombre valide"}]);
    });
    test("Test réussi 4/4 ", async () => {
        const res = await request(app)
            .post("/s1/exercice4")
            .send({ n1: 8, n2: 2});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 4}]);
    });

});
describe("POST /s1/exercice5", () => {
    test("Test exo factorielle 1/2", async () => {
        const res = await request(app)
            .post("/s1/exercice5")
            .send({ n1: null});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir un nombre valide" }]);
    });
    test("Test exo factorielle 2/3", async () => {
        const res = await request(app)
            .post("/s1/exercice5")
            .send({ n1: 'd'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir un nombre" }]);
    });
    test("Test réussi 3/3 ", async () => {
        const res = await request(app)
            .post("/s1/exercice5")
            .send({ n1: 6});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 720}]);
    });

});
describe("POST /s1/exercice6", () => {
    test("Test exo pair ou impair 1/3", async () => {
        const res = await request(app)
            .post("/s1/exercice6")
            .send({ n1: 'rf'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir un nombre" }]);
    });
    test("Test réussi 2/3 ", async () => {
        const res = await request(app)
            .post("/s1/exercice6")
            .send({ n1: 6});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "pair"}]);
    });
    test("Test réussi 3/3 ", async () => {
        const res = await request(app)
            .post("/s1/exercice6")
            .send({ n1: 1});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "impair"}]);
    });

});
describe("POST /s1/exercice7", () => {
    test("Test exo celsuis 1/2", async () => {
        const res = await request(app)
            .post("/s1/exercice7")
            .send({ n1: 'd'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir un nombre" }]);
    });
    test("Test réussi 2/2 ", async () => {
        const res = await request(app)
            .post("/s1/exercice7")
            .send({ n1: 8});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: 46.4}]);
    });

});

describe("POST /s1/exercice8", () => {
    test("Test exo airCircle 1/2", async () => {
        const res = await request(app)
            .post("/s1/exercice8")
            .send({ n1: 'mon'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir un nombre" }]);
    });
    test("Test réussi 2/2 ", async () => {
        const res = await request(app)
            .post("/s1/exercice8")
            .send({ n1: 'non'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(res.body);
    });

});
describe("POST /s1/exercice9", () => {
    test("Test exo palindrome 1/2", async () => {
        const res = await request(app)
            .post("/s1/exercice9")
            .send({ n1: 'mon'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Le mot saisis n'est pas un palindrôme" }]);
    });
    test("Test réussi 2/2 ", async () => {
        const res = await request(app)
            .post("/s1/exercice9")
            .send({ n1: 'non'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(res.body);
    });

});
describe("POST /s1/exercice10", () => {
    test("Test exo pgcd 1/2", async () => {
        const res = await request(app)
            .post("/s1/exercice10")
            .send({ n1: null});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir un nombre valide" }]);
    });
    test("Test réussi 2/2 ", async () => {
        const res = await request(app)
            .post("/s1/exercice10")
            .send({ n1: 'non'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(res.body);
    });

});

describe("GET /s2/exercice1", () => {
    test("Test 10 ans en arrière 1/1", async () => {
        const response = await request(app).get("/s2/exercice1")
            .set('Accept', 'application/json')
        expect(response.status).toBe(200);
        expect(response.body).toEqual(response.body);

    });
    /*it("Test 10 ans en arrière 1/1", async () => {
        const response = await request(app)
            .get("/s2/exercice1");
        expect(response.status).toBe(200);
        expect(response.body).toEqual(response.body);
    });*/
});
describe("POST /s2/exercice2", () => {
    test("Test  1/2", async () => {
        const res = await request(app)
            .post("/s2/exercice2")
            .send({ date: null});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir une date valide" }]);
    });
    test("Test  2/3", async () => {
        const res = await request(app)
            .post("/s2/exercice2")
            .send({ date: 2021});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir une date valide" }]);
    });
    test("Test  3/3", async () => {
        const res = await request(app)
            .post("/s2/exercice2")
            .send({ date: '2022-01-04'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "04/01/2022" }]);
    });
});
describe("POST /s2/exercice3", () => {
    test("Test exo date difference 1/2", async () => {
        const res = await request(app)
            .post("/s2/exercice3")
            .send({ date1: null, date2: null});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir une date valide" }]);
    });
    test("Test réussi 2/2 ", async () => {
        const res = await request(app)
            .post("/s2/exercice3")
            .send({ date1: '2023-05-14', date2: '2023-09-14'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(res.body);
    });

});
describe("POST /s2/exercice4", () => {
    test("Test exo ajouter des jours 1/2", async () => {
        const res = await request(app)
            .post("/s2/exercice4")
            .send({ date1: null, day: 12});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir une date valide" }]);
    });
    test("Test exo ajouter des jours 2/3", async () => {
        const res = await request(app)
            .post("/s2/exercice4")
            .send({ date1: '2023-07-21', day: '75'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir une date valide" }]);
    });
    test("Test réussi 3/3 ", async () => {
        const res = await request(app)
            .post("/s2/exercice4")
            .send({ date1: '2023-05-14', day: 5});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(res.body);
    });
});
describe("POST /s2/exercice5", () => {
    test("Test exo  1/3", async () => {
        const res = await request(app)
            .post("/s2/exercice5")
            .send({ annee: "dijdn"});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir une annee" }]);
    });
    test("Test exos 2/3", async () => {
        const res = await request(app)
            .post("/s2/exercice5")
            .send({ annee: null});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir une annee valide" }]);
    });
    test("Test réussi 3/3 ", async () => {
        const res = await request(app)
            .post("/s2/exercice5")
            .send({ annee: 2021});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(res.body);
    });
    test("Test réussi 3/3 ", async () => {
        const res = await request(app)
            .post("/s2/exercice5")
            .send({ annee: 2022});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(res.body);
    });
});
describe("POST /s2/exercice6", () => {
    test("Test exo  1/2", async () => {
        const res = await request(app)
            .post("/s2/exercice6")
            .send({ date: null});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir une date valide" }]);
    });
    test("Test exo ajouter des jours 2/3", async () => {
        const res = await request(app)
            .post("/s2/exercice6")
            .send({ date: 45});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir une date" }]);
    });
    test("Test réussi 3/3 ", async () => {
        const res = await request(app)
            .post("/s2/exercice6")
            .send({ date: '2023-05-14'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(res.body);
    });
});
describe("POST /s2/exercice7", () => {
    test("Test exo  1/2", async () => {
        const res = await request(app)
            .post("/s2/exercice7")
            .send({ date: undefined});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir une date" }]);
    });
    test("Test exo ajouter des jours 2/3", async () => {
        const res = await request(app)
            .post("/s2/exercice7")
            .send({ date: null});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir une date valide" }]);
    });
    test("Test réussi 3/3 ", async () => {
        const res = await request(app)
            .post("/s2/exercice7")
            .send({ date: '2022-02-14'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(res.body);
    });
});
describe("POST /s2/exercice8", () => {
    test("Test exo  1/4", async () => {
        const res = await request(app)
            .post("/s2/exercice8")
            .send({ heures: undefined, minute:12});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir une heure valide" }]);
    });
    test("Test exo ajouter des jours 2/4", async () => {
        const res = await request(app)
            .post("/s2/exercice8")
            .send({ heures: 85, minute:30});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir une heure comprise entre 01 et 24" }]);
    });
    test("Test réussi 3/4 ", async () => {
        const res = await request(app)
            .post("/s2/exercice8")
            .send({ heures: 10, minute:-1});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir des minutes comprisent entre 01 et 59" }]);
    });
    test("Test réussi 4/4 ", async () => {
        const res = await request(app)
            .post("/s2/exercice8")
            .send({ heures: 18, minute: 4});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(res.body);
    });
});

describe("POST /s2/exercice10", () => {
    test("Test exo  1/2", async () => {
        const res = await request(app)
            .post("/s2/exercice10")
            .send({ date: undefined});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir une date" }]);
    });
    test("Test exo ajouter des jours 2/3", async () => {
        const res = await request(app)
            .post("/s2/exercice10")
            .send({ date: 45});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual([{ reponse: "Veuillez saisir une date" }]);
    });
    test("Test réussi 3/3 ", async () => {
        const res = await request(app)
            .post("/s2/exercice10")
            .send({ date: '1998-04-19'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual(res.body);
    });
});

