import "../support/commands";
import LoginPage from "../pages/LoginPage.js";
import GaragePage from "../pages/GaragePage.js";


describe("Garage API tests", () => {

    let carId;

    before(() => {

        const email = Cypress.env("email");
        const password = Cypress.env("password");
        LoginPage.open();
        LoginPage.login(email, password);
        cy.url().should("include", "/panel/garage");

        cy.intercept("POST", "/api/cars").as("createCar");
        GaragePage.addNewCar("Audi", "TT", 100);
        cy.wait("@createCar").then((interception) => {
            carId = interception.response.body.data.id;
            return cy.createExpense(carId, 130, 20, 500);
        });
    });

    it("Validate created car via API", () => {

        cy.request("/api/cars")
            .then((response) => {
                expect(response.status).to.eq(200);
                const createdCar = response.body.data.find(
                    car => car.id === carId
                );
                expect(createdCar).to.exist;
            });
    });

    it("Validate expense in UI", () => {

        const email = Cypress.env("email");
        const password = Cypress.env("password");
        LoginPage.open();
        LoginPage.login(email, password);
        cy.url().should("include", "/panel/garage");

        cy.contains("Audi TT")
            .should("be.visible");
        GaragePage.openExpensesTab();
        cy.contains("130")
            .should("be.visible");
    });

    after(() => {
        GaragePage.removeCar();
    });

});