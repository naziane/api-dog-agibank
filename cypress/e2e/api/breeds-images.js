describe("Dog API - /breed/{breed}/images", () => {
  const baseUrl = "https://dog.ceo/api/breed";


  const breed = "poodle"; 


  it("Deve retornar status 200 para uma raça válida", () => {
    cy.request(`${baseUrl}/${breed}/images`).then((response) => {
      cy.log(JSON.stringify(response.body, null, 2));
      
      expect(response.status).to.eq(200);
      expect(response.body.status).to.eq("success");
    });
  });

  it("Deve retornar uma lista de URLs de imagens", () => {
    cy.request(`${baseUrl}/${breed}/images`).then((response) => {
      cy.log(JSON.stringify(response.body, null, 2));

      expect(response.body).to.have.property("message");
      expect(response.body.message).to.be.an("array");
      expect(response.body.message.length).to.be.greaterThan(0);

      response.body.message.forEach((imgUrl) => {
        expect(imgUrl).to.match(/^https?:\/\//);
      });
    });
  });

  it("Deve validar contrato da resposta", () => {
    cy.request(`${baseUrl}/${breed}/images`).then((response) => {
      expect(response.body).to.have.all.keys("message", "status");

      expect(response.body.message).to.be.an("array");
      response.body.message.forEach((url) => {
        expect(url).to.be.a("string");
      });
    });
  });

  it("Deve responder em menos de 1 segundo", () => {
    cy.request({ url: `${baseUrl}/${breed}/images`, time: true })
      .then((response) => {
        cy.log(JSON.stringify(response.body, null, 2));
        expect(response.duration).to.be.lessThan(1000);
      });
  });

  it("Deve retornar erro para raça inválida", () => {
    cy.request({url:`${baseUrl}/raça-invalida/images`,failOnStatusCode: false,}).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.status).to.eq("error");
    });
  });

  it("Deve garantir que todas as URLs retornadas são de imagens válidas", () => {
    cy.request(`${baseUrl}/${breed}/images`).then((response) => {
      cy.log(JSON.stringify(response.body, null, 2));

      response.body.message.forEach((url) => {
        expect(url).to.match(/\.(jpg|jpeg|png)$/);
      });
    });
  });
});
