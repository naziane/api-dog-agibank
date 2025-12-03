describe("Dog API - /breeds/list/all", () => {
    const endpoint = "/breeds/list/all";


it("Deve retornar status 200", () => {
    cy.request(endpoint).then((response) => {
        cy.log(JSON.stringify(response.body, null, 2))
        expect(response.status).to.eq(200);
    });
});


it("Deve retornar a estrutura correta na resposta", () => {
    cy.request(endpoint).then((response) => {
        expect(response.body).to.have.property("message");
        expect(response.body).to.have.property("status", "success");
        expect(response.body.message).to.be.an("object");
    });
});


it("Deve conter várias raças retornadas", () => {
    cy.request(endpoint).then((response) => {
        const breeds = Object.keys(response.body.message);
        expect(breeds.length).to.be.greaterThan(0);
    });
});


it("Deve conter a raça 'poodle' na lista", () => {
    cy.request(endpoint).then((response) => {
        expect(response.body.message).to.have.property("poodle");
    });
});


it("Deve validar sub-raças de poodle", () => {
    cy.request(endpoint).then((response) => {
        const subs = response.body.message.poodle;
        expect(subs).to.be.an("array");
    });
});


it("Deve validar o contrato da resposta", () => {
    cy.request(endpoint).then((response) => {
        expect(response.body).to.have.all.keys("message", "status");


        Object.entries(response.body.message).forEach(([breed, subs]) => {
        expect(breed).to.be.a("string");
        expect(subs).to.be.an("array");
        });
    });
});


it("Deve responder em menos de 1 segundo", () => {
    cy.request({ url: endpoint, time: true }).then((response) => {
        expect(response.duration).to.be.lessThan(1000);
    });
});


it("Retorna 404 ao acessar endpoint inválido", () => {
    cy.request({ url: "/breeds/list/invalid", failOnStatusCode: false }).then(
        (response) => {
        expect(response.status).to.eq(404);
        });
    });
});