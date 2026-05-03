import LoginPage from "../pages/LoginPage.js";

describe("Login test", () => {
    it("should login", () => {
        const email = Cypress.env("email");
        const password = Cypress.env("password");

        LoginPage.open();
        LoginPage.login(email, password);
        // LoginPage.login("test@test.com", "123456");
    });
});