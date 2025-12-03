describe("Dog API - /breed/images/random", () => {
  const endpoint = "/breeds/image/random";

  it("Deve retornar status 200", () => {
    cy.request(endpoint).then((response) => {
      cy.logResponse(response);
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq("success");
    });
  });

  it("Deve retornar uma imagem em formato de string", () => {
    cy.request(endpoint).then((response) => {
        cy.log(response)
      expect(response.body).to.have.property("message");
      expect(response.body.message).to.be.a("string");
    });
  });


  it("Deve garantir que a URL retornada é válida", () => {
    cy.request(endpoint).then((response) => {
      const imageUrl = response.body.message;
      cy.log(imageUrl);

      expect(imageUrl).to.match(/^https?:\/\//);
    });
  });


  it("Deve retornar uma imagem no formato válido", () => {
    cy.request(endpoint).then((response) => {
      const imageUrl = response.body.message;
      cy.log(imageUrl);

      expect(imageUrl).to.match(/\.(jpg|jpeg|png)$/);
    });
  });


  it("Deve responder em menos de 1 segundo", () => {
    cy.request({ url: endpoint, time: true }).then((response) => {
      cy.log("Tempo (ms): " + response.duration);
      expect(response.duration).to.be.lessThan(1000);
    });
  });

  it("Deve retornar imagens diferentes em requisições consecutivas", () => {
    let firstImage = null;

    cy.request(endpoint).then((response1) => {
      firstImage = response1.body.message;
      return cy.request(endpoint);

    }).then((response2) => {
      const secondImage = response2.body.message;

      cy.log("Primeira: " + firstImage);
      cy.log("Segunda: " + secondImage);

      expect(firstImage).to.not.equal(secondImage);
    });
  });
});
